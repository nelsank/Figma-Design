import React, { useState } from 'react';
import './index.css';

const Sidebar = () => {
  // State to manage dropdown visibility
  const [isQueueOpen, setIsQueueOpen] = useState(false);

  // Function to toggle dropdown
  const toggleQueueDropdown = () => {
    setIsQueueOpen(!isQueueOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>RISK HAWK</h2>
        <p>Message Your Exposures</p>
      </div>
      <ul className="menu">
        {[
          "Internal Audit",
          "UAT Testing",
          "Intract",
          "Queue", // This will be highlighted
          "Workflow",
          "Admin",
          "Asset",
          "Parent",
          "Option One",
          "Option Two",
          "All Accessories",
          "Decorating",
          "Presenting"
        ].map((item, index) => (
          <li
            key={index}
            className={`menuItem ${item === "Queue" ? "highlight" : ""}`}
            onClick={item === "Queue" ? toggleQueueDropdown : undefined}
          >
            {item}
            {/* Show dropdown for Queue */}
            {item === "Queue" && isQueueOpen && (
              <ul className="dropdown">
                <li className="dropdownItem">Submenu Item 1</li>
                <li className="dropdownItem">Submenu Item 2</li>
                <li className="dropdownItem">Submenu Item 3</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
