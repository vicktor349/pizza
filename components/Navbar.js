import styles from '../styles/Navbar.module.css';
import React from 'react'
import Image from 'next/image'
import telephone from '../public/img/telephone.png';
import logo from '../public/img/logo.png'
import cart from '../public/img/cart.png'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
               <Image src={telephone} alt="Telephone Image" width='32' height='32' />
          </div>
          <div className={styles.texts}>
              <div className={styles.text}>ORDER NOW!</div>
              <div className={styles.text}>08154552075</div>
          </div>
        </div> 
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Project</li>
            <li className={styles.listItem}>Menu</li>
            <Image src={logo} width='160px' height='69px' />
            <li className={styles.listItem}>Event</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src={cart} width='30px' height='30px' />
            <div className={styles.counter}>2</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar