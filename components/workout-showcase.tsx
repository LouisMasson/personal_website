"use client"

import { useState } from 'react'

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">My Workout Passion</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center max-w-5xl mx-auto">
        {/* Remove the image showcase */}
        {/* {workoutImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-[250px] h-[350px]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-white text-center absolute bottom-4 left-4 right-4 text-lg font-semibold">
                {image.alt}
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

// Déplacer le fichier dans le dossier components si ce n'est pas déjà fait
// Le contenu reste le même qu'avant