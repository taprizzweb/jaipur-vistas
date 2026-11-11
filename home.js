/* Jaipur Vista — home page content */
(() => {
const C = window.CAFE, P = window.P, wa = window.JV.wa;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

$('#rating-card').href = C.googleLink;
$('#rv-all').href = C.googleLink;

/* dishes */
const dishes = [
  ['food-pizza', 'Signature pizzas', 'Pesto Mexicano, Caprino and Mushroom — crispy crust, real mozzarella.'],
  ['food-sandwich', 'Pesto mushroom sandwich', 'Toasted, golden and packed with herby mushrooms.'],
  ['food-penne', 'Pink sauce penne', 'Creamy, tangy and comforting.'],
  ['food-pasta-garlic', 'Pasta & garlic bread', 'Make it a meal with cheesy garlic bread.']
];
$('#dishes').innerHTML = dishes.map(d => `<article class="dish reveal"><img src="${P(d[0])}" alt="${d[1]}" loading="lazy"><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join('');

/* occasions */
const occ = [
  ['i-cake', 'Birthdays', 'Décor, cake moment and a sunset table'],
  ['i-heart', 'Pre-wedding & couple shoots', 'Rooftop slots with the full palace in frame'],
  ['i-sparkle', 'Proposals & anniversaries', 'Heart arches, roses and candles'],
  ['i-users', 'Family & group get-togethers', 'Reserved seating for your group'],
  ['i-phoneplay', 'Influencer & creator shoots', 'Reels, vlogs and food content']
];
$('#occ-list').innerHTML = occ.map(o => `<li><span class="ic"><svg aria-hidden="true"><use href="#${o[0]}"/></svg></span><div><b>${o[1]}</b><small>${o[2]}</small></div><a href="${wa(`Hi Jaipur Vista! I'd like to plan: ${o[1]}.\nDate: \nGuests: `)}" target="_blank" rel="noopener" aria-label="Enquire about ${o[1]} on WhatsApp">Enquire</a></li>`).join('');

/* gallery: 9 photos */
const pics = window.PHOTOS.slice(0, 9);
$('#gal').innerHTML = pics.map((p, i) => `<button class="g-item reveal" data-i="${i}" aria-label="View photo: ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.cap)}" loading="lazy"></button>`).join('');
const lb = $('#lightbox'), lbImg = lb.querySelector('img');
let last = null;
const close = () => { lb.hidden = true; document.body.style.overflow = ''; last && last.focus(); };
$('#gal').addEventListener('click', e => {
  const b = e.target.closest('.g-item'); if (!b) return;
  last = b; const p = pics[+b.dataset.i]; lbImg.src = p.src; lbImg.alt = p.cap;
  lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus();
});
lb.querySelector('.lb-close').onclick = close;
lb.addEventListener('click', e => { if (e.target === lb) close(); });
addEventListener('keydown', e => { if (!lb.hidden && (e.key === 'Escape' || e.key === 'Tab')) { e.preventDefault(); if (e.key === 'Escape') close(); } });

/* reviews: 6 shortest, static grid */
const R = [...window.REVIEWS].sort((a, b) => a.text.length - b.text.length).slice(0, 6);
$('#rv-grid').innerHTML = R.map(r => `<article class="rv reveal"><span class="stars" aria-label="${r.stars} out of 5 stars">${'<svg><use href="#i-star"/></svg>'.repeat(r.stars)}</span><p>${esc(r.text.replace(/\s*\n+\s*/g, ' '))}</p><footer><b>${esc(r.name)}</b><small>${esc(r.when)} · Google</small></footer></article>`).join('');

/* quick booking buttons */
const book = [
  ['i-cup', 'Table for today', 'Hi Jaipur Vista! I would like to book a table for today.\nTime: \nGuests: '],
  ['i-clock', 'Sunset table', 'Hi Jaipur Vista! I would like a sunset table (5–7 pm).\nDate: \nGuests: '],
  ['i-cake', 'Celebration', 'Hi Jaipur Vista! I would like to plan a celebration.\nOccasion: \nDate: \nGuests: '],
  ['i-camera', 'Photoshoot', 'Hi Jaipur Vista! I would like to book a photoshoot slot.\nType of shoot: \nDate: ']
];
$('#book-btns').innerHTML = book.map(b => `<a href="${wa(b[2])}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#${b[0]}"/></svg>${b[1]}</a>`).join('');

/* visit */
$('#map').src = C.mapEmbed;
$('#dir').href = C.directions;
$('#tel').href = 'tel:' + C.phone.replace(/\s/g, '');

window.JV.observe();
})();
