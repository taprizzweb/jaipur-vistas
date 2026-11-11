/* =====================================================================
   JAIPUR VISTA — SITE CONTENT
   Café ki saari details, reviews aur photos isi ek file mein badlein.
   ===================================================================== */

window.CAFE = {
  name: "Jaipur Vista",
  sub: "Café with a view",
  // ↓↓ Apna asli number daalein (WhatsApp number bina + aur space ke)
  phone: "+91 90000 00000",
  wa: "919000000000",
  insta: "jaipurvista",
  address: "Hawa Mahal Road, right opposite Hawa Mahal, Pink City, Jaipur, Rajasthan 302002",
  hours: "Open every day · 9:00 am – 11:00 pm",
  // Google Maps / reviews links
  googleLink: "https://share.google/lXXGIfJ7OnAHgaw17",
  directions: "https://www.google.com/maps/search/?api=1&query=Jaipur+Vista+Cafe+Hawa+Mahal+Road+Jaipur",
  mapEmbed: "https://www.google.com/maps?q=Jaipur+Vista+Cafe,+Hawa+Mahal+Rd,+Jaipur&z=17&output=embed",
  // Google rating — apne Google profile se bharein (khali chhodenge toh nahi dikhega)
  rating: null,        // e.g. 4.8
  reviewCount: null,   // e.g. 1250
  // Jab tak niche ke reviews SAMPLE hain, isse true rakhein (site par chhota sa label dikhega).
  // Apne asli Google reviews paste karne ke baad false kar dein.
  reviewsAreSamples: true
};

/* ---------------------------------------------------------------------
   GOOGLE REVIEWS
   Google Maps → Jaipur Vista Cafe → Reviews se apne best reviews copy karke
   yahan paste karein:  { name, text, stars, when }
   --------------------------------------------------------------------- */
window.REVIEWS = [
  { name: "Ananya K.",   stars: 5, when: "a week ago",   text: "Best view of Hawa Mahal in all of Jaipur! We sat by the window for two hours with masala chai and the thali. Don't leave Jaipur without coming here." },
  { name: "Rohit Mehta", stars: 5, when: "2 weeks ago",  text: "Celebrated my wife's birthday here — the team decorated the table, brought the cake out at sunset with Hawa Mahal glowing behind us. Unforgettable." },
  { name: "Sarah L.",    stars: 5, when: "a month ago",  text: "Came for the photos, stayed for the dal baati churma. Friendly staff, super clean and the rooftop at golden hour is pure magic." },
  { name: "Vikram & Pooja", stars: 5, when: "a month ago", text: "Did our pre-wedding shoot here. The jharokha frames with Hawa Mahal in the background look straight out of a film. Highly recommended for couples." },
  { name: "Meera J.",    stars: 5, when: "2 months ago", text: "A calm escape from the busy bazaar below. Cold coffee was great and every corner is Instagrammable." },
  { name: "Tom & Emma",  stars: 5, when: "3 months ago", text: "We came twice in three days. The view, the food and the warm hospitality — this is the Jaipur we'll remember." }
];

/* ---------------------------------------------------------------------
   PHOTOS
   Google Maps se apni best photos download karke assets/photos/ folder mein
   rakhein, phir src mein "assets/photos/naam.jpg" likhein.
   cat: "view" | "food" | "celebrate"
   --------------------------------------------------------------------- */
const U = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;
window.U = U;
window.PHOTOS = [
  { src: U("1603262110263-fb0112e7cc33"), cat: "view",      cap: "Hawa Mahal at dusk, from our table" },
  { src: U("1567337710282-00832b415979"), cat: "food",      cap: "The Vista Shahi Thali" },
  { src: U("1610173826608-bd1f53a52db1"), cat: "celebrate", cap: "Wedding shoots in royal style" },
  { src: U("1524230507669-5ff97982bb5e"), cat: "view",      cap: "953 jharokhas, one view" },
  { src: U("1561336313-0bd5e0b27ec8"),    cat: "food",      cap: "Coffee with a view" },
  { src: U("1530103862676-de8c9debad1d"), cat: "celebrate", cap: "Birthday set-ups" },
  { src: U("1559339352-11d035aa65de"),    cat: "view",      cap: "Rooftop golden hour" },
  { src: U("1601050690597-df0568f70950"), cat: "food",      cap: "Jaipuri samosa & chutney" },
  { src: U("1478146896981-b80fe463b330"), cat: "celebrate", cap: "Pre-wedding portraits" },
  { src: U("1587295656906-b06dca8f2340"), cat: "view",      cap: "The Palace of Winds" },
  { src: U("1585937421612-70a008356fbe"), cat: "food",      cap: "Slow-cooked Rajasthani curries" },
  { src: U("1511795409834-ef04bbd61622"), cat: "celebrate", cap: "Private table celebrations" }
];
