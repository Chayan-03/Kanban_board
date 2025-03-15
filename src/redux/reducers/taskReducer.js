import {
    ADD_TASK,
    MOVE_TASK,
    SEARCH_TASKS,
    LOAD_TASKS
} from '../actionTypes';

const initialState = {
    tasks: [],
    searchTerm: ''
};

const taskReducer = (state = initialState, action) => {
    let newTasks;

    switch (action.type) {
        case LOAD_TASKS:
            return {
                ...state,
                tasks: action.payload
            };

        case ADD_TASK:
            newTasks = [...state.tasks, action.payload];
            localStorage.setItem('kanbanTasks', JSON.stringify(newTasks));
            return {
                ...state,
                tasks: newTasks
            };

        case MOVE_TASK: {
            const { taskId, sourceStatus, destinationStatus, sourceIndex, destinationIndex } = action.payload;

            // Create a copy of the tasks
            newTasks = [...state.tasks];

            // Find the task to move
            const taskToMove = newTasks.find(task => task.id === taskId);

            // If we just need to change status but keep in same column (position doesn't matter)
            if (sourceStatus === destinationStatus) {
                // Remove from source position and insert at destination position
                const filteredTasks = newTasks.filter(task => task.id !== taskId);

                // Get tasks of that status
                const statusTasks = filteredTasks.filter(task => task.status === sourceStatus);

                // Insert the task at the correct position
                statusTasks.splice(destinationIndex, 0, taskToMove);

                // Combine with tasks of other statuses
                const otherTasks = filteredTasks.filter(task => task.status !== sourceStatus);
                newTasks = [...otherTasks, ...statusTasks];
            } else {
                // Update the task's status
                taskToMove.status = destinationStatus;
            }

            localStorage.setItem('kanbanTasks', JSON.stringify(newTasks));
            return {
                ...state,
                tasks: newTasks
            };
        }

        case SEARCH_TASKS:
            return {
                ...state,
                searchTerm: action.payload
            };

        default:
            return state;
    }
};

export default taskReducer;