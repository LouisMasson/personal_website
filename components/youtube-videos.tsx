
'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export function YouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Using a proxy to avoid CORS issues
        const response = await fetch('https://api.allorigins.win/get?url=' + 
          encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=UC9yJMXr9EsUzqP7Hgn1P-8Q'));
        
        if (!response.ok) throw new Error('Failed to fetch videos');
        
        const data = await response.json();
        const xmlContent = data.contents;
        
        // Parse XML content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
        const entries = xmlDoc.getElementsByTagName('entry');
        
        const videosData: YouTubeVideo[] = [];
        
        // Get the 4 latest videos
        for (let i = 0; i < Math.min(entries.length, 4); i++) {
          const entry = entries[i];
          const videoId = entry.getElementsByTagName('yt:videoId')[0]?.textContent || '';
          const title = entry.getElementsByTagName('title')[0]?.textContent || '';
          const url = `https://www.youtube.com/watch?v=${videoId}`;
          const thumbnail = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
          
          videosData.push({
            id: videoId,
            title,
            thumbnail,
            url
          });
        }
        
        setVideos(videosData);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="aspect-video animate-pulse bg-muted h-40"></Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {videos.map((video) => (
        <Link href={video.url} target="_blank" key={video.id}>
          <Card className="overflow-hidden group transition-all hover:shadow-lg h-full flex flex-col">
            <div className="relative aspect-video w-full">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <ExternalLink className="text-white h-8 w-8" />
              </div>
            </div>
            <div className="p-3 flex-grow">
              <p className="text-sm font-medium line-clamp-2">{video.title}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
