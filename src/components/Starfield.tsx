import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
}

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Initialize stars
        const starCount = 150;
        starsRef.current = Array.from({ length: starCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.3 + 0.1,
            opacity: Math.random() * 0.5 + 0.3,
        }));

        // Animation loop
        let animationId: number;
        const animate = () => {
            // Check if light theme is active
            const isLightTheme = document.body.classList.contains('light-theme');

            ctx.fillStyle = 'transparent';
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines - inverted for light mode
            if (isLightTheme) {
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)'; // Dark grid for light mode
            } else {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'; // Light grid for dark mode
            }
            ctx.lineWidth = 1;
            const gridSize = 50;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Draw and animate stars - inverted for light mode
            starsRef.current.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

                if (isLightTheme) {
                    ctx.fillStyle = `rgba(0, 0, 0, ${star.opacity})`; // Dark stars for light mode
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`; // White stars for dark mode
                }
                ctx.fill();

                // Move star diagonally (slight movement)
                star.y += star.speed;
                star.x -= star.speed * 0.5;

                // Reset star position if it goes off screen
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                if (star.x < 0) {
                    star.x = canvas.width;
                    star.y = Math.random() * canvas.height;
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="starfield-canvas"
        />
    );
};

export default Starfield;
