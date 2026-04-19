import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (req: NextRequest) => {

    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return null;
        }
        const decoded:any = jwt.verify(token, process.env.TOKEN_SECRET as string);
        return decoded.id;
    }

    catch (error:any) {

        console.error("Error verifying token:", error);
        throw new Error(error.message);
    }
};


