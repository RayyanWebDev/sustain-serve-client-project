import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Page404 from "../pages/Page404/Page404";
import SignUp from "../pages/Sign Up/SignUp";
import SignIn from "../pages/Sign In/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/404",
        element: <Page404></Page404>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
