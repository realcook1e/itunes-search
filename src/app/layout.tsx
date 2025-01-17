import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "iTunes search",
	description:
		"App for searching media content, allowing users to search for music, books, and other media using iTunes Search API",
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>
				<Suspense>
					<Header />
					{children}
				</Suspense>
			</body>
		</html>
	);
}
