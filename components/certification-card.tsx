import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Certification } from "@/lib/content"

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        {certification.badge && (
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={certification.badge}
              alt={certification.title}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-medium">{certification.title}</h3>
          <p className="text-sm text-muted-foreground">{certification.issuer} • {certification.date}</p>
          <p className="mt-2 text-sm">{certification.description}</p>
          {certification.skills && (
            <div className="mt-3 flex flex-wrap gap-2">
              {certification.skills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          )}
          {certification.credentialUrl && (
            <Link 
              href={certification.credentialUrl}
              target="_blank"
              className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
            >
              View Credential
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}