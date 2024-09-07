import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import SignIn from "../Login/SignIn"
import SignUp from "../Login/SignUp"
import ProductsCard from "../components/ProductsCard";
import Products from "../components/Products";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path:'/productCard',
          element:<ProductsCard></ProductsCard>
        }
        ,
        {
          path:'/products',
          element:<Products/>
        }
      ]
    },
    {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
  ]);