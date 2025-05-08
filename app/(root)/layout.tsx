export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="text-5xl flex items-center">
			SIDEBAR
			{children}
		</main>
	);
}
