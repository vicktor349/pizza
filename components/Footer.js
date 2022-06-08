import React from 'react'; 
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import bg from '../public/img/bg.png';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
              OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTURANT</h1>  
            <p className={styles.text}>
              1654 R.Don Road #307.
              <br />Abuja, Nigeria
              <br />+234 8154552075
            </p>
            <p className={styles.text}>
              1654 R.Don Road #302.
              <br />Abuja, Nigeria
              <br />+234 8154552075
            </p>
            <p className={styles.text}>
              1654 R.Don Road #300.
              <br />Abuja, Nigeria
              <br />+234 8154552075
            </p>
            <p className={styles.text}>
              1654 R.Don Road #301.
              <br />Abuja, Nigeria
              <br />+234 8154552075
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY TILL FRIDAY
              <br /> 9:00 - 22:00
            </p>
            <p className={styles.text}>
              SATURDAY -SUNDAY
              <br /> 12:00 - 24:00
            </p>
          </div>
        </div>
  )
}

export default Footer