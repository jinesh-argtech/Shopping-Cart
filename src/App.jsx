import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import LoginForm from "./pages/Login";
import SignUp from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<PrivateRoute/>}>
          <Route path='' element={<Home/>}/>
        </Route>
        <Route path="/cart" element={<PrivateRoute/>}>
          <Route exact path='/cart' element={<Cart/>}/>
        </Route>
        <Route path="/signup" element={<PrivateRoute/>}>
          <Route exact path='/signup' element={<SignUp/>}/>
        </Route>
        <Route path="/login" element={<PrivateRoute/>}>
          <Route exact path='/login' element={<LoginForm/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
