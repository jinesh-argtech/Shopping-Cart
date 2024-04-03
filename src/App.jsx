import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import LoginForm from "./pages/Login";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/login" element={<LoginForm></LoginForm>}/>
      </Routes>
    </div>
  );
};

export default App;
