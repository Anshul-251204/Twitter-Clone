import Link from "next/link";

export default function Post() {
    
	const img = true;
	return (
		<div className="w-full h-fit border">
			<Link href={"/profile"} className=" w-ful h-fit p-4 flex gap-4 items-center">
				<div className=" w-[50px] h-[50px] bg-white rounded-full"></div>
				<h1 className="text-xl">Anshul</h1>
			</Link>
			{img && (
				<img
					className="w-full object-cover h-[500px] border"
					src="https://images.unsplash.com/photo-1710411830867-f733603672f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
					alt=""
				/>
			)}

            <div>

                
            </div>
		</div>
	);
}
