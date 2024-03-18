import React from "react";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";
import Post from "../post/Post";

export default function Profile() {
	return (
		<div className="w-full sm:w-[70%] h-screen border-r overflow-x-auto no-scrollbar">
			<div className="w-full h-[60%] border-b">
				{/* profile pic & backgroundImage */}
				<div className=" w-full h-[48%] bg-gray-300 relative">
					<img
						className=" w-full h-full object-cover object-center "
						src="https://images.unsplash.com/photo-1710242549854-e65b4dc782f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
						alt=""
					/>
					<img
						className="h-[100px] w-[100px] top-[70%] left-[4%] sm:h-[180px] sm:w-[180px] object-cover rounded-full absolute sm:top-[50%] sm:left-[2%] border-foreground  "
						src="https://plus.unsplash.com/premium_photo-1710294627866-6914a34622c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
						alt=""
					/>
				</div>

				{/* profile detials */}
				<div className="w-full h-[50% pt-[8%] px-4 ">
					<div className="flex justify-between items-center mb-4 ">
						<div>
							<h1 className=" font-semibold text-xl ">
								Anshul choure
							</h1>
							<p className="mt-1 text-gray-500 ">@anshul_12</p>
						</div>

						<Button 
						variant={"outline"}
						size={"lg"}>
							<span className="text-lg mr-2 max-sm:hidden">
								Edit{" "}
							</span>{" "}
							<Edit />
						</Button>
					</div>

					<h1 className="mt-2 text-gray-500">Join on 24/04/24</h1>
					<p>Lorem ipsum dolor sit amet.</p>
					 
					<p className="my-1">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Dignissimos, ad.
					</p>

					<div className="flex gap-4 text-gray-600 mt-2 ">
						<h1>12 following</h1>
						<h1>9 followers</h1>
					</div>
				</div>
			</div>

			{/* post */}

			<div className=" w-full p-4 min-h-[40%]">
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}
