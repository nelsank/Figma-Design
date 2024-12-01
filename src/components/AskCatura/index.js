import React, { useState } from 'react';
import './index.css';

const AskCatura = () => {
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('greeting');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
  };

  const handleSend = () => {
    alert('Message sent: ' + message);
  };

  return (
    <div className="askCaturaContainer">
      {/* Heading */}
      <div className="heading">Ask Catura</div>

      {/* Greeting Option */}
      <div className="options">
        <div
          className={`option ${selectedOption === 'greeting' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('greeting')}
        >
          <span role="img" aria-label="Greeting">👋</span> Greeting
        </div>
        <div
          className={`option ${selectedOption === 'whatsapp' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('whatsapp')}
        >
          <span role="img" aria-label="WhatsApp">📱</span> WhatsApp
        </div>
      </div>

      {/* Greeting Template */}
      {selectedOption === 'greeting' && (
        <div className="template">
          <p>Greeting Template: "Hello!"</p>
        </div>
      )}
      {selectedOption === 'whatsapp' && (
        <div className="template">
          <p>WhatsApp Template: "Hi,</p>
        </div>
      )}

      {/* Copy to Send Button */}
      <div className="copyButton" onClick={handleCopy}>
        Copy to Send
      </div>

      {/* Previous Button */}
      <div className="previousButton">Previous</div>

      {/* Message Input Field */}
      <div className="messageInput">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type message here..."
        />
      </div>

      {/* Send Button */}
      <div className="sendButton" onClick={handleSend}>
        Send
      </div>
    </div>
  );
};

export default AskCatura;
