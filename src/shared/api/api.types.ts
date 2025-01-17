export interface IServerResponse {
	resultCount: number;
	results: IMediaData[];
}

interface IMediaData {
	artistName: string;
	artworkUrl100: string;
	trackId: number;
	trackName: string;
	trackPrice: number;
	collectionId: number;
	country: string;
	currency: string;
	shortDescription: string;
	longDescription: string;
	trackExplicitness: "explicit" | "notExplicit";
	trackTimeMillis: number;
	trackViewUrl: string;
}
