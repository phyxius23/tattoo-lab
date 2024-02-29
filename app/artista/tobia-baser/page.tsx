import { CrewState } from "@/app/models";

import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
import Jumbotron from "@/app/components/Jumbotron";

export const metadata = {
	title: "Tobia Baser",
	description: "Scopri l'eclettismo artistico di Tobia Baser, rinomato tatuatore e celebre esponente della street art italiana. Attratto dai colori brillanti e dalle linee marcate, Tobia porta la sua esperienza dei graffiti nel mondo dei tattoo, specializzandosi negli stili tradizionale americano, giapponese e fine line. Esplora il suo portfolio e lasciati ispirare dalla sua visione unica del tatuaggio, dove arte e cultura si fondono per creare opere straordinarie e indimenticabili.",
	// you can also set openGraph metadata
	openGraph: {
		title: "Tobia Baser | InKae Tattoo Venice",
		description: "Scopri l'eclettismo artistico di Tobia Baser, rinomato tatuatore e celebre esponente della street art italiana. Attratto dai colori brillanti e dalle linee marcate, Tobia porta la sua esperienza dei graffiti nel mondo dei tattoo, specializzandosi negli stili tradizionale americano, giapponese e fine line. Esplora il suo portfolio e lasciati ispirare dalla sua visione unica del tatuaggio, dove arte e cultura si fondono per creare opere straordinarie e indimenticabili.",
		url: "/artista/tobia-baser",
		siteName: "InKae Tattoo Venice",
		images: [
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1709125658/inkaeTattooVenice/home/pbrgfukyp9zbovqwseoj.webp',
			width: 800,
			height: 600,
		  },
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1709125658/inkaeTattooVenice/home/pbrgfukyp9zbovqwseoj.webp',
			width: 1800,
			height: 1600,
			alt: 'Tobia Baser mentre tatua presso InKae Tattoo',
		  },
		],
		locale: 'it_IT',
		type: 'website',
	}
};

async function getData(): Promise<CrewState> {
	const res = await fetch(process.env.API_ARTISTTHREE!);
	return res.json();
}

export default async function TobiaBaserPage() {
	const {
		coverSection,
		biographySection,
		worksSection,
		sketchesSection,
		piercingSection,
		contactSection,
	} = await getData();

	return (
		<>
			{/* Hero Section */}
			{coverSection && (
				<Cover
					data={coverSection}
					addClass="cover--image"
				/>
			)}

			<main className="artist-main">
				<article className="article">
					{/* Biography | MediaText */}
					<section className="container py-12 md:py-20">
						<MediaText
							data={biographySection.mediaText[0]}
							addClass="biography"
						/>
					</section>

					{/* My Works | Gallery*/}
					<Gallery
						title={worksSection.title}
						images={worksSection.images}
					/>

					{/* My Sketches | Gallery*/}
					{/* <Gallery
						title={sketchesSection.title}
						images={sketchesSection.images}
					/> */}

					{/* Piercing | Jumbotron */}
					<Jumbotron
						data={piercingSection}
						addClass="piercing"
					/>

					{/* Contact Us | Jumbotron */}
					<Jumbotron
						data={contactSection}
						addClass="contact"
					/>
				</article>
			</main>
		</>
	);
}
