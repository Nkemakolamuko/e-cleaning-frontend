import React from "react";
import AdminDashboardActionCard from "../../components/admin-components/AdminDashboardActionCard";
import Title from "../../components/Title";
import { FaCartShopping, FaNairaSign, FaShop } from "react-icons/fa6";
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
            title={"Total Sales"}
            desc={"₦12, 435, 650"}
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
              <p className="rounded-full bg-slate-100 p-4">
                <FaShop className="text-slate-500" />
              </p>
            }
            title={"Total Products In Stock"}
            desc={"74"}
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
        </div>

        {/* Orders */}
        <div className="flex flex-col gap-2 border rounded p-4 mt-4">
          <h2 className="font-medium">Latest Orders</h2>
          <div className="flex flex-col overflow-auto text-nowrap">
            <LatestOrders
              userEmail={"user1email@gmail.com"}
              amountPaid={"45, 500"}
              paymentDate={
                <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                  Paid at 12/05/2024 by 17:54
                </span>
              }
            />
            <LatestOrders
              userEmail={"user2email@gmail.com"}
              amountPaid={"104,600"}
              paymentDate={
                <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                  Paid at 12/05/2024 by 07:54
                </span>
              }
            />
            <LatestOrders
              userEmail={"user3email@gmail.com"}
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
        <div className="border flex flex-col gap-2 rounded p-4 w-full h-[300px] mt-4">
          <h2 className="font-medium">Sale Stats</h2>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
