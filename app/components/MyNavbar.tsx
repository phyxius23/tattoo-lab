'use client';

import {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function MyNavbar() {
    // serve per aprire/chiudere il menu da mobile
    const [active, setActive] = useState(false);
    const pathname = usePathname();

    // ad ogni cambio pagina cambia il pathname, tramite useEffect chiudo la navbar
    useEffect(() => {
        setActive(false);
    }, [pathname])

    return (
        <nav className={`navbar ${active ? 'menu-open' : ''}`}>
            <div className="navbar__content">
                <Link href='/' className='md:pl-6'>
                    <Image
                        src='/images/logo.png'
                        alt='logo InKae Tattoo Venice'
                        width={93}
                        height={50}
                        priority={true}
                    />
                </Link>

                <div className='navbar__burger' onClick={() => setActive(!active)}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>

                <ul className='navbar__menu'>
                    <li className={pathname == "/" ? "font-bold text-gold" : ""}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={pathname == "/artista/tommy-grossi" ? "font-bold text-gold" : ""}>
                        <Link href='/artista/tommy-grossi'>Tommy Grossi</Link>
                    </li>
                    <li className={pathname == "/artista/aura-negativa" ? "font-bold text-gold" : ""}>
                        <Link href='/artista/aura-negativa'>Aura Negativa</Link>
                    </li>
                    <li className={pathname == "/artista/tobias-paties" ? "font-bold text-gold" : ""}>
                        <Link href='/artista/tobias-paties'>Tobias Paties</Link>
                    </li>
                    <li className={pathname == "/piercing" ? "font-bold text-gold" : ""}>
                        <Link href='/piercing'>Piercing</Link>
                    </li>
                    <li className={pathname == "/contatti" ? "font-bold text-gold" : ""}>
                        <Link href='/contatti'>Contatti</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}