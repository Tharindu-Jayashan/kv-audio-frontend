import axios from "axios";
import { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";



export default function AdminItemsPage() {
    const [items, setItems] = useState([]);
    const [itemsLoaded, setItemsLoaded] = useState(false);

    useEffect(()=>{
        if(!itemsLoaded){
            const token = localStorage.getItem("token");
            axios.get("http://localhost:3000/api/products",{headers : {Authorization : "Bearer " + token }}).then((res)=>{
                console.log(res);
                setItems(res.data.products || []);


                setItemsLoaded(true);

            }).catch((err)=>{
                console.log(err);
            })
        }
    },[itemsLoaded]);

    const handleDelete = (key) => {
       
    };

    return (
        <div className="w-full h-full p-6">
            {itemsLoaded && <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 shadow-md">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-3 border">Key</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Price</th>
                            <th className="p-3 border">Category</th>
                            <th className="p-3 border">Dimensions</th>
                            <th className="p-3 border">Availability</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((product, index) => (
                            <tr key={product.key} className="text-center border-b hover:bg-gray-100">
                                <td className="p-3 border">{product.key}</td>
                                <td className="p-3 border">{product.name}</td>
                                <td className="p-3 border">${product.price}</td>
                                <td className="p-3 border">{product.category}</td>
                                <td className="p-3 border">{product.dimensions}</td>
                                <td className="p-3 border">{product.availability ? "Available" : "Not Available"}</td>
                                <td className="p-3 border flex justify-center space-x-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">Update</button>
                                    <button onClick={() => handleDelete(product.key)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            <Link to="/admin/items/add" className="fixed bottom-6 right-6">
                <CiCirclePlus className="text-[70px] text-blue-600 hover:text-blue-800 transition" />
            </Link>
        </div>
    );
}
