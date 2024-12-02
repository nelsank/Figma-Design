import React from 'react';
import './index.css';

const ProfileComponent = () => {
  const profiles = [
    { name: "Cheyane Bergson", initials: "CB" },
    { name: "Jonathan Higgins", initials: "CB" },
    { name: "Capt. Trunk", initials: "CB" },
    { name: "Hannibai SBI", initials: "CB" }
  ];

  return (
    <div className="profileContainer">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`profile ${profile.name === 'Hannibai SBI' ? 'highlight' : ''}`}
        >
            <p className="profilePic">HB</p>
        
          
          <span className="profileName">{profile.name}</span>
        </div>
      ))}
      <button className="btn-primary">Message</button>
    </div>
  );
};

export default ProfileComponent;
