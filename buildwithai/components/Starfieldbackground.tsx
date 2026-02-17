'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Starfield Background Component
 *
 * Animated cosmic background with moving stars
 */
export function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Star class
        class Star {
            x: number;
            y: number;
            z: number;
            size: number;
            opacity: number;
            speed: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width - canvas.width / 2;
                this.y = Math.random() * canvas.height - canvas.height / 2;
                this.z = Math.random() * 1000;
                this.size = Math.random() * 2.4;
                this.opacity = Math.random();
                this.speed = Math.random() * 0.5 + 0.2;

                // Color distribution: 60% white, 25% cyan, 10% purple, 5% pink
                const rand = Math.random();
                if (rand < 0.6) {
                    this.color = '255, 255, 255'; // White
                } else if (rand < 0.85) {
                    this.color = '136, 204, 255'; // Light blue/cyan
                } else if (rand < 0.95) {
                    this.color = '192, 132, 252'; // Soft purple
                } else {
                    this.color = '249, 168, 212'; // Pink
                }
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.x = Math.random() * canvas.width - canvas.width / 2;
                    this.y = Math.random() * canvas.height - canvas.height / 2;
                    this.z = 1000;
                }
            }

            draw() {
                if (!ctx) return;

                const x = (this.x / this.z) * 500 + canvas.width / 2;
                const y = (this.y / this.z) * 500 + canvas.height / 2;
                const size = (1 - this.z / 1000) * this.size * 2;

                ctx.fillStyle = `rgba(${this.color}, ${this.opacity * (1 - this.z / 1000)})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create stars
        const stars: Star[] = [];
        const numStars = 500;
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            animationId = requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: 'linear-gradient(to bottom, #0a0a1a, #1a0a2e, #0a0a1a)' }}
        />
    );
}