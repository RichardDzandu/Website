import './index.css'

const categoryMeta = [
  { slug: 'womens-wear', label: "Women's Wear", blurb: 'Modern silhouettes, statement layers, and effortless comfort for everyday confidence.', hero: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2070' },
  { slug: 'mens-wear', label: "Men's Wear", blurb: 'Refined essentials, tailored layers, and elevated basics built for everyday wear.', hero: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070' },
  { slug: 'cosmetics', label: 'Cosmetics', blurb: 'Glow-first essentials with premium formulation and skin-loving texture.', hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070' },
  { slug: 'food', label: 'Food', blurb: 'Crafted bites, fresh ingredients, and comforting meals made to feel indulgent.', hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070' },
  { slug: 'gadgets', label: 'Gadgets', blurb: 'Smart tools and everyday tech that keep life moving beautifully.', hero: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070' },
]

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887', name: 'Silk Wrap Dress', price: 220, category: "Women's Wear", slug: 'womens-wear', tag: 'Bestseller', description: 'Flowing silk wrap dress with adjustable tie. Perfect for day to night transitions. Ethically sourced from Ghanaian artisans.' },
  { id: 2, image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974', name: 'Kente Blazer Set', price: 340, category: "Women's Wear", slug: 'womens-wear', tag: 'New', description: 'Modern Kente print blazer with matching wide-leg trousers. Power dressing redefined.' },
  { id: 3, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080', name: 'Glow Facial Package', price: 85, category: 'Cosmetics', slug: 'cosmetics', description: '60-minute deep cleanse facial with dermaplaning and LED therapy. Leave with glass skin.' },
  { id: 4, image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070', name: 'Braided Crown Style', price: 120, category: 'Cosmetics', slug: 'cosmetics', tag: 'Trending', description: 'Intricate braided crown with gold cuffs. Lasts 6-8 weeks with proper care.' },
  { id: 5, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070', name: 'Evening Gown', price: 450, category: "Women's Wear", slug: 'womens-wear', description: 'Floor-length silk gown with thigh slit. Red carpet approved.' },
  { id: 6, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920', name: 'Ankara Jumpsuit', price: 180, category: "Women's Wear", slug: 'womens-wear', tag: 'Limited', description: 'Bold Ankara print jumpsuit with wide legs and cinched waist.' },
  { id: 7, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070', name: 'Bridal Glam Package', price: 300, category: 'Cosmetics', slug: 'cosmetics', description: 'Full bridal makeup + hair styling. Includes trial session.' },
  { id: 8, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070', name: 'Acrylic Nail Set', price: 60, category: 'Cosmetics', slug: 'cosmetics', description: 'Custom acrylic set with nail art. 3-week guarantee.' },
  { id: 9, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2070', name: 'Tailored Linen Shirt', price: 210, category: "Men's Wear", slug: 'mens-wear', tag: 'New', description: 'Crisp linen shirt in a relaxed fit, built for warmer days and polished evenings.' },
  { id: 10, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070', name: 'Classic Wool Suit', price: 420, category: "Men's Wear", slug: 'mens-wear', description: 'Structured wool suit with a softly tapered fit. Ready for formal and custom styling.' },
  { id: 11, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2070', name: 'Leather Weekend Jacket', price: 360, category: "Men's Wear", slug: 'mens-wear', tag: 'Trending', description: 'Sleek leather jacket with relaxed shoulders and modern utility detailing.' },
  { id: 12, image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070', name: 'Casual Knit Polo', price: 180, category: "Men's Wear", slug: 'mens-wear', description: 'Lightweight knit polo in premium cotton blend for elevated everyday layering.' },
  { id: 13, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070', name: 'Signature Jollof Box', price: 95, category: 'Food', slug: 'food', tag: 'Chef pick', description: 'Comforting Ghanaian jollof paired with grilled chicken, plantain, and fresh salad.' },
  { id: 14, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070', name: 'Grilled Chicken Feast', price: 110, category: 'Food', slug: 'food', description: 'Marinated grilled chicken, roasted potatoes, and sautéed greens for a more indulgent feast.' },
  { id: 15, image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070', name: 'Wellness Smoothie Set', price: 55, category: 'Food', slug: 'food', description: 'Fresh fruit smoothie bundles with immune-boosting ingredients and vibrant flavor.' },
  { id: 16, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070', name: 'Chef’s Daily Platter', price: 130, category: 'Food', slug: 'food', tag: 'Popular', description: 'A rotating platter of seasonal favorites curated for sharing and late dinners.' },
  { id: 17, image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=2070', name: 'Noise-Cancel Earbuds', price: 240, category: 'Gadgets', slug: 'gadgets', tag: 'Hot', description: 'Wireless earbuds with deep bass, long battery, and immersive noise canceling.' },
  { id: 18, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2070', name: 'Smart Fitness Watch', price: 310, category: 'Gadgets', slug: 'gadgets', description: 'Track workouts, health, notifications, and sleep with premium built-in sensors.' },
  { id: 19, image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070', name: 'Pocket Projector', price: 420, category: 'Gadgets', slug: 'gadgets', description: 'Movie-night-ready projector with wireless casting for home enjoyment and travel.' },
  { id: 20, image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2070', name: 'Smart Home Speaker', price: 195, category: 'Gadgets', slug: 'gadgets', tag: 'New', description: 'Compact speaker with voice assistant support, room filling sound, and seamless pairing.' },
]

const services = [
  { id: 1, icon: '✦', title: 'Hair Styling', description: 'Braids, silk press, frontal installs, and custom wigs. Our stylists specialize in natural and protective styles.', price: 80, duration: '2-4 hrs', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069' },
  { id: 2, icon: '◌', title: 'Makeup Artistry', description: 'Soft glam, bridal, editorial looks. Using premium products for melanin-rich skin tones.', price: 60, duration: '45-90 min', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080' },
  { id: 3, icon: '◇', title: 'Personal Styling', description: '1-on-1 wardrobe consultation, personal shopping, and event styling. Find your signature look.', price: 150, duration: '2 hrs', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070' },
  { id: 4, icon: '✧', title: 'Facial Treatments', description: 'Deep cleanse, dermaplaning, and glow facials. Customized for your skin type and concerns.', price: 85, duration: '60 min', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070' },
  { id: 5, icon: '○', title: 'Nail Artistry', description: 'Acrylics, gel, and intricate designs. We are obsessed with detail and long-lasting sets.', price: 40, duration: '1-2 hrs', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070' },
  { id: 6, icon: '▧', title: 'Full Glam Package', description: 'Hair + makeup + styling for photoshoots, weddings, and special events. Red carpet ready.', price: 350, duration: '4-5 hrs', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070' },
]

const looks = [
  { image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920', title: 'Urban Goddess', description: 'Ankara meets streetwear' },
  { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070', title: 'Minimal Muse', description: 'Clean lines, bold energy' },
  { image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070', title: 'Evening Royale', description: 'Silk and statement jewelry' },
]

const cartStorageKey = 'berrys-closet-cart'
const savedCart = localStorage.getItem(cartStorageKey) || localStorage.getItem('aura-cart') || '[]'

const state = {
  cart: JSON.parse(savedCart),
  theme: localStorage.getItem('theme') || 'dark',
  lookIndex: 0,
  product: null,
  service: null,
  modal: null,
  checkout: false,
}

const money = value => `GHS${Number(value).toFixed(2)}`
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]))
const saveCart = () => localStorage.setItem(cartStorageKey, JSON.stringify(state.cart))
const cartTotal = () => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
const cartCount = () => state.cart.reduce((total, item) => total + item.quantity, 0)

function getCurrentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '') || 'home'
  return hash === 'top' ? 'home' : hash
}

function productCards(categoryFilter = null) {
  const list = categoryFilter ? products.filter(product => product.slug === categoryFilter) : products
  return list.map(product => `
    <article class="product-card" data-product="${product.id}">
      <div class="product-image"><img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">${product.tag ? `<span class="tag">${product.tag}</span>` : ''}</div>
      <div class="product-copy"><span class="eyebrow">${product.category}</span><h3>${product.name}</h3><strong>${money(product.price)}</strong></div>
    </article>`).join('')
}

function renderNav(currentRoute = getCurrentRoute()) {
  const navItems = [
    { href: '#/', label: 'Home', slug: 'home' },
    ...categoryMeta.map(category => ({ href: `#/${category.slug}`, label: category.label, slug: category.slug })),
    { href: '#consultation', label: 'Item Request', slug: 'consultation' },
  ]

  return `
    <header class="site-header" id="site-header">
      <a class="brand" href="#top">Berry's <span>Closet</span></a>
      <nav>
        ${navItems.map(item => `<a href="${item.href}" class="nav-link ${currentRoute === item.slug ? 'active' : ''}">${item.label}</a>`).join('')}
      </nav>
      <div class="header-actions">
        <button class="icon-button" data-action="theme" aria-label="Toggle theme">${state.theme === 'dark' ? '☼' : '◐'}</button>
        <button class="cart-button" data-action="cart" aria-label="Open shopping cart">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h2l2.3 9.1a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 7H7"/><circle cx="10" cy="18.5" r="1.2"/><circle cx="17" cy="18.5" r="1.2"/></svg>
          <b id="cart-count">${cartCount()}</b>
        </button>
      </div>
    </header>
  `
}

function renderHomePage() {
  return `
    ${renderNav('home')}
    <main id="top">
      <section class="hero"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" alt="Fashion editorial"><div class="hero-shade"></div><div class="hero-copy"><span class="eyebrow">New season / Accra</span><h1>Define your<br><em>signature look.</em></h1><p>Curated pieces and bespoke styling for the modern muse. Accra to the world.</p><div class="button-row"><a class="button button-accent" href="#/womens-wear">Shop collections</a><a class="button button-line" href="#consultation">Item request</a></div></div></section>
      <section class="section collections" id="collections"><div class="section-heading"><div><span class="eyebrow">The edit / 20 pieces</span><h2>Collections</h2></div><div class="scroll-actions"><button class="icon-button" data-action="scroll-products" data-direction="left" aria-label="Scroll products left">←</button><button class="icon-button" data-action="scroll-products" data-direction="right" aria-label="Scroll products right">→</button></div></div><div class="product-track" id="product-track">${productCards()}</div></section>
      <section class="section lookbook" id="lookbook"><div class="section-heading center"><div><span class="eyebrow">A visual diary</span><h2>Lookbook</h2></div></div><div class="lookbook-frame"><img id="lookbook-image" src="${looks[0].image}" alt="${looks[0].title}"><div class="lookbook-shade"></div><div class="lookbook-copy"><span class="eyebrow">0${state.lookIndex + 1} / 0${looks.length}</span><h3 id="lookbook-title">${looks[0].title}</h3><p id="lookbook-description">${looks[0].description}</p></div><button class="carousel-button prev" data-action="look-prev" aria-label="Previous look">←</button><button class="carousel-button next" data-action="look-next" aria-label="Next look">→</button></div></section>
      <section class="section services" id="services"><div class="section-heading center"><div><span class="eyebrow">What we do</span><h2>Rituals of beauty</h2><p>From everyday glow-ups to special occasions, we make your getting-ready ritual feel like an event.</p></div></div><div class="service-grid">${services.map(service => `<article class="service-card"><div class="service-image"><img src="${service.image}" alt="${service.title}" loading="lazy"><span>${service.icon}</span></div><div class="service-copy"><h3>${service.title}</h3><p>${service.description}</p><div class="service-meta"><strong>From ${money(service.price)}</strong><span>${service.duration}</span></div><button class="button button-dark" data-service="${service.id}">Book now</button></div></article>`).join('')}</div></section>
      <section class="section consultation" id="consultation"><div class="consultation-panel"><span class="eyebrow">Item request</span><h2>Request an item</h2><p class="intro">Share the item you want and attach a photo so we know exactly what you need.</p><div class="detail-list"><div><b>01</b><span><strong>Your name</strong>Tell us who the request is from.</span></div><div><b>02</b><span><strong>Product name</strong>Write the exact item name or description.</span></div><div><b>03</b><span><strong>Image upload</strong>Upload a clear photo of the item for reference.</span></div></div><button class="button button-accent" data-action="consultation">Submit request</button></div></section>
      <section class="newsletter"><div><span class="eyebrow">The Berry's list</span><h2>Good things, selectively sent.</h2><p>First access to drops, styling tips, and exclusive events in Accra.</p></div><form id="newsletter-form"><input type="email" name="email" placeholder="Your email address" required><button class="button button-dark">Subscribe</button></form></section>
    </main>
    <footer>
      <div><a class="brand" href="#top">Berry's <span>Closet</span></a><p>Accra-based. Global style.</p></div>
      <div><b>Shop</b><a href="#/womens-wear">Women's Wear</a><a href="#/mens-wear">Men's Wear</a><a href="#/cosmetics">Cosmetics</a></div>
      <div><b>More</b><a href="#/food">Food</a><a href="#/gadgets">Gadgets</a><a href="#consultation">Item Request</a></div>
      <small>© 2026 Berry's Closet. All rights reserved.</small>
    </footer>
    <div id="modal-root"></div>
  `
}

function renderCartPage() {
  const items = state.cart

  return `
    ${renderNav('cart')}
    <main class="cart-page" id="top">
      <div class="cart-shell">
        <div class="section-heading cart-header">
          <div>
            <span class="eyebrow">Your basket</span>
            <h2>Shopping cart</h2>
          </div>
        </div>

        <div class="cart-grid">
          <section class="cart-items-panel">
            ${items.length ? items.map(item => `
              <article class="cart-page-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-page-copy">
                  <div>
                    <h3>${item.name}</h3>
                    <p>${item.category}</p>
                  </div>
                  <strong>${money(item.price)}</strong>
                </div>
                <div class="cart-page-controls">
                  <div class="quantity">
                    <button data-quantity="${item.cartItemId}" data-change="-1">−</button>
                    <span>${item.quantity}</span>
                    <button data-quantity="${item.cartItemId}" data-change="1">+</button>
                  </div>
                  <button class="remove" data-remove="${item.cartItemId}">Remove</button>
                </div>
              </article>
            `).join('') : `<div class="empty-cart"><p>Your cart is empty. Add a few items from the collection.</p><a class="button button-accent" href="#/womens-wear">Continue shopping</a></div>`}
          </section>

          <aside class="cart-summary">
            <span class="eyebrow">Summary</span>
            <h3>Order total</h3>
            <div class="cart-total-row"><span>Subtotal</span><strong>${money(cartTotal())}</strong></div>
            <div class="cart-total-row"><span>Delivery</span><strong>GHS0.00</strong></div>
            <div class="cart-total-row total"><span>Total</span><strong>${money(cartTotal())}</strong></div>
            <button class="button button-accent" data-action="checkout" ${items.length ? '' : 'disabled'}>Checkout</button>
          </aside>
        </div>
      </div>
    </main>

    <footer>
      <div><a class="brand" href="#top">Berry's <span>Closet</span></a><p>Accra-based. Global style.</p></div>
      <div><b>Shop</b><a href="#/womens-wear">Women's Wear</a><a href="#/mens-wear">Men's Wear</a><a href="#/cosmetics">Cosmetics</a></div>
      <div><b>More</b><a href="#/food">Food</a><a href="#/gadgets">Gadgets</a><a href="#consultation">Item Request</a></div>
      <small>© 2026 Berry's Closet. All rights reserved.</small>
    </footer>
    <div id="modal-root"></div>
  `
}

function renderCategoryPage(slug) {
  const category = categoryMeta.find(item => item.slug === slug) || categoryMeta[0]
  const items = products.filter(product => product.slug === slug)

  return `
    ${renderNav(slug)}
    <main class="category-page" id="top">
      <section class="category-hero" style="background-image: linear-gradient(90deg, rgba(0,0,0,.68), rgba(0,0,0,.15)), url('${category.hero}');">
        <div class="category-hero-copy">
          <span class="eyebrow">Curated edit</span>
          <h1>${category.label}</h1>
          <p>${category.blurb}</p>
          <div class="button-row">
            <a class="button button-accent" href="#collections">Browse ${category.label}</a>
            <a class="button button-line" href="#consultation">Item request</a>
          </div>
        </div>
      </section>

      <section class="section category-content">
        <div class="section-heading center">
          <div>
            <span class="eyebrow">Featured picks</span>
            <h2>${category.label}</h2>
          </div>
        </div>
        <div class="category-grid">${items.map(product => `
          <article class="product-card category-product" data-product="${product.id}">
            <div class="product-image"><img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">${product.tag ? `<span class="tag">${product.tag}</span>` : ''}</div>
            <div class="product-copy"><span class="eyebrow">${product.category}</span><h3>${product.name}</h3><strong>${money(product.price)}</strong></div>
          </article>
        `).join('')}</div>
      </section>
    </main>
    <footer>
      <div><a class="brand" href="#top">Berry's <span>Closet</span></a><p>Accra-based. Global style.</p></div>
      <div><b>Shop</b><a href="#/womens-wear">Women's Wear</a><a href="#/mens-wear">Men's Wear</a><a href="#/cosmetics">Cosmetics</a></div>
      <div><b>More</b><a href="#/food">Food</a><a href="#/gadgets">Gadgets</a><a href="#consultation">Item Request</a></div>
      <small>© 2026 Berry's Closet. All rights reserved.</small>
    </footer>
    <div id="modal-root"></div>
  `
}

function renderItemRequestPage() {
  return `
    <main class="item-request-page">
      <form class="booking-form item-request-form" data-form="consultation">
        <input name="name" placeholder="Your full name" required>
        <input name="productName" placeholder="Product name" required>
        <input name="photo" type="file" accept="image/*" required>
        <button class="button button-accent">Send request</button>
      </form>
    </main>
  `
}

function renderApp() {
  document.documentElement.className = state.theme
  const route = getCurrentRoute()
  const page = route === 'home' || route === 'collections' || route === 'lookbook' || route === 'services' ? 'home' : route === 'consultation' ? 'item-request' : route === 'cart' ? 'cart' : route

  document.querySelector('#app').innerHTML = page === 'home' ? renderHomePage() : page === 'cart' ? renderCartPage() : page === 'item-request' ? renderItemRequestPage() : renderCategoryPage(page)
  updateCartCount()
}

function updateCartCount() { const count = document.querySelector('#cart-count'); if (count) count.textContent = cartCount() }
function openModal(content, className = '') { document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-action="close-modal"></div><div class="modal ${className}">${content}</div>`; document.body.classList.add('modal-open') }
function closeModal() { document.querySelector('#modal-root').innerHTML = ''; document.body.classList.remove('modal-open'); state.modal = null }
function addToCart(product) { state.cart.push({ ...product, cartItemId: crypto.randomUUID(), quantity: 1 }); saveCart(); updateCartCount(); closeModal(); notify(`${product.name} added to your bag.`) }
function notify(message) { const note = document.createElement('div'); note.className = 'toast'; note.textContent = message; document.body.append(note); setTimeout(() => note.remove(), 2800) }

function showProduct(product) { state.modal = 'product'; openModal(`<button class="modal-close" data-action="close-modal">×</button><div class="product-modal"><img src="${product.image}" alt="${product.name}"><div class="modal-content"><span class="eyebrow">${product.category}</span><h2>${product.name}</h2><strong class="price">${money(product.price)}</strong><p>${product.description}</p><div class="specs"><span><small>Material</small>Premium finish</span><span><small>Fit</small>Curated style</span></div><button class="button button-accent" data-add-product="${product.id}">Add to bag</button></div></div>`, 'wide-modal') }
function showService(service) { state.modal = 'service'; openModal(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content"><span class="eyebrow">${service.title} / ${money(service.price)}</span><h2>Reserve your session.</h2><p>${service.description}</p><form class="booking-form" data-form="service"><input name="name" placeholder="Full name" required><input name="email" type="email" placeholder="Email" required><input name="phone" placeholder="Phone" required><input name="date" type="date" required><select name="time" required><option value="">Preferred time</option><option>9:00 AM</option><option>11:00 AM</option><option>1:00 PM</option><option>3:00 PM</option><option>5:00 PM</option></select><button class="button button-accent">Request booking</button></form></div>`) }
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('Could not read file'))
    reader.readAsDataURL(file)
  })
}

function showConsultation() { openModal(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content"><span class="eyebrow">Product request</span><h2>Request an item.</h2><p>Share your name, the product you want, and a clear photo to help us find it.</p><form class="booking-form" data-form="consultation"><input name="name" placeholder="Your full name" required><input name="productName" placeholder="Product name" required><input name="photo" type="file" accept="image/*" required><button class="button button-accent">Send request</button></form></div>`) }

function showCart() { state.modal = 'cart'; const items = state.cart.map(item => `<div class="cart-item"><img src="${item.image}" alt="${item.name}"><div><strong>${item.name}</strong><small>${money(item.price)} / ${item.category}</small><div class="quantity"><button data-quantity="${item.cartItemId}" data-change="-1">−</button><span>${item.quantity}</span><button data-quantity="${item.cartItemId}" data-change="1">+</button></div></div><button class="remove" data-remove="${item.cartItemId}">Remove</button></div>`).join(''); openModal(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content cart-modal"><span class="eyebrow">Your selection / ${cartCount()} items</span><h2>Shopping bag.</h2>${items || '<div class="empty">Your bag is waiting for something special.</div>'}${items ? `<div class="cart-total"><span>Subtotal</span><strong>${money(cartTotal())}</strong></div><button class="button button-accent" data-action="checkout">Checkout</button>` : ''}</div>`,'cart-modal-shell') }
function showCheckout() { openModal(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content"><span class="eyebrow">Secure checkout</span><h2>Almost yours.</h2><form class="booking-form" data-form="checkout"><input name="name" placeholder="Full name" required><input name="email" type="email" placeholder="Email" required><input name="phone" placeholder="Phone" required><input name="address" placeholder="Delivery address" required><button class="button button-accent">Place order · ${money(cartTotal())}</button></form></div>`) }

async function postOrder(endpoint, payload) { const response = await fetch(`/api/order/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); return response.json() }

function changeLook(direction) { state.lookIndex = (state.lookIndex + direction + looks.length) % looks.length; const look = looks[state.lookIndex]; document.querySelector('#lookbook-image').src = look.image; document.querySelector('#lookbook-image').alt = look.title; document.querySelector('#lookbook-title').textContent = look.title; document.querySelector('#lookbook-description').textContent = look.description; document.querySelector('.lookbook-copy .eyebrow').textContent = `0${state.lookIndex + 1} / 0${looks.length}` }

document.addEventListener('click', event => {
  const navLink = event.target.closest('a[href^="#/"]')
  if (navLink) {
    const href = navLink.getAttribute('href')
    if (href === '#/' || href === '#consultation' || href === '#top') {
      return
    }
    if (href.startsWith('#/')) {
      event.preventDefault()
      window.location.hash = href
      renderApp()
      return
    }
  }

  const action = event.target.closest('[data-action]')?.dataset.action
  const productId = event.target.closest('[data-product]')?.dataset.product
  const isCartRoute = getCurrentRoute() === 'cart'
  if (productId) showProduct(products.find(product => product.id === Number(productId)))
  if (event.target.closest('[data-add-product]')) addToCart(products.find(product => product.id === Number(event.target.closest('[data-add-product]').dataset.addProduct)))
  if (event.target.closest('[data-service]')) showService(services.find(service => service.id === Number(event.target.closest('[data-service]').dataset.service)))
  if (event.target.closest('[data-quantity]')) { const button = event.target.closest('[data-quantity]'); const item = state.cart.find(entry => entry.cartItemId === button.dataset.quantity); item.quantity += Number(button.dataset.change); if (item.quantity < 1) state.cart = state.cart.filter(entry => entry.cartItemId !== item.cartItemId); saveCart(); if (isCartRoute) renderApp(); else showCart(); updateCartCount() }
  if (event.target.closest('[data-remove]')) { state.cart = state.cart.filter(item => item.cartItemId !== event.target.closest('[data-remove]').dataset.remove); saveCart(); if (isCartRoute) renderApp(); else showCart(); updateCartCount() }
  if (action === 'theme') { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('theme', state.theme); renderApp() }
  if (action === 'cart') { window.location.hash = '#/cart'; renderApp() }
  if (action === 'close-modal') closeModal()
  if (action === 'look-prev') changeLook(-1)
  if (action === 'look-next') changeLook(1)
  if (action === 'consultation') showConsultation()
  if (action === 'checkout') showCheckout()
  if (action === 'scroll-products') document.querySelector('#product-track').scrollBy({ left: event.target.closest('[data-direction]').dataset.direction === 'left' ? -340 : 340, behavior: 'smooth' })
})

document.addEventListener('submit', async event => {
  const form = event.target
  if (form.id === 'newsletter-form') { event.preventDefault(); form.reset(); notify("Welcome to Berry's Closet."); return }
  if (!form.matches('[data-form]')) return
  event.preventDefault()
  const data = Object.fromEntries(new FormData(form))
  try {
    if (form.dataset.form === 'checkout') { await postOrder('create-order', { orderData: { customer: data, items: state.cart, total: cartTotal(), status: 'pending' } }); state.cart = []; saveCart(); updateCartCount() }
    if (form.dataset.form === 'service') await postOrder('create-orderA', { formData: data })
    if (form.dataset.form === 'consultation') {
      const file = form.elements.photo?.files?.[0]
      const photo = file ? await fileToDataUrl(file) : ''
      const payload = {
        orderData: {
          customer: {
            name: data.name,
            email: 'request@berryscloset.com',
            phone: 'Not provided',
            date: new Date().toISOString(),
            productName: data.productName,
            photo,
          },
        },
      }
      await postOrder('consult', payload)
    }
    closeModal(); notify('Thank you. We will be in touch shortly.')
  } catch (error) { console.error(error); closeModal(); notify('Request saved. We will contact you shortly.') }
})

window.addEventListener('hashchange', renderApp)

renderApp()
window.addEventListener('scroll', () => document.querySelector('#site-header')?.classList.toggle('scrolled', window.scrollY > 24))
