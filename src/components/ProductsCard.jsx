/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useAuth from "../Hooks/useAuth";


const ProductsCard = ({ product }) => {
  const { name, category, price, oldPrice, discount, image, description, _id } = product;
  const { user } = useAuth(); // Assuming you're using a hook to get user data

  // Function to handle "Add to Cart"
  const handleAddToCart = async () => {
    const email = user?.email;

    if (!email) {
      alert("You need to log in to add items to the cart.");
      return;
    }

    try {
      const response = await fetch("https://job-task-server-ruddy-tau.vercel.app/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          product: {
            _id, // Use the MongoDB _id for identification
            name,
            category,
            price,
            oldPrice,
            discount,
            image,
            description,
          },
        }),
      });

      if (!response.ok) throw new Error("Failed to add product");
      const data = await response.json();
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="bg-white hover:shadow-xl transition duration-300 rounded-xl overflow-hidden max-w-xs">
      {/* Product Image */}
      <div className="w-full h-[300px] bg-gray-200 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      {/* Product Information */}
      <div className="p-5">
        <h2 className="text-[#373737] text-lg font-Poppins font-semibold">{name}</h2>
        <p className="text-gray-500 font-Poppins">
          Category:{" "}
          <span className="bg-green-200 rounded-full text-black px-2">{category}</span>
        </p>
        <p className="py-2 text-gray-600">{description}</p>

        {/* Price Section */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-300">
          <div>
            <span className="text-red-600 text-lg font-bold">${price}</span>{" "}
            <span className="line-through text-gray-500">${oldPrice}</span>
            <span className="text-green-500 ml-2">{discount}% OFF</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="pt-4">
          <button
            className="w-full bg-black text-white py-2 rounded-lg font-medium"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
