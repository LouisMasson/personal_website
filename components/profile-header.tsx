"use client"

import { Profile } from "@/lib/content"
import Image from 'next/image';

interface ProfileHeaderProps {
  profile: Profile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      {/* Container pour l'avatar avec une taille fixe et un style amélioré */}
      <div className="relative w-40 h-40 overflow-hidden rounded-full ring-4 ring-primary/10">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          priority
          className="object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-xl text-muted-foreground">
          {profile.role} at {profile.company}
        </p>
      </div>
    </div>
  )
}