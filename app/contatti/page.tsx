import React from "react";
import Image from "next/image";

import { PageState } from "@/app/models";

import Cover from "@/app/components/Cover";
import ArtistsSection from "@/app/components/ArtistsSection";
import Jumbotron from "@/app/components/Jumbotron";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
	title: "Contatti",
	description: "Contatti - Metadata Description",
	// you can also set openGraph metadata
	//  openGraph: {
	//      title: 'Piercing - Metadata Title',
	//      description: 'Piercing - Metadata Description',
	//  },
};

async function getData(): Promise<PageState> {
	const res = await fetch(process.env.API_CONTACT);
	return res.json();
}

export default async function ContactPage() {
	const { coverSection, crewSection, piercingSection } = await getData();

	return (
		<>
			{/* Hero Section */}
			{coverSection && (
				<Cover
					data={coverSection}
					addClass="cover--image"
				/>
			)}

			<main className="contact-main">
				<article className="article">
					{/* Form */}
					<section className="form-container py-20">
						<div className="container flex flex-wrap">
							<div className="basis-full md:basis-1/2">
								<div className="p-4">
									<p>
										Desideri avere altre informazioni su una realizzazione? Cerchi
										qualcos’altro o hai un’idea da sottoporci?
									</p>

									<p>
										Non esitare a contattarci! Sarà nostra cura ricontattarti nel minor
										tempo possibile.
									</p>

									<p>Compila il form qui sotto e sarai ricontattato quanto prima.</p>

									<Image
										src={coverSection.image.url}
										alt={coverSection.image.alt}
										width={1440}
										height={1060}
										className="img-fluid mt-12"
									/>
								</div>
							</div>

							<div className="basis-full md:basis-1/2 p-4">
								{/* -- FORM -- */}
								<ContactForm />
							</div>
						</div>
					</section>

					{/* Our Crew | Artists Section */}
					<ArtistsSection
						title={crewSection.title}
						bgImage={crewSection.image}
						artists={crewSection.artists}
					/>

					{/* Piercing | Jumbotron */}
					<Jumbotron
						data={piercingSection}
						addClass="piercing"
					/>
				</article>
			</main>
		</>
	);
}
