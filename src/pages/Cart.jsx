import {  useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../components/CartItem"
import { useEffect, useState } from "react";
const Cart = () => {


  const {cart}=useSelector((state)=>state)

  const [amount,setAmount]=useState(0)

  useEffect(()=>{
    setAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])
  console.log(cart)
  return (
    <div className="">
      {
        cart.length>0?(
          <div className="max-w-[1200px] mx-auto flex row  justify-between">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map((item,index)=>{
                  return(
                    <Cartitem key={item._id} item={item} index={index}></Cartitem>
                  )
                })
              }
            </div>
              <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                <div className="flex flex-col gap-5">
                  <p className="font-semibold text-xl text-green-800">Your Cart</p>
                  <p className="font-semibold text-5xl text-green-700  -mt-5">Summary</p>
                  <p className="text-gray-700 font-semibold text-xl">Total Items:{cart.length}</p>
                </div>
                  <div flex flex-col>
                  <p className="text-xl font-bold">
                    <span className="text-gray-700 font-semibold">Total Amount:</span>
                    ${amount}
                  </p>
                  <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full">Checkout Now</button>
                
                </div>
                </div>
                
              </div>
            
          </div>
        ):(
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty</p>
            <NavLink to="/">
              <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
