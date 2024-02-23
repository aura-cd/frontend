import "@/styles//appButton.scss";

import InstallAppButton from "@/app/(home)/components/InstallAppButton";
import AuthStatus from "@/components/auth/authStatus";

const ButtonArea = () => {
  return (
    <div className="ButtonAreaContainer">
      <InstallAppButton />
      <AuthStatus />
    </div>
  );
};

export default ButtonArea;
