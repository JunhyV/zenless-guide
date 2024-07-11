import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../pages/PublicLayout";
import Home from "../pages/home/Home";
import Characters from "../pages/characters/Characters";
import Tierlist from "../pages/tierlist/Tierlist";
import Engines from "../pages/engines/Engines";
import Bangboos from "../pages/bangboos/Bangboos";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/characters',
            element: <Characters/>,
        },
        {
            path: '/tierlist',
            element: <Tierlist/>,
        },
        {
            path: '/engines',
            element: <Engines/>,
        },
        {
            path: '/bangboos',
            element: <Bangboos/>,
        }
    ]
  },
]);

export default Router;
