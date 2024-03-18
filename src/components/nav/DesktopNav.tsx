import { DesktopNavType } from "@/types/generalTypes";
import { Contact, HomeIcon, Plus, PlusCircle, Search, Settings, Twitter } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const DesktopNavBar: DesktopNavType[] = [
	{ icon: <HomeIcon />, path: "/", text: "Home" },
	{ icon: <Search />, path: "/search", text: "Search" },
	{ icon: <Contact />, path: "/profile", text: "Profile" },
	{ icon: <PlusCircle />, path: "/addpost", text: "Create" },
	{ icon: <Settings />, path: "/setting", text: "Settings" },
];

export default function DesktopNav() {
	return (
		<div className="w-fit h-full flex flex-col justify-start items-start gap-8 p-10 text-xl">
			<div className="flex gap-4 font-bold text-2xl">
				<h1 className="  ">Tiwtter</h1>
				<Twitter />
			</div>
			{DesktopNavBar.map((item: DesktopNavType, idx: number) => (
				<Link key={idx} href={item.path}>
					<div className="flex gap-4 items-center">
						{item.icon} {item.text}
					</div>
				</Link>
			))}
			<div className="flex gap-4 items-center -ml-2">
				<ModeToggle /> Mode
			</div>
		</div>
	);
}
