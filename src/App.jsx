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
import Details from "./pages/all orders/order details/Details";
import Codes from "./pages/Postal codes/Codes";
import AddPostal from "./pages/Postal codes/add postal code/AddPostal";
import Companys from "./pages/finance/Companys";
import Company_History from "./pages/finance/company history/Company_History";
import Add_company from "./pages/finance/add_company/Add_company";
import Regions from "./pages/regions/Regions";
import DriverList from "./pages/regions/driverList/DriverList";
import AddRegion from "./pages/regions/add region/AddRegion";
import EditRegion from "./pages/regions/edit/EditRegion";
import Tracking from "./pages/tracking/Tracking";
import AddDriver from "./pages/regions/driverList/add driver/AddDriver";
import Stores from "./pages/stores/Stores";
// nav

function App() {
  return (
    <NavProvider>
      <Routes>
        <Route path="/stores" element={<Stores />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/job" element={<Job />} />
        /* ===================== employees ================== */
        <Route path="/employees" element={<Employees />} />
        <Route path="/history/:id" element={<History />} />
        <Route path="/inf/:id" element={<Inf />} />
        <Route path="/add" element={<Add />} />
        /* ===================== employees ================== */ /*
        ===================== oreders ================== */
        <Route path="/all_orders" element={<AllOrders />} />
        <Route path="/orders/:key" element={<Orders />} />
        <Route path="/order_details/:id" element={<Details />} />
        /* ===================== orders ================== */ /*
        ===================== postalcodes ================== */
        <Route path="/postal_codes" element={<Codes />} />
        <Route path="/add_postal_code" element={<AddPostal />} />
        /* ===================== postal codes ================== */
        ===================== finance ================== */
        <Route path="/finance" element={<Companys />} />
        <Route path="/company_history/:id" element={<Company_History />} />
        <Route path="/add_company" element={<Add_company />} />
        /* ===================== finance ================== */ /*
        ===================== regions ================== */
        <Route path="/regions" element={<Regions />} />
        <Route path="/edit_region/:id" element={<EditRegion />} />
        <Route path="/driver_list/:id" element={<DriverList />} />
        <Route path="/add_region" element={<AddRegion />} />
        <Route path="/Add_Driver" element={<AddDriver />} />
        /* ===================== finance ================== */
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
