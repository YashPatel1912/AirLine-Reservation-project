import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";

export const SignOut = () => {
  const { SignOutUser } = useAuth();

  useEffect(() => {
    SignOutUser();
  }, [SignOutUser]);

  return <Navigate to={"/SignIn"} />;
};
