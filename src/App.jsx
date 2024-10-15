import { Route, Routes } from "react-router-dom";
// nav
import { NavProvider } from "./context/NavContext";

// ////////////////////
import Login from "./pages/login-1/Login";
import Home from "./pages/Home/Home";
import Notifications from "./pages/notifications-3/Notifications";
import Job from "./pages/apply for a job/Job";
import Employees from "./pages/Employees/Employees";
import Inf from "./pages/Employees/information/Inf";
import History from "./pages/Employees/work hostory/History";
import Add from "./pages/Employees/addEmploye/Add";
import AllOrders from "./pages/all orders/AllOrders";
import Orders from "./pages/all orders/orders/Orders";
// nav

function App() {
  return (
    <NavProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/job" element={<Job />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/history" element={<History />} />
        <Route path="/inf" element={<Inf />} />
        <Route path="/add" element={<Add />} />
        <Route path="/all_orders" element={<AllOrders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order_details" element={<Orders />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
