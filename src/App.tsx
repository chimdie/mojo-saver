import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// procted route
import { ProtectedRoute } from "routes";
// auth route
import { Login, Signup } from "pages/auth";
// users routes
import Home from "pages/user/Home";
import Profile from "pages/user/profile";
import Groups from "pages/user/groups";
// admin routes
import AdminGroups from "pages/admin/group";
import AdminProfile from "pages/admin/profile";
import AdminHome from "pages/admin/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<HashLoader />} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin.groups" element={<AdminGroups />} />
          <Route path="/admin.profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
