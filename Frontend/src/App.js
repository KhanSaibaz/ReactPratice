import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/Navbar';
import Users from './components/pages/Users';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/user' element={<Users/>}></Route>
      </Routes>
    </Router>
     

    </>
  );
}

export default App;
