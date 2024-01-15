import { HomeState } from "@/app/models";

import Cover from "@/app/components/Cover";
import ArtistsSection from "@/app/components/ArtistsSection";
import Gallery from "@/app/components/Gallery";
import Jumbotron from "@/app/components/Jumbotron";
import StudioSection from "@/app/components/StudioSection";

async function getData(): Promise<HomeState> {
	// const res = await fetch(process.env.API_HOMEPAGE);
	const res = await fetch(
		"https://my-json-server.typicode.com/phyxius23/tattoo-be-homepage/homePage"
	);
	return res.json();
}

export default async function Home() {
	const {
		coverSection,
		studioSection,
		crewSection,
		worksSection,
		piercingSection,
		contactSection,
	} = await getData();

	return (
		<>
			{/* Hero Section */}
			{coverSection && <Cover data={coverSection} />}

			<main>
				{/* Biography | MediaText */}
				<StudioSection data={studioSection} />

				{/* Our Crew | Artists Section */}
				<ArtistsSection
					title={crewSection.title}
					bgImage={crewSection.image}
					artists={crewSection.artists}
				/>

				{/* My Works | Gallery*/}
				<Gallery
					title={worksSection.title}
					images={worksSection.images}
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
			</main>
		</>
	);
}
