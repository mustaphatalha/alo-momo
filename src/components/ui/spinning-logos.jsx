"use client";

import styles from "../css/landingPage.module.css";

import React from "react";
import {
  Facebook,
  Youtube,
  Gamepad2,
  Code,
  Palette,
  Camera,
  Zap,
} from "lucide-react";

export const SpinningLogos = () => {
  const radiusToCenterOfIcons = 180;
  const iconWrapperWidth = 60;

  const toRadians = (deg) => (Math.PI / 180) * deg;

  const logos = [
    { Icon: Code, color: "purple" },
    { Icon: Palette, color: "red" },
    { Icon: Camera, color: "orange" },
    { Icon: Zap, color: "blue" },
    { Icon: Gamepad2, color: "indigo" },
    { Icon: Facebook, color: "blue" },
    { Icon: Youtube, color: "red" },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.circle}>
        <div className={styles.spin}>
          {logos.map((logo, i) => {
            const angle = (360 / logos.length) * i;
            return (
              <div
                key={i}
                className={`${styles.icon} ${styles[logo.color]}`}
                style={{
                  top: `calc(50% - 30px + ${
                    radiusToCenterOfIcons * Math.sin(toRadians(angle))
                  }px)`,
                  left: `calc(50% - 30px + ${
                    radiusToCenterOfIcons * Math.cos(toRadians(angle))
                  }px)`,
                }}
              >
                <logo.Icon size={26} />
              </div>
            );
          })}
        </div>

        <div className={styles.center}>
          <span>YOUR LOGO</span>
        </div>
      </div>
    </div>
  );
};
