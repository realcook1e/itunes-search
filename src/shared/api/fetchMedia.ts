import axios from "axios";
import { IServerResponse } from "./api.types";

export const fetchMedia = async (params?: URLSearchParams) => {
	return await axios.get<IServerResponse>(
		`https://itunes.apple.com/search?${params?.toString()}`
	);
};
