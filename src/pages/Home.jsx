import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../components/Spinner";
import { Item } from "../components/Item";
import { apiConnector } from "../services/apiconnecter";
import { useSelector } from "react-redux";

const Home = () => {
  // console.log("1")
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const { token } = useSelector((state) => state.auth)
  console.log(token)
  const API_URL = "http://localhost:4000/api/v1/product/searchProducts";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await apiConnector("POST", API_URL, { search: searchQuery, token });
      console.log(res)
      setItems(res.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("404 error not found");
    }
  };

  async function fetchData() {
    try {
      setLoading(true);
      console.log(1);
      
      const res = await apiConnector("POST", API_URL, { search: searchQuery, token });
      
      if (!res) {
        // Handle the case where response is falsy
        throw new Error("No response received from the server");
      }
  
      console.log(2);
      console.log(res); // Log the response for debugging
      setItems(res);
      setLoading(false)
    } catch (error) {
      console.error(error); // Log the error for debugging
      if(token!==null){
        toast.error("404 error not found");
      }
      
    } 
  }
  

  useEffect(()=>{
    // console.log("1")
    fetchData()
  },[])


  return (
    <div>
      {
        token !== null && (
          <div>
          <form onSubmit={handleSubmit} action="/search" className="max-w-[480px] w-full px-4 mx-auto pt-4" >
        <div className="relative">
          <input
            type="text"
            name="q"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-900 font-bold dark:border-gray-700 dark:bg-gray-100"
            placeholder="Search"
          />
          <button type="submit">
            <svg
              className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-400"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </form>
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
          
        )
      }
    </div>
  );
};

export default Home;
