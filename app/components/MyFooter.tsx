import Image from "next/image";
import Link from "next/link";
import CookieBanner from "./CookieBanner";

export default function MyFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<CookieBanner />
			<div className="footer-contact container">
				<div className="basis-full md:basis-1/3 p-2.5">
					<h4 className="text-6 font-bold mb-2">InKae di Tommy Grossi</h4>

					<ul className="text-6">
						<li>
							<Image
								src="/icons/location.svg"
								alt=""
								width={16}
								height={16}
							/>
							<span>Sestiere Cannaregio, 5306/b - Venezia</span>
						</li>
						<li>
							<Image
								src="/icons/book.svg"
								alt=""
								width={16}
								height={16}
							/>
							<span>P.IVA 04475280279</span>
						</li>
						<li>
							<Image
								src="/icons/book.svg"
								alt=""
								width={16}
								height={16}
							/>
							<span>R.E.A. Venezia n. 434142</span>
						</li>
					</ul>
				</div>

				<div className="basis-full md:basis-1/3 p-2.5">
					<h4 className="text-6 font-bold uppercase mb-2">Contatti</h4>

					<ul className="footer-contact__menu text-6">
						<li>
							<Image
								src="/icons/call.svg"
								alt=""
								width={16}
								height={16}
							/>
							<Link
								href="tel:+39 328 66 10 341"
								className="text-6 text-white"
							>
								+39 328 66 10 341
							</Link>
						</li>
						<li>
							<Image
								src="/icons/logo-instagram.svg"
								alt=""
								width={16}
								height={16}
							/>
							<Link
								href="https://www.instagram.com/inkae_tattoo_venezia/?hl=it"
								target="_blank"
								className="text-6 text-white"
							>
								inkae_tattoo_venezia
							</Link>
						</li>
					</ul>
				</div>

				<div className="basis-full md:basis-1/3 p-2.5">
					<h4 className="text-6 font-bold uppercase mb-2">Orari</h4>

					<ul className="footer-contact__menu text-6">
						<li>Vedi pagina Instagram per orari aggiornati</li>
					</ul>
				</div>
			</div>

			<div className="footer-privacy">
				<div className="footer-privacy__content container">
					<div className="basis-full px-2.5 md:basis-5/12">
						<h5 className="text-6 font-normal">
							INKAE di Tommaso Grossi © Copyright {year}. Tutti i diritti riservati.
						</h5>
					</div>

					<div className="basis-full px-2.5 md:basis-5/12 md:text-right">
						{/* <p className="text-6">
							<Link
								className="text-6 me-1"
								href=""
								target="_blank"
							>
								Privacy Policy
							</Link>
								e
							<Link
								className="text-6 ms-1"
								href=""
								target="_blank"
							>
								Cookie Policy
							</Link>
						</p> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
