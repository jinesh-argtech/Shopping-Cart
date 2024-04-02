import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from 'react-hot-toast';  
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../redux/Slices/authSlice';

export const Signup = () => {

  let navigate=useNavigate();
  const dispatch=useDispatch();

  const [values,setValues]=useState({
    firstName:"",lastName:"",email:"",password:"",confirmPassword:""
  })

  const [showPassword1,setShowPassword1]=useState(false)
  const [showPassword2,setShowPassword2]=useState(false)
  const [accountType, setAccountType] = useState("Customer");

  function changeHandler(event){
    setValues(
      (props)=>{
        return({
          ...props,[event.target.name]:event.target.value
        })
      }
    )
  }

  // const signupData = {
  //   ...values,
  //   accountType,
  // }


  function submitHandler(event){
    event.preventDefault();

    if(values.password!==values.confirmPassword){
        toast.error("Both password doesn't match")
    }
    else{
      const signupData = {
        ...values,
        accountType,
      }

      console.log(signupData)
        dispatch(setSignupData(signupData))

        setValues({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
        setAccountType("Customer")
    }

    
  }

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between mt-[60px]'>
      <div className='w-11/12 max-w-[450px] mx-0 text-white'>
            <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                Join the millions learning to code with StudyNotion for free
            </h1>
            <p className=' text-[1.125rem] mt-4 leading-[1.625rem] text-richblack-100'>
                Build skills for today, tomorrow, and beyond.
            </p>
            <p className=' text-[1.125rem] leading-[1.625rem] text-blue-100 italic font-edu-sa'>
                Education to future-proof your career.
            </p>

            <div className='pt-4'>
              <div className='flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max'>
                <button
                  onClick={() => setAccountType("Customer")}
                  className={`${
                    accountType === "Student"
                      ? "bg-richblack-900 text-richblack-5"
                      : "bg-transparent text-richblack-200 "
                  } py-2 px-5 rounded-full transition-all`}
                >
                  Student
                </button>
                <button
                    onClick={() => setAccountType("Instructor")}
                    className={`${
                      accountType === "Instructor"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200 "
                    } py-2 px-5 rounded-full transition-all`}
                  >
                    Instructor
                </button>
              </div>

              <form className='flex flex-col gap-4 pt-5' onSubmit={submitHandler}>
                <div className='flex gap-x-4'>
                  <label className='"w-full' >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Firstname
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input type='text' required placeholder='Firstname' value={values.firstName} onChange={changeHandler} name='firstName' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                  </label>
                  <label className='"w-full' >
                      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                          Lastname
                          <sup className='text-pink-200'>*</sup>
                      </p>
                      <input type='text' required placeholder='Lastname' value={values.lastName} onChange={changeHandler} name='lastName' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                  </label>
                </div>

                <label className='"w-full'>
                      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                          Email Address
                          <sup className='text-pink-200'>*</sup>
                      </p>
                      <input type='email' required placeholder='Enter your Email' value={values.email} onChange={changeHandler} name='email' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                </label>

                <div className='flex gap-x-4 '>
                  <label className='"w-full relative' >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input type={showPassword1?"text":"password"} required placeholder='Enter Password' value={values.password} onChange={changeHandler} name='password' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                        <span className='absolute right-3 top-[38px] cursor-pointer z-10' onClick={()=>{
                          setShowPassword1(!showPassword1)
                        }}>{showPassword1?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>:<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>}</span>
                  </label>
                  <label className='"w-full relative' >
                      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                          Confirm Password
                          <sup className='text-pink-200'>*</sup>
                      </p>
                      <input type={showPassword2?"text":"password"} required placeholder='Confirm Password' value={values.confirmPassword} onChange={changeHandler} name='confirmPassword' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                      <span className='absolute right-3 top-[38px] cursor-pointer z-10' onClick={()=>{
                          setShowPassword2(!showPassword2)
                          }}>{showPassword2?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>:<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>}</span>
                  </label>
                </div>

                <div>
                  <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full'>Create Account</button>
                </div>

                
              </form>

            </div>

              <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'>

                </div>
                <span className='text-richblack-700 font-medium leading-[1.375rem]'>OR</span>
                <div className='h-[1px] w-full bg-richblack-700'></div>
              </div>


              <div>
                  <button className='w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6'>
                  <FcGoogle></FcGoogle>
                  Sign in with Google</button>
              </div>

      </div>
      <div className='relative w-11/12 max-w-[450px]'>
        
      </div>
    </div>
  )
}
