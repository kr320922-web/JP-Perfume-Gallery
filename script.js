const PHONE='+91 88474 00800', WA='918847400800';
const pages=[['index.html','Home'],['collection.html','Collection'],['hampers.html','Gift Hampers'],['index.html#quiz','Find Your Fragrance'],['about.html','About & Contact']];
const here=location.pathname.split('/').pop()||'index.html';
const user=JSON.parse(localStorage.getItem('jp_session')||'null');
const currentNav = here==='index.html' && location.hash==='#quiz' ? 'index.html#quiz' : here;
function navLink([href,label]) {return `<a href="${href}" class="${currentNav===href?'on':''}" ${currentNav===href?'aria-current="page"':''}>${label}</a>`}
document.body.insertAdjacentHTML('afterbegin',`<header class="site-header"><div class="wrap header-inner"><a class="logo" href="index.html"><span class="logo-monogram"><span>JP</span></span><span class="logo-text">JP Perfume Gallery<small>Perfumes · Attars · Gift Hampers</small></span></a><nav class="main-nav" aria-label="Main navigation">${pages.map(navLink).join('')}</nav><div class="nav-actions"><a class="search-icon" href="collection.html" aria-label="Browse perfumes"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 6 6"/></svg></a><a class="bag-icon" href="collection.html#bag" aria-label="Shopping bag"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h16l1 13H3L4 8Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/></svg><span id="bag-count">0</span></a>${user?`<a class="login-pill" href="login.html">${user.name.split(' ')[0]}</a><a href="#" id="out" class="logout-link">Log out</a>`:`<a class="login-pill ${here==='login.html'?'on':''}" href="login.html">Login / Sign Up</a>`}</div></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div><b>JP Perfume Gallery</b><br>Radha Swami Rd, Opposite Jain School,<br>Urban Estate Phase II, Ludhiana, Punjab 141015</div><div>Phone: ${PHONE}<br>Call to confirm opening hours<br>Featured visuals are design concepts, not official product photography; prices and stock are unverified</div></div></footer><a class="wa" href="https://wa.me/${WA}?text=Hi%20JP%20Perfume%20Gallery" target="_blank" rel="noopener">WhatsApp us</a>`);
const out=document.getElementById('out');
if(out)out.onclick=e=>{e.preventDefault();localStorage.removeItem('jp_session');location.href='index.html'};
document.querySelectorAll('.ph img,.in img').forEach(i=>i.onerror=()=>i.remove());

// Demo cart is scoped to the signed-in email; not secure authentication.
const cartKey=()=>user?'jp_cart_'+user.email:null;
function getCart(){try{return JSON.parse(localStorage.getItem(cartKey())||'{}')}catch{return {}}}
function setCart(cart){if(cartKey())localStorage.setItem(cartKey(),JSON.stringify(cart));updateCount()}
function updateCount(){const el=document.getElementById('bag-count');if(el)el.textContent=user?Object.values(getCart()).reduce((a,b)=>a+Number(b||0),0):0}
function addToBag(id){if(!user){sessionStorage.setItem('jp_after_login','collection.html#bag');alert('Please log in or sign up before adding a perfume to your bag.');location.href='login.html';return}const cart=getCart();cart[id]=(cart[id]||0)+1;setCart(cart);if(typeof renderBag==='function')renderBag();alert(PRODUCTS[id].n+' added to bag')}
document.addEventListener('click',e=>{const btn=e.target.closest('.add-to-bag');if(btn){addToBag(Number(btn.dataset.id))}});
updateCount();
