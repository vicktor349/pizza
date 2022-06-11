import styles from '../styles/Features.module.css';
import Image from "next/image";
import React, { useState } from 'react';
import arrowl from '../public/img/arrowl.png';
import arrowr from '../public/img/arrowr.png';
import featured from '../public/img/featured.png';
import featured2 from '../public/img/featured2.png';
import featured3 from '../public/img/featured3.png';



const Feature = () => {
    const [index, setIndex] = useState(0);

    const images = [
        featured,
        featured2,
        featured3
    ]
    const handleClick = (direction) =>{
        if(direction === 'l'){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === 'r'){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  return (
    <>
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleClick('l')} >
                <Image src={arrowl} layout='fill' alt='Left Arrow Slider' objectFit='contain' />
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100 * index}vw)`}}>
                    {
                        images.map((img, i) => (
                            <div className={styles.imgContainer} key={i} >
                                <Image src={img}  alt="Slider Images" layout='fill' objectFit='contain' />
                            </div>
                        ))
                    }
            </div>
            {
                
            }
            <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleClick('r')}>
                <Image src={arrowr} layout="fill" alt='Right Arrow Slider' objectFit='contain' />
            </div>
        </div>
    </>
  )
}

export default Feature;