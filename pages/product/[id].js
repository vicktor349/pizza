import React, { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import PizzaImg from '../../public/img/pizza.png';
import PizzaSize from '../../public/img/size.png';
const Product = () => {
    const [ size, setSize ] = useState(0);
    
    const pizzaDetails = [{
        id: 1,
        img: PizzaImg,
        name: "CAMPAGNOLA" ,
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quo consequatur provident voluptatem perferendis tempore quidem labore quia repellat! Facilis vel saepe beatae maxime tempora odit quod modi, quae adipisci?"
        
    }]

  return (
    <>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizzaDetails[0].img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizzaDetails[0].name}</h1>
                <span className={styles.price}>${pizzaDetails[0].price[size]}</span>
                <p className={styles.desc}>{pizzaDetails[0].desc}</p>
                <h3>Choose The Size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src={PizzaSize} alt="Pizze Size" layout='fill' objectFit='contain' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)} >
                        <Image src={PizzaSize} alt="Pizze Size" layout='fill' objectFit='contain' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)} >
                        <Image src={PizzaSize} alt="Pizze Size" layout='fill' objectFit='contain' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose Additional Ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input 
                            type="checkbox" 
                            name="double" 
                            id="double" 
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Double Ingredient</label>
                    </div>
                    <div className={styles.option}>
                        <input 
                            className={styles.checkbox}
                            type="checkbox" 
                            name="cheese" 
                            id="cheese" 
                        />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input 
                            className={styles.checkbox}
                            type="checkbox" 
                            name="spicy" 
                            id="spicy" 
                        />
                        <label htmlFor="spicy">Spicy Sause</label>
                    </div>
                    <div className={styles.option}>
                        <input 
                            className={styles.checkbox}
                            type="checkbox" 
                            name="garlic" 
                            id="garlic" 
                        />
                        <label htmlFor="garlic">Garlic Sause</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}  />
                    <button className={styles.button}>Add To Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}   

export default Product