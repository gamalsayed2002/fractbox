

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login-1/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
