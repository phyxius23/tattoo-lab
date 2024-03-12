"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { CoverState } from "@/app/models";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeIn, textReveal } from "@/app/utils";

export interface CoverProps {
	data: CoverState;
	addClass?: string;
}

export default function Cover({ data, addClass }: CoverProps) {
	const { title, subtitle, link, image } = data;

	const containerRef = useRef(null);
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const btnRef = useRef(null);

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);

			textReveal(titleRef, 0);

			// eseguo GSAP solo se gli elementi esistono
			if (subtitleRef.current) {
				textReveal(subtitleRef, 0.3);
			}
			if (btnRef.current) {
				fadeIn(btnRef, 0.6);
			}
		},
		{ scope: containerRef }
	);

	return (
		<header className={`cover ${addClass ? addClass : ""}`}>
			<Image
				src={image.url}
				alt={image.alt}
				fill
				sizes="100vw"
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
				priority={true}
				fetchPriority="high"
			/>

			<div
				className="cover__content"
				ref={containerRef}
			>
				<h1
					ref={titleRef}
					className="uppercase text-gold text-reveal"
					dangerouslySetInnerHTML={{ __html: title }}
				></h1>

				{subtitle && (
					<h2
						ref={subtitleRef}
						className="cover__subtitle text-reveal mb-4"
						dangerouslySetInnerHTML={{ __html: subtitle }}
					>
					</h2>
				)}

				{link && (
					<Link
						href={link.href}
						className="btn fade-in"
						ref={btnRef}
					>
						{link.text}
					</Link>
				)}
			</div>
		</header>
	);
}
