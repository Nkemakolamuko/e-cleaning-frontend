import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import History23 from "../components/history/history23/History23";
import History24 from "../components/history/history24/History24";
import History25 from "../components/history/history25/History25";
import History26 from "../components/history/history26/History26";
import { BgContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHistoryCard from "../components/history/DashboardHistoryCard";
import cleanersData from "../../db/cleanersDb";

const History = () => {
  const { darkMode } = useContext(BgContext);
  const [active, setActive] = useState("2024");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const historyData = cleanersData;
    setHistory(historyData.slice(0));
  }, []);
  return (
    <div className="flex flex-col w-full h-screen">
      <Title title="Wash History" />
      <ToastContainer />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2 gap-2">
        {history?.map((value) => (
          <DashboardHistoryCard
            businessName={value.businessName}
            desc={value.desc}
            location={value.location}
            key={value.id}
            id={value.id}
          />
        ))}
      </section>
    </div>
  );
};

export default History;
