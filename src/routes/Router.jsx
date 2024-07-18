import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../pages/PublicLayout";
import Home from "../pages/public/home/Home";
import Tierlist from "../pages/public/tierlist/Tierlist";
import Engines from "../pages/public/engines/Engines";
import Bangboos from "../pages/public/bangboos/Bangboos";
import Agents from "../pages/public/agents/Agents";
import PrivateLayot from "../pages/PrivateLayot";
import AdminEngines from "../pages/admin/admin-engines/AdminEngines";
import AdminHome from "../pages/admin/admin-home/AdminHome";
import AdminAgents from "../pages/admin/admin-agents/AdminAgents";
import AdminBangboos from "../pages/admin/admin-bangboos/AdminBangboos";
import AdminDisk from "../pages/admin/admin-disk/AdminDisk";
import NewDisk from "../pages/admin/admin-disk/NewDisk";
import DiskPage from "../pages/admin/admin-disk/DiskPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/tierlist",
        element: <Tierlist />,
      },
      {
        path: "/engines",
        element: <Engines />,
      },
      {
        path: "/bangboos",
        element: <Bangboos />,
      },
    ],
  },
  {
    path: "/admin-zzz",
    element: <PrivateLayot />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "/admin-zzz/engines",
        element: <AdminEngines />,
      },
      {
        path: "/admin-zzz/agents",
        element: <AdminAgents />,
      },
      {
        path: "/admin-zzz/bangboos",
        element: <AdminBangboos />,
      },
      {
        path: "/admin-zzz/disks",
        children: [
            {
                index: true,
                element: <AdminDisk />,
            },
            {
                path: '/admin-zzz/disks/new',
                element: <NewDisk/>,
            },
            {
                path: '/admin-zzz/disks/:id',
                element: <DiskPage/>,
            },
        ]
      },
    ],
  },
]);

export default Router;
