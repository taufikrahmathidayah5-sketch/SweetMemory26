const PRODUCTS = [
  {"id": "coffee-series-1", "cat": "coffee", "img": "assets/images/coffee/coffee-series-1.jpg", "name": "Coffee Series – Menu 1", "price": "Rp 13.000 – 18.000", "desc": "Pilihan kopi dingin dengan topping khas Sweet Memory.", "items": [["Pandan Coffee", "Rp 15.000"], ["Avocado Coffee", "Rp 14.000"], ["Mocca Latte", "Rp 15.000"], ["Caramel Macchiato", "Rp 18.000"], ["Cappucino Ice", "Rp 13.000"]], "contain": 1},
  {"id": "coffee-series-2", "cat": "coffee", "img": "assets/images/coffee/coffee-series-2.jpg", "name": "Coffee Series – Menu 2", "price": "Rp 13.000 – 17.000", "desc": "Kopi susu, latte, dan racikan spesial dalam cup dingin.", "items": [["Sweet Memories", "Rp 15.000"], ["Caramel Latte", "Rp 15.000"], ["Butterflish", "Rp 17.000"], ["Kopi Susu", "Rp 13.000"], ["Spanish Latte", "Rp 16.000"]], "contain": 1},
  {"id": "non-coffee-series", "cat": "coffee", "img": "assets/images/coffee/non-coffee-series.jpg", "name": "Non-Coffee Series", "price": "Rp 10.000 – 15.000", "desc": "Minuman segar tanpa kopi: smoothies, susu, dan creamy.", "items": [["Mango Smoothies", "Rp 10.000"], ["Vanilla Lotus", "Rp 15.000"], ["Matcha Creamy", "Rp 15.000"], ["Strawberry Milk", "Rp 10.000"], ["Taro", "Rp 10.000"], ["Red Velvet", "Rp 10.000"], ["Milo Ice", "Rp 10.000"]], "contain": 1},
  {"id": "coldbrew", "cat": "coffee", "img": "assets/images/coffee/coldbrew.jpg", "name": "Coldbrew Coffee", "price": "Rp 20.000 – 80.000", "desc": "Cold brew kemasan botol, tersedia ukuran 250 ml dan 1 liter.", "items": [["Coldbrew 250 ml", "Rp 20.000"], ["Coldbrew 1 Liter", "Rp 80.000"]], "contain": 1},
  {"id": "croissant", "cat": "pastry", "img": "assets/images/pastry/croissant.jpg", "name": "Croissant", "price": "Rp 10.000", "desc": "Croissant renyah berlapis, tersedia isi keju dan cokelat.", "items": [["Croissant Keju", "Rp 10.000"], ["Croissant Coklat", "Rp 10.000"]], "contain": 0},
  {"id": "lecker-holland", "cat": "pastry", "img": "assets/images/pastry/lecker-holland.jpg", "name": "Lecker Holland", "price": "Rp 20.000", "desc": "Pastry pipih dengan anyaman adonan, kismis, dan taburan almond.", "items": null, "contain": 0},
  {"id": "roti-tawar", "cat": "pastry", "img": "assets/images/pastry/roti-tawar.jpg", "name": "Roti Tawar", "price": "Rp 10.000", "desc": "Roti tawar lembut, pilihan Tawar Pandan dan Tawar Susu.", "items": [["Tawar Pandan", "Rp 10.000"], ["Tawar Susu", "Rp 10.000"]], "contain": 0},
  {"id": "roti-sobek", "cat": "pastry", "img": "assets/images/pastry/roti-sobek.jpg", "name": "Roti Sobek", "price": "Rp 10.000", "desc": "Roti sobek dalam kotak, pilihan keju, cokelat, atau mix.", "items": [["Roti Sobek Keju", "Rp 10.000"], ["Roti Sobek Coklat", "Rp 10.000"], ["Roti Sobek Mix", "Rp 10.000"]], "contain": 0},
  {"id": "roti-kasur", "cat": "pastry", "img": "assets/images/pastry/roti-kasur.jpg", "name": "Roti Kasur", "price": "Rp 10.000", "desc": "Roti kasur dengan banyak pilihan rasa: coklat, keju, pandan, caramel, milky, srikaya, pisang, vanila, dan mix.", "items": null, "contain": 0},
  {"id": "roti-manis", "cat": "pastry", "img": "assets/images/pastry/roti-manis.jpg", "name": "Roti Manis", "price": "Rp 5.000", "desc": "Roti manis dengan 12 pilihan isi, semuanya satu harga.", "items": [["Coklat", "Rp 5.000"], ["Caramel", "Rp 5.000"], ["Milky", "Rp 5.000"], ["Strawberry", "Rp 5.000"], ["Keju", "Rp 5.000"], ["Srikaya", "Rp 5.000"], ["Mocha", "Rp 5.000"], ["Vanila", "Rp 5.000"], ["Kacang", "Rp 5.000"], ["Kacang Ijo", "Rp 5.000"], ["Durian", "Rp 5.000"], ["Pandan", "Rp 5.000"]], "contain": 1},
  {"id": "pricelist-roti", "cat": "pastry", "img": "assets/images/pastry/pricelist-roti.jpg", "name": "Roti Isi & Roti Pisang", "price": "Rp 5.000 – 8.000", "desc": "Roti kemasan dengan isi sosis, abon, pizza mini, dan pisang.", "items": [["Roti Sosis", "Rp 5.000"], ["Roti Abon", "Rp 8.000"], ["Pizza Mini", "Rp 8.000"], ["Roti Pisang Keju", "Rp 5.000"], ["Roti Pisang Coklat", "Rp 5.000"]], "contain": 1},
  {"id": "lotus-biscoff-slice", "cat": "cake", "img": "assets/images/cake/lotus-biscoff-slice.jpg", "name": "Lotus Biscoff Slice", "price": "Rp 20.000 / slice", "desc": "Cake berlapis krim dengan saus karamel dan biskuit Lotus di atasnya.", "items": null, "contain": 0},
  {"id": "pandan-melt-cake", "cat": "cake", "img": "assets/images/cake/pandan-melt-cake.jpg", "name": "Pandan Melt Cake", "price": "Rp 15.000 / slice", "desc": "Cake pandan berlapis krim putih dengan lelehan topping hijau.", "items": null, "contain": 0},
  {"id": "beng-beng-hazelnut-cake", "cat": "cake", "img": "assets/images/cake/beng-beng-hazelnut-cake.jpg", "name": "Beng-Beng Hazelnut Cake", "price": "Rp 20.000 / slice", "desc": "Cake cokelat dengan krim hazelnut dan taburan almond.", "items": null, "contain": 0},
  {"id": "chocolate-mousse-slice", "cat": "cake", "img": "assets/images/cake/chocolate-mousse-slice.jpg", "name": "Chocolate Mousse Slice", "price": "Rp 20.000 / slice", "desc": "Irisan mousse cokelat dengan ceri dan taburan kacang.", "items": null, "contain": 0},
  {"id": "red-velvet-creamcheese", "cat": "cake", "img": "assets/images/cake/red-velvet-creamcheese.jpg", "name": "Red Velvet Creamcheese", "price": "Rp 25.000 / slice", "desc": "Red velvet dengan lapisan krim keju putih.", "items": null, "contain": 0},
  {"id": "red-velvet-cheesecake", "cat": "cake", "img": "assets/images/cake/red-velvet-cheesecake.jpg", "name": "Red Velvet Cheesecake", "price": "Rp 25.000", "desc": "Red velvet berlapis krim keju dengan topping ceri.", "items": null, "contain": 0},
  {"id": "melt-cheese-brownies", "cat": "cake", "img": "assets/images/cake/melt-cheese-brownies.jpg", "name": "Melt Cheese Brownies", "price": "Rp 12.000", "desc": "Brownies dengan topping cokelat leleh dan kacang.", "items": null, "contain": 0},
  {"id": "fudgy-brownies", "cat": "cake", "img": "assets/images/cake/fudgy-brownies.jpg", "name": "Fudgy Brownies", "price": "Rp 35.000", "desc": "Brownies fudgy potong dadu dalam kotak, dengan taburan almond.", "items": null, "contain": 0},
  {"id": "chocolatte-brownies", "cat": "cake", "img": "assets/images/cake/chocolatte-brownies.jpg", "name": "Chocolatte Brownies", "price": "Rp 55.000", "desc": "Brownies cokelat dalam kotak hadiah dengan beragam topping.", "items": null, "contain": 0},
  {"id": "choco-moist-cake", "cat": "cake", "img": "assets/images/cake/choco-moist-cake.jpg", "name": "Choco Moist Cake", "price": "Rp 25.000", "desc": "Moist cake cokelat dalam kemasan isi 4.", "items": null, "contain": 0},
  {"id": "mini-lotus-melt-cake", "cat": "cake", "img": "assets/images/cake/mini-lotus-melt-cake.jpg", "name": "Mini Lotus Melt Cake", "price": "Rp 15.000", "desc": "Lotus melt cake ukuran mini dengan saus karamel.", "items": null, "contain": 0},
  {"id": "lotus-melt-cake", "cat": "cake", "img": "assets/images/cake/lotus-melt-cake.jpg", "name": "Lotus Melt Cake", "price": "Rp 35.000", "desc": "Lotus melt cake ukuran panjang dengan taburan biskuit Lotus.", "items": null, "contain": 0},
  {"id": "blackforest-peanut-cake", "cat": "cake", "img": "assets/images/cake/blackforest-peanut-cake.jpg", "name": "Blackforest Peanut Cake", "price": "Rp 15.000", "desc": "Cake blackforest dengan taburan kacang.", "items": null, "contain": 0},
  {"id": "vanilla-cheese-cake", "cat": "cake", "img": "assets/images/cake/vanilla-cheese-cake.jpg", "name": "Vanilla Cheese Cake & Vanilla Nogat Meses", "price": "Rp 25.000 – 30.000", "desc": "Dua pilihan cake vanila: topping keju parut dan nogat meses.", "items": [["Vanilla Cheese Cake", "Rp 30.000"], ["Vanilla Nogat Meses", "Rp 25.000"]], "contain": 0},
  {"id": "brownies-bites", "cat": "cake", "img": "assets/images/dessert/brownies-bites.jpg", "name": "Brownies Bites", "price": "Rp 15.000", "desc": "Brownies potong kecil dalam cup kertas kraft.", "items": null, "contain": 0},
  {"id": "brownies-cup", "cat": "cake", "img": "assets/images/dessert/brownies-cup.jpg", "name": "Brownies Cup", "price": "Rp 50.000", "desc": "Brownies cup aneka topping dalam kotak.", "items": null, "contain": 0},
  {"id": "dessert-series", "cat": "cake", "img": "assets/images/dessert/dessert-series.jpg", "name": "Dessert Series", "price": "Rp 15.000", "desc": "Dessert cup dengan tiga pilihan rasa.", "items": [["Red Milk Dessert", "Rp 15.000"], ["Mango Panacotta Dessert", "Rp 15.000"], ["Moist Dessert", "Rp 15.000"]], "contain": 0},
  {"id": "choco-jelly-cake", "cat": "cake", "img": "assets/images/dessert/choco-jelly-cake.jpg", "name": "Choco Jelly Cake & Puding Regal SM", "price": "Rp 8.000", "desc": "Dessert cup cokelat dan puding regal.", "items": [["Choco Jelly Cake", "Rp 8.000"], ["Puding Regal SM", "Rp 8.000"]], "contain": 0},
  {"id": "cheesecup", "cat": "cake", "img": "assets/images/dessert/cheesecup.jpg", "name": "Cheesecup", "price": "Rp 15.000", "desc": "Cheesecake dalam cup dengan beragam topping.", "items": null, "contain": 0},
  {"id": "puding", "cat": "other", "img": "assets/images/other/puding.jpg", "name": "Puding", "price": "Rp 5.000", "desc": "Puding cup dengan 9 pilihan rasa.", "items": [["Red Velvet", "Rp 5.000"], ["Strawberry", "Rp 5.000"], ["Taro", "Rp 5.000"], ["Oreo", "Rp 5.000"], ["Milo", "Rp 5.000"], ["Cappuccino", "Rp 5.000"], ["Mangga", "Rp 5.000"], ["Fla Susu", "Rp 5.000"], ["Jeruk", "Rp 5.000"]], "contain": 1},
  {"id": "puding-hias", "cat": "other", "img": "assets/images/other/puding-hias.jpg", "name": "Puding Hias", "price": "Rp 50.000", "desc": "Puding hias isi 9 dalam satu kotak, lengkap dengan botol minuman.", "items": null, "contain": 0},
  {"id": "milkbun-coklat", "cat": "other", "img": "assets/images/other/milkbun-coklat.jpg", "name": "Milkbun Coklat", "price": "Rp 20.000", "desc": "Milk bun cokelat dalam kemasan kotak.", "items": null, "contain": 0},
  {"id": "milkbun", "cat": "other", "img": "assets/images/other/milkbun.jpg", "name": "Milkbun", "price": "Rp 20.000", "desc": "Milk bun lembut dalam kemasan kotak.", "items": null, "contain": 0},
  {"id": "es-teler-sm", "cat": "other", "img": "assets/images/other/es-teler-sm.jpg", "name": "Es Teler SM", "price": "Rp 20.000", "desc": "Es teler dalam gelas sundae. Menu baru.", "items": null, "contain": 0},
  {"id": "ayam-goreng", "cat": "other", "img": "assets/images/other/ayam-goreng.jpg", "name": "Ayam Goreng Lengkuas & Ayam Goreng SM", "price": "Rp 25.000", "desc": "Nasi dengan ayam goreng, sambal, dan sup. Menu baru.", "items": [["Ayam Goreng Lengkuas", "Rp 25.000"], ["Ayam Goreng SM", "Rp 25.000"]], "contain": 0},
  {"id": "special-menu", "cat": "other", "img": "assets/images/other/special-menu.jpg", "name": "Special Menu", "price": "Rp 15.000 – 25.000", "desc": "Menu nasi dan mie spesial. Harga lain pada poster tidak terbaca penuh.", "items": [["Mie Nyemek", "Rp 15.000"], ["Nasi Goreng Seafood", "Rp 25.000"]], "contain": 0},
  {"id": "makanan-cepat-saji", "cat": "other", "img": "assets/images/other/makanan-cepat-saji.jpg", "name": "Makanan Cepat Saji", "price": "Rp 10.000 – 25.000", "desc": "Aneka mie, camilan, dan gorengan.", "items": [["Mie Rebus/Goreng", "Rp 15.000"], ["Mie Goreng Jumbo", "Rp 20.000"], ["Ubi Goreng", "Rp 10.000"], ["Krubak", "Rp 20.000"], ["Pisang Series (goreng / nugget)", "Rp 15.000"], ["Mie Kering", "Rp 25.000"]], "contain": 1}
];

/* ---------- Pengaturan ---------- */
const WA_NUMBER = '6282348518906'; // 0823-4851-8906
const CATS = { coffee: 'Coffee', pastry: 'Pastry', cake: 'Cake & Dessert', other: 'Other Menu' };

/* ---------- Elemen ---------- */
const $ = id => document.getElementById(id);
const grid = $('grid'), dlg = $('dlg');
let cat = 'all', query = '';

/* ---------- Katalog ---------- */
function haystack(p) {
  return [p.name, p.desc, CATS[p.cat], ...(p.items || []).map(i => i[0])].join(' ').toLowerCase();
}

function render() {
  const list = PRODUCTS.filter(p => (cat === 'all' || p.cat === cat) && haystack(p).includes(query));
  grid.innerHTML = '';
  list.forEach((p, i) => {
    const b = document.createElement('button');
    b.className = 'card';
    b.style.animationDelay = Math.min(i, 12) * 30 + 'ms';
    b.innerHTML = `<div class="ph"><img class="${p.contain ? 'fit' : ''}" src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"></div>
      <div class="info"><h3>${p.name}</h3><p>${p.desc}</p><span class="price">${p.price}</span></div>`;
    b.addEventListener('click', () => openProduct(p));
    grid.appendChild(b);
  });
  $('empty').hidden = list.length > 0;
  $('count').textContent = list.length + ' menu ditampilkan';
}

document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
  c.classList.add('on');
  cat = c.dataset.cat;
  render();
}));
$('q').addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); render(); });

/* ---------- Detail produk ---------- */
function openProduct(p) {
  $('d-img').src = p.img;
  $('d-img').alt = p.name;
  $('d-cat').textContent = CATS[p.cat];
  $('d-name').textContent = p.name;
  $('d-desc').textContent = p.desc;
  $('d-price').textContent = p.price;
  const ul = $('d-list');
  ul.innerHTML = (p.items || []).map(i => `<li><span>${i[0]}</span><b>${i[1]}</b></li>`).join('');
  ul.hidden = !(p.items && p.items.length);
  const msg = `Halo Sweet Memory, saya ingin memesan: ${p.name} (${p.price}).`;
  $('d-wa').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  dlg.showModal();
}
$('close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

/* ---------- Navigasi, Back to Top ---------- */
const nav = $('nav'), links = $('links'), burger = $('burger'), toTopBtn = $('top');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); burger.setAttribute('aria-expanded', false);
}));
function onScroll() {
  nav.classList.toggle('solid', scrollY > 30);
  toTopBtn.hidden = scrollY < 600;
}
addEventListener('scroll', onScroll, { passive: true });
toTopBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

render();
onScroll();
