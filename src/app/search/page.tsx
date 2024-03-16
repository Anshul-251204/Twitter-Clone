import Search from '@/components/Search/Search';
import Homee from '@/components/home/Home';
import DesktopNav from '@/components/nav/DesktopNav';
import MobileNav from '@/components/nav/MobileNav';
import React from 'react'

export default function Page() {
  return (
		<div className="w-full h-screen flex ">
			{/* //sidebar */}
			<div className="max-sm:hidden w-[20%] h-screen border-r flex justify-center pt-10">
				<DesktopNav />
			</div>

			{/* //main content */}
			<div className="w-full sm:w-[80%] flex justify-center ">
				<Search />
			</div>

			
			<div className="sm:hidden h-[8%] w-full absolute bottom-0 z-10 border-t ">
				<MobileNav />
			</div>
		</div>
  );
}
