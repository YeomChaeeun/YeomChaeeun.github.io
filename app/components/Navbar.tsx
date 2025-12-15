"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
                    YC
                </Link>

                <div className="flex items-center gap-2 md:gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-sm font-medium transition-colors hover:text-foreground min-h-[44px] flex items-center px-2 md:px-0 ${pathname === item.path ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
