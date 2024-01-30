import React, { useEffect } from 'react';
import styles from './App.module.css'
import Game from '../Game/Game';
import Header from '../Header/Header';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className={styles.root}>
      <Header/>
      <Routes>
        <Route path='/' element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
