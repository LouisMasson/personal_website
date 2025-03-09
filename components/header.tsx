
"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  
  // More strict resume page detection
  const isResumePage = pathname === "/resume" || pathname === "/resume/"
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-3xl">
        <div className="flex gap-6">
          <Link href="/" className="font-medium text-xl text-black relative group">
            <span className="transition-transform duration-300 inline-block group-hover:animate-bounce">👋</span>
          </Link>
          
          {isResumePage ? (
            // Resume Page - Show only Home link
            <Link href="/" className="text-black relative group ml-2">
              <span className="inline-block transition-all duration-300 group-hover:text-primary">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ) : (
            // Home page - Show all links
            <>
              <Link href="#experience" className="text-black relative group">
                <span className="inline-block transition-all duration-300 group-hover:text-primary">Experience</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#projects" className="text-black relative group">
                <span className="inline-block transition-all duration-300 group-hover:text-primary">Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  )
}
