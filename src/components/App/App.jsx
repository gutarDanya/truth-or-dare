import React, { useEffect } from 'react';
import styles from './App.module.css';
import { dare, questions } from '../../services/testData';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../services/actions/createTaskAction';

function App() {

  const dispatch = useDispatch();

  const task = useSelector(state => state.createTaskReducer.taskTo)

  const choiceDare = () => {
    dispatch(createTask(dare))
  }

  const choiceQuestion = () => {
    dispatch(createTask(questions))
  }

  const random = () => {
    dispatch(createTask([...dare, ...questions]))
 }

  return (
    <div className={styles.root}>
      <header>

      </header>
      <div className={styles.body}>
        <div className={styles.choiceContainer}>
          <button onClick={choiceQuestion} className={styles.choiceButton} type='button'>Правда</button>
          <button onClick={choiceDare} className={styles.choiceButton} type='button'>действие</button>
        </div>
        <button onClick={random} className={styles.button} type='button'>Получить правду или действие</button>
          <p>{task}</p>
      </div>
    </div>
  );
}

export default App;
