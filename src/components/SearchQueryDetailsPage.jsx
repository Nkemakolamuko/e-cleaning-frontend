import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import cleanersData from "../../db/cleanersDb";
import { FaAngleLeft, FaLocationDot, FaShield, FaStar } from "react-icons/fa6";
import CleanerContactBtns from "./CleanerContactBtns";
import img from "../assets/userImage.jpg";
import { BgContext } from "../App";

const SearchQueryDetailsPage = () => {
  const { darkMode } = useContext(BgContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [cleaner, setCleaner] = useState([]);
  const [cleaners, setCleaners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  const foundCleaner = cleanersData.find((cleaner) => {
    return cleaner.id == id;
  });

  const foundCleanersInSameLocation = cleanersData.filter((cleaner) => {
    return cleaner.location == foundCleaner.location;
  });
  useEffect(() => {
    setCleaner([foundCleaner]);
    setCleaners(
      foundCleanersInSameLocation.filter((cleaner) => cleaner.id != id)
    );
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  }, []);

  useEffect(() => {
    setCleaner([foundCleaner]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setCleaners(
      foundCleanersInSameLocation.filter((cleaner) => cleaner.id != id)
    );
  }, [id]);

  useEffect(() => {
    setCleaners(
      foundCleanersInSameLocation.filter((cleaner) => cleaner.id != id)
    );
  }, [cleaner]); // This is because the first time the array is empty

  return (
    <>
      {!loadingPage ? (
        <div
          className={`w-full overflow-auto md:overflow-auto scroll md:flex md:justify-normal ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <div
            className={`flex flex-col h-[100vh] p-2 text-sm w-full lg:w-[90%] scroll  ${
              darkMode ? "dark-mode" : ""
            }`}
          >
            <p
              className={`px-3 py-2 w-fit cursor-pointer flex md:hidden items-center text-slate-600 gap-2 hover:bg-slate-200 transition-all ${
                darkMode ? "!text-slate-200 hover:!bg-slate-700" : ""
              }`}
              onClick={() => navigate("/dashboard")}
            >
              <FaAngleLeft />
              Go back
            </p>
            <div className="flex flex-col py-2 gap-4 md:flex-row md:items-center">
              <div className="flex flex-col md:h-screen md:top-12 md:w-[40%] md:fixed">
                <p
                  className={`px-3 py-2 mb-4 w-fit cursor-pointer hidden md:flex items-center gap-2 text-slate-600 hover:bg-slate-200 transition-all ${
                    darkMode ? "!text-slate-200 hover:!bg-slate-700" : ""
                  }`}
                  onClick={() => navigate("/dashboard")}
                >
                  <FaAngleLeft />
                  Go back
                </p>
                <h2 className="p-2 font-semibold border rounded-t text-base">
                  Cleaner Info
                </h2>
                {loading ? (
                  <p className="w-full h-[50vh] md:h-[60%] flex justify-center items-center border rounded">
                    Loading...
                  </p>
                ) : (
                  <div className="flex flex-col gap-2 py-2 border-b border-x">
                    {cleaner.map((value) => (
                      <div className="flex flex-col" key={value.id}>
                        <div className="flex gap-2 items-center border-b pb-2 px-2">
                          <img
                            src={img}
                            alt="Cleaner Image"
                            className="rounded w-[40%] md:w-[30%] h-[100%]"
                          />
                          <div className="flex flex-col">
                            <p className=" font-semibold text-base">
                              {value.businessName}
                            </p>

                            <p className="flex items-center gap-1">
                              Rating of {value.rating}{" "}
                              <FaStar className="text-yellow-300" />
                            </p>
                            <p className="">Owner - {value.name}</p>
                            <code className="">{value.phoneNumber}</code>
                            <p className="flex items-center gap-2">
                              City -{" "}
                              <span
                                className={`font-semibold text-blue-500  ${
                                  darkMode ? "" : ""
                                }`}
                              >
                                {value.location}
                              </span>
                            </p>
                          </div>
                        </div>
                        <p
                          className={`p-2 border-b flex flex-col bg-slate-100  ${
                            darkMode
                              ? "!bg-blue-700 border-b-blue-700 !text-white"
                              : ""
                          }`}
                        >
                          <span className="font-semibold flex items-center gap-2 pb-1">
                            <FaLocationDot className="w-5 h-5" />
                            Location{" "}
                          </span>
                          {value.address}
                        </p>
                        <p className="p-2 border-b flex flex-col">
                          <span className="font-semibold flex items-center gap-2 pb-1">
                            <FaShield className="w-5 h-5" />
                            Our Strength{" "}
                          </span>
                          {value.desc}
                        </p>
                        <div className="w-full pb-2">
                          <CleanerContactBtns />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cleaners Alike */}
              <div className="flex flex-col border rounded md:w-[50%] ml-auto p-2">
                <h2 className="p-2 font-semibold border-b text-xs">
                  Cleaners In Same Location{" "}
                  <span className="text-xs font-light md:hidden">
                    (Click on any and scroll up to view)
                  </span>
                </h2>
                {cleaners.length !== 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-xs p-1l">
                    {cleaners.map(
                      ({
                        address,
                        location,
                        businessName,
                        name,
                        phoneNumber,
                        rating,
                        desc,
                        id,
                      }) => (
                        <Link
                          to={`/dashboard/search-query/${id}`}
                          className="border p-2 cursor-pointer text-center w-full hover:shadow transition-all duration-300 tooltip"
                          key={id}
                        >
                          <img
                            src={img}
                            alt="Cleaner Image"
                            className="rounded-full w-[40%] h-[50%] mx-auto"
                          />
                          <p className="font-semibold text-sm">
                            {businessName}
                          </p>
                          <p>{location}</p>
                          <p className="truncate">{address}</p>
                          <p>Click for details...</p>
                          <span className="rounded tooltiptext md:hidden">
                            Click and scroll up to view
                          </span>
                        </Link>
                      )
                    )}
                  </div>
                ) : (
                  <p className="p-2 text-xs text-slate-500">None available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`h-screen w-full flex items-center justify-center ${
            darkMode && "dark-mode"
          }`}
        >
          Loading content...
        </div>
      )}
    </>
  );
};

export default SearchQueryDetailsPage;
