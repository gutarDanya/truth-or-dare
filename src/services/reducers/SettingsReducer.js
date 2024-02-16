import React from "react";
import { SELECT_LVL_OF_GAME, DELETE_LVL_OF_GAME, ADD_PLAYER_TO_GAME, DELETE_PLAYER, GET_RANDOM_PLAYER, HANDLE_RANDOM_MODE, GET_NEXT_PLAYER } from "../actions/SettingsActions";

const initialState = {
    lvls: [3, 4, 5],
    players:[],
    currentPlayer: '',
    randomActive: false,
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_LVL_OF_GAME: {
            return {
                ...state,
                lvls: [...state.lvls, action.payload]
            }
        }
        case DELETE_LVL_OF_GAME: {
            return {
                ...state,
                lvls: state.lvls.filter((item) => item !== action.payload)
            }
        }
        case ADD_PLAYER_TO_GAME: {
            return {
                ...state,
                players: [...state.players, action.payload]
            }
        }
        case DELETE_PLAYER: {
            return {
                ...state,
                players: state.players.filter((item) => item !== action.payload)
            }
        }
        case HANDLE_RANDOM_MODE: {
            return {
                ...state,
                randomActive: !state.randomActive
            }
        }
        case GET_RANDOM_PLAYER: {

            const player = state.players[Math.floor(Math.floor & state.players.length)]

            return {
                ...state,
                currentPlayer: player
            }
        }
        case GET_NEXT_PLAYER: {

            let player = 'Даниил';

            if (state.players.indexOf(state.currentPlayer) == state.players.length - 1) {
                player = state.players[0]
            } else {
                player = state.players[state.players.indexOf(state.currentPlayer) + 1]
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