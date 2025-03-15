import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTasks } from '../redux/actions/taskActions';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        dispatch(searchTasks(value));
    };

    return (
        <header className="header">
            <h1>Kanban Board</h1>
            <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
        </header>
    );
};

export default Header;