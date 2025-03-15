import {
    ADD_TASK,
    MOVE_TASK,
    SEARCH_TASKS,
    LOAD_TASKS
} from '../actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: {
            ...task,
            id: uuidv4(),
            createdAt: new Date().toISOString()
        }
    };
};

export const moveTask = (taskId, sourceStatus, destinationStatus, sourceIndex, destinationIndex) => {
    return {
        type: MOVE_TASK,
        payload: {
            taskId,
            sourceStatus,
            destinationStatus,
            sourceIndex,
            destinationIndex
        }
    };
};

export const searchTasks = (searchTerm) => {
    return {
        type: SEARCH_TASKS,
        payload: searchTerm
    };
};

export const loadTasks = () => {
    // Load tasks from localStorage if available
    const savedTasks = localStorage.getItem('kanbanTasks');
    const tasks = savedTasks ? JSON.parse(savedTasks) : generateInitialTasks();

    return {
        type: LOAD_TASKS,
        payload: tasks
    };
};
// Add this to your taskActions.js to ensure proper task structure
const generateInitialTasks = () => {
    return [
        {
            id: 'task-1', // Make sure IDs are strings
            title: 'Research project requirements',
            description: 'Gather all necessary information and resources for the upcoming project.',
            status: 'toDo', // Match exactly with column IDs

        },
        {
            id: 'task-2',
            title: 'Design database schema',
            description: 'Create the database structure including tables and relationships.',
            status: 'toDo',

        },
        {
            id: 'task-3',
            title: 'Setup project repository',
            description: 'Initialize Git repository and set up basic project structure.',
            status: 'inProgress',

        },
        {
            id: 'task-4',
            title: 'Implement authentication',
            description: 'Add user login, registration, and authentication features.',
            status: 'peerReview',

        },
        {
            id: 'task-5',
            title: 'Write unit tests',
            description: 'Create comprehensive tests for all major components.',
            status: 'done',

        }
    ];
};