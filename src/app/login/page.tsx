"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const router = useRouter()
    const [loading, setLoading] = React.useState(false)
    const [buttonDisabled, setButtonDisabled] = React.useState(false)



    const signup = async () => {
        // alert("Login")
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log(response)
            toast.success("Login Success")
            router.push("/profile")


        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    return <div className="flex flex-col py-5 items-center justify-center h-screen ">
        <h1 >Login</h1>
        <hr />
        <label htmlFor="email">email</label>
        <input type="text" id='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" className="p-1 mb-4" />
        <label htmlFor="password">password</label>
        <input type="text" id='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" className="p-1 mb-4" />
        <button onClick={signup} className="bg-blue-500 text-white px-4 py-2 rounded">{buttonDisabled ? "" : "Login Here"}</button>

        <Link href="/signup" className="text-blue-500">Signup here</Link>

    </div>
}