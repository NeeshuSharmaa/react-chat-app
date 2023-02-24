import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../App";

export default function PrivateRoute({ component: Component }) {
  const loggedIn = useContext(userContext);
  return loggedIn ? Component : <Navigate to="/login" />;
}
