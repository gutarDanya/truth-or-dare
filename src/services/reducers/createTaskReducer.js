import { CREATE_TASK } from "../actions/createTaskAction";
import { dare, questions } from "../testData";

const initalState = {
    taskTo: ''
};

export const createTaskReducer = (state = initalState, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            const task = action.payload[Math.floor(Math.random() * action.payload.length)].task
            return {
                taskTo: task
            }
        }
        default: return state
    }
}