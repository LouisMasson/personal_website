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
    <Card className="p-3">
      <div className="flex items-center gap-3">
        {certification.badge && (
              <div className="relative h-16 w-16 flex-shrink-0" style={{ position: 'relative' }}>
                <Image 
                  src={certification.badge} 
                  alt={`${certification.title} badge`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            )}
        <div className="flex-1">
          <div className="flex items-center gap-2 justify-between">
            <h3 className="text-base font-medium">{certification.title}</h3>
            {certification.credentialUrl && (
              <Link 
                href={certification.credentialUrl}
                target="_blank"
                className="inline-flex items-center text-xs text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{certification.issuer} • {certification.date}</p>

          {certification.skills && (
            <div className="mt-1 flex flex-wrap gap-1">
              {certification.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-xs px-1.5 py-0">{skill}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}