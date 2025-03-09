
import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <Button asChild variant="ghost" size="sm" className="mr-4">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Resume</h1>
        <Button asChild variant="outline" size="sm" className="ml-auto">
          <a href="/louis_masson_cv.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download as PDF
          </a>
        </Button>
      </div>

      <div className="bg-card rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-800">
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
        <div className="p-6 flex justify-center">
          <Button asChild size="lg" className="shadow-sm hover:shadow-md transition-all duration-300">
            <a 
              href="https://www.canva.com/design/DAFitOEw254/sV4v0hGTFUjpTvwYt31XMA/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              View in full screen
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
