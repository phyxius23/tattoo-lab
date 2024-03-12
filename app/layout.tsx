import React from "react";
import type { Metadata } from "next";
import { Montserrat, Noto_Serif } from "next/font/google";

// CSS
import "@splidejs/react-splide/css"; // Default Splide Theme
import "./globals.css";

// Components
import MyNavbar from "@/app/components/MyNavbar";
import MyFooter from "@/app/components/MyFooter";

// Google Fonts
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-montserrat",
	display: "swap",
});
const noto_serif = Noto_Serif({
	subsets: ["latin"],
	variable: "--font-noto-serif",
	display: "swap",
});

// Metadata
export const metadata: Metadata = {
	metadataBase: new URL("https://www.inkaetattoovenezia.it/"),
	title: {
		template: "%s | InKae Tattoo Venezia",
		default: "InKae Tattoo Venezia",
	},
	description: "Benvenuto nell'universo artistico di InKae Tattoo, dove l'arte del tatuaggio si fonde con l'unicità di Venezia. Scopri come trasformare la tua esperienza veneziana con i nostri tatuaggi e piercing di alta qualità. Abbraccia la bellezza della nostra città attraverso la tua personale opera d'arte sulla pelle.",
	openGraph: {
		title: "InKae Tattoo Venezia",
		description: "Benvenuto nell'universo artistico di InKae Tattoo, dove l'arte del tatuaggio si fonde con l'unicità di Venezia. Scopri come trasformare la tua esperienza veneziana con i nostri tatuaggi e piercing di alta qualità. Abbraccia la bellezza della nostra città attraverso la tua personale opera d'arte sulla pelle.",
		url: "/",
		siteName: "InKae Tattoo Venezia",
		images: [
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1698761150/inkaeTattooVenice/home/z6p8jeemhzd3pppqe78m.webp',
			width: 800,
			height: 600,
		  },
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1698761150/inkaeTattooVenice/home/z6p8jeemhzd3pppqe78m.webp',
			width: 1800,
			height: 1600,
			alt: 'Piratessa di InKae Tattoo',
		  },
		],
		locale: 'it_IT',
		type: 'website',
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="it"
			className={`${montserrat.variable} ${noto_serif.variable}`}
		>
			<body>
				<MyNavbar />

				{children}

				<MyFooter />
			</body>
		</html>
	);
}
