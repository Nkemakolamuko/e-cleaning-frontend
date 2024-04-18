import React, { useContext, useEffect, useState } from "react";
import {
  FaCartShopping,
  FaFire,
  FaMoon,
  FaRegBell,
  FaSun,
} from "react-icons/fa6";
import { BgContext } from "../App";
import CartModal from "../components/modal/CartModal";
import NotificationModal from "../components/notification/NotificationModal";
import { SideBarContext } from "./MainNav";

const Header = () => {
  const {
    darkMode,
    setDarkMode,
    cartModalCount,
    setCartModalCount,
    showCartModal,
    setShowCartModal,
    notificationModalCount,
    setNotificationModalCount,
    showNotificationModal,
    setShowNotificationModal,
  } = useContext(BgContext);

  const { smallScreenSideBar } = useContext(SideBarContext);

  const [user, setUser] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    data.map((name) => setUser(name));

    // console.log(data);
    // console.log(user);
    // setUser(data);
  }, []);

  const toggleThemeDark = () => {
    setDarkMode(true);
    // console.log(darkMode);
  };

  const toggleThemeLight = () => {
    setDarkMode(false);
    // console.log(darkMode);
  };

  const handleCartModal = () => {
    setShowCartModal(true);
  };

  const handleModalClose = () => {
    setShowCartModal(false);
  };

  const handleNotificationModal = () => {
    setShowNotificationModal(true);
  };

  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false);
  };

  return (
    <header
      className={`header shadow-md relative transition-all duration-300 bg-white ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {showCartModal && <CartModal handleModalClose={handleModalClose} />}

      {showNotificationModal && (
        <NotificationModal
          handleCloseNotificationModal={handleCloseNotificationModal}
        />
      )}

      <p
        className="font-semibold truncate"
        // contentEditable
      >
        👋 Hi,{" "}
        {user?.name?.split(" ")[0].charAt(0).toUpperCase() +
          user?.name?.slice(1).split(" ")[0] ||
          user?.name?.charAt(0).toUpperCase() ||
          "Buddy"}
      </p>

      <div className="hidden md:flex items-center gap-2">
        <a
          href="tel:+2347040876440"
          target="_blank"
          className="p-2 border bg-black/90 rounded hover:bg-black text-white hover:rounded-md text-sm cursor-pointer font-semibold flex items-center gap-3 tooltip-hot transition-all duration-300"
        >
          <span className="text-yellow-300">
            <FaFire />
          </span>
          <span>Hotline</span>
          <span className="tooltip-hottext rounded">
            Available For Immediate Response!!
          </span>
        </a>
        <div className="px-4 md:px-4 lg:px-4 flex gap-2 items-center ">
          <p
            className="bg-white text-yellow-400 border rounded-full cursor-pointer p-2 transition-all duration-300"
            onClick={toggleThemeLight}
          >
            <FaSun />
          </p>
          <p className="tracking-tighter text-xs font-medium">MODE</p>
          <p
            className="border bg-green-900 rounded-full cursor-pointer p-2 text-white transition-all duration-300"
            onClick={toggleThemeDark}
          >
            <FaMoon />
          </p>
        </div>
        <p className="cursor-pointer" onClick={handleNotificationModal}>
          <FaRegBell
            className={`w-6 h-6 text-green-900 relative active:scale-90 mr-2 ${
              darkMode ? "dark-mode" : ""
            }`}
          />

          <span
            className={`absolute px-[9px]
                 py-1 bg-rose-500 text-white text-xs top-2 right-10 rounded-full`}
          >
            9
          </span>
        </p>
        <p className="cursor-pointer" onClick={handleCartModal}>
          <FaCartShopping
            className={`w-6 h-6 text-green-900 relative active:scale-90 ${
              darkMode ? "dark-mode" : ""
            }`}
          />
          {cartModalCount > 0 && (
            <span
              className={`absolute ${
                cartModalCount > 9 ? "px-1" : "px-2"
              } py-1 bg-rose-500 text-white text-xs top-2 right-1 rounded-full`}
            >
              {cartModalCount > 9 ? "9+" : cartModalCount}
            </span>
          )}
        </p>
      </div>

      {!smallScreenSideBar && (
        <a
          href="tel:+2347040876440"
          target="_blank"
          className="p-2 border bg-black/90 rounded hover:bg-black text-white hover:rounded-md text-sm cursor-pointer font-semibold flex items-center gap-3 tooltip-hot transition-all duration-300 md:hidden"
        >
          <span className="text-yellow-300">
            <FaFire />
          </span>
          <span>Hotline</span>
          <span className="tooltip-hottext rounded">
            Available For Immediate Response!!
          </span>
        </a>
      )}

      {!smallScreenSideBar && (
        <p className="cursor-pointer md:hidden" onClick={handleCartModal}>
          <FaCartShopping
            className={`w-6 h-6 text-green-900 relative active:scale-90 ${
              darkMode ? "dark-mode" : ""
            }`}
          />
          {cartModalCount > 0 && (
            <span
              className={`absolute ${
                cartModalCount > 9 ? "px-1" : "px-2"
              } py-1 bg-rose-500 text-white text-xs top-2 right-1 rounded-full`}
            >
              {cartModalCount > 9 ? "9+" : cartModalCount}
            </span>
          )}
        </p>
      )}
    </header>
  );
};

export default Header;
