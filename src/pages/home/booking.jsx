import { useEffect, useState } from "react"
import { formatDate, loadCart } from "../../utils/cart";
import BookingItem from "../../components/bookingItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookingPage(){

    const [cart, setCart] = useState(loadCart());
    const [startingDate, setStartingDate] = useState(formatDate(new Date() ));
    const [endingDate, setEndingDate] = useState(formatDate(new Date(Date.now()+24*60*60*1000 )))
    const [total, setTotal] = useState(0)
    const daysBetween = Math.max( (new Date(endingDate)-new Date(startingDate))/ (1000 * 60 * 60 * 24), 1 )

    function reloadCart(){
        setCart(loadCart());
    }

    function calculateTotal(){
        const cartInfo = loadCart();
        cartInfo.startingDate = startingDate;
        cartInfo.endingDate = endingDate;
        cartInfo.days = daysBetween;
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quote` , 
            cartInfo).then((res)=>{
                console.log(res.data)
                setTotal(res.data.total)
            }).catch((err)=>{
                console.error(err)
            })
    }

    useEffect(()=>{
        calculateTotal();
    },[startingDate, endingDate, cart])

    // order send to SiBackendless(save)

    function handleBookingCreation(){
        const cart = loadCart();
        cart.startingDate = startingDate;
        cart.endingDate = endingDate;
        cart.days = daysBetween;

        const token = localStorage.getItem("token");
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, cart, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res.data)
            localStorage.removeItem("cart");
            toast.success("Booking Created")
            setCart(loadCart());
        }).catch((err)=>{
            console.error(err);
            toast.error("Failed to create order")
        })

    }

    return(
        <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-2xl font-bold text-accent">Booking Page</h1>

            {/* display days selecter */}
            <div className="w-full flex flex-col items-center gap-4 mt-4">

               <label className="flex flex-col">
                  <span className="text-accent font-semibold">Starting Date : </span>
                  <input
                       type="date"
                       value={startingDate}
                       onChange={(e)=>setStartingDate(e.target.value)}
                       className="border border-secondory rounded-md p-2"
                  />
               </label>
               <label className="flex flex-col">
                  <span className="text-accent font-semibold">Ending Date : </span>
                  <input
                       type="date"
                       value={endingDate}
                       onChange={(e)=>setEndingDate(e.target.value)}
                       className="border border-secondory rounded-md p-2"
                  />
               </label>
               <p className="text-accent font-medium">Total Days : {daysBetween} </p>

            </div>

            <div className="w-full flex flex-col items-center">
                {
                    cart.orderedItems.map((item)=>(
                        <div key={item.key}>
                         
                            <BookingItem itemKey={item.key} qty={item.qty} refresh={reloadCart}/>
                        
                        </div>
                    ))
                }
            </div>

          
            <div className="w-full flex flex-col justify-center mt-4">

                <div className="w-full flex justify-center mt-4">
                    <p className="text-accent font-semibold">Total Amount : {total.toFixed(2)} </p>
                </div>

                 <div className="w-full flex justify-center mt-4">
                     <button className="bg-accent text-white px-4 py-2 rounded-md" onClick={handleBookingCreation}>Create Booking</button>
                 </div>
                
            </div>

        </div>
    )
}