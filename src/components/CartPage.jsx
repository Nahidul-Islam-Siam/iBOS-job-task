import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cart, updateCartItemQuantity, removeCartItem, loading } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartItemQuantity(productId, newQuantity);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingCost = 0; // Assuming free shipping
  const estimatedTax = (calculateSubtotal() * 0.1).toFixed(2); // Assuming 10% tax rate
  const total = (calculateSubtotal() + shippingCost + parseFloat(estimatedTax)).toFixed(2);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex">
        <div className="w-2/3">
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
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                          className="bg-gray-200 px-2 py-1 rounded"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                          className="bg-gray-200 px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeCartItem(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <div className="mb-2">
            <span className="font-semibold">Subtotal:</span>
            <span className="float-right">${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Shipping:</span>
            <span className="float-right">Free</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Estimated Tax:</span>
            <span className="float-right">${estimatedTax}</span>
          </div>
          <div className="mb-4 font-bold">
            <span className="font-semibold">Total:</span>
            <span className="float-right">${total}</span>
          </div>
          <button className="bg-blue-500 text-white w-full py-2 rounded">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
