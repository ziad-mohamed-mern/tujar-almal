import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number; r: number; a: number };

export function Particles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dots: Dot[] = [];
    const count = 52;

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function resize() {
      const parent = canvasEl.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvasEl.width = Math.floor(w * devicePixelRatio);
      canvasEl.height = Math.floor(h * devicePixelRatio);
      canvasEl.style.width = `${w}px`;
      canvasEl.style.height = `${h}px`;
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function init() {
      dots.length = 0;
      for (let i = 0; i < count; i++) {
        dots.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.14, 0.14),
          vy: rand(-0.14, 0.14),
          r: rand(0.8, 2.2),
          a: rand(0.12, 0.42),
        });
      }
    }

    function step() {
      ctx!.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        if (d.y < -10) d.y = h + 10;
        if (d.y > h + 10) d.y = -10;

        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(56, 189, 248, ${d.a})`;
        ctx!.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            ctx!.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    init();
    step();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    if (canvasEl.parentElement) ro.observe(canvasEl.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

