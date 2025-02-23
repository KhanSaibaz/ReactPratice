import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Users from "./components/pages/Users";
import Login from "./components/pages/Login";
import About from "./components/pages/About"

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
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
