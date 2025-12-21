import styles from "./css/landingPage.module.css";


function VideoHero () {
    return (
        <div className={styles.videoHeroSection}>
            <div className={styles.videoTitle}>
                <p>Experience the Future of Food Delivery with <span>Allo Momo</span></p>
            </div>
            <div className={styles.videoContainer}>
                <video className={styles.videoHero} autoPlay loop muted>
                    <source src="/videos/golovo-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={styles.videoFooter}>
                <p>Fast. Reliable. Delicious.</p>
            </div>
        </div>
    )
}
export default VideoHero;