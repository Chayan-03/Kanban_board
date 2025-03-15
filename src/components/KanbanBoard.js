import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/actions/taskActions';
import Column from './Column';
import AddTaskModal from './AddTaskModal';
import { FaPlus } from 'react-icons/fa';
import './KanbanBoard.css';

const KanbanBoard = () => {
    const dispatch = useDispatch();
    const { tasks, searchTerm } = useSelector(state => state.tasks);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        { id: 'toDo', title: 'To Do' },
        { id: 'inProgress', title: 'In Progress' },
        { id: 'peerReview', title: 'Peer Review' },
        { id: 'done', title: 'Done' }
    ];

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        // If no destination or dropped at the same place
        if (!destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)) {
            return;
        }

        dispatch(moveTask(
            draggableId,
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index
        ));
    };

    // Filter tasks based on search term
    const filterTasks = (columnId) => {
        return tasks
            .filter(task => task.status === columnId)
            .filter(task =>
                !searchTerm ||
                task.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
    };

    return (
        <div className="kanban-board-container">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="kanban-board">
                    {columns.map(column => (
                        <Column
                            key={column.id}
                            id={column.id}
                            title={column.title}
                            tasks={filterTasks(column.id)}
                        />
                    ))}
                </div>
            </DragDropContext>

            <button
                className="add-task-button"
                onClick={() => setIsModalOpen(true)}
            >
                <FaPlus />
            </button>

            {isModalOpen && (
                <AddTaskModal
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default KanbanBoard;