/* Jaipur Vista — shared header, footer & light interactions */
(() => {
const C = window.CAFE;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;
const wa = msg => `https://wa.me/${C.wa}${msg ? '?text=' + encodeURIComponent(msg) : ''}`;
window.JV = { wa };

document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<symbol id="i-arrow" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></symbol>
<symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></symbol>
<symbol id="i-star" viewBox="0 0 24 24"><path fill="currentColor" d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z"/></symbol>
<symbol id="i-cake" viewBox="0 0 24 24"><path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 5 0M12 12V8M12 5.5c.8-.8.8-1.7 0-2.5-.8.8-.8 1.7 0 2.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-ring" viewBox="0 0 24 24"><circle cx="12" cy="15" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 4h6l-1.5 3h-3L9 4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
<symbol id="i-camera" viewBox="0 0 24 24"><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
<symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
<symbol id="i-phoneplay" viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14a6.5 6.5 0 0 1 3.5 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
<symbol id="i-cup" viewBox="0 0 24 24"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Zm13 1h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
<symbol id="i-rupee" viewBox="0 0 24 24"><path d="M7 4h10M7 8.5h10M7 4h3.5a4.5 4.5 0 0 1 0 9H7l7 7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
</svg>`);

const ar = '<svg class="arrow" aria-hidden="true"><use href="#i-arrow"/></svg>';
const H = page === 'home' ? '' : 'index.html';
const nav = [['#why', 'Why visit'], ['#food', 'Food'], ['#celebrate', 'Celebrations'], ['#gallery', 'Gallery'], ['#reviews', 'Reviews'], ['menu.html', 'Menu']];
const navHTML = nav.map(([h, t]) => `<a href="${h.startsWith('#') ? H + h : h}" ${page === 'menu' && h === 'menu.html' ? 'aria-current="page"' : ''}>${t}</a>`).join('');

$('#site-header').innerHTML = `<a class="skip-link" href="#main">Skip to content</a>
<div class="wrap head-in">
 <a class="brand" href="index.html" aria-label="${C.name} — home"><img src="assets/logo.jpg" alt="" width="48" height="48"><span>Jaipur Vista</span></a>
 <nav class="desktop-nav" aria-label="Main">${navHTML}</nav>
 <a class="btn btn-sm head-cta" href="${wa('Hi Jaipur Vista! I would like to book a table.')}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-wa"/></svg>Book on WhatsApp</a>
 <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span></button>
</div>
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">${navHTML}</nav>`;

const header = $('#site-header'), tog = $('.menu-toggle');
tog.onclick = () => { const o = header.classList.toggle('nav-open'); tog.setAttribute('aria-expanded', o); tog.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); };
$$('#mobile-nav a').forEach(a => a.addEventListener('click', () => { header.classList.remove('nav-open'); tog.setAttribute('aria-expanded', false); }));
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });

$('#site-footer').innerHTML = `<div class="wrap foot">
 <div class="foot-brand"><img src="assets/logo.jpg" alt="${C.name} logo" width="88" height="88" loading="lazy"><p>Jaipur aaye, Jaipur Vista nahi aaye?<br><b>Toh kya Jaipur aaye!</b></p></div>
 <div><h3>Visit</h3><p>${C.address}</p><a class="link" href="${C.directions}" target="_blank" rel="noopener">Get directions ${ar}</a></div>
 <div><h3>Contact</h3><p>${C.hours}</p><a href="tel:${C.phone.replace(/\s/g, '')}">${C.phone}</a><a href="${wa('Hi Jaipur Vista! ')}" target="_blank" rel="noopener">WhatsApp us</a><a href="https://instagram.com/${C.insta}" target="_blank" rel="noopener">Instagram</a></div>
</div>
<div class="wrap foot-bot"><span>© ${new Date().getFullYear()} ${C.name} Café, Jaipur</span><span>Made with love in the Pink City</span></div>`;

document.body.insertAdjacentHTML('beforeend', `<a class="float-wa" href="${wa('Hi Jaipur Vista! I would like to book a table.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg aria-hidden="true"><use href="#i-wa"/></svg></a>`);

$$('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa || 'Hi Jaipur Vista!'); a.target = '_blank'; a.rel = 'noopener'; });
$$('[data-c]').forEach(e => e.textContent = C[e.dataset.c]);

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
window.JV.observe = (root = document) => $$('.reveal', root).forEach(e => io.observe(e));
window.JV.observe();
})();
