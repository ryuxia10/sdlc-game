// src/components/MainComponent.jsx
import React from 'react';

const MainComponent = ({ onNavigate }) => {
  return (
    <div className="game-container">
      <h1>🏰 Petualangan Sang Heroine Kode 🏰</h1>
      <p>Selamat datang, pahlawan! Siap menyelamatkan Negeri Algoritma?</p>
      <div className="character-display">
        <span className="character-emoji" role="img" aria-label="heroine">
          👩🏻‍💻
        </span>
      </div>
      <div className="main-menu">
        <button 
          className="menu-button" 
          onClick={() => onNavigate('game-level', 'sdlc-planning')}
        >
          Mulai Petualangan
        </button>
        <button 
          className="menu-button" 
          onClick={() => onNavigate('game-level', 'sdlc-analysis')}
        >
          Lanjutkan ke Analisis
        </button>
        <button
          className="menu-button"
          onClick={() => onNavigate('game-level', 'sdlc-design')}
        >
          Lanjutkan ke Desain
        </button>
        <button
          className="menu-button"
          onClick={() => onNavigate('game-level', 'sdlc-implementation')}
        >
          Lanjutkan ke Implementasi
        </button>
        <button
          className="menu-button"
          onClick={() => onNavigate('game-level', 'sdlc-testing')}
        >
          Lanjutkan ke Testing
        </button>
        <button
          className="menu-button"
          onClick={() => onNavigate('game-level', 'sdlc-maintenance')}
        >
          Lanjutkan ke Maintenance
        </button>
        <button className="menu-button" onClick={() => onNavigate('kamus')}>Kamus Kode Ajaib</button>
      </div>
    </div>
  );
};

export default MainComponent;