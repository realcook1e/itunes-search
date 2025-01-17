"use client";

import clsx from "clsx";

import React, { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
	type?:
		| "text"
		| "password"
		| "email"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "date"
		| "time";
	className?: string;
	ref?: React.Ref<HTMLInputElement>;
	customIcon?: React.ReactElement;
}

const Input: React.FC<InputProps> = ({
	ref,
	type,
	className = "",
	customIcon,
	...props
}) => {
	return (
		<div
			className={clsx(
				"relative flex items-center gap-2 border border-white/30 pl-4 rounded-2xl pr-5 h-8 focus-within:border-white transition-colors duration-300",
				className
			)}>
			{customIcon}
			<input
				type={type}
				className="w-full h-full bg-foreground"
				ref={ref}
				{...props}
			/>
		</div>
	);
};

export default Input;
