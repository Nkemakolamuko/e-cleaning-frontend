import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";

const ChangeEmail = ({
  handleCloseEmail,
  userEmail,
  handleChange,
  handleEmailUpdate,
}) => {
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute top-0 p-[10px] md:p-[200px] lg:p-[300px] flex-col">
      <div className="w-full rounded-md flex flex-col gap-4 bg-white">
        <div className="flex items-center border-b px-2 md:px-4 pt-2 pb-0">
          <h2 className="tracking-widest font-medium">Update/Change Email</h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleCloseEmail} />
          </div>
        </div>
        <form
          onSubmit={handleEmailUpdate}
          action="/dashboard/settings"
          method="post"
          className="flex flex-col gap-3 px-2 py-3 md:px-4 md:py-6 "
        >
          <label htmlFor="email" className="pt-2 tracking-widest font-medium">
            Enter New Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="new-email@gmail.com"
            value={userEmail}
            onChange={handleChange}
            className="outline-none bg-slate-200 rounded p-3"
            required
          />
          <input
            onClick={handleEmailUpdate}
            type="submit"
            value="Update"
            className="px-3 py-2 md:p-3 w-fit font-semibold tracking-widest bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ChangeEmail;
