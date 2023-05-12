
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/chat.css';

const Feedback = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/get');
      setMessages(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleMessageSend = async () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
      };

      try {
        const response = await axios.post('http://localhost:4000/post', newMessage);

        if (response.status === 200) {
          setMessages([...messages, newMessage]);
          setInputText('');
        } else {
          console.log('Failed to send message');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleEditMessage = async (id, newText) => {
    try {
      const updatedMessage = {
        id,
        text: newText,
      };

      await axios.put(`http://localhost:4000/feedback/${id}`, updatedMessage);

      const updatedMessages = messages.map((message) =>
        message.id === id ? { ...message, text: newText } : message
      );
      setMessages(updatedMessages);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Write your feedback here...</h1>
      <div className="message-container">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <p>{message.text}</p>
            <button
              className="edit-button"
              onClick={() => {
                const newText = prompt('Enter the updated feedback:');
                if (newText !== null) {
                  handleEditMessage(message.id, newText);
                }
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="feedback-input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="send-button" onClick={handleMessageSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Feedback;
