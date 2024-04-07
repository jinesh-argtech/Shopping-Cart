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
      const SIGNUP_API = "https://shopping-cart-w0ki.onrender.com/api/v1/auth/signup"
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
      const LOGIN_API = "https://shopping-cart-w0ki.onrender.com/api/v1/auth/login"
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
      localStorage.removeItem("user")
      dispatch(setToken(null))
      dispatch(setUser(null))
      toast.success("Logged Out")
      navigate("/login")
    }
  }

  export function addProduct(name, price, description, imageFile,token) {
    return async (dispatch) => {
      const toastId = toast.loading("Adding product...")
      const ADD_PRODUCT_API = "https://shopping-cart-w0ki.onrender.com/api/v1/product/addProduct"
  
      try {
        // Create FormData object to send image file
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('imageFile', imageFile);
        formData.append('token', token);
  
        const response = await fetch(ADD_PRODUCT_API, {
          method: 'POST',
          body: formData,
        });
  
        const responseData = await response.json();
  
        console.log("ADD PRODUCT API RESPONSE............", responseData)
  
        if (!responseData.success) {
          throw new Error(responseData.message)
        }
        
        toast.success("Product added successfully")
        // You can add any additional logic here based on your application's requirements
  
      } catch (error) {
        console.log("ADD PRODUCT API ERROR............", error)
        toast.error("Failed to add product")
        // You can add additional error handling logic here based on your application's requirements
      }
  
      toast.dismiss(toastId)
    }
  }
  
  