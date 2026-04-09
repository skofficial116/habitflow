"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    const signup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log("Signup Success", response.data)
            router.push("/login")

        } catch (error: any) {
            console.log("Signup Failed: ", error.message)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    return <div className="flex flex-col py-2 items-center justify-center h-screen ">
        <h1 >{loading ? "Processing" : "Signup"}</h1>
        <hr />

        <label htmlFor="username">username</label>
        <input type="text" id='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="username" className="p-1" />
        <label htmlFor="email">email</label>
        <input type="text" id='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" className="p-1" />
        <label htmlFor="password">password</label>
        <input type="text" id='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" className="p-1" />
        <button onClick={signup} className="border-2 bg-blue-500 text-white px-4 py-2 rounded" disabled={buttonDisabled} >{buttonDisabled ? "" : "Signup Here"} </button>

        <Link href="/login" className="text-blue-500">Already have an account? Login here</Link>

    </div>
}