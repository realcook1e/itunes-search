import { fetchMedia } from "@/shared/api";
import { getDuration } from "@/shared/lib/utils";
import { TMediaType } from "@/shared/models/search.types";
import { Card } from "@/shared/ui";

interface SearchListProps {
	term: string;
	media: TMediaType;
	explicit: "yes" | "no";
}

const SearchList: React.FC<SearchListProps> = async ({
	term,
	media,
	explicit,
}) => {
	const searchResults = await fetchMedia(
		new URLSearchParams({ term, media, explicit })
	);
	console.log(searchResults.data);

	return (
		<div className="container mt-10 h-[100%]">
			{!term ? (
				<h2 className="text-2xl">Введите поисковой запрос</h2>
			) : (
				<>
					<h2 className="text-2xl">
						Результаты поиска по запросу{" "}
						<strong>&quot;{term}&quot;</strong>
					</h2>

					{!searchResults.data.resultCount ? (
						<div className="flex justify-center items-center w-full h-[72vh] text-xl">
							Ничего не найдено
						</div>
					) : (
						<div className="lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-x-10 lg:gap-y-8 mt-8">
							{searchResults.data.results?.map(item => (
								<Card
									key={item.trackId || item.collectionId}
									trackName={item.trackName}
									artistName={item.artistName}
									artwork={item.artworkUrl100}
									duration={getDuration(item.trackTimeMillis)}
									shortDescription={item.shortDescription}
									link={item.trackViewUrl}
									country={item.country}
									explicitness={item.trackExplicitness}
								/>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default SearchList;
