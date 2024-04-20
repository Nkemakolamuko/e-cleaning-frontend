import React from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";

const ChangeAddress = ({
  handleCloseAddress,
  userAddress,
  handleUpdateAddress,
  handleChangeAddress,
}) => {
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute top-0 p-[10px] md:p-[200px] lg:p-[300px] flex-col">
      <div className="ml-auto">
        <CloseButton handleModalClose={handleCloseAddress} />
      </div>
      <div className="w-full px-2  md:px-4 py-6 rounded-md flex flex-col gap-4 bg-white">
        <form
          action="/dashboard/settings"
          method="post"
          className="flex flex-col gap-3"
        >
          <label htmlFor="address" className="pt-2 tracking-widest font-medium">
            Update Your Address
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            placeholder="New Address"
            value={userAddress}
            onChange={handleChangeAddress}
            className="outline-none bg-slate-200 rounded resize-none p-2"
            // rows={5}
            // cols={5}
            required
          ></textarea>
          <input
            onClick={handleUpdateAddress}
            type="submit"
            value="Update"
            className="px-3 py-2 md:p-3 w-fit font-semibold tracking-widest bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ChangeAddress;
