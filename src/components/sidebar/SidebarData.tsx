import { ReactNode } from "react";
import { Bs0CircleFill } from "react-icons/bs";
import "@/styles/Sidebar.scss";

interface SidebarDataProps {
  title: string;
  icon: ReactNode;
  link: string;
}

export const SidebarData: SidebarDataProps[] = [
  {
    title: "Home",
    icon: <Bs0CircleFill />,
    link: "/",
  },
  {
    title: "Doc",
    icon: <Bs0CircleFill />,
    link: "/docs",
  },
  {
    title: "Setting",
    icon: <Bs0CircleFill />,
    link: "/setting",
  },
  {
    title: "grafana",
    icon: <Bs0CircleFill />,
    link: "/grafana",
  },
];
