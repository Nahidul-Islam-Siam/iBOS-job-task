import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';
import ProductsCard from '../components/ProductsCard';
import Products from '../components/Products';
import CartPage from '../components/CartPage';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/productCard',
        element: <ProductsCard />,
      },
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/cart', // Add route for the CartPage
        element: <PrivateRoutes><CartPage/></PrivateRoutes>,
      },
    ],
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
]);
