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

// Generate some sample tasks to get started
const generateInitialTasks = () => {
    return [
        {
            id: uuidv4(),
            title: 'Research project requirements',
            description: 'Gather all necessary information and resources for the upcoming project.',
            status: 'toDo',
            createdAt: new Date().toISOString()
        },
        {
            id: uuidv4(),
            title: 'Design database schema',
            description: 'Create the database structure including tables and relationships.',
            status: 'toDo',
            createdAt: new Date().toISOString()
        },
        {
            id: uuidv4(),
            title: 'Setup project repository',
            description: 'Initialize Git repository and set up basic project structure.',
            status: 'inProgress',
            createdAt: new Date().toISOString()
        },
        {
            id: uuidv4(),
            title: 'Implement authentication',
            description: 'Add user login, registration, and authentication features.',
            status: 'peerReview',
            createdAt: new Date().toISOString()
        },
        {
            id: uuidv4(),
            title: 'Write unit tests',
            description: 'Create comprehensive tests for all major components.',
            status: 'done',
            createdAt: new Date().toISOString()
        }
    ];
};