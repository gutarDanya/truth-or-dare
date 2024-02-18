import React, {useEffect, useState} from "react";
import styles from './MainPageSettings.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLvl as selectLvlOfGame, deleteLvl, addPlayer, deletePlayer, handleRandomMode } from "../../services/actions/SettingsActions";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

const MainPageSettings = () => {

    const navigate = useNavigate();

    //there input value of add players
    const [inputName, setInputName] = useState('');

    const dispatch = useDispatch();
    const arrayOfSelectedLvls = localStorage.getItem('lvls').split(',').map((lvl) => {return Number(lvl)});

    const players = localStorage.getItem('players').split(',');

    //function of add player in game
    const clickAddPlayer = (evt) => {
        evt.preventDefault()
        dispatch(addPlayer(inputName))
        setInputName('')
    }

    //function of select lvl: custiomize button after click & dispatch lvls of game to store
    const selectLvl = (evt) => {
        evt.preventDefault()
        const number = Number(evt.target.innerText);

        if (arrayOfSelectedLvls.some((item) => item === number)) {
            dispatch(deleteLvl(number))
            evt.target.className = styles.buttonInactive
        } else {
            dispatch(selectLvlOfGame(number))
            evt.target.className = styles.buttonActive
        }
    }

    //function remove player from game & change style of button
    const clickDeletePlayer = (evt) => {
        evt.preventDefault();
        dispatch(deletePlayer(evt.target.innerText))
    }

    //confirm all settings. There if no players and levels are selected Function does not allow the player to enter the Game route
    const submitTheForm = (evt) => {
        evt.preventDefault()
        if (localStorage.getItem('lvls') != 0 && localStorage.getItem('lvls').split(',').map((item) => {return Number(item)}) !== 0 
        && localStorage.getItem('players') !== '' && localStorage.getItem('players').split(',') !== 0) {
            navigate('/game')

            console.log(localStorage.getItem('lvls'))

            console.log(localStorage.getItem('lvls').split(',').map((item) => {return Number(item)}), localStorage.getItem('players').split(','))
        }
    }
//IN FUTURE FIX CLICK ON THE CIRCLE
    const activeRandomMode =(evt) => {
        if(evt.target.classList.length === 1 ) {
            evt.target.className = `${evt.target.className} ${styles.randomActive}`
        } else {
            evt.target.className = styles.randomInactive
        }
        dispatch(handleRandomMode())
    }
    
    useEffect(() => {
        
    })

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Настройки</h1>
            <form className={styles.inputForm}>
                <h2 className={styles.addPlayerText}>Добавить Игрока</h2>
                <input placeholder="имя" type='text' className={styles.input} value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                <button className={styles.inputFormButton} type='submit' onClick={clickAddPlayer}>Добавить</button>
            </form>
            <form className={styles.formContainer}>
                <div className={styles.containerOfButtons}>
                    
                    <ButtonContainer title='Уровень сложности заданий' array={[1,2,3,4,5]} func={selectLvl}/>
                    
                    <ButtonContainer title='Игроки' array={localStorage.getItem('players').split(',')} func={clickDeletePlayer} />

                    <ButtonContainer title='Возрастной рейтинг' array={['6+', '12+', '16+', '18+']} />

                </div>
                <h2 className={styles.addPlayerText}>Включить случайный режим</h2>
                <button className={styles.randomInactive} onClick={e => activeRandomMode(e)} type='button'>
                    <div className={styles.circle} onClick={e => e.stopPropagation()}/>
                </button>

                <button onClick={submitTheForm} className={styles.submitButton} type="submit">Играть</button>
            </form>
        </div>
    )
}

export default MainPageSettings