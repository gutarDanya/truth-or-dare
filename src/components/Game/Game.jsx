import React from "react";
import styles from './Game.module.css'
import { dare, questions } from "../../services/testData";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from '../../services/actions/createTaskAction'

const Game = () => {
    const dispatch = useDispatch();

  const task = useSelector(state => state.createTaskReducer.taskTo);
  const arrayOfLvl = useSelector(state => state.settingsReducer.lvls);

  const choiceDare = () => {
    dispatch(createTask({array: dare, lvl: arrayOfLvl}))
  }

  const choiceQuestion = () => {
    dispatch(createTask({array: questions, lvl: arrayOfLvl}))
  }

  const random = () => {
    dispatch(createTask({array: [...dare, ...questions], lvl: arrayOfLvl}))
    console.log(arrayOfLvl)
 }

  return (
      <div className={styles.body}>
        <div className={styles.choiceContainer}>
          <button onClick={choiceQuestion} className={styles.choiceButton} type='button'>Правда</button>
          <button onClick={choiceDare} className={styles.choiceButton} type='button'>действие</button>
        </div>
        <button onClick={random} className={styles.button} type='button'>Получить правду или действие</button>
          <p className={styles.taskMessage}>{task}</p>
      </div>
  );
}

export default Game