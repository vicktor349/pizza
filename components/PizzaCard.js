import React from 'react';
import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';
import pizza from '../public/img/pizza.png';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src={pizza} alt="Image of Pizza" width={500} height={500} />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.99</span>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  )
}

export default PizzaCard