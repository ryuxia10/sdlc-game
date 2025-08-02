import React from 'react';

const Kamus = ({ onNavigate }) => {
  return (
    <div className="game-container">
      <h1>📚 Kamus Kode Ajaib 📚</h1>
      <p>Cari tahu arti dari setiap mantra dan item di sini.</p>
      {/* Nanti di sini akan ada daftar istilah dengan penjelasan */}
      <button onClick={() => onNavigate('main-menu')}>Kembali ke Menu</button>
    </div>
  );
};

export default Kamus;