import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { truncateText } from '../utils/helpers';
import './TaskCard.css';

const TaskCard = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`task-card ${snapshot.isDragging ? 'dragging' : ''}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h3 className="task-title">{task.title}</h3>
                    <p className="task-description">{truncateText(task.description, 100)}</p>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;