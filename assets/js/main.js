// ── ANNOUNCEMENT BAR (textContent only — no innerHTML) ──
    (function () {
      var items = [
        ['+450', ' bodas realizadas'],
        ['DJs residentes de Pacha & Kapital', ''],
        ['4.9\u2605\u2605\u2605\u2605\u2605', ' valoración media'],
        ['Respuesta en menos de ', '24h'],
        ['Presupuesto sin compromiso', ''],
        ['Montaje y desmontaje incluidos', ''],
        ['Equipos de respaldo siempre', ''],
        ['100%', ' pistas llenas'],
      ];
      var track = document.getElementById('announceTrack');
      var doubled = items.concat(items);
      doubled.forEach(function (pair) {
        var wrap = document.createElement('span');
        wrap.className = 'a-item';
        if (pair[1]) {
          var strong = document.createElement('strong');
          strong.textContent = pair[0];
          wrap.appendChild(strong);
          var rest = document.createTextNode(pair[1]);
          wrap.appendChild(rest);
        } else {
          wrap.textContent = pair[0];
        }
        track.appendChild(wrap);
        var sep = document.createElement('span');
        sep.className = 'a-sep';
        sep.textContent = '\u00b7';
        track.appendChild(sep);
      });
    })();

    // ── MARQUEE VENUES ──
    (function () {
      var venues = ['REAL MADRID', 'PACHA', 'MUTUA MADRID OPEN', 'BMW', 'KAPITAL', 'COCA COLA', 'TEATRO BARCELÓ', 'VODAFONE', 'RAMSES', 'RON BARCELÓ', 'OLIVIA VALERE'];
      var track = document.getElementById('marqueeTrack');
      var doubled = venues.concat(venues);
      doubled.forEach(function (v) {
        var s = document.createElement('span'); s.className = 'm-item'; s.textContent = v; track.appendChild(s);
        var d = document.createElement('span'); d.className = 'm-sep'; d.textContent = '\u00b7'; track.appendChild(d);
      });
    })();

    // ── NAV SCROLL ──
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ── REVEAL ON SCROLL ──
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

    // ── FAQ ──
    function toggleFaq(btn) {
      var item = btn.parentElement;
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    }

    // ── STICKY MOBILE ──
    var stickyCta = document.getElementById('stickyCta');
    stickyCta.style.transform = 'translateY(100%)';
    stickyCta.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    window.addEventListener('scroll', function () {
      if (window.innerWidth <= 900)
        stickyCta.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(100%)';
    }, { passive: true });
