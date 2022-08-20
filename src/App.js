
import './App.css';
import Home from './Pages/Header/Home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Header/Navbar';
import Footer from './Pages/Header/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import CourseService from './Pages/Header/Home/CourseService';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Signup></Signup>}></Route>
          <Route path='/service' element={<CourseService></CourseService>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
