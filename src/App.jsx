import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainNav from "./layout/MainNav";
import Orders from "./pages/Orders";
import FAQ from "./pages/FAQ";
import Cleaners from "./pages/Cleaners";
import History from "./pages/History";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Register from "./pages/authPages/Register";
import Login from "./pages/authPages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CartModal from "./components/modal/CartModal";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import NewNotificationDetailsPage from "./components/notification/NewNotificationDetailsPage";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import MainAdmin from "./layout/admin-layout/MainAdmin";
import AdminOrder from "./pages/admin-dashboard/AdminOrder";
import AdminProducts from "./pages/admin-dashboard/AdminProducts";
import AdminCreateProducts from "./pages/admin-dashboard/AdminCreateProducts";
import AdminProductCategory from "./pages/admin-dashboard/AdminProductCategory";
import AdminTransaction from "./pages/admin-dashboard/AdminTransaction";
import AdminReviews from "./pages/admin-dashboard/AdminReviews";
import AdminUsers from "./pages/admin-dashboard/AdminUsers";
import AdminCleaners from "./pages/admin-dashboard/AdminCleaners";
import AdminOrderDetails from "./pages/admin-dashboard/AdminOrderDetails";
import DashboardHistoryDetails from "./components/history/DashboardHistoryDetails";

export const BgContext = createContext(null);

function App() {
  const [bg, setBg] = useState("bg-slate-300");
  const [darkMode, setDarkMode] = useState(false);
  const [cartId, setCartId] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [cartModalCount, setCartModalCount] = useState(cartItem.length); //I'd use the length of the cartItem here
  const [cartExistErr, setCartExistErr] = useState(null);
  const [cartAdded, setCartAdded] = useState(false);
  const [cartTotal, setCartTotal] = useState([]);
  const [total, setTotal] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItemCount, setCartItemCount] = useState([]);
  const [notificationModalCount, setNotificationModalCount] = useState(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [notification, setNotification] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [globalUser, setGlobalUser] = useState([]);

  useEffect(() => {
    if (cartExistErr) {
      setTimeout(() => {
        setCartExistErr(false);
      }, 2000);
    }
    if (cartAdded) {
      setTimeout(() => {
        setCartAdded(false);
      }, 2000);
    }
  }, [cartAdded, cartExistErr]);

  return (
    // There'd be Cart Count and Checking Items In It All That

    <BgContext.Provider
      value={{
        globalUser,
        setGlobalUser,
        bg,
        setBg,
        cartId,
        setCartId,
        cartTotal,
        setCartTotal,
        total,
        setTotal,
        darkMode,
        setDarkMode,
        cartItem,
        setCartItem,
        cartExistErr,
        setCartExistErr,
        cartAdded,
        setCartAdded,
        cartModalCount,
        setCartModalCount,
        showCartModal,
        setShowCartModal,
        notificationModalCount,
        setNotificationModalCount,
        showNotificationModal,
        setShowNotificationModal,
        cartItemCount,
        setCartItemCount,
        notification,
        setNotification,
        quantity,
        setQuantity,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Auth */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin Dashboard*/}
          <Route
            path="admin-dashboard2521"
            element={
              <MainAdmin>
                <AdminDashboard />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/orders"
            element={
              <MainAdmin>
                <AdminOrder />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/order"
            element={
              <MainAdmin>
                <AdminOrderDetails />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/products"
            element={
              <MainAdmin>
                <AdminProducts />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/create-products"
            element={
              <MainAdmin>
                <AdminCreateProducts />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/products-category"
            element={
              <MainAdmin>
                <AdminProductCategory />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/cleaners"
            element={
              <MainAdmin>
                <AdminCleaners />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/transactions"
            element={
              <MainAdmin>
                <AdminTransaction />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/reviews"
            element={
              <MainAdmin>
                <AdminReviews />
              </MainAdmin>
            }
          />
          <Route
            path="admin-dashboard2521/users"
            element={
              <MainAdmin>
                <AdminUsers />
              </MainAdmin>
            }
          />

          {/* Users Dashboard */}
          <Route
            path="/dashboard"
            element={
              <MainNav>
                <Dashboard />
              </MainNav>
            }
          />
          <Route
            path="/dashboard/contact"
            element={
              <MainNav>
                <Contact />
              </MainNav>
            }
          />

          <Route
            path="/dashboard/store"
            element={
              <MainNav>
                <Store />
              </MainNav>
            }
          />

          <Route
            path="/dashboard/orders"
            element={
              <MainNav>
                <Orders />
              </MainNav>
            }
          />
          <Route
            path="/dashboard/faq"
            element={
              <MainNav>
                <FAQ />
              </MainNav>
            }
          />
          <Route
            path="/dashboard/cleaners"
            element={
              <MainNav>
                <Cleaners />
              </MainNav>
            }
          />
          <Route
            path="/dashboard/history"
            element={
              <MainNav>
                <History />
              </MainNav>
            }
          />
          <Route
            path="/dashboard/history/:id"
            element={<DashboardHistoryDetails />}
          />
          <Route
            path="/dashboard/notifications"
            element={
              <MainNav>
                <Notifications />
              </MainNav>
            }
          />
          <Route
            path="/dashboard/notifications/:notiId"
            element={<NewNotificationDetailsPage />}
          />
          <Route
            path="/dashboard/settings"
            element={
              <MainNav>
                <Settings />
              </MainNav>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </BgContext.Provider>
  );
}

export default App;
