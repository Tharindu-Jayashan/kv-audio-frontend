import axios from "axios";
import { useEffect, useState } from "react"

export default function AdminUsersPage(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(loading){
            const token = localStorage.getItem("token")
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`,
                {headers : {Authorization : "Bearer " + token }
            }).then((res)=>{
                console.log(res.data)
                setUsers(res.data.users)
                setLoading(false)
            }).catch((err)=>{
                console.log(err)
                setLoading(false)
            })
        }
    },[loading])

    function handleBlockUser(email){
      
      const token = localStorage.getItem("token");

      axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/block/${email}`,{
        headers : {Authorization : "Bearer " + token }
      
      }).then((res)=>{
        console.log(res)
        setLoading(true)       

      }).catch((err)=>{
        console.log(err)
      })
    }

    return(
        <div>
            <h1>Admin Users Page</h1>

    {loading && <p className="text-blue-500">Loading users...</p>}

      {!loading && users.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">

            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4 border-b">Profile</th>
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Role</th>
                <th className="py-3 px-4 border-b">Phone</th>
                <th className="py-3 px-4 border-b">Address</th>
                <th className="py-3 px-4 border-b">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 border-b">
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="py-3 px-4 border-b">{user.email}</td>
                  <td className="py-3 px-4 border-b capitalize">{user.role}</td>
                  <td className="py-3 px-4 border-b">{user.phone}</td>
                  <td className="py-3 px-4 border-b">{user.address}</td>
                  <td onClick={()=>{handleBlockUser(user.email)}} className="py-3 px-4 border-b cursor-pointer">{user.isBlocked?"BLOCKED":"ACTIVE"}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {!loading && users.length === 0 && (
        <p className="text-gray-500">No users found or failed to load data.</p>
      )}
        </div>
    )
}





