import React, {useState} from "react";
import styles from './MainPageSettings.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLvl as selectLvlOfGame, deleteLvl, addPlayer, deletePlayer } from "../../services/actions/SettingsActions";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

const MainPageSettings = () => {

    const navigate = useNavigate();

    //there input value of add players
    const [inputName, setInputName] = useState('');

    const dispatch = useDispatch();
    const arrayOfSelectedLvls = useSelector((state) => state.settingsReducer.lvls);

    const players = useSelector(state => state.settingsReducer.players);

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
        if (arrayOfSelectedLvls.length !== 0 && players.length !== 0) {
            navigate('/game')
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Настройки</h1>
            <form className={styles.inputForm}>
                <p className={styles.addPlayerText}>Добавить Игрока</p>
                <input placeholder="имя" type='text' className={styles.input} value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                <button className={styles.inputFormButton} type='submit' onClick={clickAddPlayer}>Добавить</button>
            </form>
            <form className={styles.formContainer}>
                <div className={styles.containerOfButtons}>
                    
                    <ButtonContainer title='Уровень сложности заданий' array={[1,2,3,4,5]} func={selectLvl}/>
                    
                    <ButtonContainer title='Игроки' array={players} func={clickDeletePlayer} />

                    <ButtonContainer title='Возрастной рейтинг' array={['6+', '12+', '16+', '18+']} />

                </div>

                <button onClick={submitTheForm} className={styles.submitButton} type="submit">Играть</button>
            </form>
        </div>
    )
}

export default MainPageSettings