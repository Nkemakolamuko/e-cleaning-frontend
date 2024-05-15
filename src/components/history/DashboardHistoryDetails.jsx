import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cleanersData from "../../../db/cleanersDb";
import { FaAngleLeft, FaLocationDot, FaNairaSign } from "react-icons/fa6";
import img from "../../assets/userImage.jpg";
import { BgContext } from "../../App";

const DashboardHistoryDetails = () => {
  const { id } = useParams();
  const { darkMode } = useContext(BgContext);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const foundHistory = cleanersData.find((cleaner) => {
    return cleaner.id == id;
  });

  useEffect(() => {
    setHistory([foundHistory]);
  }, []);
  return (
    <section className={`${darkMode ? "dark-mode" : ""}`}>
      <div
        className={`p-2 flex flex-col w-full container mx-auto justify-center items-center ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div className="w-full">
          <p
            className={`rounded-full border px-4 py-2 cursor-pointer w-fit flex items-center gap-3 text-slate-600 text-sm ${
              darkMode ? "!text-slate-200" : ""
            }`}
            onClick={() => navigate(-1)}
          >
            <FaAngleLeft />
            <span>Go back</span>
          </p>
        </div>

        <div
          className={`relative flex flex-col mt-4 w-full md:w-1/2 ${
            darkMode ? "" : ""
          }`}
        >
          <div
            className={`bg-green-500 w-full h-[100px] rounded-t md:h-[150px] lg:h-[150px] ${
              darkMode ? "!bg-[#0000ff]" : ""
            }`}
          ></div>
          {history ? (
            history.map((value) => (
              <div
                className={`w-fit h-fit flex flex-col border-x border-b items-center z-10 justify-center py-3 -lg:mt-12 -mt-24 text-sm px-2 ${
                  darkMode ? "border-none" : ""
                }`}
                key={value.id}
              >
                <img
                  src={img}
                  alt="Cleaner Image"
                  className={`rounded-full w-[50%] h-[55%] lg:w-[30%] md:w-[50%] md:h-[50%] border-8 border-white ${
                    darkMode ? "border-[#00001f]" : ""
                  }`}
                />
                <div className="flex flex-col gap-1 justify-center items-center text-center w-full">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-semibold">
                      {value.businessName}
                    </span>{" "}
                    -<span>{value.rating} rating</span>
                  </div>
                  <p className="flex items-center justify-between gap-4">
                    <code>{value.name}</code> -<code>{value.phoneNumber}</code>
                  </p>
                  <p className="font-medium text-lg flex items-center gap-1">
                    <FaLocationDot />
                    {value.location}
                  </p>
                  <p>{value.address}</p>

                  <table className="table-auto border-collapse w-full border p-2 rounded text-start mt-2 text-nowrap overflow-auto scroll">
                    <thead className="border rounded-t">
                      <tr className="bg-slate-300 rounded-t text-slate-700">
                        <th className="p-2 text-start">Item(s) washed</th>
                        <th className="p-2 text-start">Quantity</th>
                        <th className="p-2 text-start flex items-center gap-1">
                          <FaNairaSign />
                          Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">Trousers</td>
                        <td className="p-2">3</td>
                        <td className="p-2">
                          <code>2,400</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2">Shirts</td>
                        <td className="p-2">6</td>
                        <td className="p-2">
                          <code>4, 800</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2">Bed Sheets</td>
                        <td className="p-2">2</td>
                        <td className="p-2">
                          <code>2, 000</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2">Jackets</td>
                        <td className="p-2">3</td>
                        <td className="p-2">
                          <code>2, 400</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2">Duvee</td>
                        <td className="p-2">1</td>
                        <td className="p-2">
                          <code>1, 200</code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 font-semibold">Total</td>
                        <td className="p-2 font-semibold">12</td>
                        <td className="p-2 font-semibold">
                          <code>9, 600</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            <p className="w-full flex justify-center absolute">Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardHistoryDetails;
