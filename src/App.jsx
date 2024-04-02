import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import { Signup } from "./pages/Signup";
import LoginForm from "./pages/Login";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/login" element={<LoginForm></LoginForm>}/>
      </Routes>
    </div>
  );
};

export default App;
