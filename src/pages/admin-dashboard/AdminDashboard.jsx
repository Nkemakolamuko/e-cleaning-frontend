import React from "react";
import AdminDashboardActionCard from "../../components/admin-components/AdminDashboardActionCard";
import Title from "../../components/Title";
import {
  FaCartShopping,
  FaNairaSign,
  FaShop,
  FaUsers,
  FaUsersBetweenLines,
  FaUsersGear,
} from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import LatestOrders from "../../components/admin-components/LatestOrders";

const AdminDashboard = () => {
  return (
    <>
      <Title title="Dashboard" />
      <div className="flex flex-col">
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <AdminDashboardActionCard
            icon={
              <p className="rounded-full bg-green-100 p-4">
                <FaNairaSign className="text-green-500" />
              </p>
            }
            title={"Total Revenue"}
            desc={"₦128, 435, 650"}
          />
          <AdminDashboardActionCard
            icon={
              <p className="rounded-full bg-purple-100 p-4">
                <FaCartShopping className="text-purple-500" />
              </p>
            }
            title={"Total Orders"}
            desc={"1, 554"}
          />
          <AdminDashboardActionCard
            icon={
              <p className="rounded-full bg-orange-100 p-4">
                <FaShop className="text-orange-500" />
              </p>
            }
            title={"Total Products In Stock"}
            desc={"248"}
          />
          <AdminDashboardActionCard
            icon={
              <p className="rounded-full bg-rose-50 p-4">
                <FaExclamationCircle className="text-rose-500" />
              </p>
            }
            title={"Total Products Out Of Stock"}
            desc={"4"}
          />
          <AdminDashboardActionCard
            icon={
              <p className="rounded-full bg-blue-50 p-4">
                <FaUsers className="text-blue-500" />
              </p>
            }
            title={"Total No. Of Cleaners"}
            desc={"1,085"}
          />
        </div>

        {/* Orders */}
        <div className="flex flex-col gap-2 border rounded mt-4 md:mt-6">
          <h2 className="font-medium p-4 border-b">Latest Orders</h2>
          <div className="flex flex-col overflow-auto text-nowrap px-4">
            <LatestOrders
              name={"Jeremy Doku"}
              userEmail={"jdemail@gmail.com"}
              amountPaid={"45, 500"}
              paymentDate={
                <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                  Paid at 12/05/2024 by 17:54
                </span>
              }
            />
            <LatestOrders
              name={"Uthman Dembele"}
              userEmail={"uthdemail@gmail.com"}
              amountPaid={"104,600"}
              paymentDate={
                <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                  Paid at 12/05/2024 by 07:54
                </span>
              }
            />
            <LatestOrders
              name={"Leonel Messi"}
              userEmail={"leoemail@gmail.com"}
              amountPaid={"85, 750"}
              paymentDate={
                <span className="text-xs text-rose-700 bg-rose-100 py-1 px-2 rounded-full">
                  Created Order - Payment Pending
                </span>
              }
            />
          </div>
        </div>

        {/* Sale Statistics */}
        <div className="border flex flex-col gap-2 rounded w-full h-[300px] mt-4 md:mt-6">
          <h2 className="font-medium px-4 py-4 border-b">Sale Statistics</h2>
          <div className="mt-2"></div>
        </div>

        {/* Cleaners Statistics */}
        <div className="border flex flex-col gap-2 rounded w-full h-[300px] mt-4 md:mt-6">
          <h2 className="font-medium px-4 py-4 border-b">
            Cleaners Statistics
          </h2>
          <div className="mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
