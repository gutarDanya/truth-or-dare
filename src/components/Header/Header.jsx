import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
return (
    <header className={styles.header}>
        <nav className={styles.navigation}>
            <NavLink to='/truth-or-dare' className={({isActive}) => isActive ? styles.link : styles.inactiveLink}>Настройки</NavLink>
            <NavLink to='/players' className={({isActive}) => isActive ? styles.link : styles.inactiveLink}>Игркои</NavLink>
            <NavLink to='/history-of-task' className={({isActive}) => isActive ? styles.link : styles.inactiveLink}>История действий</NavLink>
        </nav>
        <img alt='logo' src='https://chugnar.com/wp-content/uploads/2020/01/gng_tod_512.png' className={styles.logo}/>
    </header>
)
}

export default Header