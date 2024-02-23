import "@/styles/Sidebar.scss";

import Image from "next/image";
function SidebarIcon() {
  return (
    <div className=" m-auto w-100 ">
      <div className="iconContainer">
        <Image src="/gantry.png" width={100} height={100} alt={""} />
      </div>
    </div>
  );
}

export default SidebarIcon;
