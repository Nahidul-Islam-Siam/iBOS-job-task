import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cart, setCart, loading } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">An overview of your order</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between border p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCart(cart.map(i => i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i))}
                    disabled={item.quantity <= 1}
                    className="text-xl p-2 border rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => setCart(cart.map(i => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i))}
                    className="text-xl p-2 border rounded-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="text-red-600 text-xl p-2"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal</span>
                <span>${calculateTotalPrice()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Estimated Tax</span>
                <span>€</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${calculateTotalPrice()}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-black text-white py-2 rounded-lg">Go to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
