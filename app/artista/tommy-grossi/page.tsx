import { PageState } from "@/app/models";

import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
import Jumbotron from "@/app/components/Jumbotron";

export const metadata = {
	title: "Tommy Grossi",
	description: "Scopri l'arte del tatuaggio traditional con un tocco marinaresco unico da Tommy Grossi, il talentuoso tatuatore e titolare di InKae Tattoo. Con sede a Venezia, Tommy infonde la sua passione per il tema marinaresco nei suoi tatuaggi, offrendo esperienze artistiche autentiche e indimenticabili. Esplora il suo portfolio e prenota una consulenza per trasformare la tua visione in un capolavoro permanente.",
	// you can also set openGraph metadata
	openGraph: {
		title: "Tommy Grossi | InKae Tattoo Venezia",
		description: "Scopri l'arte del tatuaggio traditional con un tocco marinaresco unico da Tommy Grossi, il talentuoso tatuatore e titolare di InKae Tattoo. Con sede a Venezia, Tommy infonde la sua passione per il tema marinaresco nei suoi tatuaggi, offrendo esperienze artistiche autentiche e indimenticabili. Esplora il suo portfolio e prenota una consulenza per trasformare la tua visione in un capolavoro permanente.",
		url: "/artista/tommy-grossi",
		siteName: "InKae Tattoo Venezia",
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

async function getData(): Promise<PageState> {
	const res = await fetch(process.env.NEXT_MYJSON_BASE_URL + process.env.NEXT_API_TOMMYPAGE);
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
			<Cover
				data={coverSection}
				addClass="cover--image"
			/>

			<main className="artist-main">
				<article className="article">
					{/* Biography | MediaText */}
					<section className="container py-12 md:py-20">
						{biographySection &&
							<MediaText
								data={biographySection.mediaText[0]}
								addClass="biography"
							/>
						}
					</section>

					{/* My Works | Gallery*/}
					{worksSection &&
						<Gallery
							title={worksSection.title}
							images={worksSection.images}
						/>
					}

					{/* My Sketches | Gallery*/}
					{sketchesSection &&
						<Gallery
							title={sketchesSection.title}
							images={sketchesSection.images}
						/>
					}

					{/* Piercing | Jumbotron */}
					{piercingSection &&
						<Jumbotron
							data={piercingSection}
							addClass="piercing"
						/>
					}

					{/* Contact Us | Jumbotron */}
					{contactSection &&
						<Jumbotron
							data={contactSection}
							addClass="contact"
						/>
					}
				</article>
			</main>
		</>
	);
}
