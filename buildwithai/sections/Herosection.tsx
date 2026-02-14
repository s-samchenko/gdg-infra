'use client';

import React, { useState } from 'react';
import { Button } from '@buildwithai/components/ui/button';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

/**
 * Hero Section Component
 *
 * Main hero section with:
 * - Animated cosmic background
 * - Event title and description
 * - Registration CTA
 * - Account linking for registered users
 */
export function HeroSection() {

    const LUMA_EVENT_URL = 'https://lu.ma/cpkos17w';

    // TODO: Update with actual event details
    const eventDetails = {
        date: 'March 28, 2026',
        time: '9:00 AM - 5:00 PM EST',
        location: 'University of Toronto Scarborough',
    };

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black/95 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                    {/* Main Title */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Build with AI
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                        Biggest AI Conference @ UTSC
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{eventDetails.date}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
                        <div className="flex items-center gap-2">
                            <span>{eventDetails.time}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>{eventDetails.location}</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        {/* Primary CTA - Register on Luma */}
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                            onClick={() => window.open(LUMA_EVENT_URL, '_blank')}
                        >
                            Register on Luma
                            <ExternalLink className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </section>
        </>
    );
}