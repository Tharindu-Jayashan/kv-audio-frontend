import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview() {

    const params = useParams();
    console.log(params)
    const key = params.key; 

    const [loadingStatus, setLoadingStatus] = useState("loading"); //loading, loaded, error
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`).then((res)=>{
            setProduct(res.data);
            setLoadingStatus("loaded");
            console.log(res.data);

        }).catch((err)=>{
            console.log(err);
            setLoadingStatus("error");
        })

    },[])

    return (
        <div className="w-full h-full flex justify-center">

            {
                loadingStatus == "loading" &&

                <div className="w-full h-full flex justify-center items-center ">
                    <div className="w-[50px] h-[50px] border-4 border-t-accent animate-spin rounded-full"></div>
                </div>
            }

            {
                loadingStatus == "loaded" &&

                <div className="w-full h-full flex justify-center items-center">

                    {/* display image */}
                    <div className="w-[49%] h-full">
                        <ImageSlider images={product.image}/>
                    </div>

                    {/* display details */}
                    <div className="w-[49%] h-full flex flex-col items-center mt-50">
                        <h1 className="text-3xl font-bold text-accent">{product.name}</h1>
                        <h2 className=" font-bold ">{product.category}</h2>
                        <p>{product.description}</p>
                        <p className="font-bold text-green-400">{product.price}</p>
                        <p>Dimensions: {product.dimensions}</p>
                    </div>

                </div>
            }

            {
                loadingStatus == "error" &&

                <div className="w-full h-full font-bold text-7xl text-accent flex justify-center items-center">
                    Error Occured
                </div>

            }
        </div>
    )
}