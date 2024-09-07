import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Main/Main.jsx';
import './index.css'; // or './styles.css'


import FirebaseProvider from './FirebaseProvider.jsx/FirebaseProvider.jsx';
import { CartProvider } from './components/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <>
    <FirebaseProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FirebaseProvider>
  </>
);
