import { PostType } from "@/types/generalTypes";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
	const [data, setdata] = useState<PostType[]>([]);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState("");

	useEffect(() => {
		const fetchdata = async () => {
			try {
				const res = await axios.get(url);

				setdata(res.data.data);
				setLoading(!loading);
			} catch (error: any) {
				setLoading(false);
				setErr(error);
				console.log(error);
				
			}
		};
		fetchdata();
	}, []);

	return { data, loading, err };
};

export default useFetchData;
