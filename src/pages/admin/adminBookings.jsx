import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeOrder, setActiveOrder] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        if (loading) {
            const token = localStorage.getItem("token");
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, {
                headers: { Authorization: "Bearer " + token }
            }).then((res) => {
                setOrders(res.data.orders);
                setLoading(false);
            }).catch((err) => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [loading]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Booking Page</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Order ID</th>
                                <th className="border border-gray-300 p-2">Email</th>
                                <th className="border border-gray-300 p-2">Days</th>
                                <th className="border border-gray-300 p-2">Start Date</th>
                                <th className="border border-gray-300 p-2">End Date</th>
                                <th className="border border-gray-300 p-2">Total Amount</th>
                                <th className="border border-gray-300 p-2">Order Date</th>
                                <th className="border border-gray-300 p-2">Approved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="text-center cursor-pointer hover:bg-accent" onClick={() => {
                                    setActiveOrder(order);
                                    console.log(order);
                                    setModalOpen(true);
                                }}>
                                    <td className="border border-gray-300 p-2">{order.orderId}</td>
                                    <td className="border border-gray-300 p-2">{order.email}</td>
                                    <td className="border border-gray-300 p-2">{order.days}</td>
                                    <td className="border border-gray-300 p-2">{new Date(order.startingDate).toLocaleDateString()}</td>
                                    <td className="border border-gray-300 p-2">{new Date(order.endingDate).toLocaleDateString()}</td>
                                    <td className="border border-gray-300 p-2">Rs. {order.totalAmount.toFixed(2)}</td>
                                    <td className="border border-gray-300 p-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                                    <td className="border border-gray-300 p-2">{order.isApproved ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {
                modalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-[#00000075] flex items-center justify-center">

                        <div className="w-[700px] bg-white p-4 rounded-lg shadow-lg relative">
                            <IoMdCloseCircleOutline className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-500" onClick={() => setModalOpen(false)} />

                            <h1 className="text-2xl font-semibold mb-4">Order Details</h1>
                            <div className="flex flex-col gap-2">
                                <p><span className="font-semibold">Order Id : </span>{activeOrder.orderId}</p>
                                <p><span className="font-semibold">Email : </span>{activeOrder.email}</p>
                                <p><span className="font-semibold">Days : </span>{activeOrder.days}</p>
                                <p><span className="font-semibold">Start Date : </span>{new Date(activeOrder.startingDate).toLocaleDateString()}</p>
                                <p><span className="font-semibold">End Date : </span>{new Date(activeOrder.endingDate).toLocaleDateString()}</p>
                                <p><span className="font-semibold">Total Amount : </span>Rs. {activeOrder.totalAmount.toFixed(2)}</p>
                                <p><span className="font-semibold">Order Date : </span>{new Date(activeOrder.orderDate).toLocaleDateString()}</p>
                                <p><span className="font-semibold">Approvel Status : </span>{activeOrder.isApproved ? "Yes" : "No"}</p>
                            </div>

                            <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-accent">
                                        <th className="border border-gray-300 px-4 py-2">Product</th>
                                        <th className="border border-gray-300 px-4 py-2">Product Name</th>
                                        <th className="border border-gray-300 px-4 py-2">Product Quantity</th>
                                        <th className="border border-gray-300 px-4 py-2">Product Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        activeOrder.orderedItems.map((item)=>{
                                            return(
                                                <tr key={item.product.key}>
                                                    <td className="w-[100px] h-[100px] border border-gray-300 px-4 py-2"><img src={item.product.image} alt={item.product.name}></img></td>
                                                    <td className="border border-gray-300 px-4 py-2">{item.product.name}</td>
                                                    <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                                                    <td className="border border-gray-300 px-4 py-2">{item.product.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                            
                           
                        </div>

                    </div>
                )
            }

        </div>
    );
}

