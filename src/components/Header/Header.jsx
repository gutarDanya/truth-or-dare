import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import logo from '../../utils/images/logo.png'

const Header = () => {
return (
    <header className={styles.header}>
        <nav className={styles.navigation}>
            <Link to='/settings-play' className={styles.link}>Настройки</Link>
            <Link to='/players'>Игркои</Link>
            <Link to='/history-of-task'>История действий</Link>
        </nav>
        <img alt='logo' src='https://chugnar.com/wp-content/uploads/2020/01/gng_tod_512.png' className={styles.logo}/>
    </header>
)
}

export default Header