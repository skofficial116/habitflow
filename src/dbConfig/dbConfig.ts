import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("Mongodb connected successfully")
        })
        connection.on('error', (err) => {
            console.log("MongoDB connection Error: " + err)
            process.exit()
        })
    } catch (error) {
        console.log(error)
    }
}