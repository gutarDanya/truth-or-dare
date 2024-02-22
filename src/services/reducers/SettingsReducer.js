import React from "react";
import { SELECT_LVL_OF_GAME, DELETE_LVL_OF_GAME, ADD_PLAYER_TO_GAME, DELETE_PLAYER, GET_RANDOM_PLAYER, HANDLE_RANDOM_MODE, GET_NEXT_PLAYER } from "../actions/SettingsActions";

const initialState = {
    currentPlayer: '',
    randomActive: false,
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {

        //FIX localstorage have null in arr
        case SELECT_LVL_OF_GAME: {

            console.log(localStorage.getItem('lvls'))

            if (localStorage.getItem('lvls') === '') {
                localStorage.setItem('lvls', action.payload)
            } else {
                localStorage.setItem('lvls', localStorage.getItem('lvls') + `,${action.payload}`)
            }

            return state
        }

        case DELETE_LVL_OF_GAME: {
            localStorage.setItem('lvls', localStorage.getItem('lvls').split(',').filter((lvl) => {return lvl !== action.payload}))
            return state
        }

        case ADD_PLAYER_TO_GAME: {

            console.log(localStorage.getItem('players'))

            if (localStorage.getItem('players') === '') {
                localStorage.setItem('players', action.payload)
            } else {
                localStorage.setItem('players', localStorage.getItem('players') + `,${action.payload}`)
            }

            return state
        }

        case DELETE_PLAYER: {
            localStorage.setItem('players', localStorage.getItem('players').split(',').filter((player) => {return player !== action.payload}))

            return state
        }

        case HANDLE_RANDOM_MODE: {
            return {
                ...state,
                randomActive: !state.randomActive
            }
        }
        case GET_RANDOM_PLAYER: {

            const players = localStorage.getItem('players').split(',')

            const player = players[Math.floor(Math.floor & players.length)]

            return {
                ...state,
                currentPlayer: player
            }
        }
        case GET_NEXT_PLAYER: {

            const players = localStorage.getItem('players').split(',')

            let player = 'Даниил';

            if (players.indexOf(state.currentPlayer) == players.length - 1) {
                player = players[0]
            } else {
                player = players[players.indexOf(state.currentPlayer) + 1]
            }
            
            return {
                ...state,
                currentPlayer: player
            }
        }
        default: return state
    }
}

export default settingsReducer