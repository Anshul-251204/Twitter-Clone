export default function page() {
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
				<button className="w-full hover:bg-secondary text-left p-4">
					Delete Account
				</button>
			</div>
		</div>
	);
}
