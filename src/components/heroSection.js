import { Header } from "./header-1";
import styles from "./css/landingPage.module.css";
import HeroPoints from "./ui/hero-points"; 
import NavBarDesktopDemo from "./navbarDesktopDemo";
import SpinningLogosDemo from "./spinning-logos-demo";
import Stats from "./ui/count-number-animation";

function HeroSection() {
    return (
        <div className={styles.containerr}>
            <div className={styles.navbarMobile}>
                <Header />
            </div>
            <div className={styles.navbarDesktop}>
                <NavBarDesktopDemo />
            </div>
            <HeroPoints />
            <div className={styles.spaceOne}></div>
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <div className={styles.introText}>
                        <p>Hi I'am</p>
                        <p>Simohamed bibi</p>
                    </div>
                    <p className={styles.title}>Allo Momo</p>
                    <div className={styles.socialMedia}>
                        <div className={`${styles.socialIcons} ${styles.float1}`}>
                            <img src="/icones/instagram.png" alt="Instagram" />
                        </div>

                        <div className={`${styles.socialIcons} ${styles.float2}`}>
                            <img src="/icones/linkedin.png" alt="LinkedIn" />
                        </div>

                        <div className={`${styles.socialIcons} ${styles.float3}`}>
                            <img src="/icones/group.png" alt="Group" />
                        </div>

                        <div className={`${styles.socialIcons} ${styles.float4}`}>
                            <img src="/icones/behance.png" alt="Behance" />
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.buttonOne}>Explore</button>
                        <button className={styles.buttonTwo}>Order Now!</button>
                    </div>
                    <Stats />
                </div>

                <div>
                    <div className={styles.imageContainer}>
                        {/* <SpinningLogosDemo /> */}
                        {/* <img src="/images/personne/personne-1.png" alt="Allo Momo" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;