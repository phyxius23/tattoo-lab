import Link from "next/link";

export default async function Contact() {
	return (
		<section className="bg-[#0f1010] py-20">
			<div className="container flex justify-center text-center animate__animated animate__fadeInUp">
				<div className="basis-11/12">
					<h2 className="text-2 mb-4">
						Contattaci per discutere di come possiamo trasformare in realtà quell&apos;idea
						che ti frulla per la testa
					</h2>

					<Link
						href="/contatti"
						className="btn text-5"
					>
						Contattaci per saperne di più
					</Link>
				</div>
			</div>
		</section>
	);
}
