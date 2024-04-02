import { toast } from "react-hot-toast"
import { apiConnector } from "./apiconnecter"
import { setToken } from "../redux/Slices/authSlice"
import { setUser } from "../redux/Slices/userSlice"

export function signUp(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      const SIGNUP_API = "http://localhost:4000/api/v1/auth/signup"
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          accountType,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      toast.dismiss(toastId)
    }
  }
  
  export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      const LOGIN_API = "http://localhost:4000/api/v1/auth/login"
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        dispatch(setUser({ ...response.data.user }))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      toast.dismiss(toastId)
    }
  }
  
  export function logout(navigate) {
    return (dispatch) => {
      localStorage.removeItem("token");
      dispatch(setToken(null))
      toast.success("Logged Out")
      navigate("/login")
    }
  }
  