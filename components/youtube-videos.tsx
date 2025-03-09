
"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

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
    // Pour simuler le chargement des vidéos depuis YouTube
    // Normalement, cela viendrait d'une API YouTube, mais nous utilisons des données statiques ici
    const mockVideos = [
      {
        id: "1",
        title: "Devoteam - Insights on Cloud Strategy",
        thumbnail: "https://i.ytimg.com/vi/placeholder1/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=placeholder1"
      },
      {
        id: "2",
        title: "Devoteam - Digital Transformation Journey",
        thumbnail: "https://i.ytimg.com/vi/placeholder2/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=placeholder2"
      },
      {
        id: "3",
        title: "Devoteam - AI Implementation Best Practices",
        thumbnail: "https://i.ytimg.com/vi/placeholder3/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=placeholder3"
      },
      {
        id: "4",
        title: "Devoteam - The Future of Tech Innovation",
        thumbnail: "https://i.ytimg.com/vi/placeholder4/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=placeholder4"
      }
    ];

    setTimeout(() => {
      setVideos(mockVideos);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dernières vidéos Devoteam 📺</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="h-48 animate-pulse bg-gray-200 dark:bg-gray-700"></Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <Link href={video.url} target="_blank" key={video.id}>
              <Card className="group overflow-hidden h-48 relative transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="w-full h-full relative bg-gray-300 dark:bg-gray-700">
                    {/* Placeholder image - in production use actual thumbnails */}
                    <div className="flex items-center justify-center h-full text-3xl">🎬</div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-3 z-20 w-full">
                    <p className="text-white text-sm font-medium line-clamp-2 group-hover:underline">{video.title}</p>
                    <div className="flex items-center mt-2">
                      <ExternalLink className="h-3 w-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
