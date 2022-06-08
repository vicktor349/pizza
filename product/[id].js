import React from 'react';
import styles from '../styles/Product.module.css';
import Image from 'next/head';
import pizza from '../public/img/pizza.png';


const Product = () => {
    const pizza = {
        id: 1,
        img: {pizza},
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quo consequatur provident voluptatem perferendis tempore quidem labore quia repellat! Facilis vel saepe beatae maxime tempora odit quod modi, quae adipisci?",
    
    }
  return (
    <>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgcontainer}>
                    <Image src={pizza} />
                </div>
            </div>
            <div className={styles.right}></div>
        </div>
    </>
  )
}

export default Product