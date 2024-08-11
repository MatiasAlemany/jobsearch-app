'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

export function NavLink({href,children, ...rest}) {
    const router = useRouter();
    const pathName = usePathname();
    const isActive = pathName === href;
    const linkColor = isActive ? "text-blue-500" : "text-black";
    return (<Link className={linkColor} href={href} {...rest} >
        {children}
    </Link>)
}
