import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../components/Spinner";
import { Item } from "../components/Item";
import { apiConnector } from "../services/apiconnecter";

const Home = () => {
  // console.log("1")
  const API_URL = "http://localhost:4000/api/v1/product/getProducts";
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(false)

  async function fetchdata(){
    try {
      setLoading(true)
      console.log(1)
      const res=await apiConnector("GET",API_URL);
      console.log(res)
      const data= res
      console.log(data)
      setItems(data)
      setLoading(false)
    } catch (error) {
      toast.error("404 error not found")
    }
  }

  useEffect(()=>{
    // console.log("1")
    fetchdata()
  },[])

  // console.log(item.id)

  return (
    <div>
      {
        loading? <Spinner></Spinner>: 
        items?.data?.products.length>0?(
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {items?.data?.products.map((item,key)=>{
              return(

                <Item key={key} item={item} items={items?.data?.products}></Item>
                
              )      
            })
            }
          </div>
        ):
          <div className="flex justify-center items-center">
            Items Not found
          </div>
        
      }
    </div>
  );
};

export default Home;
