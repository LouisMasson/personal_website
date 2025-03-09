
import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};


import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6 gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Resume</h1>
        <Button asChild variant="outline" size="sm" className="ml-auto">
          <a href="/louis_masson_cv.pdf" download>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Télécharger PDF
          </a>
        </Button>
      </div>
      
      <div className="bg-card rounded-lg overflow-hidden border-2 border-black">
        <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '141.4286%' }}>
          <iframe 
            loading="lazy" 
            style={{ 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              top: 0, 
              left: 0, 
              border: 'none', 
              padding: 0,
              margin: 0
            }}
            src="https://www.canva.com/design/DAFitOEw254/sV4v0hGTFUjpTvwYt31XMA/view?embed" 
            allowFullScreen
            title="Louis Masson's Resume"
          />
        </div>
        <div className="p-4 text-center">
          <a 
            href="https://www.canva.com/design/DAFitOEw254/sV4v0hGTFUjpTvwYt31XMA/view?utm_content=DAFitOEw254&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View CV in full screen
          </a>
        </div>
      </div>
    </div>
  );
}
