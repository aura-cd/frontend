"use client";

import { useParams, useRouter } from "next/navigation";
import { SidebarData } from "@/components/sidebar/SidebarData";
import "@/styles/Sidebar.scss";
import SidebarIcon from "@/components/sidebar/SidebarIcon";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='Sidebar'>
        <SidebarIcon />
        <ul className='SidebarList'>
          {SidebarData.map(({ title, icon, link }, index) => {
            return (
              <Link href={link} key={index}>
                <li id={link === params.page ? "active" : ""} className='row'>
                  <div id='icon'>{icon}</div>
                  <div id='title'>{title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div
          style={{
            margin: "0,auto",
          }}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
