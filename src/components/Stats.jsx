import { useEffect, useRef, useState } from "react";
import siteConfig from "../config";

function Counter({ value, suffix, duration = 1400 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--color-blue-dark)]">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[var(--color-paper)] py-20 border-y border-black/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-[var(--color-mist)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
