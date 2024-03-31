"use client";
import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import AddPost from "../post/AddPostHome";
import { PenLine } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { PostType } from "@/types/generalTypes";

export default function Homee() {
	const [posts, setPosts] = useState<PostType[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/posts/`
			);
 			setPosts(res.data.data);
		};
		
		fetchPosts();
	}, []);

	const router = useRouter();

	return (
		<div className=" w-full sm:w-[40%]   overflow-x-auto no-scrollbar">
			<AddPost />
			<button
				onClick={() => router.replace("/addpost")}
				className="sm:hidden fixed bottom-[10%] right-[5%] bg-blue-500 p-3 rounded-full "
			>
				<PenLine />
			</button>
			{posts.map((post: PostType, idx: number) => (
				<Post key={idx} post={post} />
			))}
			
		</div>
	);
}
