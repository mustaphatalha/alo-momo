'use client';
import React, { useRef } from 'react';
import styles from './css/footer.module.css';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Footerr = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1, duration: 1 }
    }
  };

  return (
    <div className={styles.footerWrapper} ref={footerRef}>
      {/* Mobile Footer (No Animation) */}
      <div className={styles.mobileFooter}>
         <div className={styles.mobileContent}>
            <div className={styles.navSection}>
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About Me</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact Me</a>
            </div>
            
            <div className={styles.socials}>
              <FaInstagram />
              <FaLinkedin />
              <FaDribbble />
              <FaBehance />
            </div>

            <div className={styles.contactInfo}>
              <p><FaEnvelope /> Mahmood.fazile7005@gmail.com</p>
              <p><FaPhoneAlt /> +93 729 107 005</p>
            </div>
            
             <button className={styles.ctaButton}>Order Now !</button>
             
             <div className={styles.credits}>
                Designed by @mahmood.fazile UI/UX designer
             </div>
         </div>
      </div>

      {/* Desktop Animated Footer */}
      <div className={styles.desktopFooter}>
        <motion.div 
          className={styles.redContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className={styles.contentClipper}>
            <div className={styles.innerContent}>
               <motion.div variants={contentVariants} className={styles.contentGrid}>
                  {/* Left Col */}
                  <div className={styles.leftCol}>
                      <div className={styles.navLinks}>
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">About me</a>
                        <a href="#">Portfolio</a>
                        <a href="#" className={styles.contactLink}>Contact me</a>
                      </div>
                      
                      <div className={styles.socialIcons}>
                         <span className={styles.iconCircle}><FaInstagram /></span>
                         <span className={styles.iconCircle}><FaLinkedin /></span>
                         <span className={styles.iconCircle}><FaDribbble /></span>
                         <span className={styles.iconCircle}><FaBehance /></span>
                      </div>
                      
                      <div className={styles.contactDetails}>
                         <div className={styles.contactItem}>
                           <FaEnvelope /> <span>Mahmood.fazile7005@gmail.com</span>
                         </div>
                         <div className={styles.contactItem}>
                           <FaPhoneAlt /> <span>+93 729 107 005</span>
                         </div>
                      </div>
                      
                      <div className={styles.designerCredit}>
                         Designed by @mahmood.fazile UI/UX designer
                      </div>
                  </div>

                  {/* Center/Right Content */}
                  <div className={styles.centerCol}>
                     <h3 className={styles.madeBy}>Made by tech-da</h3>
                     <button className={styles.visitButton}>Visit us !</button>
                     
                     {/* Diagonal Circles */}
                     <div className={styles.diagonalImages}>
                        <div className={styles.circleImg} style={{backgroundImage: 'url(https://placehold.co/100x100/orange/white?text=Food)'}}></div>
                        <div className={styles.circleImg} style={{backgroundImage: 'url(https://placehold.co/100x100/red/white?text=Gift)'}}></div>
                        <div className={styles.circleImg} style={{backgroundImage: 'url(https://placehold.co/100x100/green/white?text=Veg)'}}></div>
                     </div>
                  </div>
                  
                  <div className={styles.rightCol}>
                      <button className={styles.orderButton}>Order Now !</button>
                  </div>
               </motion.div>
            </div>
          </div>
          
          {/* Scooter Image attached to the right edge of the red container */}
          <div className={styles.scooterWrapper}>
             <Image 
               src="/images/intro/moto-1.png" 
               alt="Delivery Scooter" 
               width={300} 
               height={300} 
               className={styles.scooterImage}
             />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footerr;
