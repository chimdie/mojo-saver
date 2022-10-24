import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// procted route
import { ProtectedRoute } from "routes";
// auth route
import { Login, Signup } from "pages/auth";
// users routes
import Home from "pages/user/Home";
import Groups from "pages/user/groups";
// admin routes
import AdminGroups from "pages/admin/group";

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
          // Admin
          <Route path="/admin" element={<Home />} />
          {/* <Route path="/admin/new-group" element={<CreateGroup />} /> */}
          <Route path="/admin/groups" element={<AdminGroups />} />
        </Route>
      </Routes>
      {/* <AppRoutes /> */}
    </BrowserRouter>
  );
};
