// ====== CAFE DETAILS — yahan apne cafe ki details badlein ======
window.CAFE={name:"Jaipur Vista",sub:"Café with a view",city:"Jaipur",phone:"+91 90000 00000",wa:"919000000000",insta:"jaipurvista",
address:"Apna poora address yahan likhein, Jaipur, Rajasthan, India",hours:"Every day · 8 am–11 pm",since:"2024"};
// ===============================================================
const C=window.CAFE;
document.body.insertAdjacentHTML('afterbegin',`<svg width="0" height="0" style="position:absolute">
<symbol id="i-arrow" viewBox="0 0 16 16"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-down" viewBox="0 0 16 16"><path d="M8 2v12M3 9l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-leaf" viewBox="0 0 24 24"><path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15M5 19l8-8" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-cup" viewBox="0 0 24 24"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Zm13 1h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20Z" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-fork" viewBox="0 0 24 24"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M16 21V3c-2 1-3 4-3 8h3" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-sprout" viewBox="0 0 24 24"><path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6Zm0-2c0-3 2-6 7-6 0 4-3 6-7 6" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
<symbol id="i-bean" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="6" ry="9" transform="rotate(30 12 12)" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 18c3-3 2-9 6-12" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>
</svg>`);
const ar='<svg class="arrow"><use href="#i-arrow"/></svg>';
const page=document.body.dataset.page;
document.getElementById('site-header').innerHTML=`<a class="skip-link" href="#main">Skip to content</a>
<div class="wrap head-in"><a class="brand" href="index.html" aria-label="${C.name} home"><img src="assets/logo.jpg" alt="${C.name} logo"></a>
<nav class="desktop-nav" aria-label="Main navigation"><a href="index.html" class="${page==='home'?'active':''}">Home</a><a href="menu.html" class="${page==='menu'?'active':''}">Our menu</a><a href="index.html#story">Our story</a><a href="index.html#gallery">The view</a></nav>
<a class="button header-visit" href="https://wa.me/${C.wa}" target="_blank" rel="noreferrer">Reserve a table now ${ar}</a>
<button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M2 6h16M2 14h16" stroke="currentColor" stroke-width="1.6"/></svg></button></div>
<nav class="mobile-nav" aria-label="Mobile navigation"><a href="index.html">Home</a><a href="menu.html">Our menu</a><a href="index.html#story">Our story</a><a href="index.html#gallery">Gallery</a><a href="https://wa.me/${C.wa}" target="_blank" rel="noreferrer">Reserve a table</a></nav>`;
document.getElementById('site-footer').innerHTML=`<div class="wrap"><div class="foot-top">
<a class="brand" href="index.html"><img src="assets/logo.jpg" alt="${C.name} logo"></a>
<p class="tag">Jaipur aaye, Jaipur Vista nahi aaye?<br>Toh kya Jaipur aaye!</p>
<div class="foot-links"><a href="menu.html">Explore the menu ${ar}</a><a href="https://wa.me/${C.wa}" target="_blank" rel="noreferrer">Reserve a table now ${ar}</a><a href="index.html#food-philosophy">How we cook ${ar}</a>
<span style="display:flex;gap:12px;align-items:center"><svg width="16" height="16"><use href="#i-pin"/></svg>${C.city}, India</span>
<a href="tel:${C.phone.replace(/\s/g,'')}">${C.phone} ${ar}</a><a href="https://instagram.com/${C.insta}" target="_blank" rel="noreferrer">Instagram ${ar}</a><small>${C.hours}</small></div></div>
<div class="foot-bot"><span>© ${C.name} Café. All rights reserved.</span><span>Made with love in the Pink City.</span></div></div>`;
document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/'+C.wa;a.target='_blank';a.rel='noreferrer'});
document.querySelectorAll('[data-c]').forEach(e=>e.textContent=C[e.dataset.c]);
const t=document.querySelector('.menu-toggle'),mn=document.querySelector('.mobile-nav');
t.onclick=()=>{const o=mn.classList.toggle('open');t.setAttribute('aria-expanded',o)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
