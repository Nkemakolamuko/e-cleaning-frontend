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
import notificationDb from "../../db/notificationDb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaTimes } from "react-icons/fa";
import SearchQuery from "../components/SearchQuery";
import cleanersData from "../../db/cleanersDb";

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
    notification,
    setNotification,
    globalUser,
    setGlobalUser,
  } = useContext(BgContext);

  const { smallScreenSideBar } = useContext(SideBarContext);
  const [search, setSearch] = useState("");
  const [typing, setTyping] = useState(false);

  const [user, setUser] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    // console.log(data);
    data.map((name) => setUser(name));
    // setUser(data);

    // Notification
    setNotification(notificationDb);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    data.map((name) => setUser(name));
    // setUser(data);
  }, [user.name]);

  const toggleThemeDark = () => {
    setDarkMode(true);
  };

  const toggleThemeLight = () => {
    setDarkMode(false);
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

  const { sidebar, setSidebar } = useContext(SideBarContext);

  // Search Query Handler
  const filteredCleaner = cleanersData.filter((cleaner) => {
    return cleaner.location.toLowerCase().includes(search.toLowerCase());
  });

  const filteredData = (search) => {
    let filteredCleaners = [];
    if (search) {
      filteredCleaners = filteredCleaner;
    }

    return filteredCleaners.map((value, i) => (
      <SearchQuery
        businessName={value.businessName}
        key={value.id}
        id={value.id}
      />
    ));
  };

  const result = filteredData(search);

  return (
    <header
      className={`header border-b relative w-full transition-all duration-300 bg-white ${
        darkMode ? "dark-mode for-header border-b" : ""
      }`}
    >
      {showCartModal && <CartModal handleModalClose={handleModalClose} />}

      {showNotificationModal && (
        <NotificationModal
          handleCloseNotificationModal={handleCloseNotificationModal}
        />
      )}

      <p
        className="font-semibold truncate flex items-center gap-2 md:gap-6 w-fit"
        // contentEditable
      >
        {!sidebar && (
          <p
            className={`p-1 rounded-full hover:bg-slate-200 transition-all duration-300 tooltip ${
              typing && "hidden"
            }`}
          >
            <GiHamburgerMenu
              className="w-7 h-7 cursor-pointer active:scale-95 hover:text-slate-800"
              onClick={() => setSidebar(true)}
            />
            <span className="tooltiptext rounded">Open Menu</span>
          </p>
        )}
        <span className="truncate hidden md:flex">
          👋 Hi,{" "}
          {/* {user?.name?.split(" ")[0].charAt(0).toUpperCase() +
            user?.name?.slice(1).split(" ")[0].toLowerCase() ||
            user?.name?.charAt(0).toUpperCase() ||
            "Buddy"} */}
          {globalUser?.username?.split(" ")[0].charAt(0).toUpperCase() +
            globalUser?.username?.slice(1)?.split(" ")[0].toLowerCase() ||
            "Loading..."}{" "}
        </span>
      </p>

      {/* Search Box */}
      {/* For small */}
      {!sidebar && (
        <div
          className={`relative flex md:hidden items-center border rounded bg-inherit text-slate-600 text-sm ${
            typing ? "ml-0 mr-0 w-full" : "mr-4 w-1/2"
          } ${darkMode ? "dark-mode !text-slate-200" : ""}`}
          onClick={() => {
            setTyping(!typing);
            setSearch("");
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`py-2 px-2 outline-none bg-inherit w-full rounded`}
            placeholder='Search Eg. "Enugu"'
          />
          <p
            className={`py-2 border-l cursor-pointer ${
              typing ? "px-4" : "px-2"
            }`}
            onClick={() => {
              setTyping(!typing);
              setSearch("");
            }}
          >
            {typing ? <FaTimes className="text-rose-500" /> : <FaSearch />}
          </p>
          {/* Search Query */}
          {/* {result ? ( */}
          <div className="absolute w-full rounded flex flex-col text-sm h-fit z-10 top-12 bg-white text-slate-700 shadow">
            {result}
          </div>
          {/* ) : (
            <p className="absolute w-full flex items-center py-3 z-10 bg-white top-12 rounded border px-2 text-sm justify-center">
              None found.
            </p>
          )} */}
        </div>
      )}

      {/* For MD */}
      <div
        className={`relative hidden md:flex items-center w-1/2 border rounded bg-inherit mr-4 text-slate-600 text-sm ${
          darkMode ? "dark-mode !text-slate-200" : ""
        }`}
        onClick={() => {
          setTyping(!typing);
          setSearch("");
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="py-3 px-2 outline-none bg-inherit w-full rounded"
          placeholder="Enter full city name - 'Abuja' - to search available cleaners in that area"
        />
        <p className="p-3 border-l cursor-pointer">
          {typing ? <FaTimes className="text-rose-500" /> : <FaSearch />}
        </p>
        {/* Search Query */}
        {/* {result ? ( */}
        <div className="absolute w-full rounded flex flex-col text-sm h-fit z-10 top-12 bg-white text-slate-700 shadow">
          {result}
        </div>
        {/* ) : (
            <p className="absolute w-full flex items-center py-3 z-10 bg-white top-12 rounded border px-2 text-sm justify-center">
              None found.
            </p>
          )} */}
      </div>

      <div className="hidden md:flex items-center gap-2">
        <a
          href="tel:+2347040876440"
          target="_blank"
          className={`p-2 border bg-black/90 rounded hover:bg-black text-white hover:rounded-md text-sm cursor-pointer font-semibold flex items-center gap-3 tooltip-hot transition-all duration-300 ${
            darkMode ? "dark-mode !bg-yellow-400" : ""
          }`}
        >
          <span className={`text-yellow-300 ${darkMode ? "!text-white" : ""}`}>
            <FaFire />
          </span>
          <span>Hotline</span>
          <span className="tooltip-hottext rounded">
            Available For Immediate Response!!
          </span>
        </a>
        <div className="px-4 md:px-4 lg:px-4 flex gap-2 items-center ">
          <p
            className="!bg-white text-yellow-400 border rounded-full cursor-pointer p-2 transition-all duration-300"
            onClick={toggleThemeLight}
          >
            <FaSun />
          </p>
          <p className="tracking-tighter text-xs font-medium text-nowrap">
            CHANGE THEME
          </p>
          <p
            className="border border-[#0000ff] bg-[#000081] rounded-full cursor-pointer p-2 text-white transition-all duration-300"
            onClick={toggleThemeDark}
          >
            <FaMoon />
          </p>
        </div>
        {/* Notification */}
        <p className="cursor-pointer" onClick={handleNotificationModal}>
          <FaRegBell
            className={`w-6 h-6 text-green-900 relative active:scale-90 mr-2 ${
              darkMode ? "dark-mode" : ""
            }`}
          />

          <span
            className={`absolute 
                 py-1 bg-rose-500 text-white text-xs top-2 ml-3 rounded-full ${
                   notification?.length > 9 ? "px-1" : "px-[9px]"
                 } `}
          >
            {notification?.length > 9 ? "9+" : notification?.length || "0"}
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

      {!typing && (
        <>
          {/* Notification Small */}
          {!sidebar && (
            <p
              className="cursor-pointer md:hidden"
              onClick={handleNotificationModal}
            >
              <FaRegBell
                className={`w-6 h-6 text-green-900 relative active:scale-90 ${
                  darkMode ? "dark-mode" : ""
                }`}
              />

              <span
                className={`absolute 
                 py-1 bg-rose-500/80 text-white text-xs top-2 ml-3 rounded-full ${
                   notification?.length > 9 ? "px-1" : "px-[9px]"
                 } `}
              >
                {notification?.length > 9 ? "9+" : notification?.length || "0"}
              </span>
            </p>
          )}

          {/* {!sidebar && ( */}
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
          {/* )} */}
        </>
      )}
    </header>
  );
};

export default Header;
