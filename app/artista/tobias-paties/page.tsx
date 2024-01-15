import { CrewState } from "@/app/models";
import Cover from "@/app/components/Cover";
import MediaText from "@/app/components/MediaText";
import Gallery from "@/app/components/Gallery";
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

async function getData(): Promise<CrewState> {
	const res = await fetch(process.env.API_ARTISTONE);
	// const res = await fetch(
	// 	"https://my-json-server.typicode.com/phyxius23/tattoo-be-artistone/tommyGrossiPage"
	// );
	return res.json();
}

export default async function TobiasPatiesPage() {
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
