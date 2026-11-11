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
- `index.html` — home page (hero, why visit, food, celebrations, gallery, reviews, WhatsApp booking, map)
- `menu.html` — full menu
- `data.js` — café details, reviews, photos
- `site.js` — header, footer, scroll fade-ins
- `home.js` — home page sections, gallery viewer, WhatsApp booking buttons
- `style.css` — light blue-pottery café style (Outfit + DM Sans)
