
import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { profile, certifications, experiences, education } from "@/lib/content";

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="mt-12 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-xl text-muted-foreground mt-2">{profile.role}</p>
          <p className="mt-1">{profile.company}</p>
          
          <div className="flex justify-center gap-4 mt-4">
            <Button asChild variant="outline" size="sm">
              <Link href={profile.social.linkedin} target="_blank">LinkedIn</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={profile.social.github} target="_blank">GitHub</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/louis_masson_cv.pdf" download>Download PDF</a>
            </Button>
          </div>
        </div>
        
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>
                <p className="mt-1">{exp.description}</p>
                {exp.bulletPoints && (
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {exp.bulletPoints.map((point, j) => (
                      <li key={j} className="text-sm">
                        {point.text}
                        {point.subpoints && (
                          <ul className="list-circle pl-5 mt-1 space-y-1">
                            {point.subpoints.map((subpoint, k) => (
                              <li key={k} className="text-sm">{subpoint}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </div>
                <p>{edu.degree} • {edu.field}</p>
                {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="border rounded-md p-4">
                <h3 className="font-medium">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                {cert.skills && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {cert.skills.map((skill, j) => (
                      <span key={j} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
