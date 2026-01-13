"use client";
import { FeaturedSpotlight } from "@/components/resstaurante/ui/feature-spotlight";
import { Header } from "@/components/header-1";
import NavBarDesktopDemo from "@/components/navbarDesktopDemo";
import stylesNavbar from '@/components/css/landingPage.module.css';
import { categorie } from "@/constants/data";
import { menu } from "@/constants/data";
import { resstaurante } from "@/constants/data";
import ShoppingCartDrawer from "@/components/resstaurante/shopping-cart-demo";
import styles from "@/components/resstaurante/css/ressComponent.module.css"
import { useState } from "react";
import { useRef, useEffect } from "react";

import { useParams } from 'next/navigation';

function ResstauranteMenuPage() {
    const params = useParams();
    const id = params.id;

    const resstauranteFind = resstaurante.find((ress) => {
        return ress.id == id;
    })

    const resstauranteFindMenu = menu.filter((men) => {
        return men.resstauranteID == resstauranteFind.id;
    })

    const [cartItems, setCartItems] = useState([]);

    function handleAddToCart(productId) {
        const product = menu.find(m => m.id === productId);
        
        setCartItems((prev) => {
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.prix,
            quantity: 1,
            image: product.imgMenu
        };
            return [...prev, newItem];
        });
    }

    const cartIds = Object.fromEntries(cartItems.map(item => [item.id, true]));
    
    const hasScrolledRef = useRef(false);

    return (
        <div>
            <div className={stylesNavbar.navbarMobile}>
                <Header />
            </div>
            <div className={stylesNavbar.navbarDesktop}>
                <NavBarDesktopDemo />
            </div>
            <div className="flex min-h-screen items-center justify-center bg-background">
                <FeaturedSpotlight id={id} />
            </div>
            <div>
                <ShoppingCartDrawer cartItems={cartItems} setCartItems={setCartItems} />
            </div>
            {
                categorie.map((cat) => {
                    const fileredMenu = resstauranteFindMenu.filter((ressFilterMenu) => {
                        return ressFilterMenu.categorie == cat.id
                    })

                if (fileredMenu.length > 0) {
                    return (
                        <div key={cat.id} className="mb-10">
                            <div className="bg-red-700 py-1 flex justify-center align-center">
                                <p className="text-2xl font-extrabold  text-yellow-500 ">
                                    {cat.categorie}
                                </p>
                            </div>
                            <div className={styles.contentContainer} 
                                ref={(el) => {
                                    if (el && !hasScrolledRef.current) {
                                        el.scrollLeft = 120;
                                        setTimeout(() => {
                                            hasScrolledRef.current = true;
                                        }, 500); 
                                    }
                                }}
                            >
                                {fileredMenu.map((filterM) => {
                                    const isAdded = cartIds[filterM.id]; 
                                    return (
                                        <div key={filterM.id} className={styles.cardWrapper}>
                                            <div className={styles.ressImgContainer}>
                                                <img 
                                                    src={filterM.imgMenu} 
                                                    className={styles.productImg}
                                                    alt={filterM.name}
                                                />
                                                <button 
                                                    className={`${styles.addBtn} ${isAdded ? styles.disabledBtn : ''}`} 
                                                    disabled={isAdded}
                                                    onClick={() => handleAddToCart(filterM.id)}
                                                >
                                                    {isAdded ? 'Added✓' : 'Commander'}
                                                </button>
                                            </div>

                                            <div className={styles.priceTag}>
                                                <p>{filterM.name} <span className="text-orange-600">{filterM.prix} DH</span> </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                } 
                })
            }
        </div>
    )
}
export default ResstauranteMenuPage;