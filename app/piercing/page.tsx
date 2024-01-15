import { PageState } from "@/app/models";

import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
import ArtistsSection from "@/app/components/ArtistsSection";
import Jumbotron from "@/app/components/Jumbotron";

// export const metadata = {
//     title: 'Piercing - Metadata Title',
//     description: 'Piercing - Metadata Description',
//     // you can also set openGraph metadata
//     openGraph: {
//         title: 'Piercing - Metadata Title',
//         description: 'Piercing - Metadata Description',
//     },
// }

async function getData(): Promise<PageState> {
	const res = await fetch(process.env.API_PIERCING);
	// const res = await fetch(
	// 	"https://my-json-server.typicode.com/phyxius23/tattoo-be-piercing-contact/piercingPage"
	// );
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
