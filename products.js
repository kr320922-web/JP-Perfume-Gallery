const PRODUCTS = [
  {
    "n": "Dior Sauvage",
    "c": "Men",
    "s": "100 ml",
    "p": 10500,
    "i": "images/concept-1.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 0,
    "strength": 0,
    "season": 0
  },
  {
    "n": "Versace Eros",
    "c": "Men",
    "s": "100 ml",
    "p": 7800,
    "i": "images/concept-2.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 1,
    "strength": 1,
    "season": 1
  },
  {
    "n": "Armaf Club de Nuit Intense Man",
    "c": "Men",
    "s": "105 ml",
    "p": 4200,
    "i": "images/concept-4.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 0,
    "strength": 0,
    "season": 0
  },
  {
    "n": "Lattafa Yara",
    "c": "Women",
    "s": "100 ml",
    "p": 2200,
    "i": "images/concept-5.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 3,
    "strength": 1,
    "season": 1
  },
  {
    "n": "Lattafa Khamrah",
    "c": "Unisex",
    "s": "100 ml",
    "p": 3800,
    "i": "images/concept-6.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 3,
    "strength": 2,
    "season": 2
  },
  {
    "n": "YSL Libre",
    "c": "Women",
    "s": "90 ml",
    "p": 11500,
    "i": "images/concept-7.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 1,
    "strength": 0,
    "season": 0
  },
  {
    "n": "Gucci Bloom",
    "c": "Women",
    "s": "100 ml",
    "p": 10800,
    "i": "images/concept-8.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 1,
    "strength": 1,
    "season": 1
  },
  {
    "n": "Tom Ford Oud Wood",
    "c": "Unisex",
    "s": "100 ml",
    "p": 24000,
    "i": "images/concept-9.jpg",
    "a": "#45314b",
    "b": "#160d19",
    "fam": 0,
    "strength": 2,
    "season": 2
  }
];
const INR = n => '₹' + Number(n).toLocaleString('en-IN');
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Image source: live Wikimedia Commons photo lookup. Only files whose metadata match the brand + model are accepted.
// Not every commercial fragrance has a freely licensed product photo. Never show a different brand as a substitute.
function bottle(a,b,attar){return `<svg viewBox="0 0 220 230" aria-hidden="true"><defs><linearGradient id="g${Math.random().toString(36).slice(2)}" x1="0" x2="1"><stop stop-color="${b}"/><stop offset=".5" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect x="90" y="18" width="40" height="37" rx="5" fill="#d4ad63"/><rect x="82" y="50" width="56" height="13" rx="3" fill="#b38c4e"/><rect x="48" y="65" width="124" height="150" rx="${attar?32:12}" fill="${a}" stroke="#dfbc78" stroke-width="3"/><rect x="64" y="112" width="92" height="52" fill="#130d18" stroke="#e4c486"/><text x="110" y="143" text-anchor="middle" font-size="17" fill="#e4c486" font-family="serif">JP</text></svg>`}
function card(x){const idx=PRODUCTS.indexOf(x);return `<article class="card"><div class="ph">${x.i?`<img src="${esc(x.i)}" alt="${esc(x.n)} product image (some premium visuals are illustrative)" loading="lazy">`:`<div class="budget-visual"><span>JP PERFUME GALLERY</span><strong>${esc(x.n)}</strong><em>Photo not verified</em></div>`}</div><div class="b"><h3>${esc(x.n)}</h3><small>${esc(x.c)} · ${esc(x.s)}</small><div class="price">Approx. ${INR(x.p)}</div><p class="price-note">Market estimate · confirm JP offer</p><div class="product-actions"><button type="button" class="btn add-to-bag" data-id="${idx}">Add to Bag</button><a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/918847400800?text=${encodeURIComponent('Hi JP Perfume Gallery, please confirm availability and your selling price for '+x.n+' ('+x.s+'). Approximate listed price: '+INR(x.p))}">Enquire on WhatsApp ↗</a></div></div></article>`}

function loadMatchingPhotos(){}
