import React, { createContext, useContext, useState } from "react";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import { BgContext } from "../App";
import AuthContext from "../context-API/AuthProvider";
import { Navigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa6";

export const SideBarContext = createContext(null);

const MainNav = ({ children }) => {
  const [styleSidebar, setStyleSidebar] = useState(true);
  const [smallScreenSideBar, setSmallScreenSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { darkMode, setDarkMode } = useContext(BgContext);
  const { auth } = useContext(AuthContext);

  if (!auth.accessToken) {
    <Navigate to={"/login"} />;
  }

  // Theme
  const toggleThemeDark = () => {
    setDarkMode(true);
  };
  const toggleThemeLight = () => {
    setDarkMode(false);
  };

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
        <div className="absolute top-[50%] right-0 z-50 shadow-lg text-xs border rounded bg-white backdrop-blur-md">
          <div className="flex flex-col items-center md:hidden">
            <p
              className="!bg-white text-yellow-400 border rounded-full cursor-pointer p-1 m-1 transition-all duration-300"
              onClick={toggleThemeLight}
            >
              <FaSun />
            </p>
            <p className="w-full h-[1px] bg-green-500 my-1"></p>
            <p
              className="border border-[#0101be] bg-[#000068] rounded-full cursor-pointer p-1 m-1 text-white transition-all duration-300"
              onClick={toggleThemeDark}
            >
              <FaMoon />
            </p>
          </div>
        </div>
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
