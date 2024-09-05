import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Login/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>
    },
    {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
  ]);