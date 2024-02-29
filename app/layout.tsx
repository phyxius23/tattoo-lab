import React from "react";
import type { Metadata } from "next";
import { Montserrat, Noto_Serif } from "next/font/google";

// Font Awesome
import 'font-awesome/css/font-awesome.min.css';

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

// export const metadata: Metadata = {
// 	title: {
// 		template: "%s | Acme Dashboard",
// 		default: "Acme Dashboard",
// 	},
// 	description: "The official Next.js Learn Dashboard built with App Router.",
// 	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
// };


// Metadata
export const metadata: Metadata = {
	metadataBase: new URL("https://tattoo-lab.vercel.app"),
	title: {
		template: "%s | InKae Tattoo Venice",
		default: "InKae Tattoo Venice",
	},
	description: "Benvenuto nell'universo artistico di InKae Tattoo, dove l'arte del tatuaggio si fonde con l'unicità di Venezia. Scopri come trasformare la tua esperienza veneziana con i nostri tatuaggi e piercing di alta qualità. Abbraccia la bellezza della nostra città attraverso la tua personale opera d'arte sulla pelle.",
	openGraph: {
		title: "InKae Tattoo Venice",
		description: "Benvenuto nell'universo artistico di InKae Tattoo, dove l'arte del tatuaggio si fonde con l'unicità di Venezia. Scopri come trasformare la tua esperienza veneziana con i nostri tatuaggi e piercing di alta qualità. Abbraccia la bellezza della nostra città attraverso la tua personale opera d'arte sulla pelle.",
		url: "/",
		siteName: "InKae Tattoo Venice",
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
			{/*<body className='overflow-x-hidden'>*/}
			<body>
				<MyNavbar />

				{children}

				<MyFooter />
			</body>
		</html>
	);
}
