import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Page404 from "../pages/Page404/Page404";
import SignUp from "../pages/Sign Up/SignUp";
import SignIn from "../pages/Sign In/SignIn";
import AvailableFoods from "../pages/Available Foods/AvailableFoods";
import AddFood from "../pages/Add Food/AddFood";
import ManageMyFoods from "../pages/Manage My Foods/ManageMyFoods";
import FoodRequest from "../pages/Home/Food Request/FoodRequest";

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
        path: "/available",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/ManageMyFoods",
        element: <ManageMyFoods></ManageMyFoods>,
      },
      {
        path: "/MyFoodRequest",
        element: <FoodRequest></FoodRequest>,
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
