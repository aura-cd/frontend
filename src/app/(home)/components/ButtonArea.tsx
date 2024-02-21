import React from "react";
import InstallAppButton from "./InstallAppButton";
import "@/styles//appButton.scss";
import AuthStatus from "@/components/auth/authStatus";

const ButtonArea = () => {
  return (
    <div className='ButtonAreaContainer'>
      <InstallAppButton />
      <AuthStatus />
    </div>
  );
};

export default ButtonArea;
