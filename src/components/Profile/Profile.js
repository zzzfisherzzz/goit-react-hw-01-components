import React from 'react';
import styles from './Profile.module.css'


const Profile = ({ name, tag, location , avatar, stats}) => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profile}>

                <div className={styles.description}>
                    <img
                        src={avatar}
                        alt="user avatar!"
                        className={styles.avatar}
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.stats}>
                    <li>
                        <span class={styles.label}>Followers</span>
                        <span class={styles.quantity}>{stats.followers}</span>
                    </li>
                    <li>
                        <span class={styles.label}>Views</span>
                        <span class={styles.quantity}>{stats.views}</span>
                    </li>
                    <li>
                        <span class={styles.label}>Likes</span>
                        <span class={styles.quantity}>{stats.likes}</span>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Profile;