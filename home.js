/* Jaipur Vista — home page sections */
(() => {
const C = window.CAFE, U = window.U, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ar = '<svg class="arrow" aria-hidden="true"><use href="#i-arrow"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- preloader (once per session) ---------- */
const loader = $('.loader');
let seen = false; try { seen = sessionStorage.getItem('jv-intro') === '1'; sessionStorage.setItem('jv-intro', '1'); } catch (e) {}
const done = () => { document.body.classList.add('ready'); setTimeout(() => loader && loader.remove(), 1100); };
if (seen || RM) { loader.remove(); document.body.classList.add('ready'); }
else { let fired = false; const go = () => { if (!fired) { fired = true; setTimeout(done, 900); } }; addEventListener('load', go); setTimeout(go, 2400); }

/* ---------- Google bits ---------- */
const hasRating = C.rating && C.reviewCount;
$('#g-chip').href = C.googleLink;
if (hasRating) $('#g-chip-txt').innerHTML = `<b>${C.rating}</b> ★ · ${Number(C.reviewCount).toLocaleString('en-IN')} Google reviews`;
$('#rv-all').href = C.googleLink;
$('#rv-write').href = C.googleLink;
$('#g-summary').innerHTML = `<div class="g-big"><span class="g-logo lg" aria-hidden="true">G</span><div>${hasRating
  ? `<b>${C.rating}</b><span class="stars" aria-label="${C.rating} out of 5">${'<svg><use href="#i-star"/></svg>'.repeat(5)}</span><small>${Number(C.reviewCount).toLocaleString('en-IN')} reviews on Google</small>`
  : `<b class="sm">Rated by travellers</b><span class="stars" aria-hidden="true">${'<svg><use href="#i-star"/></svg>'.repeat(5)}</span><small>See every review on Google</small>`}</div></div>`;

/* ---------- signature plates rail ---------- */
const dishes = [
  ['1567337710282-00832b415979', 'Vista Shahi Thali', 'Dal baati churma, gatte, ker sangri, bajra roti & a sweet — a Rajput feast on one plate.', 'Signature'],
  ['1571934811356-5cc061b6821f', 'Kulhad Masala Chai', 'Slow-brewed with ginger and elaichi, poured into a clay kulhad. Best at sunset.', 'Must try'],
  ['1601050690597-df0568f70950', 'Pyaaz Kachori & Samosa', 'Jaipur’s favourite breakfast, crisp and flaky, with imli and mint chutney.', 'Street classic'],
  ['1585937421612-70a008356fbe', 'Paneer Lababdar', 'Soft paneer in a rich tomato-cashew gravy with butter naan.', 'Comfort'],
  ['1561336313-0bd5e0b27ec8', 'Sunset Coffee Flight', 'Cappuccino, cold brew and iced latte — for the indecisive and the curious.', 'For two'],
  ['1530062845289-9109b2c9c868', 'Vista Sharing Platter', 'Chaat, kebabs, dips and breads to pass around the table while you take in the view.', 'Groups']
];
$('#rail').innerHTML = dishes.map((d, i) => `<article class="dish reveal" style="--i:${i}">
  <div class="dish-img"><img src="${U(d[0], 800)}" alt="${d[1]}" loading="lazy" draggable="false"><span class="tag">${d[3]}</span></div>
  <h3>${d[1]}</h3><p>${d[2]}</p></article>`).join('') + `<a class="dish dish-more reveal" href="menu.html"><span>See the<br>full menu</span>${ar}</a>`;

/* drag-to-scroll */
const rail = $('#rail');
let down = false, sx = 0, sl = 0, moved = false;
rail.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; rail.classList.add('drag'); });
addEventListener('pointerup', () => { down = false; rail.classList.remove('drag'); });
addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; rail.scrollLeft = sl - dx; });
rail.addEventListener('click', e => { if (moved) { e.preventDefault(); moved = false; } }, true);

/* ---------- celebrations ---------- */
const events = [
  ['birthday', 'i-cake', 'Birthday celebrations', '1530103862676-de8c9debad1d', 'Balloons, a cake moment at golden hour and Hawa Mahal lit up behind you. We handle the décor — you blow the candles.', ['Custom décor', 'Cake on request', 'Sunset slot']],
  ['prewedding', 'i-heart', 'Pre-wedding shoots', '1478146896981-b80fe463b330', 'Pink sandstone, carved jharokhas and soft evening light — Jaipur’s most cinematic backdrop for your love story.', ['Early-morning slots', 'Rooftop access', 'Outfit change space']],
  ['wedding', 'i-ring', 'Wedding & couple shoots', '1610173826608-bd1f53a52db1', 'Bride-and-groom portraits and family frames with the Palace of Winds in the background. Royal, without the palace price tag.', ['Photographer-friendly', 'Group portraits', 'Flexible timing']],
  ['proposal', 'i-sparkle', 'Proposals & anniversaries', '1606800052052-a08af7148866', 'A private corner, candles, flowers and the city glowing below. Tell us the plan — we’ll keep the secret.', ['Private corner', 'Flowers & candles', 'Surprise co-ordination']],
  ['party', 'i-users', 'Other celebrations', '1511795409834-ef04bbd61622', 'Kitty parties, family get-togethers, farewells, office lunches — group menus and reserved seating for every reason to celebrate.', ['Group menus', 'Reserved section', 'Kids welcome']],
  ['creator', 'i-phoneplay', 'Influencer & creator shoots', '1516035069371-29a1b244cc32', 'Reels, vlogs, food content and brand shoots with one of India’s most recognised landmarks in frame.', ['Shoot slots', 'Food styling help', 'Collabs welcome']]
];
window.EVENT_TYPES = events;
$('#events').innerHTML = events.map((e, i) => `<article class="event reveal" style="--i:${i % 3}">
  <div class="event-img"><img src="${U(e[3], 900)}" alt="" loading="lazy"></div>
  <div class="event-body">
   <span class="event-ic"><svg aria-hidden="true"><use href="#${e[1]}"/></svg></span>
   <h3>${e[2]}</h3><p>${e[4]}</p>
   <ul>${e[5].map(x => `<li>${x}</li>`).join('')}</ul>
   <button class="link event-cta" data-occ="${e[0]}">Enquire for ${e[2].toLowerCase()} ${ar}</button>
  </div></article>`).join('');

/* card tilt */
if (!RM && matchMedia('(hover:hover)').matches) $$('.event').forEach(c => {
  c.addEventListener('mousemove', e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-6px)`; });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});

/* ---------- insta spots ---------- */
const spots = [
  [50, 46, 'The Jharokha Frame', 'Stand at our arched window and let the 953 windows of Hawa Mahal fill the background. The most-shot frame in the café.'],
  [22, 70, 'Golden Hour Rooftop', 'From 5 to 7 pm the façade turns from pink to gold. Perfect for portraits, slow-mo reels and couple shots.'],
  [80, 28, 'Chai-with-a-View Table', 'A kulhad, a thali and the palace behind — the flat-lay that gets the most saves.'],
  [72, 78, 'Pink City Street Shot', 'Bazaar life, rickshaws and the old-city buzz below — great for vlogs and travel B-roll.']
];
$('#ig-tag').textContent = '@' + C.insta; $('#ig-tag').href = 'https://instagram.com/' + C.insta;
$('#pins').innerHTML = spots.map((s, i) => `<button class="pin" style="left:${s[0]}%;top:${s[1]}%;--i:${i}" data-i="${i}" aria-label="Spot ${i + 1}: ${s[2]}"><span>${i + 1}</span></button>`).join('');
$('#spot-list').innerHTML = spots.map((s, i) => `<li class="reveal" data-i="${i}"><button aria-expanded="${i === 0}"><span class="sn">${String(i + 1).padStart(2, '0')}</span><span class="st">${s[2]}</span></button><p>${s[3]}</p></li>`).join('');
const setSpot = i => {
  $$('#spot-list li').forEach((li, j) => { li.classList.toggle('on', j === i); li.querySelector('button').setAttribute('aria-expanded', j === i); });
  $$('.pin').forEach((p, j) => p.classList.toggle('on', j === i));
};
$$('#spot-list button').forEach((b, i) => b.onclick = () => setSpot(i));
$$('.pin').forEach((p, i) => p.onclick = () => setSpot(i));
setSpot(0);

/* ---------- gallery + lightbox ---------- */
const P = window.PHOTOS, mas = $('#masonry');
const renderGal = f => {
  mas.innerHTML = P.map((p, i) => ({ p, i })).filter(o => f === 'all' || o.p.cat === f).map(({ p, i }, k) =>
    `<button class="tile reveal-img" style="--i:${k % 4}" data-i="${i}" aria-label="Open photo: ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.cap)}" loading="lazy"><span class="cap">${esc(p.cap)}</span></button>`).join('');
  window.JV.observe(mas);
};
renderGal('all');
$$('.filters button').forEach(b => b.onclick = () => {
  $$('.filters button').forEach(x => x.setAttribute('aria-selected', x === b));
  renderGal(b.dataset.f);
});
const lb = $('#lightbox'), lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption');
let cur = 0, lastFocus = null, list = [];
const show = i => { cur = (i + list.length) % list.length; const p = P[list[cur]]; lbImg.src = p.src.replace(/w=\d+/, 'w=1800'); lbImg.alt = p.cap; lbCap.textContent = p.cap; };
mas.addEventListener('click', e => {
  const t = e.target.closest('.tile'); if (!t) return;
  list = $$('.tile').map(x => +x.dataset.i); lastFocus = t;
  show(list.indexOf(+t.dataset.i)); lb.hidden = false; requestAnimationFrame(() => lb.classList.add('open'));
  document.body.classList.add('lock'); lb.querySelector('.lb-close').focus();
});
const closeLb = () => { lb.classList.remove('open'); document.body.classList.remove('lock'); setTimeout(() => lb.hidden = true, 300); lastFocus && lastFocus.focus(); };
lb.querySelector('.lb-close').onclick = closeLb;
lb.querySelector('.lb-prev').onclick = () => show(cur - 1);
lb.querySelector('.lb-next').onclick = () => show(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
  if (e.key === 'Tab') { const f = $$('#lightbox button'), a = document.activeElement, i = f.indexOf(a); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } }
});

/* ---------- reviews ---------- */
const R = window.REVIEWS;
const initials = n => n.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
const hues = ['#16397a', '#a8402a', '#0e7468', '#b8862f', '#5b3a8c', '#1f6f9f'];
const card = (r, i) => `<article class="rv-card"><header><span class="av" style="background:${hues[i % hues.length]}">${esc(initials(r.name))}</span><div><b>${esc(r.name)}</b><small>${esc(r.when)}</small></div><span class="g-logo" aria-hidden="true">G</span></header>
 <span class="stars" aria-label="${r.stars} out of 5 stars">${'<svg><use href="#i-star"/></svg>'.repeat(r.stars)}</span><p>${esc(r.text)}</p></article>`;
const track = $('#rv-track');
track.innerHTML = R.map(card).join('') + `<div class="rv-dup" aria-hidden="true">${R.map(card).join('')}</div>`;
if (C.reviewsAreSamples) $('#reviews .sec-head > div').insertAdjacentHTML('beforeend', '<p class="sample-flag">Sample reviews — replace with your Google reviews in data.js</p>');
const pb = $('#rv-pause');
pb.onclick = () => { const p = track.classList.toggle('paused'); pb.textContent = p ? 'Play' : 'Pause'; pb.setAttribute('aria-pressed', p); };
if (RM) { track.classList.add('paused'); pb.textContent = 'Play'; pb.setAttribute('aria-pressed', true); }

/* ---------- booking form ---------- */
const occ = [['table', 'Just a table'], ...events.map(e => [e[0], e[2]])];
$('#occasions').innerHTML = occ.map((o, i) => `<label class="occ"><input type="radio" name="occasion" value="${o[0]}" ${i === 0 ? 'checked' : ''}><span>${o[1]}</span></label>`).join('');
const form = $('#book-form'), note = $('#form-note');
const dt = form.date; const today = new Date(); dt.min = today.toISOString().slice(0, 10);
$('#book-call').href = 'tel:' + C.phone.replace(/\s/g, '');
$$('.event-cta').forEach(b => b.onclick = () => {
  const r = form.querySelector(`input[value="${b.dataset.occ}"]`); if (r) r.checked = true;
  $('#book').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' });
  setTimeout(() => form.name.focus({ preventScroll: true }), RM ? 0 : 700);
});
const fieldErr = (inp, msg) => {
  const f = inp.closest('.fld'); f.classList.toggle('err', !!msg);
  let m = f.querySelector('.msg'); if (!m) { m = document.createElement('small'); m.className = 'msg'; f.appendChild(m); }
  m.textContent = msg || ''; inp.setAttribute('aria-invalid', !!msg);
};
const check = inp => {
  const v = inp.value.trim();
  if (inp.name === 'name') return fieldErr(inp, v ? '' : 'Please tell us your name'), !!v;
  if (inp.name === 'phone') { const ok = v.replace(/\D/g, '').length >= 10; fieldErr(inp, ok ? '' : 'Enter a 10-digit number so we can confirm'); return ok; }
  if (inp.name === 'date') { const ok = !!v; fieldErr(inp, ok ? '' : 'Pick a date'); return ok; }
  return true;
};
['name', 'phone', 'date'].forEach(n => { form[n].addEventListener('blur', () => form[n].value && check(form[n])); form[n].addEventListener('input', () => form[n].closest('.fld').classList.contains('err') && check(form[n])); });
form.addEventListener('submit', e => {
  e.preventDefault();
  const bad = ['name', 'phone', 'date'].map(n => form[n]).filter(i => !check(i));
  if (bad.length) { bad[0].focus(); return; }
  const o = occ.find(x => x[0] === form.occasion.value)[1];
  const d = new Date(form.date.value + 'T00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  const msg = `Namaste Jaipur Vista! 🙏\nI'd like to make a booking.\n\n• Occasion: ${o}\n• Name: ${form.name.value.trim()}\n• Phone: ${form.phone.value.trim()}\n• Date: ${d}\n• Time: ${form.time.value}\n• Guests: ${form.guests.value}${form.notes.value.trim() ? `\n• Notes: ${form.notes.value.trim()}` : ''}`;
  window.open(window.JV.wa(msg), '_blank', 'noopener');
  note.textContent = 'WhatsApp is opening with your details — just hit send. We’ll confirm shortly!';
  note.classList.add('ok');
});

/* ---------- visit ---------- */
$('#map').src = C.mapEmbed;
$('#dir').href = C.directions;
$('#tel').href = 'tel:' + C.phone.replace(/\s/g, '');

window.JV.observe();
})();
