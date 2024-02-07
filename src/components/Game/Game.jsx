import React, { useEffect } from "react";
import styles from './Game.module.css'
import { dare, questions } from "../../utils/testData";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from '../../services/actions/createTaskAction'
import { getRandomPlayer } from "../../services/actions/SettingsActions";
import { clearTask } from "../../services/actions/createTaskAction"

//Сделать элемент кнопки универсальным

const Game = () => {
    const dispatch = useDispatch();

  const task = useSelector(state => state.createTaskReducer.taskTo);
  const arrayOfLvl = useSelector(state => state.settingsReducer.lvls);
  const currentPlayer = useSelector(state => state.settingsReducer.currentPlayer);

  const choiceDare = () => {
    dispatch(createTask({array: dare, lvl: arrayOfLvl}))
  }

  const choiceQuestion = () => {
    dispatch(createTask({array: questions, lvl: arrayOfLvl}))
  }

  const random = () => {
    dispatch(createTask({array: [...dare, ...questions], lvl: arrayOfLvl}))
    dispatch(getRandomPlayer())
 }

 const nextPlayer = () => {
  dispatch(clearTask())
 }

useEffect(() => {
  dispatch(getRandomPlayer())
}, [])

  if (!task) {
    return (
      <div className={styles.body}>
      <p className={styles.playerText}>{currentPlayer}</p>
      <div className={styles.choiceContainer}>
          <button onClick={choiceQuestion} className={styles.choiceButton} type='button'>Правда</button>
          <button onClick={choiceDare} className={styles.choiceButton} type='button'>действие</button>
        </div>
        <button onClick={random} className={styles.button} type='button'>Получить правду или действие</button>
      </div>
    )
  } else {
    return (
      <div className={styles.body}>
        <p className={styles.taskMessage}>{task.task}</p>
        <p className={styles.author}>автор: {task.author}</p>
        <button className={styles.button} type='button' onClick={nextPlayer}>Следующий игрок</button>
      </div>
    )
  }
}

export default Game