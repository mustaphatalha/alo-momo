"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./css/landingPage.module.css";
import HeroSection from "./heroSection";

function IntroAnimation() {
  const containerRef = useRef(null);
  const motoRef = useRef(null);
  const iconsRef = useRef([]);
  const [showHero, setShowHero] = useState(false); // ✅ state باش نبان HeroSection

  useEffect(() => {
    gsap.set(iconsRef.current, { transformOrigin: "50% 50%" });

    const tl = gsap.timeline({
      onComplete: () => {
        // ✅ من بعد ما تكمل animation، نبان HeroSection
        setShowHero(true);
      },
    });

    // 1️⃣ moto يدخل من اليسار حتى الوسط
    tl.fromTo(
      motoRef.current,
      { x: -500 },
      { x: 0, duration: 2, ease: "power3.out" }
    );

    // 2️⃣ icons يبانـو فوق الموتو
    tl.fromTo(
      iconsRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.9,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // 3️⃣ icons يمشيو لوسط الموتو واحد بواحد
    // tl.to(iconsRef.current, {
    //   duration: 0.2,
    //   ease: "power3.inOut",
    //   stagger: 0.18,
    //   x: (i, el) => {
    //     const icon = el.getBoundingClientRect();
    //     const moto = motoRef.current.getBoundingClientRect();
    //     return moto.left + moto.width / 2 - (icon.left + icon.width / 2);
    //   },
    //   y: (i, el) => {
    //     const icon = el.getBoundingClientRect();
    //     const moto = motoRef.current.getBoundingClientRect();
    //     return moto.top + moto.height / 2 - (icon.top + icon.height / 2);
    //   },
    // });

    // 4️⃣ icons يدخلو فالموتو (اختفاء)
    tl.to(iconsRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: "expo.in",
    });

    // 5️⃣ الموتو يكمل الطريق لليمين
    tl.to(motoRef.current, {
        x: 500,
        duration: 1.4,
        ease: "power2.in",
        })
        // 6️⃣ من بعد نخبّيو الموتو
        .to(motoRef.current, {
        opacity: 0,
        duration: 0.1,   // سريع باش يختفي
        onComplete: () => {
            motoRef.current.style.display = "none"; // ✅ إخفاء كامل
        },
        });
    }, []);

  return (
    <div className={styles.introContainer} ref={containerRef}>
        
      <div className={styles.iconsWrapper}>
        {[1,2,3,4,5,6].map((n, i) => (
          <img
            key={n}
            src={`/images/intro/icones/${n}.png`}
            ref={(el) => (iconsRef.current[i] = el)}
            className={styles.icon}
            alt=""
          />
        ))}
      </div>

      <img
        ref={motoRef}
        // src="/images/intro/moto-1.png"
        src="/icones/logo.png"
        className={styles.moto}
        alt="Moto"
      />

      {showHero && <HeroSection />}
    </div>
  );
}

export default IntroAnimation;