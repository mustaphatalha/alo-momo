"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./css/landingPageAnimation.module.css";

import HeroSection from "./heroSection";

export default function WillemHeader() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadingLetter = container.querySelectorAll(`.${styles.letter}`);
    const box = container.querySelectorAll(`.${styles.loaderBox}`);
    const growingImage = container.querySelectorAll(`.${styles.growingImage}`);
    const headingStart = container.querySelectorAll(`.${styles.h1Start}`);
    const headingEnd = container.querySelectorAll(`.${styles.h1End}`);
    const coverImageExtra = container.querySelectorAll(`.${styles.coverExtra}`);
    const headerLetter = container.querySelectorAll(`.${styles.letterWhite}`);
    const navLinks = container.querySelectorAll("nav a, p");

    const tl = gsap.timeline({
    defaults: { ease: "expo.inOut" },
    onStart: () => {
        container.classList.remove(styles.hidden);
    },
        onComplete: () => {
        container
            .querySelector(`.${styles.loader}`)
            ?.classList.add(styles.hideLoader);

        growingImage.forEach((img) => {
            img.classList.add(styles.heroImage);
        });

        container
            .querySelector(`.${styles.heroContent}`)
            ?.classList.add(styles.show);
        },
    });


    tl.from(loadingLetter, {
      yPercent: 100,
      stagger: 0.025,
      duration: 1.25,
    })
      .fromTo(
        box,
        { width: "0em" },
        { width: "1em", duration: 1.25 },
        "<"
      )
      .fromTo(
        growingImage,
        { width: "0%" },
        { width: "100%", duration: 1.25 },
        "<"
      )
      .fromTo(
        headingStart,
        { x: "0em" },
        { x: "-0.05em", duration: 1.25 },
        "<"
      )
      .fromTo(
        headingEnd,
        { x: "0em" },
        { x: "0.05em", duration: 1.25 },
        "<"
      )
      .to(coverImageExtra, {
        opacity: 0,
        duration: 0.05,
        stagger: 0.5,
        ease: "none",
      })
      .to(
        growingImage,
        { width: "100vw", height: "100dvh", duration: 2 },
        "<"
      )
      .to(box, { width: "110vw", duration: 2 }, "<")
      .from(
        headerLetter,
        {
          yPercent: 100,
          duration: 1.25,
          stagger: 0.025,
          ease: "expo.out",
        },
        "<"
      )
      .from(
        navLinks,
        {
          yPercent: 100,
          duration: 1.25,
          stagger: 0.1,
          ease: "expo.out",
        },
        "<"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className={`${styles.header} ${styles.loading} ${styles.hidden}`}
    >
      {/* Loader */}
      <div className={styles.loader}>
        <div className={styles.h1}>
          <div className={styles.h1Start}>
            <span className={styles.letter}>Al</span>
            <span className={styles.letter}>l</span>
            <span className={styles.letter}>o</span>
          </div>

          <div className={styles.loaderBox}>
            <div className={styles.loaderBoxInner}>
              <div className={styles.growingImage}>
                <div className={styles.growingImageWrap}>
                  <img className={`${styles.coverExtra}`} src="/images/animation/img-1.jpg" alt="" />
                  <img className={`${styles.coverExtra}`} src="/images/animation/img-1.jpg" alt="" />
                  <img className={`${styles.coverExtra}`} src="/images/animation/img-1.jpg" alt="" />
                  <img className={styles.coverImage} src="/images/animation/img-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.h1End}>
            <span className={styles.letter}>Mo</span>
            <span className={styles.letter}>m</span>
            <span className={styles.letter}>o</span>
          </div>
        </div>
      </div>

        <div className={styles.heroContent}>
            <HeroSection />
        </div>
    </section>
  );
}