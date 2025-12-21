"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../css/landingPage.module.css";

function CountUp({ target, suffix = "+" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 11000;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 2);

      const current = Math.floor(easeOut * target);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <p ref={ref} className={styles.statNumber}>
      {value}
      {suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <CountUp target={5} />
        <p className={styles.statLabel}>Experience</p>
      </div>

      <div className={styles.statItem}>
        <CountUp target={20} />
        <p className={styles.statLabel}>Projects</p>
      </div>

      <div className={styles.statItem}>
        <CountUp target={80} />
        <p className={styles.statLabel}>Clients</p>
      </div>
    </div>
  );
}