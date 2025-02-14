import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import {  useNavigate, useLocation } from "react-router-dom";

export default function UpdateItemsPage() {

  const location = useLocation();

  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimensions, setProductDimensions] = useState(location.state.dimensions);
  const [productDescription, setProductDescription] = useState(location.state.description); 
  const navigate = useNavigate();

  async function handleAddItem(){

    console.log(
      productKey,productName,productPrice,productCategory,productDimensions,productDescription
    )
    const token = localStorage.getItem("token");

    if(token){
        try{
            const result = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/`+productKey ,{

              key : productKey,
              name : productName,
              category : productCategory,
              dimensions : productDimensions,
              price : productPrice,
              description : productDescription
            },
            {
              headers : {
                Authorization : "Bearer " + token
              }
            }
            )
            toast.success(result.data.message)
            navigate("/admin/items")
          }
      
        catch(err){
          toast.error(err.response.data.error)
        } 

    }else{
    toast.error("Please login first")
    }
    

  }


  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Update Items</h1>

      <div className="w-[400px] flex flex-col border p-4 bg-white shadow-md rounded-md">
        <input
        disabled
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          type="text"
          placeholder="Key"
          className="mb-2 p-2 border rounded"
        />

        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Name"
          className="mb-2 p-2 border rounded"
        />

        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="number"
          placeholder="Price"
          className="mb-2 p-2 border rounded"
        />

        <select
          onChange={(e) => setProductCategory(e.target.value)}
          value={productCategory}
          className="mb-2 p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          onChange={(e) => setProductDimensions(e.target.value)}
          value={productDimensions}
          type="text"
          placeholder="Product Dimensions"
          className="mb-2 p-2 border rounded"
        />

        <textarea
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="mb-2 p-2 border rounded"
        />

        <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600">
          Update
        </button>
        <button onClick={()=>{navigate("/admin/items")}} className="bg-red-500 text-white p-2 rounded mt-2">Cancel</button>
      </div>
    </div>
  );
}
