import React, { useEffect } from "react";
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({ title, array, func }) => {


    return (
        <div className={styles.buttons}>
            <p className={styles.tasksText}>{title}</p>
           {array && array.length > 0 && array.map((item, i) => {
            const currentClass = localStorage.getItem('lvls').split(',').map((lvl) => {return Number(lvl)}).some((lvl) => lvl === item) ? styles.buttonActive : styles.buttonInactive
            return (
                <button key={i} onClick={(e) => { func(e) }} className={currentClass}>{item}</button>
            )
           })}
        </div>
    )
}

export default ButtonContainer;