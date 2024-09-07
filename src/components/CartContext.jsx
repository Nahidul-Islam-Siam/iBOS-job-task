import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = "siamnahidul093@gmail.com"; // Replace with actual method of obtaining the user email

  useEffect(() => {
    const fetchCart = async () => {
      if (!userEmail) {
        console.error('No user email provided');
        setLoading(false);
        return;
      }

      console.log(`Fetching cart for email: ${userEmail}`);

      try {
        const response = await fetch(`https://job-task-server-ruddy-tau.vercel.app/cart/${encodeURIComponent(userEmail)}`);
        
        if (!response.ok) {
          console.error('Failed to fetch cart data', response.status);
          throw new Error('Failed to fetch cart data');
        }

        const data = await response.json();
        console.log('Cart data fetched successfully:', data);
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userEmail]);

  const updateCartItemQuantity = (productId, quantity) => {
    setCart(cart.map(item => item._id === productId ? { ...item, quantity } : item));
  };

  const removeCartItem = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, updateCartItemQuantity, removeCartItem, loading }}>
      {children}
    </CartContext.Provider>
  );
};
