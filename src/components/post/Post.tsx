import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, MessageCircle, Pin } from "lucide-react";

export default function Post() {
	const img = true;
	return (
		<div className="w-full h-fit  ">
			<Link
				href={"/profile"}
				className=" w-ful h-fit p-4 flex gap-4 items-center border rounded-lg"
			>
				<div className=" w-[50px] h-[50px] bg-white rounded-full"></div>
				<h1 className="text-xl">Anshul</h1>
			</Link>

			<p className="p-4 border rounded-lg mt-0">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Eveniet, iusto.
			</p>

			{img && (
				<img
					className="w-full object-cover h-[500px] border  rounded-lg "
					src="https://images.unsplash.com/photo-1710411830867-f733603672f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
					alt=""
				/>
			)}

			<div className=" w-full flex justify-between p-2 border rounded-lg ">
				<Button variant={"ghost"} size={"icon"}>
					<MessageCircle />
				</Button>

				<Button variant={"ghost"} size={"icon"}>
					<Heart />
				</Button>

				<Button variant={"ghost"} size={"icon"}>
					<Pin />
				</Button>
			</div>
		</div>
	);
}
