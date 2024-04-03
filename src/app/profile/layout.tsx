import React, { ReactNode } from "react";
import Page from "./page";
import DesktopNav from "@/components/nav/DesktopNav";
import MobileNav from "@/components/nav/MobileNav";

export default function layout({ children }: {children:ReactNode}) {
	return (
		<div className="w-full h-screen flex ">
			<div className="max-sm:hidden w-[20%] h-screen border-r flex justify-center pt-10">
				<DesktopNav />
			</div>

			<div className="w-full sm:w-[80%] flex justify-center ">
				{children}
			</div>

			<div className="sm:hidden h-[8%] w-full absolute bottom-0 z-10 border-t ">
				<MobileNav />
			</div>
		</div>
	);
}
