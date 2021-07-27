import {TASK_LIST_ACTION} from '../constants';

const initialState = localStorage.task && JSON.parse(localStorage.task) || {taskList: []};

const saveLocal = (taskList) => {
    localStorage.task = JSON.stringify(taskList);
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_LIST_ACTION.ADD_TASK: {
            let task = {
                ...state,
                taskList: [
                    ...state.taskList,
                    action.payload,
                ]
            };
            saveLocal(task);
            return task;
        }
        case TASK_LIST_ACTION.EDIT_TASK: {
            let task = {...state};
            task.taskList.splice(action.payload.index, 1, action.payload.value);
            saveLocal(task);
            return task;
        }
        case TASK_LIST_ACTION.DELETE_TASK: {
            let task = {...state};
            task.taskList.splice(action.payload.index, 1);
            saveLocal(task);
            return task;
        }
        default: {
            return state;
        }
    }
}

export default taskListReducer;
