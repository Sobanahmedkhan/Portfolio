"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function NavbarSecondry() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "WORK", href: "/mywork" },
        { name: "EXPERIENCE", href: "/experience" },
        { name: "CONTACT", href: "/contact" },
    ]

    const handleDownloadResume = () => {
        const link = document.createElement("a")
        link.href = "/MohsinResume.pdf"
        link.download = "MohsinResume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                        M
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-primary relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button
                        onClick={handleDownloadResume}
                        className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors cursor-pointer"
                    >
                        Download Resume
                    </Button>
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
                            <div className="pt-4 border-t">
                                <Button
                                    onClick={() => {
                                        handleDownloadResume()
                                        setIsOpen(false)
                                    }}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-md font-medium transition-colors"
                                >
                                    Download Resume
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
