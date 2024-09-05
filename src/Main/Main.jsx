import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import SignIn from "../Login/SignIn"
import SignUp from "../Login/SignUp"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>
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