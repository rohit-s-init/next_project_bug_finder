'use client'
import React from 'react'
import Link from "next/link"
import { FaBug } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import classnames from "classnames";


function NavBar() {
    const links = [
        { label: "dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ]

    const loc = usePathname();

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><FaBug /></Link>

            <ul className='flex space-x-6'>
                {links.map((link,ind) => <li key={ind}><Link className={classnames({
                    'text-zinc-900': link.href == loc,
                    'text-zinc-500': link.href != loc,
                    'hover:text-zinc-900': true
                })} href={link.href}>{link.label}</Link></li>)}
            </ul>

        </nav>
    )
}

export default NavBar
