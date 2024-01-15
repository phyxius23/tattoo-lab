"use client";

import Link from "next/link";
import Image from "next/image";

import { ImageState } from "@/app/models";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { useGSAP } from "@gsap/react";
import { fadeUp } from "@/app/utils";

export interface GalleryProps {
	title: string;
	images: ImageState[];
}

export default function Gallery({ title, images }: GalleryProps) {
	useGSAP(() => {
		fadeUp();
	}, {});

	return (
		<section className="gallery py-20">
			<div className="container">
				<h2 className="text-center mb-12 fade-up">{title}</h2>

				<Splide
					aria-label="My Favorite Images"
					options={{
						mediaQuery: "min",
						perPage: 1,
						rewind: true,
						pagination: false,
						autoWidth: false,
						type: "loop",
						loop: true,
						gap: "2.5rem",
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
					{images?.map((image) => {
						return (
							<SplideSlide
								key={image.id}
								className="fade-up"
							>
								<Link
									href=""
									className="image-link shadow-lg"
								>
									<figure className="relative">
										<Image
											src={image.url}
											alt={image.alt}
											width={image.width}
											height={image.height}
											className="img-fluid"
										/>
										<div className="gallery__label">
											<figcaption>{image.title}</figcaption>
										</div>
									</figure>
								</Link>
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		</section>
	);
}
