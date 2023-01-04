import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// procted route
import { ProtectedRoute } from "routes";
// users routes
import Home from "pages/user/Home";
import Profile from "pages/user/profile";
import Groups from "pages/user/groups";
// admin routes
import AdminGroups from "pages/admin/group";
import AdminProfile from "pages/admin/profile";
import AdminHome from "pages/admin/Home";

import HomePage from "pages";
import { SuspenseFallback } from "components/pageLoader";

export const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<SuspenseFallback />} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Home />} />
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
