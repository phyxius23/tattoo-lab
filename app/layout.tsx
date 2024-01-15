import React from "react";
import type { Metadata } from 'next';
import {Montserrat, Noto_Serif} from "next/font/google";

// CSS
import '@splidejs/react-splide/css'; // Default Splide Theme
import './globals.css';

// Components
import MyNavbar from "@/app/components/MyNavbar";
import MyFooter from "@/app/components/MyFooter";

// Google Fonts
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})
const noto_serif = Noto_Serif({
    subsets: ['latin'],
    variable: '--font-noto-serif',
    display: 'swap',
})

// Metadata
export const metadata: Metadata = {
    title: 'InKae Tattoo Venice',
    description: 'Siamo specializzati in Traditional Tattoo e Blackwork ma eseguiamo qualunque tipo di tatuaggio. Dai sfogo alla tua fantasia!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="it" className={`${montserrat.variable} ${noto_serif.variable}`}>
            {/*<body className='overflow-x-hidden'>*/}
            <body>
                <MyNavbar />

                {children}

                <MyFooter />
            </body>
        </html>
    )
}
