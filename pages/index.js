import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Feature from '../components/Feature'

const index = () => {
  return (
    <>
    <Head>
      <title> Lama | Home</title>
    </Head>
      <div className={styles.container}>
        <Feature />
      </div>
    </>
  )
}

export default index