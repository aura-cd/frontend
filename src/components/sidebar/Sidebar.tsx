"use client";
import React, { use } from "react";
import { ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import { SidebarData } from "./SidebarData";
import "@/styles/componentStyles/Sidebar.scss";
import SidebarIcon from "./SidebarIcon";
import AuthStatus from "@/components/auth/authStatus";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='Sidebar'>
        <SidebarIcon />
        <ul className='SidebarList'>
          {SidebarData.map(({ title, icon, link }) => {
            return (
              <Link href={link} key={link}>
                <li
                  key={link}
                  id={link === params.page ? "active" : ""}
                  className='row'
                >
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
        >
          <AuthStatus />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
