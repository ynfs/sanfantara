(function () {
  var D = window.SANFANTARA || {};
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  var IKON = {
    buku:   '<path d="M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5V5.5Z"/><path d="M12 6v13.5"/>',
    cetak:  '<path d="M7 9V4h10v5"/><rect x="4" y="9" width="16" height="7" rx="2"/><path d="M7 14h10v6H7z"/><path d="M16.5 12h.01"/>',
    desain: '<rect x="3" y="5" width="18" height="11" rx="1.5"/><path d="M7 20h10"/><path d="M12 16v4"/><path d="m7 12 3-3 2 2 3-3 2 2"/>',
    ternak: '<path d="M6 9c-1.5 0-3-1-3-3 1.5 0 2.5.5 3 1.5"/><path d="M18 9c1.5 0 3-1 3-3-1.5 0-2.5.5-3 1.5"/><path d="M6 8.5C6 6 8.5 5 12 5s6 1 6 3.5V14a6 6 0 0 1-12 0V8.5Z"/><circle cx="9.5" cy="11" r=".6"/><circle cx="14.5" cy="11" r=".6"/><ellipse cx="12" cy="16" rx="3" ry="2"/>',
    daun:   '<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z"/><path d="M5 19 13 11"/>',
    toko:   '<path d="M4 9h16l-1-4H5L4 9Z"/><path d="M5 9v10h14V9"/><path d="M10 19v-5h4v5"/>',
    piring: '<circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="3.5"/><path d="M12 3v3"/>',
    gelas:  '<path d="M6 4h12l-1.5 15a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2L6 4Z"/><path d="M6.6 9h10.8"/>',
    baju:   '<path d="M8 4 4 7l2 4 2-1v10h8V10l2 1 2-4-4-3c-.5 1.5-2 2.5-4 2.5S8.5 5.5 8 4Z"/>',
    alat:   '<path d="M14 6a4 4 0 0 0 5 5l-9 9-3-3 9-9a4 4 0 0 0-2-2Z"/>',
    paket:  '<path d="M3 8 12 4l9 4-9 4-9-4Z"/><path d="M3 8v8l9 4 9-4V8"/><path d="M12 12v8"/>',
    bibit:  '<path d="M12 20v-8"/><path d="M12 12c-4 0-6-3-6-6 4 0 6 3 6 6Z"/><path d="M12 14c3 0 6-2 6-6-3 0-6 2-6 6Z"/>'
  };
  function ikon(k) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (IKON[k] || IKON.daun) + '</svg>';
  }

  /* Unit usaha */
  var units = D.UNIT_USAHA || [];
  function renderUnits(f) {
    var list = units.filter(function (u) { return f === 'semua' || u.status === f; });
    $('#units').innerHTML = list.map(function (u) {
      var segera = u.status === 'segera';
      return '<article class="unit' + (segera ? ' soon' : '') + '">' +
        '<div class="u-top"><span class="u-icon">' + ikon(u.ikon) + '</span>' +
        '<span class="badge' + (segera ? ' b-soon' : '') + '">' + (segera ? 'Segera hadir' : 'Berjalan') + '</span></div>' +
        '<h3>' + esc(u.nama) + '</h3><p class="u-field">' + esc(u.bidang) + '</p>' +
        '<p>' + esc(u.ringkas) + '</p></article>';
    }).join('') || '<p class="empty">Belum ada usaha di kategori ini.</p>';
  }
  renderUnits('semua');
  document.querySelectorAll('.chip').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x === b); });
      renderUnits(b.dataset.f);
    });
  });
  $('#statJalan').textContent = units.filter(function (u) { return u.status === 'berjalan'; }).length;
  $('#statSegera').textContent = units.filter(function (u) { return u.status === 'segera'; }).length;

  /* Perjalanan */
  $('#timeline').innerHTML = (D.PERJALANAN || []).map(function (p) {
    return '<li><span class="t-year">' + esc(p.tahun) + '</span><h3>' + esc(p.judul) + '</h3><p>' + esc(p.isi) + '</p></li>';
  }).join('');

  /* Kontak */
  var K = D.KONTAK || {};
  var items = [];
  if (K.whatsapp) items.push('<li><span>WhatsApp</span><a href="https://wa.me/' + esc(K.whatsapp) + '" target="_blank" rel="noopener">' + esc(K.whatsappTampil || K.whatsapp) + '</a></li>');
  if (K.email) items.push('<li><span>Email</span><a href="mailto:' + esc(K.email) + '">' + esc(K.email) + '</a></li>');
  if (K.instagram) items.push('<li><span>Instagram</span><a href="https://instagram.com/' + esc(K.instagram) + '" target="_blank" rel="noopener">@' + esc(K.instagram) + '</a></li>');
  if (K.alamat) items.push('<li><span>Alamat</span><p>' + esc(K.alamat) + '</p></li>');
  $('#contact').innerHTML = items.join('') ||
    '<li class="pending"><span>Segera tersedia</span><p>Kontak resmi Sanfantara sedang kami siapkan. Kunjungi halaman ini lagi dalam waktu dekat.</p></li>';

  if (!K.whatsapp) {
    $('#form').outerHTML = '<div class="form form-pending"><span class="u-icon">' + ikon('bibit') + '</span>' +
      '<h3>Formulir segera dibuka</h3><p>Sebentar lagi Anda bisa mendaftar les privat, memesan fotokopi, cetak foto, atau desain banner langsung dari sini.</p></div>';
  } else $('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    var teks = 'Halo Sanfantara, saya ' + f.nama.value.trim() + '.\nKeperluan: ' + f.perlu.value + '\n\n' + f.pesan.value.trim();
    window.open('https://wa.me/' + K.whatsapp + '?text=' + encodeURIComponent(teks), '_blank', 'noopener');
  });

  /* Menu HP */
  var btn = $('#menuBtn'), menu = $('#menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Bayangan nav saat gulir */
  var nav = $('#nav');
  addEventListener('scroll', function () { nav.classList.toggle('scrolled', scrollY > 8); }, { passive: true });

  $('#year').textContent = new Date().getFullYear();
})();
