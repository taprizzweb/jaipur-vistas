/* Jaipur Vista — home page content */
(() => {
const C = window.CAFE, P = window.P, wa = window.JV.wa;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

$('#rating-card').href = C.googleLink;
$('#rv-all').href = C.googleLink;

/* moods: morning / sunset / night */
const moods = [
  ['Daytime', '8 am – 5 pm', 'view-daylight', 'Bright light on every carved window — the clearest view of the façade. Breakfast, chai and daylight portraits.', 'a daytime table'],
  ['Golden hour', '5 – 7 pm', 'view-sunset', 'The pink sandstone turns gold and the sky catches fire. Our most-booked slot — come early.', 'a sunset table (5–7 pm)'],
  ['Night lights', '7 – 10 pm', 'view-blue', 'Hawa Mahal lights up right in front of you. Dinner, candles and the best night photos in Jaipur.', 'a dinner table (7–10 pm)']
];
$('#mood-stage').innerHTML = moods.map((m, i) => `<img src="${P(m[2])}" alt="Hawa Mahal from Jaipur Vista — ${m[0].toLowerCase()}" class="${i === 1 ? 'on' : ''}" loading="lazy"><span class="mood-chip ${i === 1 ? 'on' : ''}">${m[0]} · ${m[1]}</span>`).join('');
$('#mood-tabs').innerHTML = moods.map((m, i) => `<button role="tab" aria-selected="${i === 1}" data-i="${i}"><b>${m[0]}</b><small>${m[1]}</small></button>`).join('');
const setMood = i => {
  $$('#mood-tabs button').forEach((b, j) => b.setAttribute('aria-selected', j === i));
  $$('#mood-stage img').forEach((im, j) => im.classList.toggle('on', j === i));
  $$('#mood-stage .mood-chip').forEach((c, j) => c.classList.toggle('on', j === i));
  $('#mood-text').textContent = moods[i][3];
  $('#mood-cta').href = wa(`Hi Jaipur Vista! I would like to book ${moods[i][4]}.\nDate: \nGuests: `);
  $('#mood-cta span').textContent = `Book ${moods[i][0].toLowerCase()} slot`;
};
$$('#mood-tabs button').forEach(b => b.onclick = () => setMood(+b.dataset.i));
setMood(1);

/* count-up numbers */
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, to = +el.dataset.to, dec = +(el.dataset.dec || 0);
  if (RM) return;
  const t0 = performance.now(), dur = 1400;
  const tick = t => { const k = Math.min(1, (t - t0) / dur), v = to * (1 - Math.pow(1 - k, 3)); el.textContent = v.toFixed(dec); if (k < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}), { threshold: .6 });
$$('.count').forEach(c => cio.observe(c));

/* dishes */
const dishes = [
  ['food-pizza', 'Signature pizzas', 'Pesto Mexicano, Caprino and Mushroom — crispy crust, real mozzarella.'],
  ['food-sandwich', 'Pesto mushroom sandwich', 'Toasted, golden and packed with herby mushrooms.'],
  ['food-penne', 'Pink sauce penne', 'Creamy, tangy and comforting.'],
  ['food-pasta-garlic', 'Pasta & garlic bread', 'Make it a meal with cheesy garlic bread.']
];
const dtags = ['Most loved', 'Signature', 'Comfort', 'For sharing'];
$('#dishes').innerHTML = dishes.map((d, i) => `<article class="dish reveal" style="--d:${i * .1}s"><div class="dish-img"><img src="${P(d[0])}" alt="${d[1]}" loading="lazy"><span class="dtag t${i}">${dtags[i]}</span></div><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join('');

/* occasions */
const occ = [
  ['i-cake', 'Birthdays', 'Décor, cake moment and a sunset table'],
  ['i-heart', 'Pre-wedding & couple shoots', 'Rooftop slots with the full palace in frame'],
  ['i-sparkle', 'Proposals & anniversaries', 'Heart arches, roses and candles'],
  ['i-users', 'Family & group get-togethers', 'Reserved seating for your group'],
  ['i-phoneplay', 'Influencer & creator shoots', 'Reels, vlogs and food content']
];
$('#occ-list').innerHTML = occ.map((o, i) => `<li class="reveal" style="--d:${i * .08}s"><span class="ic"><svg aria-hidden="true"><use href="#${o[0]}"/></svg></span><div><b>${o[1]}</b><small>${o[2]}</small></div><a href="${wa(`Hi Jaipur Vista! I'd like to plan: ${o[1]}.\nDate: \nGuests: `)}" target="_blank" rel="noopener" aria-label="Enquire about ${o[1]} on WhatsApp">Enquire</a></li>`).join('');

/* gallery: 9 photos */
const pics = window.PHOTOS.slice(0, 9);
$('#gal').innerHTML = pics.map((p, i) => `<button class="g-item reveal" style="--d:${(i % 3) * .1}s" data-i="${i}" aria-label="View photo: ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.cap)}" loading="lazy"></button>`).join('');
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
const feat = window.REVIEWS.find(r => r.name === 'Vishnu Meena') || window.REVIEWS[0];
const R = [...window.REVIEWS].filter(r => r !== feat).sort((a, b) => a.text.length - b.text.length).slice(0, 4);
$('#rv-grid').innerHTML = `<article class="rv rv-feat reveal"><span class="q" aria-hidden="true">“</span><span class="stars" aria-label="5 out of 5 stars">${'<svg><use href="#i-star"/></svg>'.repeat(5)}</span><p>${esc(feat.text.replace(/\s*\n+\s*/g, ' '))}</p><footer><b>${esc(feat.name)}</b><small>${esc(feat.when)} · Google</small></footer></article>` + R.map((r, i) => `<article class="rv reveal" style="--d:${(i % 2) * .1}s"><span class="stars" aria-label="${r.stars} out of 5 stars">${'<svg><use href="#i-star"/></svg>'.repeat(r.stars)}</span><p>${esc(r.text.replace(/\s*\n+\s*/g, ' '))}</p><footer><b>${esc(r.name)}</b><small>${esc(r.when)} · Google</small></footer></article>`).join('');

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
