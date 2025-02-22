import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Users from "./components/pages/Users";
import Login from "./components/pages/Login";

function App() {
  const location = useLocation();
  const flag = location.state?.flag || false; // Default to false if undefined
  console.log(flag);

  return (
    <>
      {flag && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
