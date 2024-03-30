"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupRequestBody } from "@/types/res&reqTypes";
import { Github } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
	const router = useRouter();

	const [userData, setUserData] = useState<SignupRequestBody>({
		name: "",
		email: "",
		password: "",
		username: "",
	});

	const signUpHandler = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/auth/signup", userData, {
				withCredentials: true,
			});
	
			router.replace("/signin");
		} catch (error) {
			console.log(error);
			
		}
	};
	return (
		<div className="w-full h-screen flex justify-center items-center p-4 ">
			<div className="w-full h-[60%] sm:w-[35%] sm:h-[70%] border rounded-lg p-4 ">
				<h1 className=" text-2xl text-center p-4">Sign Up</h1>

				<form>
					<Input
						onChange={(e) => {
							setUserData({ ...userData, name: e.target.value });
						}}
						className=" mb-4"
						placeholder="name"
					/>
					<Input
						onChange={(e) => {
							setUserData({ ...userData, username: e.target.value });
						}}
						className=" my-4"
						placeholder="username"
					/>
					<Input
						onChange={(e) => {
							setUserData({ ...userData, email: e.target.value });
						}}
						className=" my-4"
						placeholder="Email"
					/>
					<Input
						onChange={(e) => {
							setUserData({ ...userData, password: e.target.value });
						}}
						className=" my-4"
						placeholder="Password"
					/>

					<Button
						type="submit"
						onClick={signUpHandler}
						className="w-full"
					>
						Sign Up
					</Button>
					<div className="flex my-4 items-center justify-between">
						<div className=" border-t w-[45%]"></div>
						<p>OR</p>
						<div className=" border-t w-[45%]"></div>
					</div>
					<Button className=" my-4 w-full">
						<Github className="mr-2" /> GitHub
					</Button>
					<Button className="w-full">
						<img
							width="30"
							height="30"
							className="mr-4"
							src="https://img.icons8.com/color/48/google-logo.png"
							alt="google-logo"
						/>{" "}
						Google
					</Button>
				</form>

				<div className="my-4 flex">
					<p>if your have already account </p>
					<Link className=" text-blue-500 ml-2 " href={"signin"}>
						click here
					</Link>
				</div>
			</div>
		</div>
	);
}
