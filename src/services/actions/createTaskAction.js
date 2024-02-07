export const CREATE_TASK = 'CREATE_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';

export const clearTask = () => {
    return {type: CLEAR_TASK}
}

export const createTask = (arrayOfQuestion) => {
    return {type: CREATE_TASK, payload: arrayOfQuestion}
} 