"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState({ _id: "", username: "", email: "", isVerified: Boolean, isAdmin: Boolean, createdAt: "", updatedAt: "" })
    const logout = async () => {
        try {
            const response = await axios.get("/api/users/logout")
            toast.success(response.data.message)
            router.push("/login")
        } catch (error: any) {
            console.log(error)
            toast.error(error.message || "An error occurred during logout")
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data)
        setData(res.data.data)
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p>This is a profile page</p>

            <h2>{data._id ? data.username : "User not found"}</h2>

            {/* <button className="btn btn-danger ">Logout</button> */}
            <button className="btn btn-danger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
        </div>
    )
}