import Link from "next/link";
import Image from "next/image";

import { JumbotronState } from "@/app/models";

export interface JumbotronProps {
	data: JumbotronState;
	addClass?: string;
}

export default async function Jumbotron({ data, addClass }: JumbotronProps) {
	const { title, image, link, description } = data;
	return (
		<section className={`${addClass ? addClass : ""} bg-[#0f1010] py-20`}>
			{image && (
				<Image
					src={image.url}
					alt={image.alt}
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
						objectPosition: "0 center",
					}}
				/>
			)}

			<div className="container flex justify-center text-center fade-up">
				<div className="basis-11/12">
					<h2 className="text-2 mb-4">{title}</h2>

					{description && <p className="text-4 mb-6">{description}</p>}

					<Link
						href={link.href}
						className="btn text-5"
					>
						{link.text}
					</Link>
				</div>
			</div>
		</section>
	);
}
