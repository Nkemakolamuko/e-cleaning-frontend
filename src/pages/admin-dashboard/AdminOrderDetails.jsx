import React from "react";
import productImage from "../../assets/download.jpg";
import {
  FaArrowLeft,
  FaCalendar,
  FaLocationDot,
  FaPrint,
  FaReceipt,
  FaTruck,
  FaTruckFast,
  FaUser,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AdminOrderDetailsInfo from "../../components/admin-components/AdminOrderDetailsInfo";
import { FaCalendarAlt } from "react-icons/fa";

const AdminOrderDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p
        className="text-slate-800 py-2 px-4 mt-2 rounded-full border flex items-center gap-2 cursor-pointer w-fit text-sm md:text-base"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <span>Go Back</span>
      </p>

      <div className="border rounded flex flex-col w-full mt-4">
        <div className="flex flex-col text-sm bg-green-500 p-4 text-white gap-2 container mx-auto w-full rounded-t">
          <p className="flex items-center gap-2 md:w-1/2 md:container md:mx-auto">
            <FaCalendarAlt className="text-slate-800" />
            <span className="font-semibold text-base">May 12, 2024</span>
          </p>
          <p className="md:w-1/2 md:container md:mx-auto">
            Order ID: 253427skjsksjc89ss8jks90
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/2 md:container md:mx-auto">
            <select
              name="order-status"
              className="outline-none border rounded p-2 text-slate-800 w-full font-medium"
              id="order-status"
            >
              <option value="Status">Change Payment Status</option>
              <option value="Status">Awaiting Payment</option>
              <option value="Status">Confirmed</option>
              <option value="Status">Shipped</option>
              <option value="Status">Delivered</option>
            </select>
            <p className="p-3 bg-green-800 text-white rounded">
              <FaPrint />
            </p>
          </p>
        </div>

        <div className="flex flex-col gap-5 p-4 text-sm">
          <AdminOrderDetailsInfo
            icon={<FaUser className="w-6 h-6" />}
            title={"Customer"}
            infoOne={"Angelique Godwin"}
            infoTwo={"angegod@gmail.com"}
          />

          <AdminOrderDetailsInfo
            icon={<FaTruckFast className="w-6 h-6" />}
            title={"Order Info"}
            infoOne={"Shipping To: Anambra"}
            infoTwo={"Payment Method: Bank Transfer"}
          />

          <AdminOrderDetailsInfo
            icon={<FaLocationDot className="w-6 h-6" />}
            title={"Deliver To"}
            infoOne={"Address: No 12 Umunkana Street, off Otigbo Junction"}
            infoTwo={""}
          />
        </div>

        <div className="p-4 w-full overflow-auto scroll">
          <table className="table-auto border border-collapse mt-2 p-4 w-full text-sm rounded overflow-auto text-nowrap">
            <thead className="border-b bg-slate-200 text-slate-600">
              <tr className="text-left rounded-t">
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Unit Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>

            <tbody className="text-slate-700 text-sm">
              <tr className="">
                <td className="flex items-center gap-2 py-3 pr-[3rem]">
                  <img
                    src={productImage}
                    alt="Product Image"
                    className="w-[50px] h-[50px]"
                  />
                  <span>Black Clark Sneakers</span>
                </td>
                <td className="px-4 py-3">₦32, 550</td>
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">₦65, 100</td>
              </tr>
              <tr>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="">
                  <ul className="px-4 py-3">
                    <li className="py-2">Subtotal:</li>
                    <li className="py-2">Shipping fee:</li>
                    <li className="py-2">Grand total:</li>
                    <li className="py-2">Payment status:</li>
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <ul>
                    <li className="py-2">₦65, 100</li>
                    <li className="py-2">₦850</li>
                    <li className="py-2">₦65, 950</li>
                    <li className="py-2 text-green-600 bg-green-50">
                      Payment done
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4">
          <div className="border rounded p-4 w-full">
            <p className="w-full text-center bg-neutral-900 text-white rounded py-3 cursor-pointer">
              MARK AS DELIVERED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
