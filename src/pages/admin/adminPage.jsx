import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { SiTemporal } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AdminitemsPage from "./adminItemsPage";
import AddItemsPage from "./addItemsPage";
import UpdateItemsPage from "./updateItemsPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminBookingPage";


export default function Adminpage(){

    return(
      
      <div className='w-full h-screen flex'>

        <div className='w-[200px] h-full bg-[#9b67cc]'>

          <button className='w-full h-[40px] text-[25px] text-white font-bold bg-[#9b67cc] flex justify-center items-center'>
              <MdOutlineDashboardCustomize/>
              Dashboard
          </button>

          <Link to="/admin/bookings" className='w-full h-[30px] text-[20px] text-white font-bold flex justify-center items-center'>
              <TbBrandBooking/>
               Booking
          </Link> 
        
          <Link to="/admin/items" className='w-full h-[30px] text-[20px] text-white font-bold flex justify-center items-center'>
              <SiTemporal/>
              Items
          </Link>
        
          <Link to="/admin/users" className='w-full h-[30px] text-[20px] text-white font-bold flex justify-center items-center' >
              <FaRegUserCircle/>
              Users
          </Link>

        </div>

        <div className='w-[calc(100vw-200px)] h-full bg-blue-100'>

          <Routes path="/*">
              <Route path="/items" element={<AdminitemsPage/>}/>
              <Route path="/users" element={<AdminUsersPage/>}/>
              <Route path="/bookings" element={<AdminOrdersPage/>}/>
              <Route path="/items/add" element={<AddItemsPage/>}/>
              <Route path="/items/edit" element={<UpdateItemsPage/>}/>
          </Routes>


        </div>

      </div>
    )
}