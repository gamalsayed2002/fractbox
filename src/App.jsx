import { Route, Routes } from "react-router-dom";
// nav
import { NavProvider } from "./context/NavContext";

// ////////////////////
import Login from "./pages/login-1/Login";
import Home from "./pages/Home/Home";
// nav

function App() {
  return (
    <>
      <NavProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </NavProvider>
    </>
  );
}

export default App;
