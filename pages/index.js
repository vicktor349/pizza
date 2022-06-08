import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Feature from '../components/Feature'
import PizzaList from '../components/PizzaList'

const index = () => {
  return (
    <>
    <Head>
      <title> Lama | Home</title>
    </Head>
      <div className={styles.container}>
        <Feature />
        <PizzaList />
      </div>
    </>
  )
}

export default index