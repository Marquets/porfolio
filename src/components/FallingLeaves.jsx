import React, { useEffect, useRef } from 'react';

const FallingLeaves = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Leaf {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -20;
                this.size = Math.random() * 15 + 10;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.3 + 0.2;
                this.color = ['#c17a4f', '#7a9b76', '#d4a574', '#b8956a'][Math.floor(Math.random() * 4)];
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotationSpeed;

                // Gentle swaying motion
                this.x += Math.sin(this.y * 0.01) * 0.3;

                // Reset when leaf goes off screen
                if (this.y > canvas.height + 20) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.globalAlpha = this.opacity;

                // Draw simple leaf shape
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size / 2, this.size, 0, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // Create leaves
        const leaves = [];
        for (let i = 0; i < 30; i++) {
            leaves.push(new Leaf());
            // Stagger initial positions
            leaves[i].y = Math.random() * canvas.height;
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            leaves.forEach(leaf => {
                leaf.update();
                leaf.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default FallingLeaves;
