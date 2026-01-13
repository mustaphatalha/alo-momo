"use client";
import { Header } from "../header-1";
import stylesNavbar from "../css/landingPage.module.css";
import NavBarDesktopDemo from "../navbarDesktopDemo";
import styles from "./css/ressComponent.module.css";
import { FeaturedSpotlight } from "@/components/resstaurante/ui/feature-spotlight";


function HeroSection() {
    return (
        <div>
            <div className={stylesNavbar.navbarMobile}>
                <Header />
            </div>
            <div className={stylesNavbar.navbarDesktop}>
                <NavBarDesktopDemo />
            </div>
            
            <div className={styles.spaceOne}></div>
            <main className="flex min-h-screen items-center justify-center bg-background">
                <FeaturedSpotlight />
            </main>
        </div>
    )
}
export default HeroSection;