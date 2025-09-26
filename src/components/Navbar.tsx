"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "WORK", href: "/mywork" },
        { name: "EXPERIENCE", href: "/experience" },
        { name: "CONTACT", href: "/contact" }
    ]

    return (
        <nav className="sticky top-0 z-50 w-full">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black font-bold text-xl">
                        M
                    </div> */}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <div className="flex flex-col space-y-4 mt-8">
                            <div className="flex items-center space-x-2 pb-4 border-b">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                                    M
                                </div>
                                <span className="font-semibold">Menu</span>
                            </div>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-accent"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
