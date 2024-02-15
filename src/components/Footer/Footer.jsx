import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.columnContaienr} >
                <h4 className={styles.columnHeader}>Связь с автором</h4>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
            </div>
            <div className={styles.columnContaienr}>
                <h4 className={styles.columnHeader}>Социальные сети проекта</h4>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
                <a target='_blank' href='' className={styles.link}></a>
            </div>
            <strong>© Daniil Ushakov</strong>
        </footer>
    )
}

export default Footer