
import './App.css';
import Home from './Pages/Header/Home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Header/Navbar';
import Footer from './Pages/Header/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import CourseService from './Pages/Header/Home/CourseService';
import NotFound from './Pages/Header/Home/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={
            <Home></Home>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Signup></Signup>}></Route>
          <Route path='/service' element={<RequireAuth>
            <CourseService></CourseService>
          </RequireAuth>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
