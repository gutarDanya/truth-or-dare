import React, {useState} from "react";
import styles from './MainPageSettings.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLvl as selectLvlOfGame, deleteLvl, addPlayer, deletePlayer } from "../../services/actions/SettingsActions";
import { useNavigate } from "react-router-dom";

const MainPageSettings = () => {

    const navigate = useNavigate();

    const [inputName, setInputName] = useState('');

    const dispatch = useDispatch();
    const arrayOfSelectedLvls = useSelector((state) => state.settingsReducer.lvls);

    const players = useSelector(state => state.settingsReducer.players);

    const clickAddPlayer = (evt) => {
        evt.preventDefault()
        dispatch(addPlayer(inputName))
    }

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

    const clickDeletePlayer = (evt) => {
        evt.preventDefault();
        dispatch(deletePlayer(evt.target.innerText))
    }

    const submitTheForm = (evt) => {
        evt.preventDefault()
        if (arrayOfSelectedLvls.length !== 0) {
            navigate('/game')
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.inputForm}>
                <input type='text' className={styles.input} value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                <button type='submit' onClick={clickAddPlayer}>Добавить</button>
            </form>
            <form className={styles.formContainer}>
                <div className={styles.containerOfButtons}>
                    <div className={styles.buttons}>
                        <p className={styles.tasksText}>Уровень сложности заданий</p>
                        <button onClick={(e) => { selectLvl(e) }} className={styles.buttonInactive}>1</button>
                        <button onClick={(e) => { selectLvl(e) }} className={styles.buttonInactive}>2</button>
                        <button onClick={(e) => { selectLvl(e) }} className={styles.buttonInactive}>3</button>
                        <button onClick={(e) => { selectLvl(e) }} className={styles.buttonInactive}>4</button>
                        <button onClick={(e) => { selectLvl(e) }} className={styles.buttonInactive}>5</button>
                    </div>
                    
                    <div className={styles.buttons}>
                        <p className={styles.tasksText}>Игроки</p>
                        {players && players.length && players.map((player, i) => {
                            return (
                                <button key={i} onClick={(e) => {clickDeletePlayer(e)}} className={styles.buttonInactive}>{player}</button>
                            )
                        })}
                    </div>

                    <div className={styles.buttons}>
                        <p className={styles.tasksText}>Возрастной рейтинг</p>
                        <button className={styles.buttonInactive}>6+</button>
                        <button className={styles.buttonInactive}>12+</button>
                        <button className={styles.buttonInactive}>16+</button>
                        <button className={styles.buttonInactive}>18+</button>
                    </div>
                </div>

                <button onClick={submitTheForm} className={styles.submitButton} type="submit">Играть</button>
            </form>
        </div>
    )
}

export default MainPageSettings