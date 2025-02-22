import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/Navbar';
import Users from './components/pages/Users';
import Login from './components/pages/Login'


function App() {
  return (
    <>
    <Router>
    {/* <Navbar/> */}
      <Routes>
        
      <Route path='/' element={<Login />} />
      <Route path='/user' element={<Users />} />
      </Routes>
    </Router>
     

    </>
  );
}

export default App;
