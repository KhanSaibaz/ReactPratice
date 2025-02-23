import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Users from "./components/pages/Users";
import Login from "./components/pages/Login";
import Counter from "./components/redux/slices/Counter";

function App() {
  const location = useLocation();
  const flag = location.state?.flag || false; // Default to false if undefined
  console.log(flag);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Users />} />
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes>
    </>
  );
}

export default App;
