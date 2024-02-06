import { CREATE_TASK } from "../actions/createTaskAction";
import { dare, questions } from "../../utils/testData";

const initalState = {
    taskTo: ''
};

export const createTaskReducer = (state = initalState, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            const {array, lvl} = action.payload
            const currentArray = array.filter((tasks) => tasks.lvl === lvl.find((lvl) => lvl === tasks.lvl))
            console.log(currentArray)

            const task = currentArray[Math.floor(Math.random() * currentArray.length)].task
            return {
                taskTo: task
            }
        }
        default: return state
    }
}