"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupRequestBody } from "@/types/res&reqTypes";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

export default function page() {
	const router = useRouter();

	const { register, handleSubmit } = useForm<SignupRequestBody>();

	const onSubmit: SubmitHandler<SignupRequestBody> = async (data) => {
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`,
				data,
				{ withCredentials: true }
			);

			toast.success(res.data.message);
			router.replace("/");
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<div className="w-full h-screen flex justify-center items-center p-4 ">
			<div className="w-full h-[60%] sm:w-[35%] sm:h-[70%] border rounded-lg p-4 ">
				<h1 className=" text-2xl text-center p-4">Sign Up</h1>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						{...register("name")}
						className=" mb-4"
						placeholder="name"
					/>
					<Input
						{...register("username")}
						className=" my-4"
						placeholder="username"
					/>
					<Input
						{...register("email")}
						className=" my-4"
						placeholder="Email"
					/>
					<Input
						{...register("password")}
						className=" my-4"
						placeholder="Password"
					/>

					<Button
						type="submit"
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
