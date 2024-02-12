import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div>
      <SideBar>
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>Main</span>
        </div>
      </SideBar>
    </div>
  );
};

export default page;
