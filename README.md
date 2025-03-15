# Kanban Board

A responsive Kanban board application built with React and Redux that allows users to manage tasks across different stages with drag-and-drop functionality.

## Features

- Drag and drop tasks between columns
- Search tasks by title
- Add new tasks to the "To Do" column
- Responsive design for all screen sizes
- Local storage persistence

## Technologies Used

- React (Create React App)
- Redux for state management
- react-beautiful-dnd for drag and drop functionality
- Local Storage for data persistence
- CSS for styling
- react-icons for icons

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/        # React components
│   ├── AddTaskModal.js
│   ├── Column.js
│   ├── Header.js
│   ├── KanbanBoard.js
│   └── TaskCard.js
├── redux/             # Redux state management
│   ├── actions/
│   ├── reducers/
│   └── store.js
├── utils/             # Utility functions
├── App.js
└── index.js
```

## How to Use

- **View Tasks**: Tasks are displayed in columns according to their status.
- **Search Tasks**: Use the search bar at the top to filter tasks by title.
- **Add a Task**: Click the "+" button in the bottom right corner to create a new task.
- **Move Tasks**: Drag and drop tasks between columns to change their status.

## Future Improvements

- User authentication
- Task editing and deletion
- Task prioritization
- Due dates and reminders
- Task assignments to team members
- Activity history and logs


