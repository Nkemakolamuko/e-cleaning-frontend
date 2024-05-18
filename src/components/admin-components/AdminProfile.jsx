import React, { useState } from "react";
import img from "../../assets/userImage.jpg";
import Title from "../Title";

const AdminProfile = () => {
  const [file, setFile] = useState(() => {
    const storedImage = localStorage.getItem("userImage");
    return storedImage ? storedImage : img;
  });
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setFile(imageUrl);
    // Store the selected image URL in local storage
    localStorage.setItem("userImage", imageUrl);
  };
  return (
    <div className="w-full h-full container mx-auto flex justify-center flex-col items-center">
      <div className="w-full mr-auto">
        <Title title={"Admin Profile"} />
      </div>
      <div className="flex flex-col md:justify-center items-center w-full md:w-1/2 gap-3 py-4 h-full">
        <img
          src={file}
          alt="Admin Image"
          className="rounded-full w-[150px] h-[150px] border-4 border-blue-700 md:w-[250px] md:h-[250px]"
        />

        <label
          htmlFor="image"
          className="cursor-pointer px-2 border-2 rounded text-sm"
        >
          Click to change image
          <input
            type="file"
            name="userImage"
            id="image"
            className="hidden"
            onChange={handleChange}
          />
        </label>
        <div className="flex flex-col items-center border-y w-full text-center">
          <p className="border-b w-full p-2 font-semibold hover:bg-slate-100 transition-all duration-300 cursor-default">
            Admin Name
          </p>
          <p className="border-b w-full p-2 font-semibold hover:bg-slate-100 transition-all duration-300 cursor-default">
            Admin Phone Number
          </p>
          <p className="w-full p-2 font-semibold hover:bg-slate-100 transition-all duration-300 cursor-default">
            Admin Email
          </p>
        </div>
      </div>
      {/* The account will be a link to the admin id and display the admin details */}
      {/* <p>Profile will show the admin details -- while the Account Setting wil be for performing CRUD actions like - edit name,delete account, add another admin (which will make a post request to the register endpoint and then become admin as well)</p> */}
    </div>
  );
};

export default AdminProfile;
