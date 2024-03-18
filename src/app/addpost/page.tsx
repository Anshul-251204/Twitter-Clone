"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Image, MoveLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
	const router = useRouter();

	const [image, setImage] = useState<boolean>(false)
	
	return (
		<div className="sm:w-[40%] w-full h-screen sm:mx-[30%] p-4 ">
			<div className=" w-full h-[10%] flex justify-between items-center border-b pr-4">
				<Button onClick={() => router.replace("/")} variant={"ghost"}>
					<MoveLeft />
				</Button>
			</div>

			<Textarea
				className="text-md h-[20%]"
				placeholder="Write something you want to share..."
			/>
			<div className="p flex justify-between mt-4 ">
				<div>
					<Button 
					onClick={()=>setImage(!image)}
					variant={"ghost"}>
						<Image />
					</Button>
					<Button variant={"ghost"}>
						<Clock />
					</Button>
				</div>
				<Button>
					Post <Plus size={"1.3rem"} className="ml-2" />
				</Button>
			</div>

			{ image && <img
				className=" w-full h-[50%] object-cover mt-4 rounded-lg"
				src="https://plus.unsplash.com/premium_photo-1674326713073-418cd8b6a5e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>}
		</div>
	);
}
