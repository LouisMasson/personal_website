import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        {/* Resume content would go here */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          {/* Experience items */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {/* Education items */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          {/* Skills */}
        </section>
      </div>
    </div>
  );
}