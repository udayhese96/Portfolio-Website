import { useEffect, useRef, useState } from 'react';

interface EyeProps {
    size?: number;
}

const AnimatedFace = ({ size = 14 }: EyeProps) => {
    const leftEyeRef = useRef<HTMLCanvasElement>(null);
    const rightEyeRef = useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const drawEye = (canvas: HTMLCanvasElement | null, isLeft: boolean) => {
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const rect = canvas.getBoundingClientRect();
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Calculate angle to mouse
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;
            const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);

            // Limit pupil movement
            const maxMove = canvas.width / 6;
            const pupilX = centerX + Math.cos(angle) * maxMove;
            const pupilY = centerY + Math.sin(angle) * maxMove;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw eye outline (circle)
            ctx.beginPath();
            ctx.arc(centerX, centerY, canvas.width / 2 - 2, 0, Math.PI * 2);
            ctx.strokeStyle = '#6b7280';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Draw pupil
            ctx.beginPath();
            ctx.arc(pupilX, pupilY, canvas.width / 6, 0, Math.PI * 2);
            ctx.fillStyle = '#d1d5db';
            ctx.fill();
        };

        drawEye(leftEyeRef.current, true);
        drawEye(rightEyeRef.current, false);
    }, [mousePos]);

    return (
        <div className="animated-face">
            <canvas
                ref={leftEyeRef}
                width={size * 2.5}
                height={size * 2.5}
                className="eye-canvas"
            />
            <span className="face-smile">‿</span>
            <canvas
                ref={rightEyeRef}
                width={size * 2.5}
                height={size * 2.5}
                className="eye-canvas"
            />
        </div>
    );
};

export default AnimatedFace;
