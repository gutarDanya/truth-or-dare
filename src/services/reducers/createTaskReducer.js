import { CLEAR_TASK, CREATE_TASK } from "../actions/createTaskAction";
import { dare, questions } from "../../utils/testData";

const initalState = {
    taskTo: ''
};

export const createTaskReducer = (state = initalState, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            const array = action.payload
            const lvl = localStorage.getItem('lvls').split(',').map((lvl) => {return Number(lvl)})
            console.log(lvl)
            const currentArray = array.filter((tasks) => tasks.lvl === lvl.find((lvl) => lvl === tasks.lvl))
            console.log(currentArray)

            const task = currentArray[Math.floor(Math.random() * currentArray.length)]
            return {
                taskTo: task
            }
        }
        case CLEAR_TASK: {
            return {
                taskTo: ''
            }
        }
        default: return state
    }
}