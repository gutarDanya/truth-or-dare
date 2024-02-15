import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.columnContaienr} >
                <div className={styles.column}>
                    <h4 className={styles.columnHeader}>Связь с автором</h4>
                    <a target='_blank' href='https://vk.com/gutardanya' className={styles.link}>Вконтакте</a>
                    <a target='_blank' href='' className={styles.link}>Instagram</a>
                    <a target='_blank' href="https://tlgg.ru/@ush_dan" className={styles.link}>@ush_dan</a>
                    <a target='_blank' href='https://api.whatsapp.com/send?phone=79011070093' className={styles.link}>WhatsApp</a>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnHeader}>Социальные сети проекта</h4>
                    <a target='_blank' href='https://github.com/gutarDanya/truth-or-dare' className={styles.link}>GitHub</a>
                    <a target='_blank' href='#' className={styles.link}>Телеграм</a>
                    <a target='_blank' href='#' className={styles.link}>Instagram</a>
                    <a target='_blank' href='#' className={styles.link}>Вконтакте</a>
                </div>
            </div>
            <strong className={styles.author}>© Daniil Ushakov</strong>
        </footer>
    )
}

export default Footer