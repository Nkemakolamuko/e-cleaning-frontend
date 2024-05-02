import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import { BgContext } from "../../App";

const ChangePassword = ({ handleClosePassword }) => {
  const { darkMode } = useContext(BgContext);
  const [oldPassword, setOldPwd] = useState("");
  const [newPassword, setNewPwd] = useState("");

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const [showPasswords, setShowPasswords] = useState(false);
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute top-0 p-[10px] md:p-[200px] flex-col">
      <div
        className={`w-full rounded-md flex flex-col gap-2 bg-white text-center ${
          darkMode ? "dark-mode border-2" : ""
        }`}
      >
        <div
          className={`flex items-center mb-2 border-b px-4 pt-2 pb-0 ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <h2 className="!tracking-widest font-medium">Change password</h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleClosePassword} />
          </div>
        </div>
        <p
          onClick={toggleShowPasswords}
          className={`bg-neutral-800 text-white p-3  hover:bg-neutral-900 cursor-pointer text-center transition-all duration-300 ${
            darkMode ? "!bg-cyan-400 !text-neutral-900 hover:!bg-cyan-500" : ""
          }`}
        >
          {showPasswords ? "Hide Passwords 🙈" : "Show Passwords 🙊"}
        </p>
        <form
          action="/dashboard/settings"
          method="post"
          className="flex flex-col gap-3 px-2 md:px-4 py-3 md:py-6 it"
        >
          <p className="flex flex-col">
            <label
              htmlFor="oldPassword"
              className="py-2 !tracking-widest font-medium text-start"
            >
              Enter Old Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              id="oldPassword"
              name="password"
              value={oldPassword}
              placeholder="Old password"
              className="border-slate-300 border-2 outline-none rounded p-3 !text-black"
              onChange={(e) => setOldPwd(e.target.value)}
              required
            />
          </p>

          <p className="flex flex-col">
            <label
              htmlFor="newPassword"
              className="py-2 !tracking-widest font-medium text-start"
            >
              Enter New Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              id="newPassword"
              placeholder="New password"
              name="password"
              value={newPassword}
              onChange={(e) => setNewPwd(e.target.value)}
              className="border-slate-300 border-2 outline-none rounded p-3 !text-black"
              required
            />
          </p>
          <input
            type="submit"
            value="Reset"
            className="py-3 px-6 w-fit font-semibold !tracking-widest bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
