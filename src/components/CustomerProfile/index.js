import React from 'react';
import './index.css';

const CustomerProfileComponent = () => {
  return (
    <div className="profileWidget">
      {/* Customer Info */}
      <div className="profileHeader">
        <div className="profileDetails">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="CB Profile"
            className="profilePic"
          />
          <span className="initials">CB</span>
          <div className="profileInfo">
            <h3>Habbibal Smith</h3>
            <div className="location">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/marker.png"
                alt="Location"
                className="locationIcon"
              />
              <span>Market Street, 1st line near post office</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="customerDetails">
        <div className="detail">
          <label>Customer ID:</label>
          <span>12345</span>
          <button className="addButton">Add</button>
        </div>
        <div className="detail">
          <label>Email Address:</label>
          <span>habbibal@example.com</span>
          <button className="addButton">Add</button>
        </div>
        <div className="detail">
          <label>Phone Number:</label>
          <span>+1234567890</span>
          <button className="addButton">Add</button>
        </div>
      </div>

      {/* Loyalty & Engagement */}
      <div className="loyaltyTier">
        <div className="detail">
          <label>Loyalty Tier:</label>
          <span>Silver</span>
          <button className="addButton">Add</button>
        </div>
        <div className="detail">
          <label>Segment:</label>
          <span>Sleepy Customer</span>
          <button className="addButton">Add</button>
        </div>
      </div>

      {/* Lifetime Value & Engagement */}
      <div className="lifeTimeValue">
        <div className="detail">
          <label>Lifetime Value:</label>
          <span>$1M</span>
          <button className="addButton">Add</button>
        </div>
        <div className="detail">
          <label>Engagement Score:</label>
          <span>95%</span>
          <button className="addButton">Add</button>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="actionButton">Assign Other Agent</button>
        <button className="actionButton">Add New Widget</button>
      </div>
    </div>
  );
};

export default CustomerProfileComponent;
