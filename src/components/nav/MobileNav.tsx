import { MobileNavType } from "@/types/generalTypes";
import { Contact, HomeIcon, Search, Settings } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const mobileNav: MobileNavType[] = [
	{ icon: <HomeIcon />, path: "/" },
	{ icon: <Search />, path: "/search" },
	{ icon: <Contact />, path: "/profile" },
	{ icon: <Settings />, path: "/setting" },
];

export default function MobileNav() {
	return (
		<div className="h-full w-full flex justify-evenly items-center bg-background ">
			{mobileNav.map((icon: MobileNavType, idx: number) => (
				<Link key={idx} href={icon.path}>
					{icon.icon}
				</Link>
			))}
			<ModeToggle/>
		</div>
	);
}
