import { TASK_LIST_ACTION } from '../constants'

export const addTaskAction = (params) => {
    return {
        type: TASK_LIST_ACTION.ADD_TASK,
        payload: params,
    };
}
export const editTaskAction = (params, index) => {
    return {
        type: TASK_LIST_ACTION.EDIT_TASK,
        payload: {
            index,
            value: params
        }
    }
}
export const deleteTaskAction = (index) => {
    return {
        type: TASK_LIST_ACTION.DELETE_TASK,
        payload: {
            index
        }
    }
}
