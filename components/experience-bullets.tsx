
import React from 'react';
import { ExperiencePoint } from '@/lib/content';

interface ExperienceBulletsProps {
  points: ExperiencePoint[];
}

export function ExperienceBullets({ points }: ExperienceBulletsProps) {
  if (!points || points.length === 0) return null;
  
  return (
    <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
      {points.map((point, index) => (
        <li key={index} className="mb-1">
          {point.text}
          {point.subpoints && point.subpoints.length > 0 && (
            <ul className="pl-6 mt-1 space-y-1 list-circle list-inside">
              {point.subpoints.map((subpoint, subIndex) => (
                <li key={subIndex}>{subpoint}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
