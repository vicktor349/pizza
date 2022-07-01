import React from 'react';
import styles from '../../styles/Order.module.css';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import Image from 'next/image';



const createData = (orderId, name, address, total) =>{
    return(
        {orderId, name, address,total}
    )
}

const rows = [
    createData(
        1,
        'John Doe',
        'Elton st 212 ',
        '$39.80'
    )
]

const Order = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <TableContainer component={Paper} className={styles.tableContainer} > 
                <Table className={styles.table} >
                    <TableHead className={styles.tableHead}>
                        <TableRow className={styles.tableRow}>
                            <TableCell className={styles.tableCells}>Order ID</TableCell>
                            <TableCell align='center' className={styles.tableCells}>Customer</TableCell>
                            <TableCell className={styles.tableCells}>Address</TableCell>
                            <TableCell className={styles.tableCells}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) =>(
                            <TableRow key={row.name} className={styles.tableRows}>  
                                <TableCell className={styles.cell} align='center'>{row.orderId}</TableCell>
                                <TableCell className={styles.cell}>{row.name}</TableCell>
                                <TableCell className={styles.cell}>{row.address}</TableCell>
                                <TableCell className={styles.cell}>{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <div className={styles.row}></div>
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
                        <button disabled className={styles.button}>Paid! </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order