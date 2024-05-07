import React, { useContext } from "react";
import Title from "../components/Title";
import { FaQuestion } from "react-icons/fa6";
import FAQCards from "../components/faq/FAQCards";
import { BgContext } from "../App";

const FAQ = () => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className="h-[80vh]">
      <Title title="Frequently Asked Questions" />

      <section className="grid grid-cols-1 w-full">
        <div className="w-full md:w-1/2 gap-4 flex flex-col h-full mb-8">
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
          <FAQCards />
        </div>
        {/* <div
          className={`sticky top-12 w-full h-[80vh] hidden md:flex items-center justify-center bg-cyan-50 group ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <FaQuestion
            className={`w-[300px] h-[300px] text-cyan-500 shadow-2xl shadow-cyan-100 group-hover:shadow-cyan-300 group-hover:rounded transition-all duration-300`}
          />
        </div> */}
      </section>
    </div>
  );
};

export default FAQ;
