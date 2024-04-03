import Profile from "@/components/profile/Profile";
import useFetchData from "@/hooks/fetchData";
import { useParams } from "next/navigation";

export default function Page() {

	// const username = useParams();

	// const { data, loading, err } = useFetchData(
	// 	`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/`
	// );
	return (
		<div className="w-full h-screen flex ">
			<Profile />
		</div>
	);
}
