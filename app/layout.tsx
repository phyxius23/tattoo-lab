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
	title: {
		template: "%s | InKae Tattoo Venice",
		default: "InKae Tattoo Venice",
	},
	//  title: 'InKae Tattoo Venice',
	description:
		"Siamo specializzati in Traditional Tattoo e Blackwork ma eseguiamo qualunque tipo di tatuaggio. Dai sfogo alla tua fantasia!",
	metadataBase: new URL("https://tattoo-lab.vercel.app/"),
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
