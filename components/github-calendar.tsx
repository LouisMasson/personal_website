// components/github-calendar.tsx
"use client"

import GitHubCalendar from 'react-github-calendar';
import { useState, useEffect } from 'react';

export function GithubCalendar() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="p-4 rounded-lg border bg-card">
      <div className="min-h-[120px] flex items-center justify-center">
        {error ? (
          <p className="text-muted-foreground">Failed to load GitHub contributions</p>
        ) : (
          <GitHubCalendar 
            username="LouisMasson"
            colorScheme='light'
            fontSize={12}
            blockSize={8}
            blockMargin={4}
          />
        )}
      </div>
    </div>
  );
}