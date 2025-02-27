import axios from "axios";
import { useState, useEffect } from "react"
import ProductCard from "../../components/productCard";
import toast from "react-hot-toast";

export default function Items(){

    const [state, setState] = useState("loading");
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        if(state == "loading"){
            axios.get( `${import.meta.env.VITE_BACKEND_URL}/api/products`).then((res)=>{
                console.log(res)
                setItems(res.data.products)
                setState("success")
            }).catch((err)=>{
                toast.error(err?.response?.data?.error || "An error occured")
                setState("error")
            })
        }
    })

    return(
        <div className="w-full h-full flex flex-wrap justify-center pt-[50px]">
           {
            state == "loading" && 
            <div className="w-full h-full flex justify-center items-center">
                
                <div className="w-[50px] h-[50px] rounded-full border-4 border-t-[#39ac35] animate-spin"/> 

            </div>
           }
          {
            state == "success" &&
            items.map((item)=>{
                return(
                    <ProductCard key={item.key} item={item} />
                )
            })
          }
        </div>
    )
}