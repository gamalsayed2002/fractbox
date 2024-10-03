import { Route, Routes } from "react-router-dom";
// nav
import { NavProvider } from "./context/NavContext";

// ////////////////////
import Login from "./pages/login-1/Login";
import Home from "./pages/Home/Home";
import Notifications from "./pages/notifications-3/Notifications";
import Job from "./pages/apply for a job/Job";
// nav

function App() {
  return (
  
      <NavProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </NavProvider>
 
  );
}

export default App;
