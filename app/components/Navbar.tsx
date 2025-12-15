"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight no-underline">
                    YC
                </Link>

                <div className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-base font-medium transition-colors hover:text-foreground/80 no-underline ${pathname === item.path ? "text-foreground" : "text-muted-foreground"
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
