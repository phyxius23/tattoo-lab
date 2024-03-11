'use client';

import { useState } from "react";

export default function CookieBanner() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
    ?
    "hidden"
    :
    "";

    return (
        <div className={`fixed bottom-0 left-0 w-full py-4 px-4 flex items-center justify-between bg-[#2c2f2f] z-20 ${transClass}`}> 
            <p className="text-sm mx-4">Questo è uno dei pochi siti che trovi online che non usa cookie statistici o profilanti e non vengono trattati dati personali degli utenti. <br/>Non c&apos;è un form di contatto o per l&apos;iscrizione alla newsletter, neanche GA4 o il pixel di Facebook! <br/>Proprio per questo sono presenti solo cookie tecnici che ti permettono la corretta fruizione del sito e non c&apos;è stata la necessità di prevedere una privacy o cookie policy. Ora lo sai!</p>
            <button type="button" className="block py-2 px-6 rounded-3xl bg-gold text-black mx-4" onClick={toggle}>OK</button>
        </div>
    )
}