"use client";

import {
	usePathname,
	useSearchParams,
	useRouter,
} from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/shared/ui";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/ui/select";
import { TMediaType, mediaType } from "@/shared/models";

const Search: React.FC = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const params = new URLSearchParams(searchParams);

	const handleSearchParamsChange = useDebouncedCallback(
		(param: "term" | "media" | "explicit", value: string) => {
			if (param === "term") {
				if (value) {
					params.set("term", value);
				} else {
					params.delete("term");
				}
			}

			if (param === "media") {
				if (value !== "all") {
					params.set("media", value);
				} else {
					params.delete("media");
				}
			}

			if (param === "explicit") {
				params.set("explicit", value);
			}

			replace(`${pathname}?${params.toString()}`);
		},
		500
	);

	return (
		<div className="container">
			<div
				className="flex gap-4 md:gap-10
			md:justify-start max-md:flex-col md:items-center flex-wrap py-4">
				<Input
					className="w-[18rem]"
					type="search"
					placeholder="Search..."
					customIcon={<SearchIcon />}
					onChange={evt => {
						handleSearchParamsChange("term", evt.target.value);
					}}
					defaultValue={searchParams.get("term")?.toString()}
				/>
				<Select
					onValueChange={(value: TMediaType) => {
						handleSearchParamsChange("media", value);
					}}
					defaultValue={searchParams.get("media")?.toString()}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select media type" />
					</SelectTrigger>
					<SelectContent>
						{mediaType.map(item => (
							<SelectItem
								key={item.value}
								value={item.value}>
								{item.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Select
					onValueChange={(value: "yes" | "no") => {
						handleSearchParamsChange("explicit", value);
					}}
					defaultValue={searchParams
						.get("explicit")
						?.toString()}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Include explicit?" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="yes">Yes</SelectItem>
						<SelectItem value="no">No</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default Search;
