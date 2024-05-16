import React, { useContext, useState } from "react";
import "../track.css";
import OpenedSideBar from "../components/layout.nav/OpenedSideBar";
import ClosedSideBar from "../components/layout.nav/ClosedSideBar";
import { SideBarContext } from "./MainNav";

const NavigationBar = () => {
  const {
    // styleSidebar,
    // setStyleSidebar,
    // setSmallScreenSidebar,
    sidebar,
    setSidebar,
  } = useContext(SideBarContext);
  // const [sidebar, setSidebar] = useState(false);

  const handleSideBarClose = () => {
    setSidebar(false);
    // setStyleSidebar(true);
    // setSmallScreenSidebar(false);
  };

  // const handleSideBarOpen = () => {
  //   setSidebar(false);
  // setSidebar(true);
  // setStyleSidebar(false);
  // setSmallScreenSidebar(true);
  // };

  return (
    <>
      {/* {sidebar ? (
        <OpenedSideBar handleSideBarClose={handleSideBarClose} />
      ) : (
        <ClosedSideBar handleSideBarOpen={handleSideBarOpen} />
      )} */}
      {sidebar ? <OpenedSideBar handleSideBarClose={handleSideBarClose} /> : ""}
    </>
  );
};

export default NavigationBar;
