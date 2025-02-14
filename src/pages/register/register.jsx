import axios from "axios";
import "./register.css"
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(email, password, role, firstName, lastName, address, phone);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
            email: email,
            password: password,
            role: role,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone

        }).then((res)=>{
            toast.success("User Registered Successfully")
            navigate("/login")

        }).catch((err)=>{
            toast.error(err?.response?.data?.error || "An error occured")
        })
    }

    return (
        <div className="bg-picture w-full h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
                <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col p-5">
                    <img src="/audio-logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
                    
                    <input type="text" placeholder="First Name" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <input type="text" placeholder="Last Name" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <input type="email" placeholder="Email" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <input type="password" placeholder="Password" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <input type="text" placeholder="Role" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={role} onChange={(e) => setRole(e.target.value)} />
                    
                    <input type="text" placeholder="Address" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={address} onChange={(e) => setAddress(e.target.value)} />
                    
                    <input type="text" placeholder="Phone" className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                    
                    <button className="my-6 w-[200px] h-[40px] bg-[#efac38] text-lg text-white rounded-lg">Register</button>
                </div>
            </form>
        </div>
    );
}
