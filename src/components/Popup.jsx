import React from 'react';
import './Popup.css';

const Popup = ({ title, description, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="menu-button" onClick={onClose}>Mulai Misi!</button>
      </div>
    </div>
  );
};

export default Popup;