import React, { useEffect } from 'react';
import styles from './App.module.css'
import Game from '../Game/Game';
import Header from '../Header/Header';
import { Routes,Route } from 'react-router-dom';
import MainPageSettings from '../MainPageSettings/MainPageSettings';
import Footer from '../Footer/Footer';

function App() {

  if (!localStorage.getItem('lvls')) {
    localStorage.setItem('lvls', '')
  }

  if (!localStorage.getItem('players')) {
    localStorage.setItem('players', '')
  }

  return (
    <div className={styles.root}>
      <Header/>
      <Routes>
        <Route path='/truth-or-dare' element={<MainPageSettings/>}/>
        <Route path='/game' element={<Game />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
