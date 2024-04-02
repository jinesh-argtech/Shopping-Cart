import { Link, NavLink, useNavigate } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/authApi";

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth)
  // console.log(token)
  function clickHandler(){
    dispatch(logout(navigate))
  }
  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/" className="ml-5">
        <img src="../logo.png" alt="ojwdi" className=" h-14"></img>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/cart" className="relative">
          <FaShoppingCart className="text-2xl"></FaShoppingCart>
          {
            cart.length>0&&
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
          }
        </NavLink>
        {
          token===null &&(
              <Link className='' to="/login">
                  <button className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                      Log in
                  </button>

              </Link>
          )
        }

        {
          token===null &&(
              <Link className='' to="/signup">
                  <button className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                      Sign up
                  </button>
              </Link>
          )
        }

        {
          token!==null &&(
              
              <button  onClick={clickHandler} className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                  Logout
              </button>
              
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
