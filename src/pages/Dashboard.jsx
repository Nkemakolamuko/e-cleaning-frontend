import React, { useContext } from "react";
import Title from "../components/Title";
import userImage from "../assets/userImage.jpg";
import logo from "../assets/logo.jpg";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import ActionBTN from "../components/ActionBTN";
import LatestFeatures from "../components/LatestFeatures";
import DashboardHistory from "../components/DashboardHistory";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { BgContext } from "../App";

const Dashboard = () => {
  const { darkMode } = useContext(BgContext);
  return (
    <section
      className={`flex flex-col align-center justify-between w-full overflow-hidden ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <Title title="Dashboard" />
      {/* <p className="text-slate-300">
        Instead of these kinda cards to come first - I'd create an auto slider
        to display our products - then maybe clicking it takes you to the Store
        page{" "}
      </p> */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center gap-2 scale-100 lg:scale-95 md:scale-90">
        {/* Turn these to individual components */}
        <div className="bg-white w-full h-fit lg:w-[33%] lg:h-[200px] border border-green-200 rounded-[4px] shadow-lg md:shadow-green-100 shadow-black/20 flex flex-col">
          <p className="border-b-2 bg-slate-50 w-full text-center rounded-t-[4px] py-1 tracking-wider px-2">
            Weekly Top Rated Cleaner
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-center text-center mx-auto md:mx-0 md:text-start gap-2 w-full md:w-full h-full md:h-full p-2 justify-between">
            <div className="flex flex-col w-full md:w-fit items-center md:justify-center h-full">
              <img
                src={userImage}
                alt="User Image"
                width={"180rem"}
                height={"180rem"}
                className="rounded-[4px] border-4 border-cyan-200"
              />
              {/* <p className="font-semibold flex items-center gap-1 text-sm">
                Rating:{" "}
                <span className="text-sm font-normal text-yellow-400 flex items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </span>
              </p> */}
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-green-600 text-nowrap">
                Ugo Best And Sons
              </p>
              <p className="font-semibold flex items-center gap-1 text-sm justify-center md:justify-start">
                Rating:{" "}
                <span className="text-sm font-normal text-yellow-400 flex items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </span>
              </p>
              <p className="font-semibold text-start text-sm">
                Location:{" "}
                <span className="text-xs font-normal">
                  1st Floor Makazi Plaza, Area 2 by TZ Junction Owerri
                </span>
              </p>

              <ActionBTN text="Contact Now!" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t hover:bg-gradient-to-b to-green-200 from-white w-full h-fit lg:w-[33%] lg:h-[210px] border border-green-200 rounded-[4px] shadow-lg shadow-black/20 md:shadow-green-100 flex flex-col transition-all duration-300 ease-in-out">
          <p className="bg-[#FFC83D] text-white w-full text-center rounded-t-[4px] py-[2px] text-xl tracking-widest">
            Flash Sales!!!!
          </p>

          <div className="flex flex-col p-2 h-full w-[80%] mx-auto gap-2">
            <div className="flex flex-col m-auto text-center items-center">
              <img
                src={logo}
                alt="Product"
                width="20%"
                height="20%"
                className=""
              />
              <p className="font-semibold">
                <span className="tracking-widest">Sneakers -</span>{" "}
                <span className="text-rose-600">15% off</span>
              </p>
              <p className="text-sm">Product available as seen. Hurry Now!!</p>
            </div>
            {/* <ActionBTN text="Buy Now @ N14, 800" /> */}
            <a
              href="tel:+2347040876440"
              className="bg-green-500 text-white text-sm py-2 font-semibold rounded-[3px] hover:bg-green-600 transition-all duration-300 mb-1 text-center cursor-pointer"
            >
              Buy Now @ N14, 800
            </a>
          </div>
        </div>
        <div className="bg-white w-full h-fit lg:w-[33%] lg:h-[200px] border border-green-200 rounded-[4px] shadow-lg shadow-black/20 md:shadow-green-100 flex flex-col">
          <p className="border-b-2 bg-slate-50 w-full text-center rounded-t-[4px] py-1 tracking-widest">
            Promo! Promo!! Promo!!!
          </p>
          <div className="flex flex-col p-2 m-auto w-[80%] items-center">
            <p className="">
              <span className="text-green-500 md:text-8xl text-6xl tracking-tighter font-bold">
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
          <p className="bg-slate-100 w-full text-center rounded-b-[4px] py-1 text-xs">
            Promo Last NOW till August 24th 2024
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="mt-7 w-full">
        <LatestFeatures />
      </section>

      {/* History */}
      <div
        className={`flex items-center justify-between mt-7 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <h2
          className={`font-semibold tracking-widest text-gray-800 ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          History
        </h2>

        <Link
          to="/dashboard/history"
          className="w-fit flex items-center justify-end font-medium gap-2 py-2 px-4 bg-green-50 text-green-500 rounded ml-auto hover:bg-green-100 hover:underline hover:underline-offset-1 text-xs md:text-base transition-all duration-300"
        >
          <span>View All</span>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
      </div>
      <section className="md:flex md:flex-col w-full overflow-auto">
        <div className="overflow-auto"></div>
        <DashboardHistory />
      </section>
    </section>
  );
};

export default Dashboard;
