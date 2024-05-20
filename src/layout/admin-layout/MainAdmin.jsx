import React, { createContext, useContext, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

import { BgContext } from "../../App";

export const SideBarContext = createContext(null);

const MainAdmin = ({ children }) => {
  const [styleSidebar, setStyleSidebar] = useState(true);
  const [smallScreenSideBar, setSmallScreenSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { darkMode } = useContext(BgContext);

  return (
    <SideBarContext.Provider
      value={{
        styleSidebar,
        setStyleSidebar,
        smallScreenSideBar,
        setSmallScreenSidebar,
        sidebar,
        setSidebar,
      }}
    >
      <div
        className={`!scroll-smooth ${
          sidebar ? "grid-container-close" : "grid-container"
        } ${darkMode ? "dark-mode" : ""}`}
      >
        <AdminSidebar />
        <AdminHeader />
        <main
          className={`scroll scroll-smooth ${
            sidebar
              ? "opacity-0 md:!opacity-100 main-container"
              : "main-container bg-white opacity-100"
          } ${darkMode ? "dark-mode" : ""}`}
        >
          {children}
        </main>
      </div>
    </SideBarContext.Provider>
  );
};

export default MainAdmin;
