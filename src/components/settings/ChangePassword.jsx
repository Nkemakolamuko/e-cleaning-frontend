import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";

const ChangePassword = ({ handleClosePassword }) => {
  const [oldPassword, setOldPwd] = useState("");
  const [newPassword, setNewPwd] = useState("");

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const [showPasswords, setShowPasswords] = useState(false);
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute top-0 p-[10px] md:p-[200px] flex-col">
      <div className="w-full rounded-md flex flex-col gap-4 bg-white">
        <div className="flex items-center px-2 md:px-4 py-2 md:py-4 border-b">
          <h2 className="tracking-widest font-medium">Change password</h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleClosePassword} />
          </div>
        </div>
        <p
          onClick={toggleShowPasswords}
          className="bg-neutral-800 text-white p-2  hover:bg-neutral-900 cursor-default text-center transition-all duration-300"
        >
          {showPasswords ? "Hide Passwords 🙈" : "Show Passwords 🙊"}
        </p>
        <form
          action="/dashboard/settings"
          method="post"
          className="flex flex-col gap-3 px-2 md:px-4 py-3 md:py-6"
        >
          <p className="flex flex-col">
            <label
              htmlFor="oldPassword"
              className="py-2 tracking-widest font-medium"
            >
              Enter Old Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              id="oldPassword"
              name="password"
              value={oldPassword}
              placeholder="Old password"
              className="border-slate-300 border-2 outline-none text-slate-700 rounded p-3"
              onChange={(e) => setOldPwd(e.target.value)}
              required
            />
          </p>

          <p className="flex flex-col">
            <label
              htmlFor="newPassword"
              className="py-2 tracking-widest font-medium"
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
              className="border-slate-300 border-2 outline-none text-slate-700 rounded p-3"
              required
            />
          </p>
          <input
            type="submit"
            value="Reset"
            className="py-3 px-6 w-fit font-semibold tracking-widest bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
