'use client';

import React, { useEffect, useState } from 'react';
import { Users, Briefcase, Building2 } from 'lucide-react';

/**
 * Stats Section Component
 *
 * Displays event statistics with animated counters
 */
export function StatsSection() {
    // TODO: Update these with real-time data from Firestore if desired
    const stats = [
        {
            icon: Users,
            label: 'Participants',
            value: 500,
            suffix: '+',
            color: 'text-purple-400',
        },
        {
            icon: Briefcase,
            label: 'Applications',
            value: 900,
            suffix: '+',
            color: 'text-blue-400',
        },
        {
            icon: Building2,
            label: 'Companies',
            value: 30,
            suffix: '+',
            color: 'text-pink-400',
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-transparent via-[#0a0a1f]/30 to-transparent">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface StatCardProps {
    icon: React.ElementType;
    label: string;
    value: number;
    suffix: string;
    color: string;
    index: number;
}

function StatCard({ icon: Icon, label, value, suffix, color, index }: StatCardProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Simple intersection observer to trigger animation when in view
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    animateCount();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`stat-${index}`);
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [hasAnimated, index]);

    const animateCount = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

    return (
        <div
            id={`stat-${index}`}
            className="relative group"
        >
            <div className="relative bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${color}`} />
                    <div className="text-5xl font-bold mb-2">
                        <span className={color}>{count}</span>
                        <span className={`${color} text-3xl`}>{suffix}</span>
                    </div>
                    <div className="text-muted-foreground text-lg">{label}</div>
                </div>
            </div>
        </div>
    );
}