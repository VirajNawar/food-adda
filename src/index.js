import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";






const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement : <Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/About",
        element:<About />,
      },
      {
        path:"/restaurant/:restaurantId",
        element:<RestaurantMenu />,
      },
    ]
  },
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);

