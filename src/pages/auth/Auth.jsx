import { useStateValue } from "../../context";
import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let [{ token }] = useStateValue();
  console.log(token);
  return token ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default memo(Auth);