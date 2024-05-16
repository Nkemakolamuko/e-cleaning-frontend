import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SearchQuery = ({ businessName, id }) => {
  return (
    <Link to={`/dashboard/search-query/${id}`} className="">
      <p className="flex items-center justify-between py-3 px-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer border-b">
        <span>{businessName}</span>
        <FaAngleRight />
      </p>
    </Link>
  );
};

export default SearchQuery;
