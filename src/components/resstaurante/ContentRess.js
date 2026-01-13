"use client";

import Link from 'next/link';
import styles from "./css/ressComponent.module.css"
import { resstaurante } from '@/constants/data'
import { types } from '@/constants/data'

function ContentRess () {

    return (
        <div className={styles.contentContainerr}>
            <div className={styles.types}>
                <div className={styles.typeHeader}>
                    {types.map((type) => {
                        const filteredRess = resstaurante.filter((ress) => ress.typeRess === type.id);
                        if (filteredRess.length > 0) {
                            return (
                                <div key={type.id} className="mb-10">
                                    <div className="bg-red-700 py-1 flex justify-center align-center">
                                        <p className="text-2xl font-extrabold  text-yellow-500 ">
                                            {type.type}
                                        </p>
                                    </div>
                                    <div className={styles.contentContainer}>
                                        {filteredRess.map((ress) => (
                                            <div key={ress.id} className={styles.cardWrapper}>
                                                <div className={styles.ressImgContainer}>
                                                    <img 
                                                        src={ress.imgSrc} 
                                                        className={styles.productImg}
                                                        alt={ress.name}
                                                    />
                                                    <Link href={`/resstaurantes/${ress.id}`}>
                                                        <span className={styles.addBtn}>Afficher</span>
                                                    </Link>
                                                </div>
                                                <div className={styles.priceTag}>
                                                    <p>{ress.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    )
}
export default ContentRess;