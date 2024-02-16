import React, { useEffect } from "react";
import styles from './Game.module.css'
import { dare, questions } from "../../utils/testData";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from '../../services/actions/createTaskAction'
import { getRandomPlayer, getNextPlayer } from "../../services/actions/SettingsActions";
import { clearTask } from "../../services/actions/createTaskAction"

//Сделать элемент кнопки универсальным

const Game = () => {
    const dispatch = useDispatch();

  const task = useSelector(state => state.createTaskReducer.taskTo);
  const arrayOfLvl = useSelector(state => state.settingsReducer.lvls);
  const currentPlayer = useSelector(state => state.settingsReducer.currentPlayer);
  const randomActive = useSelector(state => state.settingsReducer.randomActive);

 const getPlayer = () => {
    if (randomActive) {
        dispatch(getRandomPlayer())
    } else {
        dispatch(getNextPlayer())
    }
}

  const choiceDare = () => {
    dispatch(createTask({array: dare, lvl: arrayOfLvl}))
    getPlayer()
  }

  const choiceQuestion = () => {
    dispatch(createTask({array: questions, lvl: arrayOfLvl}))
    getPlayer()
  }

  const random = () => {
    dispatch(createTask({array: [...dare, ...questions], lvl: arrayOfLvl}))
    getPlayer()
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
        <h1 className={styles.headerText}>Выберете правду или действие</h1>
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
        <h1 className={styles.headerText}>Выберете правду или действие</h1>
        <p className={styles.taskMessage}>{task.task}</p>
        <p className={styles.author}>автор: {task.author}</p>
        <button className={styles.button} type='button' onClick={nextPlayer}>Следующий игрок</button>
      </div>
    )
  }
}

export default Game