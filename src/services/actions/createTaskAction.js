export const CREATE_TASK = 'CREATE_TASK';


export const createTask = (arrayOfQuestion) => {
    return {type: CREATE_TASK, payload: arrayOfQuestion}
} 