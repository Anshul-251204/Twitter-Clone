import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, MessageCircle, Pin } from "lucide-react";
import { PostType } from "@/types/generalTypes";

export default function Post({ post }: { post: PostType }) {
	const avatar = post?.owner?.avatar?.url;
	console.log(avatar);

	return (
		<div className="w-full h-fit  ">
			<Link
				href={"/profile"}
				className=" w-ful h-fit p-2 flex gap-4 items-center border rounded-lg max-sm:rounded-none "
			>
				<div className=" w-[40px] h-[40px] bg-white rounded-full ">
					<img
					className=" w-full h-full object-cover rounded-full"
						src={
							avatar
								? avatar
								: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711756800&semt=ais"
						}
						alt=""
					/>
				</div>
				<h1 className="text-xl">{post?.owner?.username}</h1>
			</Link>

			<p className="p-4 border rounded-lg mt-0">{post?.content}</p>

			{post?.image && (
				<img
					className="w-full object-cover h-[500px] border  rounded-lg "
					src={post?.image?.url}
					alt=""
				/>
			)}

			<div className=" w-full flex justify-between p-2 border rounded-lg ">
				<Button variant={"ghost"} size={"icon"}>
					<span>
						<Heart />
					</span>
					<span className="ml-2 text-md">{post?.likes}</span>
				</Button>

				<Button variant={"ghost"} size={"icon"}>
					<MessageCircle />
				</Button>

				<Button variant={"ghost"} size={"icon"}>
					<Pin />
				</Button>
			</div>
		</div>
	);
}
