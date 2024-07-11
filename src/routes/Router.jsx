import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../pages/PublicLayout";
import Home from "../pages/home/Home";
import Tierlist from "../pages/tierlist/Tierlist";
import Engines from "../pages/engines/Engines";
import Bangboos from "../pages/bangboos/Bangboos";
import Agents from "../pages/agents/Agents";

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
            path: '/agents',
            element: <Agents/>,
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
