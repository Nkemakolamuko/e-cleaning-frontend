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
import AdminDashboard from "./pages/AdminDashboard";

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
          <Route path="admin-dashboard2521" element={<AdminDashboard />} />
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
