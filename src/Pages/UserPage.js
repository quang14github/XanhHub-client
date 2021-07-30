import React from "react";
import Layout from "Components/Layout";
import DashBoard from "Components/DashBoard";
import { useSelector } from "react-redux";

export default function UserPage() {
  const isLogin = useSelector((state) => state.user.logInStatus);

  return <Layout requiredLogin={true}>{isLogin && <DashBoard />}</Layout>;
}
