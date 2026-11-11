/* Jaipur Vista — shared header, footer & interactions */
(() => {
const C = window.CAFE;
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;
const wa = (msg) => `https://wa.me/${C.wa}${msg ? '?text=' + encodeURIComponent(msg) : ''}`;
window.JV = { wa };

/* ---------- icons ---------- */
document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<symbol id="i-arrow" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
<symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></symbol>
<symbol id="i-insta" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/></symbol>
<symbol id="i-star" viewBox="0 0 24 24"><path fill="currentColor" d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z"/></symbol>
<symbol id="i-cake" viewBox="0 0 24 24"><path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 5 0M12 12V8M12 5.5c.8-.8.8-1.7 0-2.5-.8.8-.8 1.7 0 2.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-ring" viewBox="0 0 24 24"><circle cx="12" cy="15" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 4h6l-1.5 3h-3L9 4Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-camera" viewBox="0 0 24 24"><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></symbol>
<symbol id="i-phoneplay" viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14a6.5 6.5 0 0 1 3.5 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-motif" viewBox="0 0 40 40"><g fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="20" cy="20" r="4"/><path d="M20 4c3 5 3 9 0 12-3-3-3-7 0-12ZM20 36c3-5 3-9 0-12-3 3-3 7 0 12ZM4 20c5-3 9-3 12 0-3 3-7 3-12 0ZM36 20c-5-3-9-3-12 0 3 3 7 3 12 0Z"/><path d="M8.7 8.7c5.6 1.4 8.4 4.2 8.5 8.5-4.3-.1-7.1-2.9-8.5-8.5ZM31.3 31.3c-5.6-1.4-8.4-4.2-8.5-8.5 4.3.1 7.1 2.9 8.5 8.5ZM31.3 8.7c-1.4 5.6-4.2 8.4-8.5 8.5.1-4.3 2.9-7.1 8.5-8.5ZM8.7 31.3c1.4-5.6 4.2-8.4 8.5-8.5-.1 4.3-2.9 7.1-8.5 8.5Z"/></g></symbol>
</svg>`);

const ar = '<svg class="arrow" aria-hidden="true"><use href="#i-arrow"/></svg>';
const H = page === 'home' ? '' : 'index.html';

/* ---------- header ---------- */
const nav = [['#dont-miss', 'Why Vista'], ['#celebrate', 'Celebrate'], ['#insta-spots', 'Insta spots'], ['#gallery', 'Gallery'], ['#reviews', 'Reviews'], ['menu.html', 'Menu']];
const navHTML = nav.map(([h, t]) => `<a href="${h.startsWith('#') ? H + h : h}" ${page === 'menu' && h === 'menu.html' ? 'aria-current="page"' : ''}>${t}</a>`).join('');
$('#site-header').innerHTML = `<a class="skip-link" href="#main">Skip to content</a>
<div class="progress" aria-hidden="true"></div>
<div class="wrap head-in">
 <a class="brand" href="index.html" aria-label="${C.name} — home"><img src="assets/logo.jpg" alt="" width="56" height="56"><span><b>Jaipur Vista</b><small>${C.sub}</small></span></a>
 <nav class="desktop-nav" aria-label="Main">${navHTML}</nav>
 <a class="btn btn-sm head-cta" href="${H}#book">Book a table ${ar}</a>
 <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button>
</div>
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">${navHTML}<a href="${H}#book" class="btn">Book a table ${ar}</a></nav>`;

const header = $('#site-header'), tog = $('.menu-toggle'), mn = $('#mobile-nav');
tog.onclick = () => { const o = header.classList.toggle('nav-open'); tog.setAttribute('aria-expanded', o); tog.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); document.body.classList.toggle('lock', o); };
$$('a', mn).forEach(a => a.addEventListener('click', () => { header.classList.remove('nav-open'); tog.setAttribute('aria-expanded', false); document.body.classList.remove('lock'); }));

/* ---------- footer ---------- */
$('#site-footer').innerHTML = `<div class="foot-mandala" aria-hidden="true"><svg><use href="#i-motif"/></svg></div>
<div class="wrap">
 <div class="foot-top">
  <div class="foot-brand"><img src="assets/logo.jpg" alt="${C.name} logo" width="120" height="120" loading="lazy">
   <p class="foot-tag">Jaipur aaye, Jaipur Vista nahi aaye?<br><em>Toh kya Jaipur aaye!</em></p></div>
  <div class="foot-cols">
   <div><h3>Visit</h3><p>${C.address}</p><a class="link" href="${C.directions}" target="_blank" rel="noopener">Get directions ${ar}</a></div>
   <div><h3>Hours</h3><p>${C.hours}</p><h3 style="margin-top:22px">Talk to us</h3><a class="link" href="tel:${C.phone.replace(/\s/g, '')}">${C.phone}</a><br><a class="link" href="${wa('Hi Jaipur Vista! ')}" target="_blank" rel="noopener">WhatsApp us ${ar}</a></div>
   <div><h3>Explore</h3><a href="${H}#celebrate">Celebrations</a><a href="${H}#insta-spots">Insta spots</a><a href="menu.html">Our menu</a><a href="${H}#book">Book a table</a><a href="https://instagram.com/${C.insta}" target="_blank" rel="noopener">@${C.insta}</a></div>
  </div>
 </div>
 <div class="foot-bot"><span>© ${new Date().getFullYear()} ${C.name} Café, Jaipur</span><span>Made with love in the Pink City</span></div>
</div>`;

/* ---------- floating WhatsApp ---------- */
document.body.insertAdjacentHTML('beforeend', `<a class="float-wa" href="${wa('Hi Jaipur Vista! I would like to book a table.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg aria-hidden="true"><use href="#i-wa"/></svg><span>Chat with us</span></a>`);

$$('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa || 'Hi Jaipur Vista!'); a.target = '_blank'; a.rel = 'noopener'; });
$$('[data-c]').forEach(e => e.textContent = C[e.dataset.c]);

/* ---------- scroll: header state + progress + parallax ---------- */
const prog = $('.progress');
const par = $$('[data-speed]');
let ticking = false;
const onScroll = () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  header.classList.toggle('scrolled', y > 40);
  prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  if (!RM) par.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > innerHeight + 200) return;
    const mid = r.top + r.height / 2 - innerHeight / 2;
    el.style.transform = `translate3d(0,${(mid * -parseFloat(el.dataset.speed)).toFixed(1)}px,0)`;
  });
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
onScroll();

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .14, rootMargin: '0px 0px -40px 0px' });
window.JV.observe = (root = document) => $$('.reveal,.reveal-img,.split', root).forEach(e => io.observe(e));

/* split headings into animated lines/words */
$$('.split').forEach(el => {
  el.innerHTML = el.innerHTML.split(/<br\s*\/?>/i).map((line, li) =>
    `<span class="ln"><span class="lw" style="--d:${li * 0.09}s">${line}</span></span>`).join('');
});
window.JV.observe();

/* ---------- magnetic buttons ---------- */
if (!RM && matchMedia('(hover:hover)').matches) {
  $$('.btn').forEach(b => {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .25}px)`; });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  });
}
})();
