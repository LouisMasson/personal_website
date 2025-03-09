
import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { experiences, education, certifications } from "@/lib/content";
import { ExperienceCard } from "@/components/experience-card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Professional Resume</h1>
        <p className="text-lg text-muted-foreground">
          Download my complete resume or view the details below.
        </p>
        <div className="mt-4">
          <Button asChild>
            <Link href="/louis_masson_cv.pdf" target="_blank">
              Download PDF
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-12">
        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="grid gap-4">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="grid gap-4">
            {education.map((edu) => (
              <div key={edu.school} className="border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image src={`/${edu.logo}`} alt={edu.school} width={64} height={64} className="object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree} • {edu.field}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid gap-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  {cert.badge && (
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image src={`/${cert.badge}`} alt={cert.title} width={64} height={64} className="object-contain" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    <p className="mt-1 text-sm">{cert.description}</p>
                    
                    {cert.skills && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    )}
                    
                    {cert.credentialUrl && (
                      <div className="mt-2">
                        <Button asChild variant="link" className="p-0 h-auto text-xs">
                          <Link href={cert.credentialUrl} target="_blank">
                            Verify Credential
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
