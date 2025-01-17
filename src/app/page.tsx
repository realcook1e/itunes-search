import SearchList from "@/components/SearchList";
import { TMediaType } from "@/shared/models/search.types";
import { Loader } from "@/shared/ui";
import { Suspense } from "react";

interface HomeProps {
	searchParams?: Promise<{
		term: string;
		media: TMediaType;
		explicit: "yes" | "no";
	}>;
}

export default async function Home(props: HomeProps) {
	const searchParams = await props.searchParams;
	const term = searchParams?.term || "";
	const media = searchParams?.media || "all";
	const explicit = searchParams?.explicit || "yes";

	return (
		<Suspense
			key={Date.now()}
			fallback={<Loader />}>
			<SearchList
				term={term}
				media={media}
				explicit={explicit}
			/>
		</Suspense>
	);
}
