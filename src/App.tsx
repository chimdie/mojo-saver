import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Home from "./pages/Home";
import Groups from "./pages/groups";
import { Login, Signup } from "./pages/auth";

export const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={<HashLoader />} />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  </BrowserRouter>
);
