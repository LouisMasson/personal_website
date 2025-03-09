
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      
      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
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
