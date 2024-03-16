import DesktopNav from "@/components/nav/DesktopNav";
import MobileNav from "@/components/nav/MobileNav";
import Post from "@/components/post/Post";

export default function Home() {
  return (
   <div className="w-full h-screen flex ">

    {/* //sidebar */}
    <div className="max-sm:hidden w-[20%] h-screen border-r flex justify-center pt-10">
      <DesktopNav/>
    </div>

    {/* //main content */}
    <div className="w-full sm:w-[80%] ">
        <Post/>
    </div>

    {/* //mobile navbar */}
    <div className="sm:hidden h-[8%] w-full absolute bottom-0 z-10 border-t ">
      <MobileNav/>
    </div>
   </div>
  );
}
