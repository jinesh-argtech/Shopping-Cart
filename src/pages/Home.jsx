import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../components/Spinner";
import { Item } from "../components/Item";

const Home = () => {
  // console.log("1")
  const API_URL = "https://fakestoreapi.com/products";
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(false)

  async function fetchdata(){
    try {
      setLoading(true)
      const res=await fetch(API_URL);
      const data=await res.json();
      setItems(data)
      setLoading(false)
    } catch (error) {
      toast.error("404 error not found")
    }
  }

  // console.log(items)

  useEffect(()=>{
    // console.log("1")
    fetchdata()
  },[])

  // console.log(item.id)

  return (
    <div>
      {
        loading? <Spinner></Spinner>: 
        items.length>0?(
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {items.map((item)=>{
              return(

                <Item key={item.id} item={item} items={items}></Item>
                
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
