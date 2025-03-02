import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/lib/content';
import { ExperienceBullets } from '@/components/experience-bullets';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        {experience.logo && (
          <div className="relative h-16 w-16 overflow-hidden rounded-md">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={64}
              height={64}
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold">{experience.company}</h3>
          <p className="text-sm text-muted-foreground">{experience.role} • {experience.duration}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm">{experience.description}</p>

        {experience.bulletPoints && <ExperienceBullets points={experience.bulletPoints} />}

        {experience.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}