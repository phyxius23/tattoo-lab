import { CrewState } from "@/app/models";

import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
import Jumbotron from "@/app/components/Jumbotron";

export const metadata = {
	title: "Aura Negativa",
	description: "Esplora il mondo enigmatico di Aura Negativa, tatuatrice specializzata in soggetti in bianco e nero. Con una predilezione per temi occulti e simbologia esoterica, ma anche per la bellezza del mondo naturale, Aura offre un'esperienza unica nel tatuaggio. I suoi stili distintivi includono linework, blackwork, dotwork e ornamentale. Scopri il suo portfolio e lasciati trasportare dall'atmosfera misteriosa e affascinante dei suoi tatuaggi.",
	// you can also set openGraph metadata
	openGraph: {
		title: "Aura Negativa | InKae Tattoo Venice",
		description: "Esplora il mondo enigmatico di Aura Negativa, tatuatrice specializzata in soggetti in bianco e nero. Con una predilezione per temi occulti e simbologia esoterica, ma anche per la bellezza del mondo naturale, Aura offre un'esperienza unica nel tatuaggio. I suoi stili distintivi includono linework, blackwork, dotwork e ornamentale. Scopri il suo portfolio e lasciati trasportare dall'atmosfera misteriosa e affascinante dei suoi tatuaggi.",
		url: "/artista/aura-negativa",
		siteName: "InKae Tattoo Venice",
		images: [
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1698761150/inkaeTattooVenice/home/w6rl8enepdi4bclhdl2w.webp',
			width: 800,
			height: 600,
		  },
		  {
			url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1698761150/inkaeTattooVenice/home/w6rl8enepdi4bclhdl2w.webp',
			width: 1800,
			height: 1600,
			alt: 'Aura Negativa mentre tatua presso InKae Tattoo',
		  },
		],
		locale: 'it_IT',
		type: 'website',
	}
};

async function getData(): Promise<CrewState> {
	const res = await fetch(process.env.API_ARTISTTWO);
	return res.json();
}

export default async function AuraNegativaPage() {
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
							scroll={500}
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
