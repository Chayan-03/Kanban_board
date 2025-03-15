import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({ id, title, tasks }) => {
    return (
        <div className="column">
            <h2 className="column-title">{title}</h2>
            <div className="task-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</div>

            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;