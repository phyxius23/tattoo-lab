import Link from "next/link";
import { MenuItem } from "./MyNavbar";
import { useState } from "react";

interface DropdownProps {
    item: MenuItem;
}

export default function Dropdown(props: DropdownProps) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "md:flex"
        :
        "md:hidden";

    return (
        <>
            <button
                className="uppercase hidden md:flex md:items-center"
                onClick={toggle}
            >
                <span className="me-2">{item.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 ${isOpen ? "rotate-90" : ""}`} viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/>
                </svg>
            </button>

            <ul className={`flex text-center md:text-left md:absolute md:top-14 md:left-1/2 w-[200px] flex-col md:p-4 gap-16 md:gap-4 bg-dark/85 text-white z-50 ${transClass}`}>
                {
                    menuItems.map((item) => {
                        return (
                            <li key={item.route}>
                                <Link
                                    href={item?.route || ''}
                                    onClick={toggle}
                                >{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}