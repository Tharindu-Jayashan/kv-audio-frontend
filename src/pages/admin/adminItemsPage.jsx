import { BsFileEarmarkPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AdminitemsPage(){

    return(
        <div className="w-full h-full relative">

            <Link to = "/admin/items/add">
            <BsFileEarmarkPlus className="text-[100px] absolute right-2 bottom-2 hover:text-blue-500 cursor-pointer"/>
            </Link>
        </div>
    )
}