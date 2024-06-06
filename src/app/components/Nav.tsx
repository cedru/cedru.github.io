import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children}: { children: ReactNode}) {
    return <nav className="text-white flex justify-center px-4">
        {children}
    </nav>
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    return <Link {...props} className={cn()} />
}