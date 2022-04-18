import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import Loading from "./Loading";
import SignIn from "../pages/SignIn";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return;
  }
  return user ? (
    children
  ) : (
    <Navigate state={{ from: location.pathname }} to="/signin" replace />
  );
};

export default PrivateRoute;
