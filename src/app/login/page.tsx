"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const signup = async () => {

    }



    return <div className="flex flex-col py-5 items-center justify-center h-screen ">
        <h1 >Login</h1>
        <hr />
        <label htmlFor="email">email</label>
        <input type="text" id='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" className="p-1 mb-4" />
        <label htmlFor="password">password</label>
        <input type="text" id='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" className="p-1 mb-4" />
        <button onClick={signup} className="bg-blue-500 text-white px-4 py-2 rounded">Login Here</button>

        <Link href="/signup" className="text-blue-500">Signup here</Link>

    </div>
}