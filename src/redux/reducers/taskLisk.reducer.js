import {TASK_LIST_ACTION} from '../constants';

const initialState = localStorage.taskList && JSON.parse(localStorage.taskList) || [];

const saveLocal = (taskList) => {
    localStorage.taskList = JSON.stringify(taskList);
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_LIST_ACTION.ADD_TASK: {
            let taskList = [
                ...state,
                action.payload,
            ];
            saveLocal(taskList);
            return taskList;
        }
        case TASK_LIST_ACTION.EDIT_TASK: {
            let taskList = [...state];
            taskList.splice(action.payload.index, 1, action.payload.value);
            saveLocal(taskList);
            return taskList;
        }
        case TASK_LIST_ACTION.DELETE_TASK: {
            let taskList = [...state];
            taskList.splice(action.payload.index, 1);
            saveLocal(taskList);
            return taskList;
        }
        default: {
            return state;
        }
    }
}

export default taskListReducer;
