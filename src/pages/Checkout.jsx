import React, { useContext, useEffect, useState } from "react";
import { BgContext } from "../App";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { FaAngleLeft, FaPenToSquare } from "react-icons/fa6";

const Checkout = () => {
  const { cartItem, total, setTotal } = useContext(BgContext);
  const [items, setItems] = useState([]);
  const [userAddr, setUserAddr] = useState("");
  const [shipping, setShipping] = useState(850);
  const [address, setAddress] = useState("");
  const [showAddr, setShowAddr] = useState(false);
  const [updatedUser, setUpdatedUser] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserAddr(data[0].address);
    // setUser(data[0]);
    setUpdatedUser([...updatedUser, data]);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserAddr(data[0].address);
  }, [updatedUser]);

  const handleShowUpdate = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    setAddress(data[0].address);
    setShowAddr(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdatedUser([...updatedUser, (updatedUser[0][0].address = address)]);

    const updatedUserToLS = updatedUser[0];
    localStorage.setItem("user", JSON.stringify(updatedUserToLS));
    setShowAddr(false);
  };
  return (
    <div className="container mx-auto md:max-w-[800px] h-full flex justify-center flex-col px-2 mb-8 shadow-2xl rounded shadow-black/10 pb-2">
      <div className="flex items-center justify-between py-2">
        <div className="">
          <Title title="Checkout Page" />
        </div>
        <Link
          to="/dashboard/store"
          className="underline underline-offset-1 pt-2 pb-4 hover:bg-green-100 bg-green-50 active:bg-green-100 flex items-center gap-2 px-2 text-slate-500 rounded transition-all duration-300"
        >
          <span>
            <FaAngleLeft />
          </span>
          <span>Back to store</span>
        </Link>
      </div>

      {cartItem.map((product) => {
        return (
          <div
            key={product.id}
            className="flex items-center justify-between py-3 md:py-6 border-b gap-2"
          >
            <p className="w-[20%] h-[20%] rounded">
              <img src={product.img} alt="Product Image" />
            </p>
            <p className="flex flex-col w-[50%]">
              <span className="text-base text-nowrap">{product.title}</span>
              <span className="text-lg font-semibold">{product.quantity}</span>
            </p>
            <span className="!tracking-widest font-medium w-[20%]">
              {/* ₦ */}
              {/* {Number(product.newPrice.split("₦")[1].split(",").join("")) *
                product.quantity} */}
              {product.newPrice}
            </span>
          </div>
        );
      })}

      <p className="mt-6 font-medium">Shipping Address :</p>
      {!showAddr && (
        <div
          className="py-2 flex items-center gap-2 justify-between bg-slate-50 hover:bg-slate-100 active:bg-slate-100 px-2 cursor-pointer transition-all duration-300"
          onClick={handleShowUpdate}
        >
          <p>{userAddr || "Click to enter Delivery Address."}</p>
          <FaPenToSquare className="w-6 h-6" />
        </div>
      )}
      {showAddr && (
        <form className="flex flex-col gap-2 mb-2" onSubmit={handleUpdate}>
          <input
            type="text"
            className="py-3 px-2 rounded outline-none border-2 w-full"
            value={address}
            placeholder="New address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="button"
            value="Update"
            className="py-3 rounded bg-yellow-500 text-white font-medium w-full md:w-1/3 cursor-pointer"
            onClick={handleUpdate}
          />
        </form>
      )}
      <p>Shipping fee : ₦ {shipping}</p>

      {cartItem.length !== 0 ? (
        <Link to="/payment" className="my-2">
          <button className="w-full py-4 rounded bg-black font-medium text-white cursor-pointer">
            Proceed to pay ₦ {total + shipping}
          </button>
        </Link>
      ) : (
        <button className="w-full py-4 rounded bg-black/10 font-medium text-neutral-700 cursor-not-allowed my-2">
          Can't proceed on an empty cart!!
        </button>
      )}
    </div>
  );
};

export default Checkout;
