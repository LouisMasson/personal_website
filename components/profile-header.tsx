"use client"

import Image from "next/image"
import { Profile } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-muted-foreground max-w-md">{profile.role}</p>
      <p className="text-sm text-muted-foreground">{profile.company}</p>
      <Button asChild variant="outline" size="sm" className="mt-2">
        <a href="/louis_masson_cv.pdf" download>
          <Download className="mr-1 h-4 w-4" />
          Download CV
        </a>
      </Button>
    </div>
  )
}