import React, { useState } from 'react';
import './index.css';

const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [smsChecked, setSmsChecked] = useState(false);
  const [whatsappChecked, setWhatsappChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSmsChange = () => {
    setSmsChecked(!smsChecked);
  };

  const handleWhatsappChange = () => {
    setWhatsappChecked(!whatsappChecked);
  };

  const handleEmailChange = () => {
    setEmailChecked(!emailChecked);
  };

  return (
    <div className="chatboxContainer">
      {/* Chat box */}
      <div className="chatbox">
        <div className="conversation">
          <div className="message">Hello, how can I assist you today?</div>
          <div className="message">I need help with my account.</div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="communicationOptions">
        <div className="checkboxOption">
          <input type="checkbox" checked={smsChecked} onChange={handleSmsChange} />
          <label>SMS</label>
        </div>
        <div className="checkboxOption">
          <input type="checkbox" checked={whatsappChecked} onChange={handleWhatsappChange} />
          <label>WhatsApp</label>
        </div>
        <div className="checkboxOption">
          <input type="checkbox" checked={emailChecked} onChange={handleEmailChange} />
          <label>Email</label>
        </div>
      </div>

      {/* Message Input */}
      <div className="messageInput">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type a message here..."
        />
      </div>
    </div>
  );
};

export default Chatbox;
