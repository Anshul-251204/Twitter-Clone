"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SigninRequestBody } from "@/types/res&reqTypes";
import axios from "axios";
import { Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

export default function page() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<SigninRequestBody>();

	const onSubmit: SubmitHandler<SigninRequestBody> = async (data) => {
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signin`,
				data,
				{ withCredentials: true }
			);
			
			toast.success(res.data.message);
			router.replace("/")
		} catch (error :any) {
			toast.error(error.response.data.message)
		}
	};

	// const signInHandler = async (
	// 	e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	// ) => {
	// 	e.preventDefault();
	// 	try {
	// 		 const  loginPromise = async() => {
	// 			await axios.post("/api/auth/signin", userData, {
	// 				withCredentials: true,
	// 			});
	// 		}

	// 		const res = loginPromise();

	// 		toast.promise(res, {
	// 			loading: "wait few seconds...",
	// 			success: "Login successfully",
	// 			error: "Error while login...",
	// 		});

	// 		router.replace("/");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className="w-full h-screen flex justify-center items-center p-4 ">
			<div className="w-full h-[60%] sm:w-[35%] sm:h-[70%] border rounded-lg p-4 pt-[7%] ">
				<h1 className=" text-2xl text-center p-4">Sign In</h1>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						{...register("username")}
						// onChange={(e) =>
						// 	setUserData({
						// 		...userData,
						// 		email_or_username: e.target.value,
						// 	})
						// }
						className=" my-4"
						placeholder="username"
					/>
					<Input
						{...register("password")}
						// onChange={(e) =>
						// 	setUserData({
						// 		...userData,
						// 		password: e.target.value,
						// 	})
						// }
						className=" my-4"
						placeholder="Password"
					/>
					<Button
						type="submit"
						// onClick={signInHandler}
						className="w-full"
					>
						Sign In
					</Button>
					<div className="flex my-4 items-center justify-between">
						<div className=" border-t w-[45%]"></div>
						<p>OR</p>
						<div className=" border-t w-[45%]"></div>
					</div>
					<Button className=" my-4 w-full">
						{" "}
						<Github className="mr-2" /> GitHub
					</Button>{" "}
					<Button className="w-full">
						{" "}
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
					<p>if you want to create a account </p>
					<Link className=" text-blue-500 ml-2 " href={"signup"}>
						click here
					</Link>
				</div>
			</div>
		</div>
	);
}
