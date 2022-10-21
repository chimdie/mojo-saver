import { getLogedInUser } from "pages/auth/slices/authSlice";
import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { userData } from "utils";

export const ProtectedRoute = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const userId = userData() && userData().user ? userData().user : user;

  React.useEffect(() => {
    if (!userId && userId) {
      dispatch(getLogedInUser());
    }
  }, []);

  if (!userId) {
    return <Navigate to="/login" replace={true} />;
  }
  return <React.Fragment>{children ? children : <Outlet />}</React.Fragment>;
};
