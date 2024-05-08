import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
// import userImage from "../assets/userImage.jpg";
import logo from "../assets/download.jpg";
import userImage from "../assets/ugo-best.jpg";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCircleExclamation,
  FaEnvelope,
  FaLocationDot,
  FaMapLocation,
  FaMapPin,
  FaPhone,
  FaStar,
  FaStarHalf,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa6";
import ActionBTN from "../components/ActionBTN";
import LatestFeatures from "../components/LatestFeatures";
import DashboardHistory from "../components/DashboardHistory";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { BgContext } from "../App";
import AvailableCleaners from "../components/AvailableCleaners";
import DashboardNewCard from "../components/DashboardNewCard";
import DetailsCleaner from "../components/dashboard/DetailsCleaner";
import DetailsProduct from "../components/dashboard/DetailsProduct";
import { ToastContainer, toast } from "react-toastify";

const cleaners = [
  {
    name: "Ugo Best",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur!",
    id: 1,
  },
  {
    name: "Tony Best",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!",
    id: 2,
  },
  {
    name: "Euvoria",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!",
    id: 3,
  },
  {
    name: "Nkem Best",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!",
    id: 4,
  },
  {
    name: "Sheri Best",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!",
    id: 5,
  },
  {
    name: "Anto Best",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!",
    id: 6,
  },
  {
    name: "Diamond Best",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur!",
    id: 7,
  },
  {
    name: "Emma B",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!",
    id: 8,
  },
  {
    name: "Euvoria",
    desc: "Details About them Lorem ipsum dolor sit amet, consectetur!",
    id: 9,
  },
];

const Dashboard = () => {
  const { darkMode } = useContext(BgContext);
  const [startIndex, setStartIndex] = useState(0);
  let itemsPerPage = 4;
  let time = 3000;
  if (window.innerWidth < 767) {
    itemsPerPage = 1;
    time = 3000;
  }

  if (window.innerWidth > 768) {
    itemsPerPage = 2;
    time = 3000;
  }

  if (window.innerWidth > 870) {
    itemsPerPage = 3;
    time = 3000;
  }

  if (window.innerWidth > 1020) {
    itemsPerPage = 4;
    time = 5000;
  }

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= cleaners.length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? cleaners.length - itemsPerPage : newIndex;
    });
  };

  const cleanersCount = cleaners.length;

  const displayCleaners = Array.from({ length: itemsPerPage }, (_, index) => {
    const memberIndex = (startIndex + index) % cleanersCount;
    return cleaners[memberIndex];
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, time);

    return () => clearInterval(intervalId);
  }, [startIndex]);

  const [delay, setDelay] = useState(false);

  // Add to cart
  const handleAddToCart = () => {
    const id = setTimeout(() => {
      toast.error("An error occurred, try again --", { autoClose: 2000 });
    }, 1000);
    return () => clearTimeout(id);
  };

  return (
    <section
      className={`flex flex-col align-center justify-between w-full overflow-hidden ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <ToastContainer />
      <Title title="Dashboard" />

      <div className="flex flex-col md:hidden md:grid-cols-2 lg:hidden lg:flex-row items-center gap-2 scale-100 lg:scale-100 md:scale-100">
        {/* Turn these to individual components */}
        <div
          className={`bg-white w-full h-fit lg:w-[33%] md:h-[240px] d-cards rounded-[4px] shadow-lg shadow-black/20 flex flex-col mb-4 ${
            darkMode ? "dark-mode border" : ""
          }`}
        >
          <p
            className={`border-b bg-slate-50 w-full text-center rounded-t-[4px] py-1 text-sm font-medium px-2 ${
              darkMode ? "dark-mode" : ""
            }`}
          >
            Weekly Top Rated Cleaner
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-center text-center mx-auto md:mx-0 md:text-start gap-2 w-full md:w-full h-full md:h-full px-2 py-3 justify-between">
            <div className="flex flex-col w-full md:w-fit items-center md:justify-center h-full">
              <img
                src={userImage}
                alt="User Image"
                // width={"180rem"}
                // height={"180rem"}
                className="rounded-[4px] w-full md:h-[180px]"
              />
            </div>
            <div className="flex flex-col gap-1 md:h-[180px] md:justify-between w-full">
              <p className="font-semibold text-green-600 text-nowrap flex items-center gap-2 text-start">
                <FaStore />
                Ugo Best And Sons
              </p>
              <p className="font-semibold flex items-center gap-1 text-sm justify-start">
                Rating:{" "}
                <span className="text-sm font-normal text-yellow-400 flex items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </span>
              </p>
              <p className="font-semibold justify-start flex flex-col text-sm">
                <span className="flex items-center gap-2">
                  <FaLocationDot />
                  Location:
                </span>
                <span className="text-xs font-normal">
                  1st Floor Makazi Plaza, Area 2 by TZ Junction Owerri, Imo
                  State
                </span>
              </p>

              {/* <ActionBTN text="Contact Now!" /> */}
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-sm text-start">Contact Now:</h2>
                <p className="flex items-center gap-5 text-sm px-4 py-1 border rounded w-full cursor-pointer">
                  <FaWhatsapp className="w-6 h-6" />
                  <span>WhatsApp</span>
                </p>
                <p className="flex items-center gap-5 text-sm px-4 py-1 border rounded w-full cursor-pointer">
                  <FaPhone className="w-6 h-6" />
                  <span>Phone</span>
                </p>
                <p className="flex items-center gap-5 text-sm px-4 py-1 border rounded w-full cursor-pointer">
                  <FaEnvelope className="w-6 h-6" />
                  <span>Email</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-fit lg:w-[33%] md:h-[260px] d-cards rounded-[4px] shadow-lg shadow-black/20 flex flex-col transition-all duration-300 ease-in-out ${
            darkMode ? "dark-mode border" : ""
          }`}
        >
          <p className="bg-[#FFC83D] text-white w-full text-center rounded-t-[4px] py-[2px] text-xl !tracking-widest">
            Flash Sales!!!!
          </p>

          <div className="flex flex-col p-2 h-full w-[100%] mx-auto gap-2">
            <div className="flex flex-col m-auto text-center items-center">
              <img
                src={logo}
                alt="Product"
                // width="40%"
                // height="40%"
                className="w-[80%] h-[80%]"
              />
              <p className="font-semibold">
                <span className="!tracking-widest">Spray Starch -</span>{" "}
                <span className="text-rose-600">15% off</span>
              </p>
            </div>
            {/* <ActionBTN text="Buy Now @ N14, 800" /> */}
            <p className="flex justify-between w-fit gap-4">
              <span className="py-2 font-medium text-rose-500 text-lg opacity-80 line-through">
                N3,800
              </span>
              <span className="py-2 font-medium text-green-500 text-lg">
                N2,900
              </span>
            </p>
            <p className="text-sm">Hurry before product runs out</p>
            <p className="text-sm">Qty Left : 12</p>

            <p
              className="py-3 rounded text-white bg-orange-500 text-center w-full font-medium cursor-pointer mt-2 shadow-lg active:scale-95"
              onClick={handleAddToCart}
            >
              Add To Cart
            </p>
          </div>
        </div>
        {/* <div
          className={`bg-white w-full h-fit lg:w-[33%] md:h-[210px] d-cards rounded-[4px] shadow-lg shadow-black/20 flex items-center ${
            darkMode ? "dark-mode border" : ""
          }`}
        >
          <div className="flex flex-col px-2 !bg-green-500 !text-white !tracking-widest h-[208px] items-center justify-center lg:text-2xl md:text-xl text-lg font-bold rounded-tl rounded-bl">
            <p>P</p>
            <p>R</p>
            <p>0</p>
            <p>M</p>
            <p>0</p>
          </div>
          <div className="flex flex-col justify-between h-[210px] w-full">
            <div className="flex flex-col px-2 pt-2 m-auto items-center pb-8 md:pb-2">
              <p className="">
                <span className="text-green-500 md:text-8xl text-7xl !tracking-tighter font-bold">
                  20%
                </span>{" "}
                <span className="text-rose-500 md:text-3xl text-xl font-medium">
                  Off
                </span>
              </p>
              <p className="font-semibold text-center">
                For Laundry Wash Above N5,000
              </p>
            </div>
            <p
              className={`bg-slate-50 text-center rounded-b-r-[4px] py-2 text-xs ${
                darkMode ? "dark-mode border-y rounded-b-r-[4px]" : ""
              }`}
            >
              Promo Last NOW till August 24th 2024
            </p>
          </div>
        </div> */}
      </div>
      <div className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 hidden">
        <DashboardNewCard
          image={userImage}
          details={<DetailsCleaner />}
          info="Best Performing Cleaner This Week"
        />
        <DashboardNewCard
          image={logo}
          details={<DetailsProduct handleAddToCart={handleAddToCart} />}
          info="Product On Flash Sale"
        />
      </div>

      {/* Features */}
      <section className="mt-7 w-full hidden md:flex">
        <LatestFeatures />
      </section>
      <section className="md:hidden mt-7">
        <h2
          className={`font-semibold !tracking-widest text-gray-800 ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          Latest Features And Updates
        </h2>
        <div
          className={`flex items-center py-3 gap-4 overflow-hidden w-full text-nowrap border-y ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <p className="flex items-center update-small gap-4">
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold">We've Added Search Filter!!</h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold">
                Promo - 20% off for laundry wash above N5,000
              </h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold  ">We've Partnered With Kuda</h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold  ">
                Your Laundry Will Be Delivered Within 24hrs
              </h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold my-1">
                {" "}
                We've Expanded To <span className="text-green-500">
                  Lagos
                </span>{" "}
                and <span className="text-green-500">Abuja</span> !!
              </h2>
            </div>
          </p>
          <p className="flex items-center update-small gap-4">
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold  ">We've Added Search Filter!!</h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold">
                Promo - 20% off for laundry wash above N5,000
              </h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold  ">We've Partnered With Kuda</h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold  ">
                Your Laundry Will Be Delivered Within 24hrs
              </h2>
            </div>
            <div className="flex items-center gap-2 w-fit text-nowrap">
              <FaCircleExclamation className="text-[#FFC83D]" />
              <h2 className="font-semibold my-1">
                {" "}
                We've Expanded To <span className="text-green-500">
                  Lagos
                </span>{" "}
                and <span className="text-green-500">Abuja</span> !!
              </h2>
            </div>
          </p>
        </div>
      </section>

      {/*Available Cleaners*/}
      <section className="mt-7 w-full flex flex-col overflow-auto">
        <div className="flex items-center md:gap-4 w-full justify-between md:justify-normal md:mb-2">
          <Title title="Available Cleaners" />

          <select
            name="location"
            className={`border rounded py-1 cursor-pointer mb-2 text-black ${
              darkMode ? "dark-mode" : ""
            }`}
          >
            <option value="Choose Location">----Choose Location----</option>
            <option value="OgborHill" onClick={() => alert("Working on it...")}>
              OgborHill
            </option>
            <option value="Osisioma" onClick={() => alert("Working on it...")}>
              Osisioma
            </option>
            <option value="7UP" onClick={() => alert("Working on it...")}>
              7UP
            </option>
            <option value="PH Road" onClick={() => alert("Working on it...")}>
              PH Road
            </option>
            <option value="Federal" onClick={() => alert("Working on it...")}>
              Federal
            </option>
          </select>
        </div>

        <div className="w-full h-[450px] flex items-center gap-2 overflow-hidden relative">
          {displayCleaners.map((cleaner) => {
            return (
              <AvailableCleaners
                name={cleaner.name}
                desc={cleaner.desc}
                key={cleaner.id}
              />
            );
          })}
          <AvailableCleaners />
          <div className="absolute flex items-center w-full h-full top-0 justify-between">
            <p
              className="cursor-pointer p-2 md:p-3 bg-yellow-400 text-white font-medium rounded-r hover:bg-yellow-500 active:scale-90 shadow-lg shadow-black/20 flex items-center justify-between"
              onClick={handlePrev}
            >
              <FaAngleLeft />
              <span>Prev</span>
            </p>
            <p
              className="cursor-pointer p-2 md:p-3 bg-yellow-400 text-white font-medium rounded-l hover:bg-yellow-500 active:scale-90 shadow-lg shadow-black/20 flex items-center justify-between"
              onClick={handleNext}
            >
              <span>Next</span>
              <FaAngleRight />
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <div
        className={`flex items-center md:gap-3 md:justify-start justify-between mt-7 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <h2
          className={`font-semibold !tracking-widest text-gray-800 ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          History
        </h2>

        <Link
          to="/dashboard/history"
          className="w-fit flex items-center justify-end font-medium gap-2 py-2 md:py-1 px-4 bg-green-50 md:bg-white md:hover:bg-green-50 text-green-500 rounded ml-auto md:ml-0 hover:bg-green-100 hover:underline hover:underline-offset-1 text-xs md:text-sm transition-all duration-300"
        >
          <span>View All</span>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
      </div>
      <section className="flex flex-col w-full overflow-auto">
        {/* <div className="overflow-auto"></div> */}
        <DashboardHistory />
      </section>
    </section>
  );
};

export default Dashboard;
