"use client";
import axios from "axios";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function page() {
	const router = useRouter();

	const logoutUser = async () => {
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signout`,
				{},
				{ withCredentials: true }
			);
			localStorage.removeItem("curr-user");
			toast.success(res.data.message);

			router.replace("/");
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<div className=" w-full h-screen overflow-x-auto p-10 max-sm:p-4 ">
			<div className="sm:w-[40%] w-full h-full border py-4 rounded-lg ">
				<button className="w-full hover:bg-secondary text-left p-4">
					Change Account Details
				</button>
				<button className="w-full hover:bg-secondary text-left p-4">
					Change Profile
				</button>
				<button className="w-full hover:bg-secondary text-left p-4">
					Change Password
				</button>
				<button className="w-full hover:bg-secondary text-left p-4">
					Blue Tick
				</button>
				<button className="w-full hover:bg-secondary text-left p-4">
					Privacy
				</button>
				<button
					onClick={logoutUser}
					className="w-full flex gap-2 items-center hover:bg-secondary text-left p-4"
				>
					Logout <LogOutIcon size={"1rem"} />
				</button>
				<button className="w-full hover:bg-secondary text-left p-4">
					Delete Account
				</button>
			</div>
		</div>
	);
}
