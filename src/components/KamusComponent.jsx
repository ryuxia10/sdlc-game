// src/components/KamusComponent.jsx
import React from 'react';
import { kamusEntries } from '../kamusData';

const KamusComponent = ({ onNavigate }) => {
  return (
    <div className="game-screen kamus-container">
      <h2>📚 Kamus Kode Ajaib</h2>
      <p>Pelajari istilah-istilah penting dalam dunia pengembangan perangkat lunak!</p>
      <div className="kamus-list">
        {kamusEntries.map((entry, index) => (
          <div key={index} className="kamus-entry">
            <h3>{entry.term}</h3>
            <p>{entry.definition}</p>
          </div>
        ))}
      </div>
      <button className="menu-button" onClick={() => onNavigate('main-menu')}>Kembali ke Menu Utama</button>
    </div>
  );
};

export default KamusComponent;