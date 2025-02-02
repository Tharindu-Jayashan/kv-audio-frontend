import { MdSpaceDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

export default function Adminpage(){

    return(
        <div className='w-full h-screen flex'>

        <div className='w-[400px] h-full bg-green-200'>

        <button className='w-full h-[40px] text-[25px] font-bold bg-red-400 flex justify-center items-center'>
            <MdSpaceDashboard/>
            Dashboard
        </button>
        <button className='w-full h-[30px] text-[15px] font-bold flex justify-center items-center'>
          <TbBrandBooking/>
          Booking
        </button>
        <button className='w-full h-[30px] text-[15px] font-bold flex justify-center items-center'>
          <TbBrandBooking/>
          Booking
        </button>

        </div>

        <div className='w-full h-full bg-red-900'>
        </div>

      </div>
    )
}