import React, { useState } from 'react';
import './index.css';

const ActionLauncher = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleActionClick = (action) => {
    alert(`Action triggered: ${action}`);
  };

  return (
    <div className="actionLauncherContainer">
      {/* Search Bar */}
      <input
        type="text"
        className="searchBar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Buttons */}
      <div className="actionButtons">
        <button className="actionButton" onClick={() => handleActionClick('Add Action')}>
          Add Action
        </button>
        <button className="actionButton" onClick={() => handleActionClick('Fee Reversal')}>
          Fee Reversal
        </button>
        </div>
        <div className="actionButtons">
        <button className="actionButton" onClick={() => handleActionClick('Real Onboarding')}>
          Real Onboarding
        </button>
        <button className="actionButton" onClick={() => handleActionClick('Address Update')}>
          Address Update
        </button>
      </div>
    </div>
  );
};

export default ActionLauncher;
