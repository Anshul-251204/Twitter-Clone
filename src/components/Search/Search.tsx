import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import Account from "./Account";

export default function Search() {
	return (
		<div className="w-full h-full p-4 pt-10">
			<div className="flex gap-4">
				<Input placeholder="Search user..." />
				<Button>
					{" "}
					<SearchIcon className="max-sm:hidden" />{" "}
					<span className="sm:ml-4">Search</span>
				</Button>
			</div>

			<div className="mt-4 h-[95%] overflow-y-auto sm:no-scrollbar">
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
				<Account />
			</div>
		</div>
	);
}
