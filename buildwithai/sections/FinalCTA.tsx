'use client';

import React from 'react';
import { Button } from '@buildwithai/components/ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function FinalCTA() {
    const LUMA_EVENT_URL = 'https://lu.ma/cpkos17w';

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-purple-900/30 to-[#0a0a1f]" />

            {/* Radial gradient overlay for glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping opacity-20">
                                <Sparkles className="w-16 h-16 text-purple-400" />
                            </div>
                            <Sparkles className="w-16 h-16 text-purple-400 relative" />
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                        Ready to Build the Future with AI?
                    </h2>

                    {/* Subtext */}
                    <p className="text-xl md:text-1.5xl text-gray-300 mb-12 leading-relaxed">
                        Join 600+ innovators, curious minds, and future AI leaders at the biggest AI event at UofT.
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-16 py-8 text-xl font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
                            onClick={() => window.open(LUMA_EVENT_URL, '_blank')}
                        >
                            Apply Now
                            <ExternalLink className="ml-3 w-6 h-6" />
                        </Button>
                    </div>

                    {/* Additional info */}
                    <p className="mt-8 text-gray-400 text-sm">
                        Limited spots available • March 28, 2026 • UTSC
                    </p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-75" />
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
        </section>
    );
}
