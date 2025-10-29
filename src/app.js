 import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/header";
import Body from "./components/Body";
import Shimmer from "./components/shimmer";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router";
 import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Error from "./components/error";
import RestaurantMenu from "./components/resmenu";
// Header Component
// ResCard Component
// Restaurant List (Mock Data)
// Body Component
// AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      
    </div>
  );
};
// Render the App
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children: [
      { 
        path:"/",
        element:<Body/>,
      },
        {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact ",
    element:<Contact/>,
  },
  {
    path:"/Home",
    element:<Home/>,
  },
  {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>
  },
    ],
    errorElement:<Error/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
