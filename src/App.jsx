// src/App.jsx
import React, { useState } from 'react';
import MainComponent from './components/MainComponent';
import GameLevel from './components/GameLevel';
import KamusComponent from './components/KamusComponent';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main-menu');
  const [currentLevel, setCurrentLevel] = useState(null);

  const handleNavigate = (page, levelId = null) => {
    setCurrentPage(page);
    setCurrentLevel(levelId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main-menu':
        return <MainComponent onNavigate={handleNavigate} />;
      case 'game-level':
        return <GameLevel levelId={currentLevel} onNavigate={handleNavigate} />;
      case 'kamus':
        return <KamusComponent onNavigate={handleNavigate} />;
      default:
        return <MainComponent onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
};

export default App;