"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const signup = async () => {

    }



    return <div className="flex flex-col py-5 items-center justify-center h-screen ">
        <h1 >Signup</h1>
        <hr />

        <label htmlFor="username">username</label>
        <input type="text" id='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="username" className="p-1 mb-4" />
        <label htmlFor="email">email</label>
        <input type="text" id='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" className="p-1 mb-4" />
        <label htmlFor="password">password</label>
        <input type="text" id='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" className="p-1 mb-4" />
        <button onClick={signup} className="bg-blue-500 text-white px-4 py-2 rounded">Signup Here</button>

        <Link href="/login" className="text-blue-500">Already have an account? Login here</Link>

    </div>
}