import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// procted route
import { ProtectedRoute } from "routes";
// auth route
import { Login, Signup } from "./pages/auth";
// private routes
import Home from "./pages/Home";
import Groups from "./pages/groups";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
