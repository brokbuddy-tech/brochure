
"use client";
import React, { useRef, useEffect } from 'react';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
    x: number;
    y: number;
}

interface SquaresProps {
    direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
    speed?: number;
    borderColor?: CanvasStrokeStyle;
    squareSize?: number;
    hoverFillColor?: CanvasStrokeStyle;
}

const Squares: React.FC<SquaresProps> = ({
    direction = 'right',
    speed = 1,
    borderColor = '#999',
    squareSize = 40,
    hoverFillColor = '#222'
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);
    const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
    const hoveredSquareRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const numSquaresX = Math.ceil(canvas.width / squareSize) + 1;
            const numSquaresY = Math.ceil(canvas.height / squareSize) + 1;

            for (let i = 0; i < numSquaresX; i++) {
                for (let j = 0; j < numSquaresY; j++) {
                    const x = i * squareSize - (gridOffset.current.x % squareSize);
                    const y = j * squareSize - (gridOffset.current.y % squareSize);

                    if (
                        hoveredSquareRef.current &&
                        i === hoveredSquareRef.current.x &&
                        j === hoveredSquareRef.current.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(x, y, squareSize, squareSize);
                    }

                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(x, y, squareSize, squareSize);
                }
            }

            // Keep the radial gradient if you want the vignette effect
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.max(canvas.width, canvas.height) / 2
            );
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient.addColorStop(1, 'rgba(6, 0, 16, 1)'); // Use rgba for the gradient
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const updateAnimation = () => {
            const effectiveSpeed = Math.max(speed, 0.1);
            switch (direction) {
                case 'right':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed);
                    break;
                case 'left':
                    gridOffset.current.x = (gridOffset.current.x + effectiveSpeed);
                    break;
                case 'up':
                    gridOffset.current.y = (gridOffset.current.y + effectiveSpeed);
                    break;
                case 'down':
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed);
                    break;
                case 'diagonal':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed);
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed);
                    break;
                default:
                    break;
            }
            if (gridOffset.current.x <= -squareSize) gridOffset.current.x = 0;
            if (gridOffset.current.y <= -squareSize) gridOffset.current.y = 0;
            if (gridOffset.current.x >= squareSize) gridOffset.current.x = 0;
            if (gridOffset.current.y >= squareSize) gridOffset.current.y = 0;

            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const gridX = Math.floor((mouseX + (gridOffset.current.x % squareSize)) / squareSize);
            const gridY = Math.floor((mouseY + (gridOffset.current.y % squareSize)) / squareSize);

            hoveredSquareRef.current = { x: gridX, y: gridY };
        };

        const handleMouseLeave = () => {
            hoveredSquareRef.current = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        updateAnimation();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, squareSize]);

    return <canvas ref={canvasRef} className="w-full h-full border-none block"></canvas>;
};

export default Squares;
