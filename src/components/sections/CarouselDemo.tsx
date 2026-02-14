"use client"

import Image from "next/image"
import { sponsors } from "@/data/sponsors"

export default function CarouselDemo() {

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Sponsors
        </h2>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="relative">
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .scroll-container {
                animation: scroll 30s linear infinite;
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex scroll-container">
              {/* First set of logos */}
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex-shrink-0 px-6 flex items-center justify-center"
                  style={{ width: '280px' }}
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-32 flex items-center justify-center p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Image
                      src={`/sponsors/${sponsor.logo}`}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain max-h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor) => (
                <div
                  key={`${sponsor.name}-duplicate`}
                  className="flex-shrink-0 px-6 flex items-center justify-center"
                  style={{ width: '280px' }}
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-32 flex items-center justify-center p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Image
                      src={`/sponsors/${sponsor.logo}`}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain max-h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Add logos to <code className="bg-white/10 px-2 py-1 rounded">/public/sponsors/</code> and update <code className="bg-white/10 px-2 py-1 rounded">/src/data/sponsors.ts</code>
        </p>
      </div>
    </section>
  )
}
