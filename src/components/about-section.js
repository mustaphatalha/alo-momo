'use client';

import styles from './css/landingPage.module.css';
import { useState } from 'react';
import AboutSectionAnimation from './about-section-animation';

function AboutSection() {
    const [open, setOpen] = useState(false);
    
    return (
        <div>
            <div className={styles.aboutSectionHeader}>
                <p>About Us</p>
                {/* <p>We are committed to providing the best services to our customers.</p> */}
            </div>
            <div className={styles.aboutSectionImgContainer}>
                 <p>We are committed to providing the best services to our customers.</p>
                {/* <div className={styles.aboutSectionImg}></div> */}
            </div>
            <div className={styles.aboutSectionContentContainer}>
                <div className={styles.aboutSectionImg}></div>
                <div
                    className={`${styles.aboutSectionContentParagraph} ${
                    open ? styles.open : ""
                    }`}
                >
                    <p>
                        A software engineer, the modern-day architect of digital realms, navigates 
                        the ethereal landscapes of code, sculpting intangible structures that shape 
                        our technological world. With fingers poised over keyboards like virtuoso
                         pianists, they compose symphonies of logic, their minds a labyrinth of 
                         algorithms and solutions. Their canvas is a screen, a vast expanse where 
                         lines of code dance in intricate patterns, weaving the fabric of programs 
                         and applications.
                    </p>
                </div>
                <div className={styles.aboutSectionContentBtn}>
                    <button className={styles.buttonOne}  onClick={() => setOpen(!open)}>{open ? "Show Less" : "Learn More"}</button>
                </div>
            </div>
            <AboutSectionAnimation />
        </div>
    )
}
export default AboutSection;