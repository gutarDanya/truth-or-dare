import React from "react";
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({ title, array, func }) => {
    return (
        <div className={styles.buttons}>
            <p className={styles.tasksText}>{title}</p>
           {array && array.length > 0 && array.map((item, i) => {
            return (
                <button key={i} onClick={(e) => { func(e) }} className={styles.buttonInactive}>{item}</button>
            )
           })}
        </div>
    )
}

export default ButtonContainer;