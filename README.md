# Jaipur Vista — Café with a View

Static website (no build step). Open `index.html` in a browser or host the folder on any static host (Netlify, Vercel, GitHub Pages).

## Launch se pehle yeh badlein — sab kuch `data.js` mein hai

1. **Phone / WhatsApp** — `phone` aur `wa` (WhatsApp number, country code ke saath, bina `+` ke). Saari bookings isi number par WhatsApp message ke roop mein aayengi.
2. **Hours / address** — `hours`, `address`.
3. **Google rating** — `rating` aur `reviewCount` bharein (Google Maps par dikh raha number). Khali rahega toh number nahi dikhega.
4. **Google reviews** — Google Maps → Jaipur Vista Cafe → Reviews se 6–10 best reviews `REVIEWS` mein paste karein, phir `reviewsAreSamples: false` kar dein. Tab tak site par "Sample reviews" label dikhta rahega.
5. **Photos** — Google Business Profile se apni (owner ki) photos download karke `assets/photos/` mein daalein aur `PHOTOS` mein `src: "assets/photos/rooftop.jpg"` likhein. Abhi stock (Unsplash) photos lagi hain.
6. **Menu & prices** — `menu.html` ke andar `MENU` array.

## Files
- `index.html` — home page (hero, don't-miss, dishes, celebrations, influencer points, gallery, reviews, booking, map)
- `menu.html` — full menu
- `data.js` — café details, reviews, photos
- `site.js` — header, footer, shared animations
- `home.js` — home page sections & booking form
- `style.css` — brand styles (logo colours: royal blue, terracotta, peacock teal, gold, ivory)
