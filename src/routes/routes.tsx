import * as React from "react";
import { useRoutes } from "react-router-dom";
//
import { AuthLayout } from "layouts";
// procted route
import { ProtectedRoute } from "routes";
// auth route
import { Login, Signup } from "pages/auth";
// private routes
import Home from "pages/user/Home";
import Groups from "pages/user/groups";
// admin routes
import AdminGroups from "pages/admin/group";

function AppRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />
        },
        { path: "signup", element: <Signup /> }
      ]
    },
    {
      path: "/admin/",
      element: <ProtectedRoute />,
      children: [
        { index: true, element: <Home /> },
        // { path: "new-group", element: <CreateGroup /> },
        { path: "groups", element: <AdminGroups /> }
      ]
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        { index: true, element: <Home /> },
        { path: "groups", element: <Groups /> }
      ]
    }
  ]);

  return element;
}

export default AppRoutes;
