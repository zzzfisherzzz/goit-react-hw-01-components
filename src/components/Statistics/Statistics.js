import React from 'react';
import styles from './Statistics.module.css'

const Statistics = ({title, stats }) => {
    return (
        <div className={styles.statisticsWrapper}>
            <div className={styles.statisticBlock}>
                <div className={styles.statistics}>
                    <h2 className={styles.title}>{title}</h2>
                        <ul className={styles.statList}>
                            {stats.map(item => 
                                <li key={item.id} className={styles.item}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.percentage}>{item.percentage}</span>
                                </li>
                            )}
                        </ul>
                 </div>
            </div>

        </div>
    );
};

export default Statistics;





