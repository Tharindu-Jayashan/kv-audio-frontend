import { Link } from "react-router-dom"

export default function NotFound(){

    return(
        <div>
            <h1>Page Not Found</h1>

            <Link to="/" className="bg-[f0ad38] p-1" >Go back to home</Link>
        </div>
    )
}