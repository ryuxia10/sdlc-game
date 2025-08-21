// src/gameData.js

export const gameLevels = {
  "sdlc-planning": {
    title: "Gerbang Rencana Agung",
    description:
      "Selamat datang di tahap Planning! Sebelum membangun istana, kamu harus tahu apa saja yang Ratu Klien inginkan. Kamu harus mengumpulkan 'Permata Kebutuhan' yang akan menjadi bahan dasar petualanganmu!",
    missionText: "Misi: Temukan dan kumpulkan 5 'Permata Kebutuhan' (💎)!",
    emoji: "💎",
    game: {
      type: "planning",
      targetCount: 5,
      items: [
        { id: "item-1", emoji: "💎", isTarget: true },
        { id: "item-2", emoji: "🌰", isTarget: false },
        { id: "item-3", emoji: "💎", isTarget: true },
        { id: "item-4", emoji: "🔮", isTarget: false },
        { id: "item-5", emoji: "💎", isTarget: true },
        { id: "item-6", emoji: "🔮", isTarget: false },
        { id: "item-7", emoji: "💎", isTarget: true },
        { id: "item-8", emoji: "💎", isTarget: true },
        { id: "item-9", emoji: "🌰", isTarget: false },
      ],
    },
    material: {
      title: "Materi: Apa Itu SDLC - Tahap Planning?",
      description:
        "Dalam dunia nyata, **Planning** adalah tahap pertama dalam SDLC (Software Development Life Cycle). Di tahap ini, tim pengembang dan klien duduk bersama untuk menentukan **apa yang akan dibuat**, **siapa penggunanya**, dan **apa tujuannya**. Sama seperti kamu mengumpulkan Permata Kebutuhan, ini adalah fase di mana kita mengumpulkan semua informasi dan menyusun rencana agar proyek berjalan lancar.",
    },
  },
  "sdlc-analysis": {
    title: "Peta Harta Karun Analisis",
    description:
      "Hebat! Sekarang kita di tahap Analysis. Di sini kita akan menyusun peta harta karun untuk Istana kita. Ini adalah tahapan untuk mengurai semua kebutuhan dan membuatnya menjadi sebuah cetak biru.",
    missionText:
      "Misi: Susun 'Ramuan Alur Proses' dengan mencocokkan 3 emoji (🧪).",
    emoji: "🧪",
    game: {
      type: "analysis",
      correctOrder: ["start", "process", "end"],
      items: [
        { id: "analysis-1", emoji: "🧪", type: "process" },
        { id: "analysis-2", emoji: "🧪", type: "end" },
        { id: "analysis-3", emoji: "🧪", type: "start" },
      ],
    },
    material: {
      title: "Materi: Apa Itu SDLC - Tahap Analysis?",
      description:
        "Setelah tahu apa yang dibutuhkan, kita masuk ke tahap **Analysis**. Di sini, kita akan menganalisis semua kebutuhan tersebut dan mengubahnya menjadi spesifikasi yang lebih detail. Seperti menyusun potongan puzzle, kita mengurai kebutuhan Ratu Klien dan menyusunnya menjadi alur proses yang logis. Tahap ini sangat penting agar semua anggota tim memiliki pemahaman yang sama.",
    },
  },
  "sdlc-design": {
    title: "Bengkel Arsitek",
    description:
      "Waktunya masuk ke tahap Design! Kamu harus merancang fondasi yang kokoh untuk Istana. Di sini kita akan menentukan bagaimana struktur basis data dan arsitektur sistem akan dibuat.",
    missionText:
      "Misi: Rancang 'Pondasi Basis Data' dengan menyusun 3 emoji (🧱).",
    emoji: "🧱",
    game: {
      type: "design",
      blueprint: ["🧱", "🧱", "🧱", "🧱", "🧱", "🧱", "🧱", "🧱", "🧱"],
      puzzlePieces: [
        { id: "design-1", emoji: "🧱" },
        { id: "design-2", emoji: "🧱" },
        { id: "design-3", emoji: "🧱" },
        { id: "design-4", emoji: "🧱" },
        { id: "design-5", emoji: "🧱" },
        { id: "design-6", emoji: "🧱" },
        { id: "design-7", emoji: "🧱" },
        { id: "design-8", emoji: "🧱" },
        { id: "design-9", emoji: "🧱" },
      ],
    },
    material: {
      title: "Materi: Apa Itu SDLC - Tahap Design?",
      description:
        "Setelah kebutuhan dianalisis, kita masuk ke tahap **Design**. Ini adalah fase di mana kita membuat 'cetak biru' teknis untuk perangkat lunak. Tim akan merancang arsitektur, struktur database, dan antarmuka pengguna. Sama seperti kamu menyusun blok-blok bangunan, tahap ini memastikan bahwa Istana Perangkat Lunak kita memiliki pondasi yang kuat dan terstruktur sebelum benar-benar dibangun.",
    },
  },
  "sdlc-implementation": {
    title: "Menara Kode Ajaib",
    description:
      "Selamat datang di tahap Implementation! Ini adalah tempat keajaiban terjadi. Kamu akan menggunakan Gulungan Kode Ajaib untuk membangun setiap bagian istana.",
    missionText: "Misi: Susun 'Gulungan Kode Ajaib' dengan urutan yang benar!",
    emoji: "📜",
    game: {
      type: "implementation",
      codeStructure: [
        { id: "impl-1", emoji: "📜", type: "function-start" },
        { id: "impl-2", emoji: "📜", type: "loop-start" },
        { id: "impl-3", emoji: "📜", type: "action" },
        { id: "impl-4", emoji: "📜", type: "loop-end" },
        { id: "impl-5", emoji: "📜", type: "function-end" },
      ],
      correctOrder: [
        "function-start",
        "loop-start",
        "action",
        "loop-end",
        "function-end",
      ],
      codePieces: [
        {
          id: "piece-1",
          emoji: "📜",
          type: "loop-start",
          label: "Loop (for...)",
        },
        {
          id: "piece-2",
          emoji: "📜",
          type: "action",
          label: "Action (print...)",
        },
        {
          id: "piece-3",
          emoji: "📜",
          type: "function-start",
          label: "Function (def...)",
        },
        {
          id: "piece-4",
          emoji: "📜",
          type: "loop-end",
          label: "End Loop (...)",
        },
        {
          id: "piece-5",
          emoji: "📜",
          type: "function-end",
          label: "End Function",
        },
      ],
    },
    material: {
      title: "Materi: Apa Itu SDLC - Tahap Implementation?",
      description:
        "Tahap **Implementation** adalah fase di mana kode benar-benar ditulis. Berbekal semua rancangan dari tahap-tahap sebelumnya, para programmer akan mulai 'membangun' perangkat lunak baris demi baris. Tahap ini membutuhkan ketelitian tinggi, pemahaman sintaks, dan logika pemrograman yang kuat agar hasil akhirnya sesuai dengan apa yang dirancang.",
    },
  },
  "sdlc-testing": {
    title: "Mencari Bug",
    description:
      "Selamat datang di tahap Testing! Sekarang kita harus memastikan semua yang telah dibangun tidak memiliki cacat. Kamu harus teliti mencari dan membasmi semua 'bug' yang tersembunyi!",
    missionText:
      "Misi: Temukan dan perbaiki semua 5 'bug' (🐛) yang ada di dinding kode!",
    emoji: "🐛",
    game: {
      type: "testing",
      bugCount: 5,
      items: [
        { id: "test-1", emoji: "📄", isBug: false },
        { id: "test-2", emoji: "🐛", isBug: true },
        { id: "test-3", emoji: "📄", isBug: false },
        { id: "test-4", emoji: "🐛", isBug: true },
        { id: "test-5", emoji: "📄", isBug: false },
        { id: "test-6", emoji: "📄", isBug: false },
        { id: "test-7", emoji: "🐛", isBug: true },
        { id: "test-8", emoji: "📄", isBug: false },
        { id: "test-9", emoji: "🐛", isBug: true },
        { id: "test-10", emoji: "📄", isBug: false },
        { id: "test-11", emoji: "📄", isBug: false },
        { id: "test-12", emoji: "🐛", isBug: true },
      ],
    },
    material: {
      title: "Materi: Apa Itu SDLC - Tahap Testing?",
      description:
        "Tahap **Testing** adalah proses pengujian untuk memastikan perangkat lunak berfungsi sesuai harapan dan bebas dari kesalahan atau bug. Para tester akan mencoba berbagai skenario untuk menemukan bug-bug tersembunyi. Tahap ini sangat penting untuk menjaga kualitas dan keandalan produk sebelum sampai ke tangan pengguna.",
    },
  },
  "sdlc-maintenance": {
    title: "Kebun Pemeliharaan",
    description:
      "Akhirnya kita sampai di tahap Maintenance! Tugas pahlawan kode tidak pernah selesai. Sekarang kamu harus menjaga dan memelihara Istana yang sudah kamu bangun agar selalu indah dan berfungsi dengan baik.",
    missionText: "Misi: Siram semua 3 'Tanaman Layu' (🥀) agar segar kembali!",
    emoji: "🥀",
    game: {
      type: "maintenance",
      plantCount: 3,
      items: [
        { id: "maint-1", emoji: "🌿", isWilted: false },
        { id: "maint-2", emoji: "🥀", isWilted: true },
        { id: "maint-3", emoji: "🍀", isWilted: false },
        { id: "maint-4", emoji: "🥀", isWilted: true },
        { id: "maint-5", emoji: "🌿", isWilted: false },
        { id: "maint-6", emoji: "🍀", isWilted: false },
        { id: "maint-7", emoji: "🌿", isWilted: false },
        { id: "maint-8", emoji: "🥀", isWilted: true },
      ],
    },
    material: {
      title: "Materi: Apa Itu SDLC - Tahap Maintenance?",
      description:
        "Tahap **Maintenance** adalah fase terakhir, namun berkelanjutan, dalam SDLC. Di sini, tim pengembang akan terus memantau, memperbaiki, dan memperbarui perangkat lunak setelah diluncurkan. Ini termasuk memperbaiki bug baru, menambahkan fitur baru, dan memastikan sistem tetap kompatibel dengan teknologi terbaru. Sama seperti menyiram tanaman, tahap ini adalah kunci agar produk tetap relevan dan bermanfaat bagi pengguna.",
    },
  },
};