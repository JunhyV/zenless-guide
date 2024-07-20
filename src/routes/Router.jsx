import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../pages/PublicLayout";
import Home from "../pages/public/home/Home";
import Tierlist from "../pages/public/tierlist/Tierlist";
import Engines from "../pages/public/engines/Engines";
import Bangboos from "../pages/public/bangboos/Bangboos";
import Agents from "../pages/public/agents/Agents";
import PrivateLayot from "../pages/PrivateLayot";
import AdminHome from "../pages/admin/admin-home/AdminHome";
import UpdateDisk from "../pages/admin/admin-disk/UpdateDisk";
import CreateDisk from "../pages/admin/admin-disk/CreateDisk";
import ReadDisks from "../pages/admin/admin-disk/ReadDisks";
import ReadEngines from "../pages/admin/admin-engines/ReadEngines";
import ReadAgents from "../pages/admin/admin-agents/ReadAgents";
import ReadBangboos from "../pages/admin/admin-bangboos/ReadBangboos";
import CreateAgent from "../pages/admin/admin-agents/CreateAgent";
import UpdateButton from "../components/buttons/UpdateButton";
import CreateEngine from "../pages/admin/admin-engines/CreateEngine";
import UpdateEngine from "../pages/admin/admin-engines/UpdateEngine";

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
        children: [
          {
            index: true,
            element: <ReadEngines />,
          },
          {
            path: "/admin-zzz/engines/new",
            element: <CreateEngine />,
          },
          {
            path: "/admin-zzz/engines/:id",
            element: <UpdateEngine />,
          },
        ],
      },
      {
        path: "/admin-zzz/agents",
        children: [
          {
            index: true,
            element: <ReadAgents />,
          },
          {
            path: "/admin-zzz/agents/new",
            element: <CreateAgent />,
          },
          {
            path: "/admin-zzz/agents/:id",
            element: <UpdateButton />,
          },
        ],
      },
      {
        path: "/admin-zzz/bangboos",
        element: <ReadBangboos />,
      },
      {
        path: "/admin-zzz/disks",
        children: [
          {
            index: true,
            element: <ReadDisks />,
          },
          {
            path: "/admin-zzz/disks/new",
            element: <CreateDisk />,
          },
          {
            path: "/admin-zzz/disks/:id",
            element: <UpdateDisk />,
          },
        ],
      },
    ],
  },
]);

export default Router;
