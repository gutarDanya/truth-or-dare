export const SELECT_LVL_OF_GAME = 'SELECT_LVL_OF_GAME';
export const DELETE_LVL_OF_GAME = 'DELETE_LVL_OF_GAME';
export const SELECT_AGE_CATEGORY = 'SELECT_AGE_CATEGORY';
export const ADD_PLAYER_TO_GAME = 'ADD_PLAYER_TO_GAME';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const GET_RANDOM_PLAYER = 'GET_RANDOM_PLAYER';

export const getRandomPlayer = () => {
    return {type: GET_RANDOM_PLAYER}
}

export const deletePlayer = (player) => {
    return {type: DELETE_PLAYER, payload: player}
}

export const addPlayer = (player) => {
    return {type: ADD_PLAYER_TO_GAME, payload: player}
}

export const selectLvl = (lvl) => {
    return {type: SELECT_LVL_OF_GAME, payload: lvl}
}

export const deleteLvl = (lvl) => {
    return {type: DELETE_LVL_OF_GAME, payload: lvl}
}