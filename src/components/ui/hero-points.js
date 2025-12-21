import styles from '../css/landingPage.module.css';

function HeroPoints() {
    return (
        <div className={styles.heroPointsContainerTest}>
            <div className={styles.heroPointsContainer}>
                <div className={styles.heroPointsLeft}>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                </div>
                <div className={styles.heroPointsRight}>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                    <div className={styles.heroPoint}></div>
                </div>
            </div>
        </div>
    )
}
export default HeroPoints;