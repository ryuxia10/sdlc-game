// src/components/Popup.jsx
import React from 'react';

const Popup = ({ title, description, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="menu-button" onClick={onClose}>Mulai Petualangan!</button>
      </div>
    </div>
  );
};

export default Popup;