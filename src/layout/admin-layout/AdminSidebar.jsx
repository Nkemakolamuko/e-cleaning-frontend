import React, { useContext, useState } from "react";
import { SideBarContext } from "./MainAdmin";
import AdminSideBarLink from "../../components/admin-components/AdminSideBarLink";
import {
  FaHome,
  FaShoppingBag,
  FaShoppingBasket,
  FaTimes,
} from "react-icons/fa";
import {
  FaBagShopping,
  FaCartPlus,
  FaListCheck,
  FaListUl,
  FaNairaSign,
  FaUsers,
} from "react-icons/fa6";

const AdminSidebar = () => {
  const { sidebar, setSidebar } = useContext(SideBarContext);
  const [iconColor, setIconColor] = useState("Dashboard");
  const [bgColor, setBgColor] = useState("Dashboard");
  return (
    <>
      {sidebar && (
        <div className="z-50 flex flex-col w-full h-screen gap-2 mt-1 shadow">
          <div className="flex items-center gap-2 px-2 py-4 justify-between w-full">
            <p className="truncate font-medium">Admin Dashboard</p>
            <FaTimes
              className="cursor-pointer w-6 h-6 text-rose-500"
              onClick={() => setSidebar(false)}
            />
          </div>
          <div className="flex flex-col">
            <AdminSideBarLink
              to="/admin-dashboard2521"
              title="Dashboard"
              icon={<FaHome />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Dashboard");
                setBgColor("Dashboard");
              }}
              iconColor={iconColor == "Dashboard" ? iconColor : ""}
              bg={bgColor == "Dashboard" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/orders"
              title="Orders"
              icon={<FaShoppingBasket />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Orders");
                setBgColor("Orders");
              }}
              iconColor={iconColor == "Orders" ? iconColor : ""}
              bg={bgColor == "Orders" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/products"
              title="Products"
              icon={<FaShoppingBag />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Products");
                setBgColor("Products");
              }}
              iconColor={iconColor == "Products" ? iconColor : ""}
              bg={bgColor == "Products" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/create-products"
              title="Create Product"
              icon={<FaCartPlus />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Add-Product");
                setBgColor("Add-Product");
              }}
              iconColor={iconColor == "Add-Product" ? iconColor : ""}
              bg={bgColor == "Add-Product" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/products-category"
              title="Product Category"
              icon={<FaListUl />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Product-Category");
                setBgColor("Product-Category");
              }}
              iconColor={iconColor == "Product-Category" ? iconColor : ""}
              bg={bgColor == "Product-Category" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/transactions"
              title="Transactions"
              icon={<FaNairaSign />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Transactions");
                setBgColor("Transactions");
              }}
              iconColor={iconColor == "Transactions" ? iconColor : ""}
              bg={bgColor == "Transactions" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/reviews"
              title="Reviews"
              icon={<FaListCheck />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Reviews");
                setBgColor("Reviews");
              }}
              iconColor={iconColor == "Reviews" ? iconColor : ""}
              bg={bgColor == "Reviews" ? bgColor : ""}
            />
            <AdminSideBarLink
              to="/admin-dashboard2521/users"
              title="Users"
              icon={<FaUsers />}
              handleClick={() => {
                setSidebar(false);
                setIconColor("Users");
                setBgColor("Users");
              }}
              iconColor={iconColor == "Users" ? iconColor : ""}
              bg={bgColor == "Users" ? bgColor : ""}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
