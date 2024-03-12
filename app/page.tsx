import { PageState } from "@/app/models";

import Cover from "@/app/components/Cover";
import ArtistsSection from "@/app/components/ArtistsSection";
import Gallery from "@/app/components/Gallery";
import Jumbotron from "@/app/components/Jumbotron";
import StudioSection from "@/app/components/StudioSection";

async function getData(): Promise<PageState> {
	const res = await fetch(process.env.NEXT_MYJSON_BASE_URL + process.env.NEXT_API_HOMEPAGE);
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
				{studioSection && <StudioSection data={studioSection} />}

				{/* Our Crew | Artists Section */}
				{crewSection && 
					<ArtistsSection
						title={crewSection.title}
						bgImage={crewSection.image}
						artists={crewSection.artists}
					/>		
				}

				{/* My Works | Gallery*/}
				{worksSection &&
					<Gallery
						title={worksSection.title}
						images={worksSection.images}
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
			</main>
		</>
	);
}
