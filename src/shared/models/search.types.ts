export type TMediaType =
	| "all"
	| "movie"
	| "podcast"
	| "music"
	| "musicVideo"
	| "audiobook"
	| "shortFilm"
	| "tvShow"
	| "software"
	| "ebook";

export interface IMediaType {
	value: TMediaType;
	label: string;
}

export interface ISearchParams {
	term?: string;
	media?: TMediaType;
}
