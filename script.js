// Renders content.js into the page and handles navigation.
(function () {
  'use strict';
  const S = window.SITE || {};
  const $ = (id) => document.getElementById(id);

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = (s) => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>'); // *italic*
  const ext = (url, label) => `<a href="${esc(url)}"${/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;

  const citeHTML = (p) =>
    `<li>${fmt(p.cite)}${p.link ? ` <span class="pub-link">${ext(p.link, p.oa ? 'Open access' : 'Link')}</span>` : ''}</li>`;

  // --- News
  if ($('news-list') && S.news) {
    $('news-list').innerHTML = S.news.map((n) =>
      `<li><span class="date">${esc(n.date)}</span> ${n.link ? ext(n.link, esc(n.text)) : esc(n.text)}</li>`
    ).join('');
  }

  // --- Publications
  const pubs = (S.publications || []).slice().sort((a, b) => b.year - a.year);
  if ($('selected-pubs')) $('selected-pubs').innerHTML = pubs.filter((p) => p.selected).map(citeHTML).join('');
  if ($('pub-groups')) {
    const groups = [['book', 'Books'], ['article', 'Journal articles'], ['chapter', 'Book chapters'], ['policy', 'Policy and consultation responses']];
    $('pub-groups').innerHTML = groups.map(([key, label]) => {
      const items = pubs.filter((p) => p.type === key);
      return items.length ? `<h2>${label}</h2><ol class="pubs">${items.map(citeHTML).join('')}</ol>` : '';
    }).join('');
  }

  // --- Research cards
  if ($('research-cards') && S.research) {
    $('research-cards').innerHTML = S.research.map((r) => `
      <article class="card">
        ${r.image ? `<img src="${esc(r.image)}" alt="${esc(r.imageAlt || '')}" loading="lazy"${r.imageFallback ? ` data-fallback="${esc(r.imageFallback)}"` : ''}>` : ''}
        <div class="card-body">
          ${r.badge ? `<span class="badge">${esc(r.badge)}</span>` : ''}
          <h2>${esc(r.title)}</h2>
          <p>${esc(r.text)}</p>
          ${r.stats ? `<dl class="stats">${r.stats.map(([v, l]) => `<div><dt>${esc(v)}</dt><dd>${esc(l)}</dd></div>`).join('')}</dl>` : ''}
          ${r.funding ? `<p class="muted small">${esc(r.funding)}</p>` : ''}
          ${r.url ? `<p class="card-link">${ext(r.url, esc(r.linkLabel || 'Visit') + ' →')}</p>` : ''}
        </div>
      </article>`).join('');
    // Try the fallback image once, then hide the image rather than show a broken icon
    $('research-cards').querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => {
        if (img.dataset.fallback) { img.src = img.dataset.fallback; delete img.dataset.fallback; }
        else img.remove();
      });
    });
  }

  // --- Teaching & profile lists
  const list = (id, items, render) => { if ($(id) && items) $(id).innerHTML = items.map(render).join(''); };
  list('teaching-list', S.teaching, (t) => `<li><strong>${esc(t.title)}</strong>${t.meta ? ` <span class="muted">— ${esc(t.meta)}</span>` : ''}</li>`);
  const pf = S.profile || {};
  list('pf-positions', pf.positions, (x) => `<li>${esc(x)}</li>`);
  list('pf-engagement', pf.engagement, (x) => `<li>${esc(x)}</li>`);
  list('pf-qualifications', pf.qualifications, (x) => `<li>${esc(x)}</li>`);

  // --- Email (assembled client-side)
  if (S.email) {
    const addr = S.email.join('@');
    document.querySelectorAll('.email-link').forEach((a) => { a.href = 'mailto:' + addr; a.title = addr; });
  }

  // --- Footer year
  if ($('year')) $('year').textContent = new Date().getFullYear();

  // --- Hash routing: #about, #research, ... (shareable links, back button works)
  const pages = Array.from(document.querySelectorAll('.page'));
  const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
  const nav = $('site-nav');
  const menuBtn = $('menu-btn');
  const baseTitle = document.title;

  function show() {
    const id = (location.hash || '#about').slice(1).toLowerCase();
    const target = pages.find((p) => p.id === id) || pages[0];
    pages.forEach((p) => p.classList.toggle('active', p === target));
    navLinks.forEach((a) => {
      const on = a.getAttribute('href') === '#' + target.id;
      a.classList.toggle('current', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.title = target.id === 'about' ? baseTitle : target.querySelector('h1').textContent + ' — Dr Claudio Lombardi';
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();

  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
})();
