"use client";
import React from "react";
import Post from "../post/Post";
import AddPost from "../post/AddPostHome";
import { PenLine } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Homee() {
	
	const router = useRouter()

	return (
		<div className=" w-full sm:w-[40%]   overflow-x-auto no-scrollbar">
			<AddPost />
			<button
			onClick={()=>router.replace("/addpost")}
			 className="sm:hidden fixed bottom-[10%] right-[5%] bg-blue-500 p-3 rounded-full ">
				<PenLine />
			</button>
			<Post /> <Post /> <Post /> <Post />
		</div>
	);
}
