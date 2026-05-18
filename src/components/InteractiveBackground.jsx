import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#ff6b9d', '#00d9ff', '#c44dff', '#ffd93d', '#4dffdf'];

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 50 + 20;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.life = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 0.01;
                this.size *= 0.98;
            }

            draw() {
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            for (let i = 0; i < 5; i++) {
                particlesRef.current.push(new Particle(x, y));
            }
        };

        const handleKeyPress = (e) => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            for (let i = 0; i < 3; i++) {
                particlesRef.current.push(new Particle(x, y));
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particlesRef.current = particlesRef.current.filter(particle => {
                particle.update();
                particle.draw();
                return particle.life > 0 && particle.size > 0.5;
            });

            requestAnimationFrame(animate);
        };

        canvas.addEventListener('click', handleClick);
        window.addEventListener('keypress', handleKeyPress);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            canvas.removeEventListener('click', handleClick);
            window.removeEventListener('keypress', handleKeyPress);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-auto z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default InteractiveBackground;
