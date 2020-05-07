import React from 'react';
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <div className={styles.wrapper}>
            <ul>
                {friends.map(item => 
                    <li key={item.id} className={styles.item}>
                        <span class={styles.status}>{item.status}
                        
                        </span>
                        <img className={styles.avatar} src={item.avatar} alt="" width="48" />
                        <span className={styles.name}>{item.name}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default FriendList;


