import React from "react";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";
import Post from "../post/Post";
import { list } from "postcss";
import { PostType } from "@/types/generalTypes";

export default function Profile({ data }: any) {
	const joiningData: Date = new Date(data?.createdAt);

	return (
		<div className="w-full sm:w-[70%] h-screen  border-r overflow-x-auto no-scrollbar">
			<div className="w-full h-[65%] border-b">
				{/* profile pic & backgroundImage */}
				<div className=" w-full h-[48%] bg-gray-300 relative">
					<img
						className=" w-full h-full object-cover object-center "
						src="https://images.unsplash.com/photo-1710242549854-e65b4dc782f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
						alt=""
					/>
					<img
						className="h-[100px] w-[100px] top-[70%] left-[4%] sm:h-[180px] sm:w-[180px] object-cover rounded-full absolute sm:top-[50%] sm:left-[2%] border-foreground  "
						src={
							data.avatar?.url
								? data.avatar.url
								: "https://plus.unsplash.com/premium_photo-1710294627866-6914a34622c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
						}
						alt=""
					/>
				</div>

				{/* profile detials */}
				<div className="w-full max-h-[50%] pt-[8%] px-4 ">
					<div className="flex justify-between items-center mb-4 ">
						<div>
							<h1 className=" font-semibold text-xl ">
								{data?.name}
							</h1>
							<p className="mt-1 text-gray-500 ">
								@{data?.username}
							</p>
						</div>

						<Button variant={"outline"} size={"lg"}>
							<span className="text-lg mr-2 max-sm:hidden">
								Edit{" "}
							</span>{" "}
							<Edit />
						</Button>
					</div>

					<h1 className="mt-2 text-gray-500">
						Join on {`${joiningData.toLocaleDateString()}`}
					</h1>
					<p>{data?.tagline}</p>
					<p className="my-1">
						{data?.bio ? data.bio : `Hello i'm ${data.name}`}
					</p>

					<div className="flex gap-4 text-gray-600 mt-2 ">
						<h1>{`${data.friends}`} following</h1>
						<h1>{`${data.followers}`} followers</h1>
					</div>
				</div>
			</div>

			<div className=" w-full p-4 min-h-[35%]">
				{data.posts.map((post: PostType, idx: number) => {
					return (
						<Post
							key={idx}
							post={{
								...post,
								owner: {
									username: data.username,
									avatar: {
										url: data?.avatar.url,
										public_id: "",
									},
								},
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
