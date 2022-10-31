import { getLogedInUser } from "pages/auth/slices/authSlice";
import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { userData } from "utils";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.account);

  const userId = userData() && userData().user ? userData().user : user;

  React.useEffect(() => {
    if (!userId) {
      dispatch(getLogedInUser());
    }
  }, [user]);

  if (!userId) {
    return <Navigate to="/" replace={true} />;
  }
  return <React.Fragment>{children ? children : <Outlet />}</React.Fragment>;
};

export default ProtectedRoute;
