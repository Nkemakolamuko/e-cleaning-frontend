import React, { createContext, useContext, useState } from "react";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import { BgContext } from "../App";
import AuthContext from "../context-API/AuthProvider";
import { Navigate } from "react-router-dom";

export const SideBarContext = createContext(null);

const MainNav = ({ children }) => {
  const [styleSidebar, setStyleSidebar] = useState(true);
  const [smallScreenSideBar, setSmallScreenSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { darkMode } = useContext(BgContext);
  const { auth } = useContext(AuthContext);

  if (!auth.accessToken) {
    <Navigate to={"/login"} />;
  }

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
        className={`${sidebar ? "grid-container-close" : "grid-container"} ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <NavigationBar />
        <Header />
        <main
          className={`scroll ${
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

export default MainNav;
