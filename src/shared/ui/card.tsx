import Image from "next/image";

interface CardProps {
	trackName: string;
	artistName: string;
	artwork?: string;
	duration: string;
	explicitness: "notExplicit" | "explicit";
	shortDescription?: string;
	link?: string;
	country?: string;
}

const Card: React.FC<CardProps> = ({
	trackName,
	artistName,
	artwork,
	duration,
	shortDescription,
	link,
	explicitness,
	country,
}) => {
	return (
		<div className="rounded-3xl border py-5 px-5 bg-gradient-to-b from-slate-300/20 to-slate-300/50 max-w-[100%] max-lg:mb-5 shadow-md flex items-center flex-col">
			<h4
				className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-full text-center"
				title={artistName}>
				{artistName}
			</h4>
			<h3
				className="font-bold text-lg text-ellipsis overflow-hidden whitespace-nowrap w-full text-center"
				title={trackName}>
				{trackName}
			</h3>
			<div className="flex-1 w-full">
				{artwork && (
					<div className="mt-4 w-[200px] h-[200px] object-cover overflow-hidden mx-auto">
						<Image
							src={artwork}
							alt={artistName}
							width={200}
							height={200}
						/>
					</div>
				)}
				<div className="mt-4 text-center">{duration}</div>
				{country && (
					<div className="mt-1 text-center">{country}</div>
				)}

				{shortDescription && (
					<p className="text-sm text-gray-600 mt-3 ">
						{shortDescription}
					</p>
				)}
			</div>
			<div className="mt-5 text-center">
				{explicitness === "explicit" && (
					<div className="font-bold">
						Explicit (<b className="text-red-600">18+</b>)
					</div>
				)}

				{link && (
					<a
						href={link}
						target="_blank"
						className="font-bold text-sky-500">
						See more
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
