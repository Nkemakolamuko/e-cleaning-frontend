import React, { createContext, useContext, useState } from "react";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import { BgContext } from "../App";

export const SideBarContext = createContext(null);

const MainNav = ({ children }) => {
  const [styleSidebar, setStyleSidebar] = useState(true);
  const [smallScreenSideBar, setSmallScreenSidebar] = useState(false);
  const { darkMode } = useContext(BgContext);

  return (
    <SideBarContext.Provider
      value={{
        styleSidebar,
        setStyleSidebar,
        smallScreenSideBar,
        setSmallScreenSidebar,
      }}
    >
      <div
        className={`${
          styleSidebar ? "grid-container-close" : "grid-container"
        } ${darkMode ? "dark-mode" : ""}`}
      >
        <NavigationBar />
        <Header />
        <main
          className={`${
            smallScreenSideBar && window.innerWidth < 400
              ? "bg-slate-400 main-container-small"
              : "main-container bg-white"
          } ${darkMode ? "dark-mode" : ""}`}
        >
          {children}
        </main>
      </div>
    </SideBarContext.Provider>
  );
};

export default MainNav;
