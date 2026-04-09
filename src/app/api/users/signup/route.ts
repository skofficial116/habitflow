import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, username, password } = reqBody

        console.log(reqBody)

        const isUser = await User.findOne({ email })
        if (isUser) {
            return NextResponse.json({ error: "User already Exist" }, { status: 400 })

        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ username, email, password: hashedPassword })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({ message: "User Created Successfully", success: true, savedUser })


    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}