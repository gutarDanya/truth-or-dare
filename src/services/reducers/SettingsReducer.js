import React from "react";
import { SELECT_LVL_OF_GAME, DELETE_LVL_OF_GAME, ADD_PLAYER_TO_GAME, DELETE_PLAYER, GET_RANDOM_PLAYER } from "../actions/SettingsActions";

const initialState = {
    lvls: [],
    players: [],
    currentPlayer: []
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
        case GET_RANDOM_PLAYER: {
            const player = Math.floor(Math.random() * state.players.length);
            return {
                ...state,
                currentPlayer: state.players[player]
            }
        }
        default: return state
    }
}

export default settingsReducer