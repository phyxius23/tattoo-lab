'use client';

import {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Dropdown from "./Dropdown";

export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "Artisti",
        children: [
            {
                title: "Tommy Grossi",
                route: "/artista/tommy-grossi",
            },
            {
                title: "Tobia Baser",
                route: "/artista/tobia-baser",
            },
        ],
    },
    {
        title: "Piercing",
        route: "/piercing",
    },
    {
        title: "Contatti",
        route: "/contatti",
    },
];

export default function MyNavbar() {
    // serve per aprire/chiudere il menu da mobile
    const [active, setActive] = useState<boolean>(false);
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
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index} className={pathname == item.route ? "font-bold text-gold" : ""}>
                                {item.hasOwnProperty("children") ? (
                                    <Dropdown item={item} />
                                ) : (
                                    <Link href={item?.route || ""}>{item.title}</Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}