import React from "react";
import styles from './Players.module.css';
import { getLvlsArr } from "../../utils/scripts";
import TasksContainer from "../../components/tasksContainer/tasksContainer";
import { questions, dare } from "../../utils/testData";
import { useDispatch, useSelector } from "react-redux";

const Players = () => {

    const dispatch = useDispatch();

    const daresActive = useSelector((state) => state.switchTaskReducer.dareActivated)

    const currentQuestions = questions.filter((quest) => quest.lvl === getLvlsArr().find((lvl) => lvl === quest.lvl));

    const currentDare = dare.filter((quest) => quest.lvl === getLvlsArr().find((lvl) => lvl === quest.lvl));

    return (
        <div className={styles.container}>
            <h1 className={styles.headerText}>Cписок правды и действий</h1>
                <TasksContainer arr={daresActive ? currentDare : currentQuestions} text={daresActive ? 'действия' : 'вопросы'} />
        </div>
    )
}

export default Players