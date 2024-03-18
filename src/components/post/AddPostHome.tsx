import { Plus } from "lucide-react";
import { Button } from "../ui/button";


export default function AddPostHome() {
  return (
		<div className="max-sm:hidden w-ful  h-[15%] border rounded-lg flex p-4 pt-2">

      

			<div className="w-[15%] flex items-center ">
				<img
        className=" w-[50px] h-[50px] rounded-full "
					src="https://images.unsplash.com/photo-1661174585122-83a2909163ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</div>
      <div className=" w-full flex flex-col ">

        <div>
          <input
          className=" bg-background p-4 w-full outline-none border-b mb-2 "
          placeholder="What's Happening"/>
        </div>

        <Button
        variant={"outline"}
        className="self-end "
        >Add <Plus size={"1rem"}/> </Button>
         
      </div>
		</div>
  );
}
