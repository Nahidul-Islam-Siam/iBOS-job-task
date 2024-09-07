import  { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:5000/cart');
        if (!response.ok) throw new Error('Failed to fetch cart data');
        const data = await response.json();
        setCart(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};
