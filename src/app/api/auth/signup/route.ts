import ApiResponse from "@/lib/classes/apiResponse";
import { SignupRequestBody } from "@/types/res&reqTypes";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest) {
	const body = await req.json();
	const { name, username, email, password }: SignupRequestBody = body;

	if (!name || !username || !email || !password) {
		return NextResponse.json(new ApiResponse("All Field are required", {}));
	}

	const existingUser = await db.user.findFirst({
		where: {
			username:username,
		},
	});

    if(existingUser) {
        return NextResponse.json(new ApiResponse("User Already exists with this email", {}))
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    
    const registerUser = await db.user.create({
        data:{
            name,
            username,
            email,
            password
        }
    })

    return NextResponse.json(new ApiResponse(`User ${name} registered Successfully`, registerUser))

	return NextResponse.json({ name: "anshul" });
}
