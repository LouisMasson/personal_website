
"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const isResumePage = pathname === "/resume"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-3xl">
        <div className="flex gap-6">
          <Link href="/" className="font-medium hover:text-primary text-xl text-black">
            👋
          </Link>
          {!isResumePage && (
            <>
              <Link href="#experience" className="hover:text-primary text-black">
                Experience
              </Link>
              <Link href="#projects" className="hover:text-primary text-black">
                Fun Projects
              </Link>
              <Link href="/resume" className="hover:text-primary text-black">
                Resume
              </Link>
            </>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
