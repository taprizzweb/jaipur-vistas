# Jaipur Vista — Café with a View

Static website (no build step). Open `index.html` in a browser or host the folder on any static host (Netlify, Vercel, GitHub Pages).

## Launch se pehle yeh badlein — sab kuch `data.js` mein hai

1. **Phone / WhatsApp** — `phone` aur `wa` (WhatsApp number, country code ke saath, bina `+` ke). Saari bookings isi number par WhatsApp message ke roop mein aayengi.
2. **Hours / address** — `hours`, `address`.
3. **Google rating** — `rating` aur `reviewCount` bharein (Google Maps par dikh raha number). Khali rahega toh number nahi dikhega.
4. **Google reviews** — real reviews copied from Google Maps are in `REVIEWS`. Add new ones the same way.
5. **Photos** — owner photos from Google Business Profile live in `assets/photos/` and are listed in `PHOTOS`.
6. **Menu & prices** — `MENU` array inside `menu.html` (prices are blank until you add them).

## Files
- `index.html` — home page (hero, don't-miss, dishes, celebrations, influencer points, gallery, reviews, booking, map)
- `menu.html` — full menu
- `data.js` — café details, reviews, photos
- `site.js` — header, footer, shared animations
- `home.js` — home page sections & booking form
- `style.css` — brand styles (logo colours: royal blue, terracotta, peacock teal, gold, ivory)
