import React, { useState } from "react";
import Title from "../components/Title";
import History23 from "../components/history/history23/History23";
import History24 from "../components/history/history24/History24";
import History25 from "../components/history/history25/History25";
import History26 from "../components/history/history26/History26";

const History = () => {
  const [active, setActive] = useState("2024");
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="fixed top-16 sticky-z-50 bg-green-50 w-full md:hidden">
        <Title title="Cleaning History" />
      </div>
      <div className="hidden md:block">
        <Title title="Cleaning History" />
      </div>
      <section className="flex md:flex-row flex-col-reverse items-center w-full justify-between h-full">
        <aside className="w-full md:w-[70%] flex flex-col h-full">
          {active === "2023" && <History23 />}
          {active === "2024" && <History24 />}
          {active === "2025" && <History25 />}
          {active === "2026" && <History26 />}
        </aside>
        <aside className="flex flex-row md:flex-col gap-3 md:w-[20%] text-center h-fit md:h-full top-32 overflow-auto md:right-6 fixed z-50 bg-green-50 p-2 md:bg-transparent md-p-0">
          <p className="font-semibold tracking-widest hidden md:block">
            Select Year
          </p>
          <p
            className={`p-2 border-2 border-black/50 year rounded tracking-wide font-medium hover:bg-green-300 hover:text-white hover:border-green-300 ${
              active === "2023"
                ? "bg-green-300 text-white !border-green-300"
                : "bg-white"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setActive("2023")}
          >
            2023
          </p>
          <p
            className={`p-2 border-2 border-black/50 year rounded tracking-wide font-medium hover:bg-green-300 hover:text-white hover:border-green-300 ${
              active === "2024"
                ? "bg-green-300 text-white !border-green-300"
                : "bg-white"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setActive("2024")}
          >
            2024
          </p>
          <p
            className={`p-2 border-2 border-black/50 year rounded tracking-wide font-medium hover:bg-green-300 hover:text-white hover:border-green-300 ${
              active === "2025"
                ? "bg-green-300 text-white !border-green-300"
                : "bg-white"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setActive("2025")}
          >
            2025
          </p>
          <p
            className={`p-2 border-2 border-black/50 year rounded tracking-wide font-medium hover:bg-green-300 hover:text-white hover:border-green-300 ${
              active === "2026"
                ? "bg-green-300 text-white !border-green-300"
                : "bg-white"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setActive("2026")}
          >
            2026
          </p>
        </aside>
      </section>
    </div>
  );
};

export default History;
