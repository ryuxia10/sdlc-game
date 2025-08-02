// src/stlcData.js

export const stlcLevels = {
  'stlc-requirement': {
    title: "Mendengarkan Klien",
    description: "Selamat datang di tahap Requirement Analysis! Sebelum menguji, kamu harus benar-benar memahami apa yang diinginkan klien. Cari tahu semua kebutuhannya!",
    missionText: "Misi: Temukan 3 'Kebutuhan Klien' (🔍) di antara item lainnya!",
    emoji: '🔍',
    game: {
      type: 'requirement-analysis',
      targetCount: 3,
      items: [
        { id: 'req-1', emoji: '🔍', isTarget: true },
        { id: 'req-2', emoji: '💡', isTarget: false },
        { id: 'req-3', emoji: '🔍', isTarget: true },
        { id: 'req-4', emoji: '⚙️', isTarget: false },
        { id: 'req-5', emoji: '🔍', isTarget: true },
        { id: 'req-6', emoji: '💡', isTarget: false },
      ],
    },
    material: {
      title: "Materi: Apa Itu STLC - Tahap Requirement Analysis?",
      description: "Di tahap ini, tim pengujian akan menganalisis kebutuhan fungsional dan non-fungsional dari aplikasi untuk memahami apa yang harus diuji. Tujuannya adalah untuk memastikan bahwa setiap fitur yang dikembangkan sesuai dengan harapan klien.",
    },
  },
  'stlc-planning': {
    title: "Merancang Rencana Ajaib",
    description: "Sekarang di tahap Test Planning! Kamu harus menyusun strategi, menetapkan sumber daya, dan membuat jadwal pengujian yang efisien.",
    missionText: "Misi: Pilih 3 'Alat Pengujian' (🛠️) yang tepat untuk proyek ini!",
    emoji: '🛠️',
    game: {
      type: 'test-planning',
      targetCount: 3,
      items: [
        { id: 'plan-1', emoji: '🛠️', isTarget: true },
        { id: 'plan-2', emoji: '🧹', isTarget: false },
        { id: 'plan-3', emoji: '🛠️', isTarget: true },
        { id: 'plan-4', emoji: '🔮', isTarget: false },
        { id: 'plan-5', emoji: '🛠️', isTarget: true },
        { id: 'plan-6', emoji: '🧹', isTarget: false },
      ],
    },
    material: {
      title: "Materi: Apa Itu STLC - Tahap Test Planning?",
      description: "Test Planning adalah tahap krusial di mana kita mendefinisikan tujuan, ruang lingkup, dan pendekatan pengujian. Di sini, kita menentukan jenis pengujian yang akan dilakukan, siapa yang bertanggung jawab, serta alat dan lingkungan yang dibutuhkan.",
    },
  },
  'stlc-development': {
    title: "Menulis Skrip Ajaib",
    description: "Selamat datang di tahap Test Case Development! Kamu harus membuat skenario dan langkah-langkah pengujian yang jelas untuk setiap fitur.",
    missionText: "Misi: Susun 'Skrip Uji Coba' dengan urutan yang benar!",
    emoji: '📝',
    game: {
      type: 'test-case-development',
      correctOrder: ['start', 'action', 'result', 'end'],
      codePieces: [
        { id: 'dev-1', emoji: '📝', type: 'start', label: 'Buka Aplikasi' },
        { id: 'dev-2', emoji: '📝', type: 'action', label: 'Klik Tombol' },
        { id: 'dev-3', emoji: '📝', type: 'result', label: 'Verifikasi Hasil' },
        { id: 'dev-4', emoji: '📝', type: 'end', label: 'Tutup Aplikasi' },
      ],
    },
    material: {
      title: "Materi: Apa Itu STLC - Tahap Test Case Development?",
      description: "Di tahap ini, kita akan membuat test case secara detail. Test case adalah dokumen yang berisi langkah-langkah spesifik, data input, dan hasil yang diharapkan untuk menguji sebuah fitur. Tujuannya adalah untuk memastikan pengujian dilakukan secara terstruktur dan konsisten.",
    },
  },
  'stlc-setup': {
    title: "Menyiapkan Lab Uji Coba",
    description: "Sekarang di tahap Test Environment Setup! Kamu harus menyiapkan semua perangkat dan software agar pengujian bisa berjalan dengan lancar.",
    missionText: "Misi: Letakkan semua 'Peralatan Lab' (💻) di tempatnya!",
    emoji: '💻',
    game: {
      type: 'test-environment-setup',
      blueprint: [
        '⬜', '⬜', '⬜',
      ],
      puzzlePieces: [
        { id: 'setup-1', emoji: '💻', label: 'Komputer' },
        { id: 'setup-2', emoji: '🌐', label: 'Jaringan' },
        { id: 'setup-3', emoji: '💾', label: 'Database' },
      ],
    },
    material: {
      title: "Materi: Apa Itu STLC - Tahap Test Environment Setup?",
      description: "Test Environment Setup adalah proses menyiapkan lingkungan yang dibutuhkan untuk pengujian. Ini termasuk menginstal perangkat lunak yang relevan, mengonfigurasi perangkat keras, dan menyiapkan jaringan. Tujuannya adalah menciptakan lingkungan yang realistis dan stabil untuk menguji aplikasi.",
    },
  },
  'stlc-execution': {
    title: "Menjalankan Pengujian",
    description: "Ini adalah tahap Test Execution! Kamu akan menjalankan semua test case yang sudah dibuat dan mencatat semua bug yang ditemukan.",
    missionText: "Misi: Klik semua 'Kegagalan Pengujian' (❌) dan perbaiki dengan 'Sukses' (✅)!",
    emoji: '❌',
    game: {
      type: 'test-execution',
      items: [
        { id: 'exec-1', emoji: '✅', isFailed: false },
        { id: 'exec-2', emoji: '❌', isFailed: true },
        { id: 'exec-3', emoji: '❌', isFailed: true },
        { id: 'exec-4', emoji: '✅', isFailed: false },
        { id: 'exec-5', emoji: '❌', isFailed: true },
      ],
      failedCount: 3,
    },
    material: {
      title: "Materi: Apa Itu STLC - Tahap Test Execution?",
      description: "Di tahap ini, tim pengujian akan menjalankan test case yang sudah dibuat. Setiap langkah dicatat, dan jika ada bug atau kegagalan, akan dilaporkan. Tahap ini terus diulang hingga semua bug utama berhasil diperbaiki dan aplikasi dianggap stabil.",
    },
  },
  'stlc-closure': {
    title: "Menyusun Laporan Akhir",
    description: "Selamat datang di tahap Test Cycle Closure! Ini adalah babak terakhir. Kamu harus menyusun laporan akhir untuk merangkum semua yang telah kamu lakukan.",
    missionText: "Misi: Kumpulkan 3 'Elemen Laporan' (📄) untuk menyelesaikan siklus!",
    emoji: '📄',
    game: {
      type: 'test-closure',
      items: [
        { id: 'close-1', emoji: '📄', isTarget: true },
        { id: 'close-2', emoji: '❌', isTarget: false },
        { id: 'close-3', emoji: '📄', isTarget: true },
        { id: 'close-4', emoji: '📝', isTarget: false },
        { id: 'close-5', emoji: '📄', isTarget: true },
      ],
      targetCount: 3,
    },
    material: {
      title: "Materi: Apa Itu STLC - Tahap Test Cycle Closure?",
      description: "Test Cycle Closure adalah proses penutupan pengujian. Di sini, kita akan mengevaluasi kriteria penyelesaian, membuat laporan akhir, dan memberikan umpan balik untuk perbaikan di masa mendatang. Laporan ini berisi ringkasan hasil pengujian dan kualitas produk secara keseluruhan.",
    },
  },
};