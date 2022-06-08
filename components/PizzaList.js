import React from 'react';
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Best Pizza In town</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Esse modi dolore earum ullam ex ea eos itaque ipsam repudiandae quisquam. 
            Adipisci fugit, quia voluptatibus magni necessitatibus iure dolores at vero.
          </p>
          <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </div>
      </div>
    </>
  )
}

export default PizzaList