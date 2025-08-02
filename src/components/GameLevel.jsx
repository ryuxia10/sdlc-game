// src/components/GameLevel.jsx
import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import { gameLevels } from '../gameData';

const MaterialPopup = ({ title, description, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content material-popup">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="menu-button" onClick={onClose}>Mengerti! Lanjutkan</button>
      </div>
    </div>
  );
};

const GameLevel = ({ levelId, onNavigate }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [showMaterial, setShowMaterial] = useState(false);

  // --- KODE BARU: RESET STATE SAAT LEVEL BERGANTI ---
  useEffect(() => {
    setShowPopup(true);
    setShowMaterial(false);
  }, [levelId]);
  // ----------------------------------------------------

  // State untuk mini-game Planning
  const [collectedItems, setCollectedItems] = useState([]);
  const [feedback, setFeedback] = useState('');

  // State untuk mini-game Analysis
  const [analysisItems, setAnalysisItems] = useState(gameLevels['sdlc-analysis'].game.items);
  const [analysisOrder, setAnalysisOrder] = useState([]);
  const [analysisFeedback, setAnalysisFeedback] = useState('');
  
  // State untuk mini-game Design
  const [availablePieces, setAvailablePieces] = useState(gameLevels['sdlc-design'].game.puzzlePieces);
  const [placedPieces, setPlacedPieces] = useState(Array(gameLevels['sdlc-design'].game.blueprint.length).fill(null));
  const [designFeedback, setDesignFeedback] = useState('');

  // State untuk mini-game Implementation
  const [codeTower, setCodeTower] = useState(Array(gameLevels['sdlc-implementation'].game.correctOrder.length).fill(null));
  const [codePieces, setCodePieces] = useState(gameLevels['sdlc-implementation'].game.codePieces);
  const [implementationFeedback, setImplementationFeedback] = useState('');

  // State untuk mini-game Testing
  const [testingItems, setTestingItems] = useState(gameLevels['sdlc-testing'].game.items);
  const [foundBugs, setFoundBugs] = useState([]);
  const [testingFeedback, setTestingFeedback] = useState('');

  // State untuk mini-game Maintenance
  const [maintenanceItems, setMaintenanceItems] = useState(gameLevels['sdlc-maintenance'].game.items);
  const [repairedPlants, setRepairedPlants] = useState([]);
  const [maintenanceFeedback, setMaintenanceFeedback] = useState('');


  const levelData = gameLevels[levelId];

  if (!levelData) {
    return (
      <div className="game-screen">
        <h2>Level tidak ditemukan!</h2>
        <button className="menu-button" onClick={() => onNavigate('main-menu')}>Kembali ke Menu</button>
      </div>
    );
  }

  // LOGIKA MINI-GAME PLANNING
  const handlePlanningClick = (item) => {
    const isAlreadyCollected = collectedItems.includes(item.id);
    if (!isAlreadyCollected) {
      if (item.isTarget) {
        setCollectedItems([...collectedItems, item.id]);
        setFeedback(`Kamu menemukan Permata! (${collectedItems.length + 1}/${levelData.game.targetCount})`);
      } else {
        setFeedback("Ups, itu bukan Permata Kebutuhan!");
      }
    }
  };

  // LOGIKA MINI-GAME ANALYSIS
  const handleAnalysisClick = (item) => {
    if (analysisOrder.includes(item.type)) {
      setAnalysisFeedback("Ramuan ini sudah ada di alur!");
      return;
    }
    const newOrder = [...analysisOrder, item.type];
    setAnalysisOrder(newOrder);

    if (newOrder.length === levelData.game.correctOrder.length) {
      const isCorrect = newOrder.every((type, index) => type === levelData.game.correctOrder[index]);
      if (isCorrect) {
        setAnalysisFeedback("🎉 Ramuan Alur Proses berhasil dibuat!");
      } else {
        setAnalysisFeedback("💔 Ups, urutan ramuan salah. Coba lagi!");
        setAnalysisOrder([]);
      }
    }
  };

  // LOGIKA MINI-GAME DESIGN
  const handleDesignClick = (piece) => {
    const emptyIndex = placedPieces.findIndex(slot => slot === null);
    if (emptyIndex !== -1) {
      const newPlacedPieces = [...placedPieces];
      newPlacedPieces[emptyIndex] = piece;
      setPlacedPieces(newPlacedPieces);

      setAvailablePieces(availablePieces.filter(p => p.id !== piece.id));
      
      setDesignFeedback(`Potongan blok berhasil diletakkan! (${placedPieces.filter(p => p !== null).length + 1}/${levelData.game.blueprint.length})`);
    } else {
      setDesignFeedback("Semua slot sudah terisi!");
    }
  };

  // LOGIKA MINI-GAME IMPLEMENTATION
  const handleCodePieceClick = (piece) => {
    const emptySlotIndex = codeTower.findIndex(slot => slot === null);
    if (emptySlotIndex !== -1) {
      if (piece.type === levelData.game.correctOrder[emptySlotIndex]) {
        const newTower = [...codeTower];
        newTower[emptySlotIndex] = piece;
        setCodeTower(newTower);
        setCodePieces(codePieces.filter(p => p.id !== piece.id));
        setImplementationFeedback("Blok kode berhasil diletakkan!");
      } else {
        setImplementationFeedback("❌ Blok kode salah! Coba lagi.");
      }
    }
  };

  // LOGIKA MINI-GAME TESTING
  const handleTestingClick = (item) => {
    if (item.isBug) {
      setTestingItems(testingItems.filter(i => i.id !== item.id));
      setFoundBugs([...foundBugs, item.id]);
      setTestingFeedback(`🐛 Bug berhasil diperbaiki! (${foundBugs.length + 1}/${levelData.game.bugCount})`);
    } else {
      setTestingFeedback("❌ Itu bukan bug! Coba lagi.");
    }
  };

  // LOGIKA MINI-GAME MAINTENANCE
  const handleMaintenanceClick = (item) => {
    if (item.isWilted) {
      // Perbarui item yang diklik menjadi tanaman yang segar
      const updatedItems = maintenanceItems.map(p =>
        p.id === item.id ? { ...p, emoji: '🌱', isWilted: false } : p
      );
      setMaintenanceItems(updatedItems);
      setRepairedPlants([...repairedPlants, item.id]);
      setMaintenanceFeedback(`🌱 Tanaman berhasil dirawat! (${repairedPlants.length + 1}/${levelData.game.plantCount})`);
    } else {
      setMaintenanceFeedback("✅ Tanaman ini sudah segar!");
    }
  };

  // Cek apakah misi selesai
  const isPlanningComplete = levelId === 'sdlc-planning' && collectedItems.length === levelData.game.targetCount;
  const isAnalysisComplete = levelId === 'sdlc-analysis' && analysisOrder.length === levelData.game.correctOrder.length && analysisOrder.every((type, index) => type === levelData.game.correctOrder[index]);
  const isDesignComplete = levelId === 'sdlc-design' && placedPieces.every(p => p !== null);
  const isImplementationComplete = levelId === 'sdlc-implementation' && codeTower.every((slot, index) => slot && slot.type === levelData.game.correctOrder[index]);
  const isTestingComplete = levelId === 'sdlc-testing' && foundBugs.length === levelData.game.bugCount;
  const isMaintenanceComplete = levelId === 'sdlc-maintenance' && repairedPlants.length === levelData.game.plantCount;

  return (
    <>
      {showPopup && (
        <Popup
          title={levelData.title}
          description={levelData.description}
          onClose={() => {
            setShowPopup(false);
            setShowMaterial(true);
          }}
        />
      )}
      
      {showMaterial && (
        <MaterialPopup
          title={levelData.material.title}
          description={levelData.material.description}
          onClose={() => setShowMaterial(false)}
        />
      )}
      
      <div className="game-screen">
        <h2>{levelData.title}</h2>
        <p>{levelData.missionText}</p>

        {/* Tampilan Mini-game Planning */}
        {levelId === 'sdlc-planning' && !isPlanningComplete && (
          <div className="planning-game-area">
            <h3>Kumpulkan Permata!</h3>
            <p>Permata Terkumpul: {collectedItems.length} dari {levelData.game.targetCount}</p>
            <div className="emoji-grid">
              {levelData.game.items.map(item => (
                <span
                  key={item.id}
                  className={`game-item ${collectedItems.includes(item.id) ? 'collected' : ''}`}
                  onClick={() => handlePlanningClick(item)}
                  role="img"
                  aria-label="game-item"
                >
                  {item.emoji}
                </span>
              ))}
            </div>
            {feedback && <p className="feedback-message">{feedback}</p>}
          </div>
        )}

        {/* Tampilan Mini-game Analysis */}
        {levelId === 'sdlc-analysis' && !isAnalysisComplete && (
          <div className="analysis-game-area">
            <h3>Susun Ramuan Alur Proses!</h3>
            <div className="analysis-grid">
              {analysisItems.map(item => (
                <span
                  key={item.id}
                  className="game-item analysis-item"
                  onClick={() => handleAnalysisClick(item)}
                  role="img"
                  aria-label="analysis-item"
                >
                  {item.emoji}
                </span>
              ))}
            </div>
            <div className="analysis-result">
              <p>Alur yang kamu susun:</p>
              <div className="analysis-order-display">
                {analysisOrder.map((type, index) => (
                  <span key={index} className="order-item">
                    {type === 'start' && 'Mulai ➡️'}
                    {type === 'process' && 'Proses ➡️'}
                    {type === 'end' && 'Selesai'}
                  </span>
                ))}
              </div>
            </div>
            {analysisFeedback && <p className="feedback-message">{analysisFeedback}</p>}
          </div>
        )}
        
        {/* Tampilan Mini-game Design */}
        {levelId === 'sdlc-design' && !isDesignComplete && (
          <div className="design-game-area">
            <h3>Rancang Pondasi!</h3>
            <div className="design-puzzle-container">
              <div className="design-blueprint">
                {placedPieces.map((piece, index) => (
                  <div key={index} className={`blueprint-slot ${piece ? 'placed' : ''}`}>
                    {piece ? piece.emoji : '⬜'}
                  </div>
                ))}
              </div>
              <div className="design-pieces-box">
                <h4>Blok Tersedia:</h4>
                <div className="design-pieces-grid">
                  {availablePieces.map((piece) => (
                    <span
                      key={piece.id}
                      className="game-item design-piece"
                      onClick={() => handleDesignClick(piece)}
                      role="img"
                      aria-label="design-piece"
                    >
                      {piece.emoji}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {designFeedback && <p className="feedback-message">{designFeedback}</p>}
          </div>
        )}
        
        {/* Tampilan Mini-game Implementation */}
        {levelId === 'sdlc-implementation' && !isImplementationComplete && (
          <div className="implementation-game-area">
            <h3>Susun Menara Kode Ajaib!</h3>
            <div className="code-tower-container">
              <div className="code-tower">
                {codeTower.map((slot, index) => (
                  <div key={index} className={`code-slot ${slot ? 'filled' : ''}`}>
                    {slot ? `${slot.emoji} ${slot.label}` : '⬜'}
                  </div>
                ))}
              </div>
              <div className="code-pieces-box">
                <h4>Blok Kode Tersedia:</h4>
                <div className="code-pieces-grid">
                  {codePieces.map((piece) => (
                    <button
                      key={piece.id}
                      className="code-piece-button"
                      onClick={() => handleCodePieceClick(piece)}
                    >
                      {piece.emoji} {piece.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {implementationFeedback && <p className="feedback-message">{implementationFeedback}</p>}
          </div>
        )}

        {/* Tampilan Mini-game Testing */}
        {levelId === 'sdlc-testing' && !isTestingComplete && (
          <div className="testing-game-area">
            <h3>Cari dan Perbaiki Bug!</h3>
            <p>Bug Ditemukan: {foundBugs.length} dari {levelData.game.bugCount}</p>
            <div className="testing-grid">
              {testingItems.map(item => (
                <span
                  key={item.id}
                  className="game-item testing-item"
                  onClick={() => handleTestingClick(item)}
                  role="img"
                  aria-label="testing-item"
                >
                  {item.emoji}
                </span>
              ))}
            </div>
            {testingFeedback && <p className="feedback-message">{testingFeedback}</p>}
          </div>
        )}

        {/* Tampilan Mini-game Maintenance */}
        {levelId === 'sdlc-maintenance' && !isMaintenanceComplete && (
          <div className="maintenance-game-area">
            <h3>Siram Tanaman Layu!</h3>
            <p>Tanaman Terawat: {repairedPlants.length} dari {levelData.game.plantCount}</p>
            <div className="maintenance-grid">
              {maintenanceItems.map(item => (
                <span
                  key={item.id}
                  className="game-item maintenance-item"
                  onClick={() => handleMaintenanceClick(item)}
                  role="img"
                  aria-label="maintenance-item"
                >
                  {item.emoji}
                </span>
              ))}
            </div>
            {maintenanceFeedback && <p className="feedback-message">{maintenanceFeedback}</p>}
          </div>
        )}

        {/* Tombol Lanjutkan & Layar Selesai */}
        {isPlanningComplete && (
          <div className="mission-complete-message">
            <h3>🎉 Misi Selesai! 🎉</h3>
            <p>Kamu berhasil mengumpulkan semua kebutuhan! Kamu sudah menguasai tahap **`Planning`** dalam SDLC.</p>
            <button className="menu-button" onClick={() => onNavigate('game-level', 'sdlc-analysis')}>Lanjutkan ke Tahap Analisis!</button>
          </div>
        )}

        {isAnalysisComplete && (
          <div className="mission-complete-message">
            <h3>🎉 Misi Selesai! 🎉</h3>
            <p>Kamu berhasil menyusun alur proses yang sempurna! Kamu sudah menguasai tahap **`Analysis`** dalam SDLC.</p>
            <button className="menu-button" onClick={() => onNavigate('game-level', 'sdlc-design')}>Lanjutkan ke Tahap Desain!</button>
          </div>
        )}
        
        {isDesignComplete && (
          <div className="mission-complete-message">
            <h3>🎉 Misi Selesai! 🎉</h3>
            <p>Pondasi istana berhasil dirancang dengan kokoh! Kamu sudah menguasai tahap **`Design`** dalam SDLC.</p>
            <button className="menu-button" onClick={() => onNavigate('game-level', 'sdlc-implementation')}>Lanjutkan ke Tahap Implementasi!</button>
          </div>
        )}
        
        {isImplementationComplete && (
          <div className="mission-complete-message">
            <h3>🎉 Misi Selesai! 🎉</h3>
            <p>Menara Kode Ajaib berhasil dibangun! Kamu sudah menguasai tahap **`Implementation`** dalam SDLC.</p>
            <button className="menu-button" onClick={() => onNavigate('game-level', 'sdlc-testing')}>Lanjutkan ke Tahap Testing!</button>
          </div>
        )}

        {isTestingComplete && (
          <div className="mission-complete-message">
            <h3>🎉 Misi Selesai! 🎉</h3>
            <p>Semua bug berhasil diperbaiki! Kamu sudah menguasai tahap **`Testing`** dalam SDLC.</p>
            <button className="menu-button" onClick={() => onNavigate('game-level', 'sdlc-maintenance')}>Lanjutkan ke Tahap Maintenance!</button>
          </div>
        )}

        {isMaintenanceComplete && (
          <div className="mission-complete-message">
            <h3>🎉 SELAMAT, KOMANDAN! 🎉</h3>
            <p>Kamu berhasil merawat semua tanaman dan menyelesaikan semua tahapan SDLC. Petualanganmu di Negeri Algoritma selesai! Kamu adalah pahlawan kode sejati.</p>
            <button className="menu-button" onClick={() => onNavigate('main-menu')}>Selesai, Kembali ke Menu</button>
          </div>
        )}
      </div>
    </>
  );
};

export default GameLevel;