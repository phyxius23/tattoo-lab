import Image from "next/image";
import Link from "next/link";

export default function MyFooter() {
    return (
        <footer className='footer'>
            <div className="footer-contact container">
                <div className="basis-full md:basis-1/3 p-2.5">
                    <h6 className='mb-2'>InKae di Tommy Grossi</h6>

                    <ul className="text-6">
                        <li>
                            <Image src='/icons/location.svg' alt='' width={16} height={16} />
                            <span>Sestiere Cannaregio, 5306/b - Venezia</span>
                        </li>
                        <li>
                            <Image src="/icons/book.svg" alt='' width={16} height={16} />
                            <span>P.IVA 04475280279</span>
                        </li>
                        <li>
                            <Image src="/icons/book.svg" alt='' width={16} height={16} />
                            <span>R.E.A. Venezia n. 434142</span>
                        </li>
                    </ul>
                </div>

                <div className="basis-full md:basis-1/3 p-2.5">
                    <h6 className="uppercase mb-2">Contatti</h6>

                    <ul className="footer-contact__menu text-6">
                        <li>
                            <Image src="/icons/call.svg" alt='' width={16} height={16} />
                            <Link
                                href="tel:+39 328 66 10 341"
                                className="text-6 text-white"
                            >+39 328 66 10 341</Link>
                        </li>
                        <li>
                            <Image src="/icons/mail.svg" alt='' width={16} height={16} />
                            <Link
                                href="mailto:tommygrossi77@yahoo.it"
                                className="text-6 text-white"
                            >tommygrossi77@yahoo.it</Link>
                        </li>
                        <li>
                            <Image src="/icons/logo-instagram.svg" alt='' width={16} height={16} />
                            <Link
                                href="https://www.instagram.com/inkae_tattoo_venezia/?hl=it"
                                target="_blank"
                                className="text-6 text-white"
                            >inkae_tattoo_venezia</Link>
                        </li>
                    </ul>
                </div>

                <div className="basis-full md:basis-1/3 p-2.5">
                    <h6 className="uppercase mb-2">Orari</h6>

                    <ul className="footer-contact__menu text-6">
                        <li>Lun - Sab: 10.00 - 13.00 / 14.30 - 18.00</li>
                        <li>Dom: CHIUSO</li>
                    </ul>
                </div>
            </div>

            <div className="footer-privacy">
                <div className="footer-privacy__content container">
                    <div className="basis-full px-2.5 md:basis-5/12">
                        <h6 className="font-normal">
                            INKAE di Tommaso Grossi © Copyright 2020. Tutti i diritti riservati.
                        </h6>
                    </div>

                    <div className="basis-full px-2.5 md:basis-5/12 md:text-right">
                        <Link
                            className="text-6"
                            href=""
                        >Privacy e Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
