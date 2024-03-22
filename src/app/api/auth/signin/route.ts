import ApiResponse from "@/lib/classes/apiResponse";
import { SigninRequestBody } from "@/types/res&reqTypes";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
export async function POST(req: NextRequest) {
	const body: SigninRequestBody = await req.json();

	const { email_or_username, password } = body;

	if (!email_or_username || !password) {
		return NextResponse.json(
			new ApiResponse(
				"Your username or email & password somethign is wrong ",
				{}
			),
			{ status: 200 }
		);
	}

	const user = await db.user.findFirst({
		where: {
			username: email_or_username,
		},
	});

	const isMatched = bcrypt.compareSync(password, user?.password!);

	if (!isMatched) {
		return NextResponse.json(
			new ApiResponse("Email | username or Password ", {}),
			{ status: 400 }
		);
	}

	return NextResponse.json(
		new ApiResponse("user Login successfully...", {}),
		{ status: 200 }
	);
}
