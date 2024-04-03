"use client"
import Loadinig from "@/components/loader/Loadinig";
import Profile from "@/components/profile/Profile";
import useFetchData from "@/hooks/fetchData";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function Page() {
	const {username} = useParams();

	const { data, loading, err } = useFetchData(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${username}`
	);

    if(loading) return <Loadinig/>
    if(Object.keys(data).length === 0) return toast.error("not fount ")
    

	return (
		<div className="w-full h-screen flex ">
			<Profile data={data} />
		</div>
	);
}
