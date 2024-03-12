import Image from "next/image";
import ArtistsSection from "../components/ArtistsSection";
import Cover from "../components/Cover";
import Jumbotron from "../components/Jumbotron";
import { PageState } from "../models";
import Link from "next/link";

export const metadata = {
	title: "Contatti",
	description: "Contatti - Metadata Description",
	// you can also set openGraph metadata
	//  openGraph: {
	//      title: 'Contatti - Metadata Title',
	//      description: 'Contatti - Metadata Description',
	//  },
};

async function getData(): Promise<PageState> {
    const res = await fetch(process.env.NEXT_MYJSON_BASE_URL + process.env.NEXT_API_CONTACTPAGE);
	return res.json();
}

export default async function Contact() {
    const { coverSection, crewSection, piercingSection } = await getData();

    return (
        <>
            {/* Hero Section */}
			<Cover
				data={coverSection}
				addClass="cover--image"
			/>

            <main className="contact-main">
                <article className="article">
                    <section className="contact-container py-20">
                            <div className="container flex flex-wrap justify-center">
                                <div className="basis-full md:basis-2/3">
                                    <div className="p-4">
                                        <p>
                                            Desideri avere altre informazioni su una realizzazione? Cerchi
                                            qualcos’altro o hai un’idea da sottoporci?
                                        </p>

                                        <p>
                                            Potete contattarci tramite telefono, whatsapp e instagram!
                                        </p>
                                    </div>
                                </div>

                                <div className="basis-full md:basis-2/3 my-8 md:my-12">
                                    <div className="p-4">
                                        <div className="flex justify-around">
                                            {/* Telefono */}
                                            <Link href="tel:+39 328 66 10 341">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-12 mx-auto hover:text-gold transition-all" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"/>
                                                </svg>
                                            </Link>

                                            {/* Whatsapp */}
                                            <Link href="tel:+39 328 66 10 341">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-12 mx-auto hover:text-gold transition-all" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fillRule="evenodd"/>
                                                </svg>
                                            </Link>

                                            {/* Instagram */}
                                            <Link href="https://www.instagram.com/inkae_tattoo_venezia/?hl=it" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-12 mx-auto hover:text-gold transition-all" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/>
                                                    <path fill="currentColor" d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="basis-full md:basis-2/3">
                                    <div className="p-4">
                                        <Image
                                            src={coverSection.image.url}
                                            alt={coverSection.image.alt}
                                            width={1440}
                                            height={1060}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                    </section>

                    {/* Our Crew | Artists Section */}
                    {crewSection && 
                        <ArtistsSection
                            title={crewSection.title}
                            bgImage={crewSection.image}
                            artists={crewSection.artists}
                        />		
                    }

					{/* Piercing | Jumbotron */}
                    {piercingSection &&
                        <Jumbotron
                            data={piercingSection}
                            addClass="piercing"
                        />
                    }
                </article>
            </main>
        </>
    )
}