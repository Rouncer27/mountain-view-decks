// StatsCounter.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsCounter({ stats }) {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, i) => {
      const endValue = parseInt(el.dataset.value, 10);
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // when element top hits 80% of viewport
          },
          snap: { innerText: 1 },
        },
      );
    });
  }, []);

  return (
    <div className="about-intro-content-stats">
      {stats.map((stat, i) => (
        <div className="about-intro-content-stats-stat" key={i}>
          <p ref={(el) => (statsRef.current[i] = el)} data-value={stat.number}>
            0
          </p>
          <p>{stat.stat}</p>
        </div>
      ))}
    </div>
  );
}
