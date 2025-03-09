import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Resume - Louis Masson',
  description: 'Professional resume of Louis Masson',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto py-24 px-4 max-w-4xl">
      <div className="mb-8 flex justify-between items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild>
          <a href="/louis_masson_cv.pdf" download className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="bg-white p-8 shadow-lg rounded-lg">
        <iframe 
          src="/louis_masson_cv.pdf" 
          className="w-full h-[800px] border-0"
          title="Louis Masson CV"
        />
      </div>
    </div>
  );
}