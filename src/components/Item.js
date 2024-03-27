import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/CartSlice'

export const Item = (props) => {

  const {cart}=useSelector((state)=>state)
  const dispatch=useDispatch()

  function addclickHandler(){
    dispatch(add(props.item))
    toast.success("Item Added")
  }

  function removeclickHandler(){
    dispatch(remove(props.item.id))
    toast.error("Item removed")
  }

  return (
    <div className='flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline'>
      <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{props.item.title}</h1>
      <h1 className='w-40 text-gray-400 font-normal text-[10px] text-left'>{props.item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
      <div className='h-[180px]'>
        <img src={props.item.image} alt='njfsj' className='h-full  w-full'></img>
      </div>
      
      <div className='flex justify-between gap-12 items-center w-full mt-5'>

        <p className='text-green-600 font-semibold'>${props.item.price}</p>
        {
          cart.some((p) => p.id === props.item.id)?(
            <button onClick={removeclickHandler} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in'>Remove from cart</button>
          ):(
            <button onClick={addclickHandler} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in'>Add to cart</button>
          )
        }
       
        
      </div>
    </div>
  )
}
