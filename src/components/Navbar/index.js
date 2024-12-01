import React from 'react';
import './index.css'; // Add styles here

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left section (Chat/Feedchat) */}
      <div className="left">
        <div className="chat">
          <span>Chat/Feedchat</span>
        </div>
      </div>

      {/* Middle section (Home symbol) */}
      <div className="middle">
        <div className="home">
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/home.png" 
            alt="Home" 
            className="icon" 
          />
        </div>
      </div>

      {/* Right section (Profile, Settings, Logout) */}
      <div className="right">
        <div className="profile">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Profile"
            className="profilePic"
          />
          <div className="userInfo">
            <span>Process Owner</span>
            <span>HOD</span>
            <span>Admin</span>
          </div>
        </div>
        <div className="settings">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/settings.png"
            alt="Settings"
            className="icon"
          />
        </div>
        <div className="logout">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/logout-rounded.png"
            alt="Logout"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
