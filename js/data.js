/* =========================================================
   ISI WEBSITE SANFANTARA — ubah teks di file ini saja.
   Bagian bertanda  [GANTI]  masih contoh, belum data asli.
   ========================================================= */

window.SANFANTARA = {

  /* Kontak — isi dengan data asli. Yang dikosongkan ("") tidak ditampilkan.
     Selama whatsapp kosong, formulir WA disembunyikan. */
  KONTAK: {
    whatsapp: "",          // format 62..., tanpa + dan tanpa spasi, mis. "6281234567890"
    whatsappTampil: "",    // mis. "0812-3456-7890"
    email: "",
    instagram: "",         // tanpa @
    alamat: ""
  },

  /* Unit usaha di bawah Sanfantara.
     status: "berjalan" = sudah buka, "segera" = sedang disiapkan.
     ikon: buku | cetak | desain | ternak | daun | toko | paket | bibit
     Tambah usaha baru cukup salin satu blok { ... }. */
  UNIT_USAHA: [
    { nama: "Les Privat di Rumah", bidang: "Pendidikan · TK, SD, SMP", status: "berjalan", ikon: "buku",
      ringkas: "Usaha utama Sanfantara. Guru datang ke rumah untuk mendampingi anak TK, SD, dan SMP belajar: membaca, berhitung, PR, hingga persiapan ujian." },
    { nama: "Fotokopi & Cetak Foto", bidang: "Percetakan", status: "berjalan", ikon: "cetak",
      ringkas: "Fotokopi, print dokumen, dan cetak foto untuk kebutuhan sekolah, kantor, dan keluarga. Cepat dan dekat." },
    { nama: "Desain Banner", bidang: "Desain grafis", status: "berjalan", ikon: "desain",
      ringkas: "Desain banner, spanduk, dan materi promosi untuk usaha, acara, dan sekolah, siap untuk dicetak." },
    { nama: "Peternakan", bidang: "Sedang disiapkan", status: "segera", ikon: "ternak",
      ringkas: "Tunas usaha berikutnya. Sanfantara sedang menyiapkan usaha peternakan. Nantikan kabarnya." }
  ],

  /* Perjalanan Sanfantara — [GANTI] tahun kalau ingin dicantumkan */
  PERJALANAN: [
    { tahun: "Akar",     judul: "Les privat di rumah",     isi: "Sanfantara dimulai dari mendampingi anak TK, SD, dan SMP belajar di rumah mereka." },
    { tahun: "Tumbuh",   judul: "Fotokopi & cetak foto",   isi: "Kebutuhan cetak materi belajar dan dokumen melahirkan usaha kedua." },
    { tahun: "Bercabang", judul: "Desain banner",          isi: "Dari mencetak, kami melangkah ke mendesain banner dan materi promosi." },
    { tahun: "Berikutnya", judul: "Peternakan",            isi: "Tunas baru sedang disiapkan: usaha peternakan, membuka bidang yang sama sekali baru." }
  ]
};
