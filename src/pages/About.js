import { useState, useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const ctxRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;


        const startDrawing = (e) => {
            setIsDrawing(true);
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        };

        const draw = (e) => {
            if (isDrawing) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
            }
        };

        const stopDrawing = () => {
            setIsDrawing(false);
            ctx.closePath();
        };

        // Add event listeners
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);


        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
        };
    }, [isDrawing]);

    return (
        <div className="background">
            <canvas
                ref={canvasRef}
                width="200"
                height="100"
                style={{ border: '1px solid #000000' }}
            />
        </div>
    );
}
