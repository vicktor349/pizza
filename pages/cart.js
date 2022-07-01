import React from 'react'
import Image from 'next/image'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import pizzaImg from '../public/img/pizza.png';
import styles from '../styles/Cart.module.css'

const createData = (product, name, extras, price, quantity, total) =>{
    return(
        {product, name, extras,price,quantity,total}
    )
}

const rows = [
    createData(
        <Image src={pizzaImg} objectFit='contain' layout='fill' />,
        'CORALZO',
        'Double Ingredient, spicy sauce',
        '$19.90',
        2,
        '$39.80'
    )
]

const TableInfo = () => {
    const tableStyle = {
        boxShadow: 'none',
        border: 'none'
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <TableContainer component={Paper} className={styles.tableContainer} style={tableStyle} > 
                <Table className={styles.table} >
                    <TableHead className={styles.tableHead}>
                        <TableRow className={styles.tableRow}>
                            <TableCell className={styles.tableCells}>Product</TableCell>
                            <TableCell align='center' className={styles.tableCells}>Name</TableCell>
                            <TableCell className={styles.tableCells}>Extras</TableCell>
                            <TableCell className={styles.tableCells}>Price</TableCell>
                            <TableCell className={styles.tableCells}>Quantity</TableCell>
                            <TableCell className={styles.tableCells}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) =>(
                            <TableRow key={row.name} className={styles.tableRows}>
                                <TableCell  className={styles.imgContainer} align='right'>
                                    {row.product} 
                                </TableCell>
                                <TableCell className={styles.cell} align='center'>{row.name}</TableCell>
                                <TableCell className={styles.cell}>{row.extras}</TableCell>
                                <TableCell className={styles.cell}>{row.price}</TableCell>
                                <TableCell className={styles.cell}>{row.quantity}</TableCell>
                                <TableCell className={styles.cell}>{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <div className={styles.contents}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal: </b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount: </b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal: </b>$79.60
                    </div>
                    <div>
                        <button className={styles.button}>Check Out!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TableInfo;