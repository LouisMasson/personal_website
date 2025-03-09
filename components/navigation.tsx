"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-3xl">
        <div className="flex gap-6">
          <Link href="/" className="hover:text-primary">Home</Link>
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
    </nav>
  )
}