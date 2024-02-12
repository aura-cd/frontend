import { createContext, useState, Dispatch, SetStateAction } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebarCollapse: () => void;
}

const initialValue: SidebarContextType = {
  isCollapsed: false,
  toggleSidebarCollapse: () => {},
};

const SidebarContext = createContext<SidebarContextType>(initialValue);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
