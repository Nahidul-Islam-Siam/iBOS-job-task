import  { useContext } from 'react';
import { CartContext } from './CartContext';


const CartPage = () => {
  const { cart, setCart, loading } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
