import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Duration } from "luxon";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getDuration(ms: number) {
	const duration = Duration.fromMillis(ms).shiftTo(
		"hours",
		"minutes",
		"seconds"
	);

	if (duration.hours) {
		return duration.toFormat("hh:mm:ss");
	}

	return duration.toFormat("mm:ss");
}
