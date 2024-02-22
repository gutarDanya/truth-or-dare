import React from "react";
import styles from './tasksContainer.module.css'
import { useDispatch } from "react-redux";
import { switchTask } from "../../services/actions/switchTasksAction";

const TasksContainer = ({arr, text}) => {

    const dispatch = useDispatch();

    const switchArr = () => {
        dispatch(switchTask())
    }

    return (
        <div className={styles.container}>
            <button type="button" onClick={switchArr} className={styles.headerText}>{text}</button>
            {arr && arr.length > 0 && arr.map((task, i) => {
                return (
                    <button className={styles.button} key={i}>
                        <p className={styles.text}>{task.task}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default TasksContainer