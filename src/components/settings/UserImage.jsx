import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const UserImage = ({ user }) => {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [file, setFile] = useState();
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserData(data);
  }, []);

  const handleSubmit = () => {
    alert("Name changed!");
    setShowInput(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center group w-fit transition-all duration-300 ease-in-out">
        <p className="max-w-[150rem] max-h-[150rem] relative rounded-full border-4 border-green-300 group-hover:border-green-500 overflow-hidden">
          <img
            src={file || user}
            alt="User Image"
            width="150rem"
            height="150rem"
            className="rounded-full max-w-[200px] max-h-[150px]"
          />
        </p>
        <p className="absolute top-32 rounded-full bg-slate-200/35 p-1 hover:p-2 group-hover:bg-slate-200/75 cursor-pointer opacity-30 group-hover:opacity-100 transition-all duration-300">
          <label htmlFor="image">
            <input
              type="file"
              name="userImage"
              id="image"
              className="hidden"
              onChange={handleChange}
            />
            <FaCamera className="cursor-pointer w-7 h-7 text-neutral-800 group-hover:text-neutral-900 active:scale-75 transition-all duration-300" />
          </label>
        </p>
        {!showInput && (
          <div
            className="flex items-center gap-2 md:gap-4 group hover:bg-slate-300 p-2 rounded cursor-pointer transition-all duration-300"
            onClick={() => {
              setShowInput(true);
            }}
          >
            <p className="text-base text-center md:text-lg tracking-widest">
              {userData?.name?.toUpperCase() || "Username"}
            </p>
            <FaPencil className="opacity-100 md:opacity-0 md:group-hover:opacity-100 w-6 h-6 md:w-8 md:h-8" />
          </div>
        )}
        {showInput && (
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              name="usernameChange"
              id="usernameChange"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="tracking-widest max-w-[180px] md:max-w-full px-4 py-[10px] rounded-l bg-white border-y-2 border-l-2 border-r-0 border-y-slate-400 border-l-slate-400 outline-none"
            />

            {username.trim().length !== 0 ? (
              <input
                type="submit"
                value="Update"
                className="bg-yellow-400 hover:bg-yellow-500 text-white py-[10px] px-2 rounded-r border-2 border-yellow-400 hover:border-yellow-500 cursor-pointer transition-all duration-300"
                onClick={handleSubmit}
              />
            ) : (
              <input
                type="submit"
                value="Cancel"
                className="bg-rose-400 hover:bg-rose-500 text-white py-[10px] px-2 rounded-r border-2 border-rose-400 hover:border-rose-500 cursor-pointer transition-all duration-300"
                onClick={() => {
                  setShowInput(false);
                }}
              />
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default UserImage;
