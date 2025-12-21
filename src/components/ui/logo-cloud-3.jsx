"use client";

import styles from '../css/landingPage.module.css';
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function LogoCloud({ className = "", logos, ...props }) {
  return (
    <div
      {...props}
      className={`${styles.wrapper} ${className}`}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo) => (
          <img
            key={`logo-${logo.alt}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={styles.logo}
            width={logo.width || "auto"}
            height={logo.height || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
