
export const getPlayersArr = () => {
    return localStorage.getItem('players').split(',');
}

export const setPlayersArr = (player) => {
    localStorage.setItem('players', localStorage.getItem('players') + player)
}

export const getLvlsArr = () => {
    return localStorage.getItem('lvls').split(',').map((number) => Number(number))
}

export const setLvlsArr = (lvl) => {
    localStorage.setItem('lvls', localStorage.getItem('lvls') + lvl)
}
