"use client";

import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => {
	return (
		<ThreeDots
			height="80"
			width="80"
			radius="9"
			color="green"
			ariaLabel="loading"
			wrapperClass="flex items-center justify-center h-[70vh]"
		/>
	);
};

export default Loader;
