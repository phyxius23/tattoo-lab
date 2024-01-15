'use client';

import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {ArtistState, ImageState} from "@/app/models";
import {useGSAP} from "@gsap/react";
import {fadeUp} from "@/app/utils";

export interface ArtistsSectionProps {
    title: string;
    bgImage: ImageState;
    artists: ArtistState[];
}

export default function ArtistsSection({ title, bgImage, artists}: ArtistsSectionProps) {

    useGSAP(() => {
        fadeUp();
    }, {})

    return (
        <section
            className="artists py-20 relative"
        >
            <Image
                src={bgImage.url}
                alt={bgImage.alt}
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: '0 center',
                }}
            />

            <div className="container relative z-20">
                <h2 className="text-center mb-12 fade-up">{title}</h2>

                <Splide
                    aria-label="My Favorite Imagess"
                    options={{
                        mediaQuery: "min",
                        perPage: 1,
                        rewind: true,
                        pagination: false,
                        autoWidth: false,
                        type: "loop",
                        loop: true,
                        gap: '2.5rem',
                        breakpoints: {
                            768: {
                                perPage: 2,
                            },
                            1024: {
                                perPage: 3,
                            },
                        },
                    }}
                >
                    {
                        artists?.map((artist) => {
                            return (
                                <SplideSlide key={artist.id} className="">
                                    <div className="artists__card fade-up">
                                        <figure>
                                            <Link href={`/artista/${artist.title.toLowerCase().replace(' ', '-')}`}>
                                                <Image
                                                    src={artist.image.url}
                                                    alt={artist.image.alt}
                                                    width={artist.image.width}
                                                    height={artist.image.height}
                                                    className='img-fluid mb-10'
                                                />
                                            </Link>
                                        </figure>

                                        <h3 className="text-gold mb-4">{artist.title}</h3>
                                        <p className="uppercase text-4">{artist.description}</p>
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </section>
    )
}