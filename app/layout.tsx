import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const ibmPlex = IBM_Plex_Serif({
	variable: "--font-ibm-plex-serif",
	weight: ["400", "700"],
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Finora",
	description: "Finora | A better way to manage your finances",
	icons: {
		icon: "/icons/logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${ibmPlex.variable} ${inter.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
