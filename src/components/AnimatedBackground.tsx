import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const spacing = 50;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
          });
        }
      }
    };

    const drawDot = (x: number, y: number, opacity: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    };

    const drawLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      opacity: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot, i) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        const distFromCenter = Math.sqrt(
          Math.pow(dot.x - canvas.width / 2, 2) +
            Math.pow(dot.y - canvas.height / 2, 2)
        );
        const maxDist = Math.sqrt(
          Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
        );
        const opacity = Math.max(0.1, 1 - distFromCenter / maxDist);

        drawDot(dot.x, dot.y, opacity * 0.6);

        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[j].x - dot.x;
          const dy = dots[j].y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const lineOpacity = (1 - dist / 80) * opacity;
            drawLine(dot.x, dot.y, dots[j].x, dots[j].y, lineOpacity);
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
