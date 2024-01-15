"use client";

import Image from "next/image";

import { MediaTextState } from "@/app/models";

import { useGSAP } from "@gsap/react";
import { slideToScroll, slideToScrollPage } from "@/app/utils";

// Interface delle Props
export interface MediaTextProps {
	data: MediaTextState;
	addClass?: string;
	scroll?: number;
}

export default function MediaText({ data, addClass, scroll }: MediaTextProps) {
	const { image, title, paragraphs } = data;

	useGSAP(() => {
		if (addClass === "biography") {
			slideToScrollPage();
		} else {
			slideToScroll(addClass, scroll);
		}
	}, []);

	return (
		<div className={`media-text ${addClass ? addClass : ""}`}>
			<div className="basis-full md:basis-1/2 media">
				<figure>
					<Image
						src={image.url}
						alt={image.alt}
						// width={image.width}
						// height={image.height}
						fill
						style={{ objectFit: "cover" }}
						// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						sizes="100vw, (min-width: 768px) 50vw"
						// style={{ width: "100%", height: "auto" }}
						// className="img-fluid"
					/>
				</figure>
			</div>
			<div className="basis-full md:basis-1/2 text">
				<div className="p-8 md:px-16">
					{title && <h3 className="text-gold mb-2">{title}</h3>}
					{paragraphs.map((el) => (
						<p key={el.id}>{el.text}</p>
					))}
				</div>
			</div>
		</div>
	);
}
