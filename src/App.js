import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTasks } from './redux/actions/taskActions';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load tasks from localStorage on initial render
    dispatch(loadTasks());
  }, [dispatch]);

  return (
      <div className="app">
        <Header />
        <KanbanBoard />
      </div>
  );
}

export default App;
