import { CrewState } from "@/app/models";

import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
import Jumbotron from "@/app/components/Jumbotron";

export const metadata = {
	title: "Tommy Grossi",
	description: "Scopri l'arte del tatuaggio traditional con un tocco marinaresco unico da Tommy Grossi, il talentuoso tatuatore e titolare di InKae Tattoo. Con sede a Venezia, Tommy infonde la sua passione per il tema marinaresco nei suoi tatuaggi, offrendo esperienze artistiche autentiche e indimenticabili. Esplora il suo portfolio e prenota una consulenza per trasformare la tua visione in un capolavoro permanente.",
	// you can also set openGraph metadata
	openGraph: {
		title: "Tommy Grossi | InKae Tattoo Venice",
		description: "Scopri l'arte del tatuaggio traditional con un tocco marinaresco unico da Tommy Grossi, il talentuoso tatuatore e titolare di InKae Tattoo. Con sede a Venezia, Tommy infonde la sua passione per il tema marinaresco nei suoi tatuaggi, offrendo esperienze artistiche autentiche e indimenticabili. Esplora il suo portfolio e prenota una consulenza per trasformare la tua visione in un capolavoro permanente.",
		url: "/artista/tommy-grossi",
		siteName: "InKae Tattoo Venice",
		images: [
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1698761154/inkaeTattooVenice/home/hersh4jbbgutfwkbzkhy.webp',
			width: 800,
			height: 600,
		  },
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1698761154/inkaeTattooVenice/home/hersh4jbbgutfwkbzkhy.webp',
			width: 1800,
			height: 1600,
			alt: 'Tommy Grossi mentre tatua presso InKae Tattoo',
		  },
		],
		locale: 'it_IT',
		type: 'website',
	}
};

async function getData(): Promise<CrewState> {
	const res = await fetch(process.env.API_ARTISTONE);
	return res.json();
}

export default async function TommyGrossiPage() {
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
					<Gallery
						title={sketchesSection.title}
						images={sketchesSection.images}
					/>

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
