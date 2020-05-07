import React from 'react';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <div className={styles.transactionWrap}>
            <table class="transactionHistory">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => 
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;


