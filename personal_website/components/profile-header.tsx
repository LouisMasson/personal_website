"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Profile } from "@/lib/content"

interface ProfileHeaderProps {
  profile: Profile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-12 space-y-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src={profile.avatar} alt={profile.name} />
        <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-xl text-muted-foreground">
          {profile.role} at {profile.company}
        </p>
      </div>
    </div>
  )
}