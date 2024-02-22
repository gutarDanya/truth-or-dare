import { SWITCH_TASK } from "../actions/switchTasksAction"


const initialState = {
    dareActivated: false
}

const switchTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TASK: {
            return {
                dareActivated: !state.dareActivated
            }
        }
        default: return state
    }
}

export default switchTaskReducer