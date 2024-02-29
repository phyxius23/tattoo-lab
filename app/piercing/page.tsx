import { PageState } from "@/app/models";

import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
import ArtistsSection from "@/app/components/ArtistsSection";
import Jumbotron from "@/app/components/Jumbotron";

export const metadata = {
	title: "Piercing",
	description: "Scopri il servizio di piercing di altissima qualità offerto da Sebap Pesce presso lo studio InKae Tattoo. Con oltre un decennio di esperienza nel settore, Sebap ti garantisce professionalità e sicurezza. Scegli la precisione e l'esperienza per il tuo piercing.",
	// you can also set openGraph metadata;
	openGraph: {
		title: "Piercing | InKae Tattoo Venice",
		description: "Scopri il servizio di piercing di altissima qualità offerto da Sebap Pesce presso lo studio InKae Tattoo. Con oltre un decennio di esperienza nel settore, Sebap ti garantisce professionalità e sicurezza. Scegli la precisione e l'esperienza per il tuo piercing.",
		url: "/piercing",
		siteName: "InKae Tattoo Venice",
		images: [
			{
				url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1709138333/inkaeTattooVenice/piercing/inrmaefckkayuiz7lenn.webp',
				width: 800,
				height: 600,
			},
			{
				url: 'https://res.cloudinary.com/dqnclur2i/image/upload/v1709138333/inkaeTattooVenice/piercing/inrmaefckkayuiz7lenn.webp',
				width: 1800,
				height: 1600,
				alt: 'Piercing sulla bocca eseguito da Sebap Pesce presso InKae Tattoo',
			},
		],
		locale: 'it_IT',
		type: 'website',
	}
};

async function getData(): Promise<PageState> {
	const res = await fetch(process.env.API_PIERCING);
	return res.json();
}

export default async function PiercingPage() {
	const { coverSection, biographySection, crewSection, worksSection, contactSection } =
		await getData();

	return (
		<>
			{/* Hero Section */}
			{coverSection && (
				<Cover
					data={coverSection}
					addClass="cover--image"
				/>
			)}

			<main className="piercing-main">
				<article className="article">
					{/* Biography | MediaText */}
					{biographySection && (
						<section className="container py-12 md:py-20">
							<MediaText
								data={biographySection.mediaText[0]}
								addClass="biography"
								// scroll={500}
							/>
						</section>
					)}

					{/* My Works | Gallery*/}
					{worksSection && (
						<Gallery
							title={worksSection.title}
							images={worksSection.images}
						/>
					)}

					{/* Our Crew | Artists Section */}
					<ArtistsSection
						title={crewSection.title}
						bgImage={crewSection.image}
						artists={crewSection.artists}
					/>

					{/* Contact Us | Jumbotron */}
					{contactSection && (
						<Jumbotron
							data={contactSection}
							addClass="contact"
						/>
					)}
				</article>
			</main>
		</>
	);
}
