const sandalLookImage = './assets/photo_2026-09-27_16-26-10.jpg'
const sandal = './assets/photo_2026-09-27_16-25-40.jpg'
const bag = './assets/photo_2026-09-27_17-06-57.jpg'
const categoryMeta = [
  { slug: 'womens-wear', label: "Women's Wear", blurb: 'Modern silhouettes, statement layers, and effortless comfort for everyday confidence.', hero: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2070' },
  { slug: 'mens-wear', label: "Men's Wear", blurb: 'Refined essentials, tailored layers, and elevated basics built for everyday wear.', hero: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070' },
  { slug: 'cosmetics', label: 'Cosmetics', blurb: 'Glow-first essentials with premium formulation and skin-loving texture.', hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070' },
  { slug: 'food', label: 'Food', blurb: 'Crafted bites, fresh ingredients, and comforting meals made to feel indulgent.', hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070' },
  { slug: 'gadgets', label: 'Gadgets', blurb: 'Smart tools and everyday tech that keep life moving beautifully.', hero: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070' },
]

let products = [
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
  { id: 20, image: bag, name: 'Smart Home Speaker', price: 195, category: 'Gadgets', slug: 'gadgets', tag: 'New', description: 'Compact speaker with voice assistant support, room filling sound, and seamless pairing.' },
]

const services = [
  { id: 1, icon: '✦', title: 'Hair Styling', description: 'Braids, silk press, frontal installs, and custom wigs. Our stylists specialize in natural and protective styles.', price: 80, duration: '2-4 hrs', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069' },
  { id: 2, icon: '◌', title: 'Makeup Artistry', description: 'Soft glam, bridal, editorial looks. Using premium products for melanin-rich skin tones.', price: 60, duration: '45-90 min', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080' },
  { id: 3, icon: '◇', title: 'Personal Styling', description: '1-on-1 wardrobe consultation, personal shopping, and event styling. Find your signature look.', price: 150, duration: '2 hrs', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070' },
  { id: 4, icon: '✧', title: 'Facial Treatments', description: 'Deep cleanse, dermaplaning, and glow facials. Customized for your skin type and concerns.', price: 85, duration: '60 min', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070' },
  { id: 5, icon: '○', title: 'Nail Artistry', description: 'Acrylics, gel, and intricate designs. We are obsessed with detail and long-lasting sets.', price: 40, duration: '1-2 hrs', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070' },
  { id: 6, icon: '▧', title: 'Full Glam Package', description: 'Hair + makeup + styling for photoshoots, weddings, and special events. Red carpet ready.', price: 350, duration: '4-5 hrs', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070' },
]

let looks = [
  { image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920', title: 'Urban Goddess', description: 'Ankara meets streetwear' },
  { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070', title: 'Minimal Muse', description: 'Clean lines, bold energy' },
  { image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070', title: 'Evening Royale', description: 'Silk and statement jewelry' },
  { image: sandalLookImage, title: 'Woven Slides', description: 'Forest-green slides in sizes 40 & 41' },
  { image: sandal, title: 'Bag', description: 'Styled bag' },
  { image: bag, title: 'Red bag', description: 'Nice Material bag', height: '200px', width: '200px' },
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
  adminNumber: '',
  adminPassword: '',
  adminData: null,
  adminProducts: [],
  adminSettings: null,
}

const money = value => `GHS${Number(value).toFixed(2)}`
const saveCart = () => localStorage.setItem(cartStorageKey, JSON.stringify(state.cart))
const cartTotal = () => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
const cartCount = () => state.cart.reduce((total, item) => total + item.quantity, 0)

function getCurrentRoute() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  if (pathname === '/login') return 'login'
  if (pathname === '/signup') return 'signup'
  if (pathname === '/admin/login') return 'admin-login'
  if (pathname === '/admin/dashboard') return 'admin-dashboard'
  if (pathname === '/admin' || pathname.startsWith('/admin/')) return 'admin-blocked'
  const hash = window.location.hash.replace(/^#\/?/, '') || 'home'
  return hash === 'top' ? 'home' : hash
}

function navigateTo(path) {
  window.history.pushState({}, '', path)
  renderApp()
}

function cloneTemplate(id) {
  const source = document.getElementById(id)
  if (!source) throw new Error(`Missing page template: ${id}`)
  return source.content.cloneNode(true)
}

function renderFooter(home = false) {
  const footer = cloneTemplate(home ? 'home-footer-template' : 'site-footer-template').firstElementChild
  if (home) {
    const links = footer.querySelector('[data-footer-categories]')
    categoryMeta.forEach(category => {
      const link = document.createElement('a')
      link.href = `#/${category.slug}`
      link.textContent = category.label
      links.append(link)
    })
  }
  return footer
}

function pageWithHeader(page, route, home = false) {
  const output = document.createDocumentFragment()
  output.append(renderNav(route), page, renderFooter(home))
  return output
}

function productCards(categoryFilter = null) {
  const list = Array.isArray(categoryFilter)
    ? categoryFilter
    : categoryFilter
      ? products.filter(product => product.slug === categoryFilter)
      : products
  const cards = document.createDocumentFragment()
  list.forEach(product => {
    const card = cloneTemplate('product-card-template').firstElementChild
    card.dataset.product = product.id
    card.querySelector('img').src = product.image
    card.querySelector('img').alt = product.name
    card.querySelector('.product-category').textContent = product.category
    card.querySelector('h3').textContent = product.name
    card.querySelector('strong').textContent = money(product.price)
    if (product.tag) {
      const tag = card.querySelector('.tag')
      tag.textContent = product.tag
      tag.hidden = false
    }
    cards.append(card)
  })
  return cards
}

function renderNav(currentRoute = getCurrentRoute()) {
  const isHome = currentRoute === 'home'
  const fragment = cloneTemplate(isHome ? 'home-header-template' : 'standard-header-template')
  const header = fragment.querySelector('.site-header')
  header.id = 'site-header'
  header.querySelectorAll('[data-route-link]').forEach(link => {
    if (link.dataset.routeLink === currentRoute) link.classList.add('active')
  })
  const categories = header.querySelector('[data-category-list]')
  categoryMeta.forEach(category => {
    const link = cloneTemplate('category-link-template').firstElementChild
    link.href = `#/${category.slug}`
    link.textContent = category.label
    if (currentRoute === category.slug) link.classList.add('active')
    categories.append(link)
  })
  header.querySelectorAll('#cart-count').forEach(count => { count.textContent = cartCount() })
  header.querySelectorAll('[data-action="theme"]').forEach(button => { button.textContent = state.theme === 'dark' ? '☼' : '◐' })
  return fragment
}

function renderHomePage() {
  const categoryIcons = ['✦', '◇', '◌', '✧', '⌘']
  const page = cloneTemplate('home-page-template').firstElementChild
  const categoryStrip = page.querySelector('.home-category-strip')
  categoryMeta.forEach((category, index) => {
    const card = cloneTemplate('home-category-template').firstElementChild
    card.href = `#/${category.slug}`
    card.querySelector('.home-category-icon').textContent = categoryIcons[index]
    card.querySelector('strong').textContent = category.label
    categoryStrip.append(card)
  })
  const viewAll = cloneTemplate('home-category-template').firstElementChild
  viewAll.classList.add('home-category-all')
  viewAll.href = '#collections'
  viewAll.querySelector('.home-category-icon').textContent = '＋'
  viewAll.querySelector('strong').textContent = 'View all'
  categoryStrip.append(viewAll)
  page.querySelector('#product-track').append(productCards(products.slice(0, 5)))
  const promoCards = [
    { slug: 'womens-wear', eyebrow: 'The style edit', title: 'Find your signature look', link: 'Explore fashion' },
    { slug: 'cosmetics', eyebrow: 'A little self-care', title: 'Make room for your glow', link: 'Explore beauty' },
    { slug: 'gadgets', eyebrow: 'Everyday upgrades', title: 'Good things, thoughtfully picked', link: 'Explore gadgets' },
  ]
  promoCards.forEach(card => {
    const promo = cloneTemplate('promo-card-template').firstElementChild
    promo.href = `#/${card.slug}`
    promo.style.setProperty('--promo-image', `url("${categoryMeta.find(item => item.slug === card.slug).hero}")`)
    promo.querySelector('span').textContent = card.eyebrow
    promo.querySelector('h3').textContent = card.title
    promo.querySelector('strong').textContent = `${card.link} →`
    page.querySelector('.home-promos').append(promo)
  })
  const serviceGrid = page.querySelector('.service-grid')
  services.forEach(service => {
    const card = cloneTemplate('service-card-template').firstElementChild
    card.querySelector('img').src = service.image
    card.querySelector('img').alt = service.title
    card.querySelector('.service-image span').textContent = service.icon
    card.querySelector('.service-copy h3').textContent = service.title
    card.querySelector('.service-copy p').textContent = service.description
    card.querySelector('.service-meta strong').textContent = `From ${money(service.price)}`
    card.querySelector('.service-meta span').textContent = service.duration
    card.querySelector('[data-service]').dataset.service = service.id
    serviceGrid.append(card)
  })
  if (looks.length) {
    const lookbook = cloneTemplate('lookbook-template').firstElementChild
    page.querySelector('[data-lookbook-slot]').append(lookbook)
    state.lookIndex = 0
    const look = looks[0]
    lookbook.querySelector('#lookbook-image').src = look.image
    lookbook.querySelector('#lookbook-image').alt = look.title
    lookbook.querySelector('#lookbook-title').textContent = look.title
    lookbook.querySelector('#lookbook-description').textContent = look.description
    lookbook.querySelector('.lookbook-copy .eyebrow').textContent = `01 / ${String(looks.length).padStart(2, '0')}`
  }
  return pageWithHeader(page, 'home', true)
}

function renderCartPage() {
  const page = cloneTemplate('cart-page-template').firstElementChild
  const panel = page.querySelector('.cart-items-panel')
  if (state.cart.length) {
    state.cart.forEach(item => {
      const row = cloneTemplate('cart-page-item-template').firstElementChild
      row.querySelector('img').src = item.image
      row.querySelector('img').alt = item.name
      row.querySelector('h3').textContent = item.name
      row.querySelector('p').textContent = item.category
      row.querySelector('[data-price]').textContent = money(item.price)
      row.querySelector('.quantity span').textContent = item.quantity
      row.querySelectorAll('[data-change]').forEach(button => {
        button.dataset.quantity = item.cartItemId
      })
      row.querySelector('.remove').dataset.remove = item.cartItemId
      panel.append(row)
    })
  } else {
    panel.append(cloneTemplate('empty-cart-template'))
  }
  page.querySelector('[data-subtotal]').textContent = money(cartTotal())
  page.querySelector('[data-total]').textContent = money(cartTotal())
  page.querySelector('[data-action="checkout"]').disabled = !state.cart.length
  return pageWithHeader(page, 'cart')
}

function renderCategoryPage(slug) {
  const category = categoryMeta.find(item => item.slug === slug) || categoryMeta[0]
  const items = products.filter(product => product.slug === slug)
  const page = cloneTemplate('category-page-template').firstElementChild
  const hero = page.querySelector('.category-hero')
  hero.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.68), rgba(0,0,0,.15)), url("${category.hero}")`
  page.querySelector('[data-category-name]').textContent = category.label
  page.querySelector('[data-category-blurb]').textContent = category.blurb
  page.querySelector('[data-category-browse]').textContent = `Browse ${category.label}`
  page.querySelector('[data-category-heading]').textContent = category.label
  const grid = page.querySelector('.category-grid')
  grid.append(productCards(items))
  grid.querySelectorAll('.product-card').forEach(card => card.classList.add('category-product'))
  return pageWithHeader(page, slug)
}

function renderItemRequestPage() {
  return cloneTemplate('item-request-page-template')
}

function renderAdminPage() {
  if (state.adminData) return renderAdminDashboard(state.adminData)

  const isCodeStep = Boolean(state.adminNumber)
  const page = cloneTemplate('admin-login-template').firstElementChild
  const fields = page.querySelector('[data-admin-fields]')
  const form = page.querySelector('form')
  form.dataset.form = isCodeStep ? 'admin-verify' : 'admin-request'
  page.querySelector('[data-admin-instructions]').textContent = isCodeStep
    ? `Enter the code sent to ${state.adminNumber}.`
    : 'Enter your authorized number and admin password. A one-time code is required every time.'
  page.querySelector('form button').textContent = isCodeStep ? 'Verify code' : 'Continue to OTP'
  if (isCodeStep) {
    fields.append(cloneTemplate('admin-field-code-template'))
    page.querySelector('[data-action="admin-change-number"]').hidden = false
  } else {
    fields.append(cloneTemplate('admin-field-number-template'), cloneTemplate('admin-field-password-template'))
    page.querySelector('[data-action="admin-change-number"]').hidden = true
  }
  return page
}

function renderAdminDashboard(data) {
  const rows = [...data.itemRequests.map(item => ({ type: 'Item request', customer: item.name, item: item.productName, status: item.status, date: item.createdAt || item.date })), ...data.itemOrders.map(item => ({ id: item._id, trackingId: item.trackingId || item._id, kind: 'item', type: 'Order', customer: item.customerName, item: item.itemName, status: item.status, date: item.createdAt })), ...data.serviceOrders.map(item => ({ id: item._id, trackingId: item.trackingId || item._id, kind: 'service', type: 'Service', customer: item.clientName, item: item.serviceName, status: item.status, date: item.createdAt || item.date }))]
  const settings = state.adminSettings || { accent: '#e94f70', paper: '#f7f3f1', ink: '#171516', looks: [] }
  const statuses = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
  const page = cloneTemplate('admin-dashboard-template').firstElementChild
  page.querySelector('[data-request-count]').textContent = data.itemRequests.length
  page.querySelector('[data-order-count]').textContent = data.itemOrders.length
  page.querySelector('[data-service-count]').textContent = data.serviceOrders.length
  const orderRows = page.querySelector('[data-order-rows]')
  rows.forEach(row => {
    const line = cloneTemplate('admin-order-row-template').firstElementChild
    line.querySelector('[data-tracking-number]').textContent = row.trackingId || ''
    line.querySelector('[data-type]').textContent = row.type
    line.querySelector('[data-customer]').textContent = row.customer || 'Unknown'
    line.querySelector('[data-item]').textContent = row.item || ''
    const statusCell = line.querySelector('[data-status]')
    if (row.id) {
      const select = document.createElement('select')
      select.dataset.trackingId = row.id
      select.dataset.trackingKind = row.kind
      statuses.forEach(status => {
        const option = document.createElement('option')
        option.value = status
        option.textContent = status
        option.selected = String(row.status).toLowerCase() === status.toLowerCase()
        select.append(option)
      })
      statusCell.append(select)
    } else statusCell.textContent = row.status || 'Pending'
    line.querySelector('[data-date]').textContent = row.date ? new Date(row.date).toLocaleDateString() : '-'
    orderRows.append(line)
  })
  if (!rows.length) {
    const emptyRow = document.createElement('tr')
    const emptyCell = document.createElement('td')
    emptyCell.colSpan = 6
    emptyCell.textContent = 'No records yet.'
    emptyRow.append(emptyCell)
    orderRows.append(emptyRow)
  }
  page.querySelectorAll('[data-category-options]').forEach(select => {
    categoryMeta.forEach(category => {
      const option = document.createElement('option')
      option.value = category.slug
      option.textContent = category.label
      select.append(option)
    })
  })
  page.querySelector('[data-product-count]').textContent = `${state.adminProducts.length} products`
  const productList = page.querySelector('.admin-product-list')
  state.adminProducts.forEach(product => {
    const form = cloneTemplate('admin-product-edit-template').firstElementChild
    form.dataset.productId = product._id
    form.querySelector('img').src = product.image || ''
    form.querySelector('img').alt = product.name
    form.elements.name.value = product.name
    form.elements.price.value = Number(product.price)
    form.elements.quantity.value = product.quantity
    form.elements.description.value = product.description || ''
    const select = form.elements.category
    categoryMeta.forEach(category => {
      const option = document.createElement('option')
      option.value = category.slug
      option.textContent = category.label
      option.selected = product.slug === category.slug
      select.append(option)
    })
    form.querySelector('button[type="button"]').dataset.productDelete = product._id
    productList.append(form)
  })
  if (!state.adminProducts.length) {
    const empty = cloneTemplate('admin-empty-row-template').firstElementChild
    empty.textContent = 'No saved products yet.'
    productList.append(empty)
  }
  page.querySelector('[data-look-count]').textContent = `${(settings.looks || []).length} photos`
  const lookList = page.querySelector('.admin-look-list')
  ;(settings.looks || []).forEach(look => {
    const row = cloneTemplate('admin-look-row-template').firstElementChild
    row.querySelector('img').src = look.image
    row.querySelector('img').alt = look.title
    row.querySelector('span').textContent = look.title
    row.querySelector('button').dataset.lookDelete = look._id
    lookList.append(row)
  })
  if (!(settings.looks || []).length) {
    const empty = cloneTemplate('admin-empty-row-template').firstElementChild
    empty.textContent = 'No lookbook photos.'
    lookList.append(empty)
  }
  page.querySelector('[name="accent"]').value = settings.accent
  page.querySelector('[name="paper"]').value = settings.paper
  page.querySelector('[name="ink"]').value = settings.ink
  return page
}

function renderAuthPage(mode = 'login') {
  const isLogin = mode === 'login'
  const page = cloneTemplate('auth-page-template').firstElementChild
  page.querySelector('[data-auth-heading]').textContent = isLogin ? 'Welcome back.' : 'Create your account.'
  page.querySelector('[data-auth-description]').textContent = isLogin
    ? 'Sign in to continue shopping.'
    : 'Join Berry’s Closet to keep your details ready for checkout.'
  const form = page.querySelector('form')
  form.dataset.form = isLogin ? 'login' : 'signup'
  form.elements.name.hidden = isLogin
  form.elements.number.hidden = isLogin
  form.elements.name.required = !isLogin
  form.elements.number.required = !isLogin
  form.elements.password.autocomplete = isLogin ? 'current-password' : 'new-password'
  form.querySelector('button').textContent = isLogin ? 'Log in' : 'Sign up'
  const switchLink = page.querySelector('.auth-switch')
  switchLink.href = `/${isLogin ? 'signup' : 'login'}`
  switchLink.textContent = isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'
  return page
}

function renderApp() {
  document.documentElement.className = state.theme
  const route = getCurrentRoute()
  const app = document.querySelector('#app')
  if (route.startsWith('admin-')) {
    app.replaceChildren(cloneTemplate('checking-admin-template'))
    getAdminSession().then(async result => {
      if (!result.success || result.role !== 'admin') {
        state.adminData = null
        if (route !== 'admin-login') state.adminNumber = ''
        if (window.location.pathname !== '/admin/login') window.history.replaceState({}, '', '/admin/login')
        app.replaceChildren(renderAdminPage())
        return
      }
      if (route !== 'admin-dashboard') window.history.replaceState({}, '', '/admin/dashboard')
      await loadAdminData()
      app.replaceChildren(renderAdminDashboard(state.adminData))
    }).catch(error => {
      if (route !== 'admin-login') window.history.replaceState({}, '', '/admin/login')
      app.replaceChildren(renderAdminPage())
      const message = document.querySelector('#admin-message')
      if (message) message.textContent = error.message
    })
    updateCartCount()
    return
  }
  if (route === 'admin') {
    navigateTo('/admin/dashboard')
    return
  }
  const page = route === 'home' || route === 'collections' || route === 'lookbook' || route === 'services' ? 'home' : route === 'consultation' ? 'item-request' : route === 'admin' ? 'admin' : route === 'login' || route === 'signup' ? route : route === 'cart' ? 'cart' : route

  const view = page === 'home' ? renderHomePage() : page === 'cart' ? renderCartPage() : page === 'item-request' ? renderItemRequestPage() : page === 'admin' ? renderAdminPage() : page === 'login' ? renderAuthPage('login') : page === 'signup' ? renderAuthPage('signup') : renderCategoryPage(page)
  app.replaceChildren(view)
  updateCartCount()
}

function updateCartCount() { const count = document.querySelector('#cart-count'); if (count) count.textContent = cartCount() }
function openModal(content, className = '') {
  const shell = cloneTemplate('modal-shell-template')
  const modal = shell.querySelector('.modal')
  if (className) modal.classList.add(className)
  modal.querySelector('.modal-slot').append(content)
  document.querySelector('#modal-root').replaceChildren(shell)
  document.body.classList.add('modal-open')
}
function closeModal() { document.querySelector('#modal-root').replaceChildren(); document.body.classList.remove('modal-open'); state.modal = null }
function addToCart(product) { state.cart.push({ ...product, cartItemId: crypto.randomUUID(), quantity: 1 }); saveCart(); updateCartCount(); closeModal(); notify(`${product.name} added to your bag.`) }
function notify(message) { const note = document.createElement('div'); note.className = 'toast'; note.textContent = message; document.body.append(note); setTimeout(() => note.remove(), 2800) }

function showProduct(product) {
  state.modal = 'product'
  const content = cloneTemplate('product-modal-template').firstElementChild
  content.querySelector('img').src = product.image
  content.querySelector('img').alt = product.name
  content.querySelector('.eyebrow').textContent = product.category
  content.querySelector('h2').textContent = product.name
  content.querySelector('.price').textContent = money(product.price)
  content.querySelector('p').textContent = product.description
  content.querySelector('[data-add-product]').dataset.addProduct = product.id
  openModal(content, 'wide-modal')
}
function showService(service) {
  state.modal = 'service'
  const content = cloneTemplate('service-modal-template').firstElementChild
  content.querySelector('.eyebrow').textContent = `${service.title} / ${money(service.price)}`
  content.querySelector('p').textContent = service.description
  content.querySelector('form').elements.serviceName.value = service.title
  content.querySelector('form').elements.servicePrice.value = service.price
  openModal(content)
}
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('Could not read file'))
    reader.readAsDataURL(file)
  })
}

function showConsultation() { openModal(cloneTemplate('consultation-modal-template')) }

function showCart() {
  state.modal = 'cart'
  const content = cloneTemplate('cart-modal-template').firstElementChild
  content.querySelector('[data-cart-label]').textContent = `Your selection / ${cartCount()} items`
  const items = content.querySelector('[data-cart-items]')
  state.cart.forEach(item => {
    const row = cloneTemplate('cart-modal-item-template').firstElementChild
    row.querySelector('img').src = item.image
    row.querySelector('img').alt = item.name
    row.querySelector('strong').textContent = item.name
    row.querySelector('small').textContent = `${money(item.price)} / ${item.category}`
    row.querySelector('.quantity span').textContent = item.quantity
    row.querySelectorAll('[data-change]').forEach(button => { button.dataset.quantity = item.cartItemId })
    row.querySelector('.remove').dataset.remove = item.cartItemId
    items.append(row)
  })
  if (state.cart.length) content.querySelector('[data-cart-total]').textContent = money(cartTotal())
  else {
    items.append(cloneTemplate('cart-modal-empty-template'))
    content.querySelector('.cart-total').hidden = true
    content.querySelector('[data-action="checkout"]').hidden = true
  }
  openModal(content, 'cart-modal-shell')
}
function showCheckout() {
  const content = cloneTemplate('checkout-modal-template').firstElementChild
  content.querySelector('form button').textContent = `Place order · ${money(cartTotal())}`
  openModal(content)
}

async function postOrder(endpoint, payload) { const response = await fetch(`/api/order/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); return response.json() }
async function postAuth(endpoint, payload) { const response = await fetch(`/api/auth/${endpoint}`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); return response.json().catch(() => ({ success: false, message: 'Could not reach the authentication service' })) }
async function postAdmin(endpoint, payload = {}, method = 'POST') { const response = await fetch(`/api/admin/${endpoint}`, { method, credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); return response.json().catch(() => ({ success: false, message: 'Could not reach the admin service' })) }
async function getAdminDashboard() { const response = await fetch('/api/admin/dashboard', { credentials: 'include' }); return response.json() }
async function getAdminSession() { const response = await fetch('/api/admin/session', { credentials: 'include' }); return response.json().catch(() => ({ success: false, message: 'Admin authentication service is unavailable' })) }
async function loadPublicContent() {
  try {
    const [settingsResponse, productsResponse] = await Promise.all([fetch('/api/admin/public-settings'), fetch('/api/product/data')])
    const settingsResult = await settingsResponse.json()
    const productsResult = await productsResponse.json()
    if (settingsResult.success && settingsResult.settings) {
      document.documentElement.style.setProperty('--accent', settingsResult.settings.accent)
      document.documentElement.style.setProperty('--paper', settingsResult.settings.paper)
      document.documentElement.style.setProperty('--ink', settingsResult.settings.ink)
      if (settingsResult.settings.lookbookManaged) {
        looks = settingsResult.settings.looks || []
        state.lookIndex = 0
      }
    }
    if (productsResult.success && settingsResult.settings?.catalogManaged) {
      products = productsResult.products.map(product => ({ ...product, id: product._id, price: Number(product.price), category: product.category || "Women's Wear", slug: product.slug || 'womens-wear' }))
    }
    if (settingsResult.success && (getCurrentRoute() === 'home' || categoryMeta.some(category => category.slug === getCurrentRoute()))) renderApp()
  } catch (error) {
    console.error('Could not load published catalog settings:', error)
  }
}

async function loadAdminData() {
  const initialized = await postAdmin('storefront/initialize', { products, looks })
  if (!initialized.success) throw new Error(initialized.message)
  const [dashboard, productsResult, settingsResult] = await Promise.all([getAdminDashboard(), fetch('/api/admin/products', { credentials: 'include' }).then(response => response.json()), fetch('/api/admin/site-settings', { credentials: 'include' }).then(response => response.json())])
  if (!dashboard.success) throw new Error(dashboard.message)
  if (!productsResult.success) throw new Error(productsResult.message)
  if (!settingsResult.success) throw new Error(settingsResult.message)
  state.adminData = dashboard
  state.adminProducts = productsResult.products
  state.adminSettings = settingsResult.settings
}

async function refreshAdmin() { await loadAdminData(); renderApp() }

function changeLook(direction) { if (!looks.length) return; state.lookIndex = (state.lookIndex + direction + looks.length) % looks.length; const look = looks[state.lookIndex]; document.querySelector('#lookbook-image').src = look.image; document.querySelector('#lookbook-image').alt = look.title; document.querySelector('#lookbook-title').textContent = look.title; document.querySelector('#lookbook-description').textContent = look.description; document.querySelector('.lookbook-copy .eyebrow').textContent = `${String(state.lookIndex + 1).padStart(2, '0')} / ${String(looks.length).padStart(2, '0')}` }

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
  const navToggle = event.target.closest('[data-action="nav-toggle"]')
  if (navToggle) {
    const header = document.querySelector('.site-header')
    if (header) {
      const isOpen = header.classList.toggle('nav-open')
      navToggle.setAttribute('aria-expanded', String(isOpen))
    }
    return
  }
  if (!event.target.closest('.category-menu') && !event.target.closest('.menu-toggle')) {
    const header = document.querySelector('.site-header')
    if (header) {
      header.classList.remove('nav-open')
      const toggle = header.querySelector('[data-action="nav-toggle"]')
      if (toggle) toggle.setAttribute('aria-expanded', 'false')
    }
  }
  if (productId) showProduct(products.find(product => String(product.id) === String(productId)))
  if (event.target.closest('[data-add-product]')) addToCart(products.find(product => String(product.id) === String(event.target.closest('[data-add-product]').dataset.addProduct)))
  if (event.target.closest('[data-service]')) showService(services.find(service => service.id === Number(event.target.closest('[data-service]').dataset.service)))
  if (event.target.closest('[data-quantity]')) { const button = event.target.closest('[data-quantity]'); const item = state.cart.find(entry => entry.cartItemId === button.dataset.quantity); item.quantity += Number(button.dataset.change); if (item.quantity < 1) state.cart = state.cart.filter(entry => entry.cartItemId !== item.cartItemId); saveCart(); if (isCartRoute) renderApp(); else showCart(); updateCartCount() }
  if (event.target.closest('[data-remove]')) { state.cart = state.cart.filter(item => item.cartItemId !== event.target.closest('[data-remove]').dataset.remove); saveCart(); if (isCartRoute) renderApp(); else showCart(); updateCartCount() }
  if (action === 'theme') { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('theme', state.theme); renderApp() }
  if (action === 'cart') { window.location.hash = '#/cart'; renderApp() }
  if (action === 'close-modal') closeModal()
  if (action === 'look-prev') changeLook(-1)
  if (action === 'look-next') changeLook(1)
  if (action === 'consultation') showConsultation()
  if (action === 'admin-change-number') { state.adminNumber = ''; state.adminData = null; renderApp() }
  if (action === 'admin-logout') { postAdmin('logout').finally(() => { state.adminNumber = ''; state.adminPassword = ''; state.adminData = null; state.adminProducts = []; state.adminSettings = null; renderApp() }) }
  if (event.target.closest('[data-product-delete]')) {
    if (!window.confirm('Delete this product and its uploaded photo?')) return
    fetch('/api/product/delete-product', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId: event.target.closest('[data-product-delete]').dataset.productDelete }) }).then(response => response.json()).then(async result => { if (!result.success) throw new Error(result.message); await refreshAdmin(); await loadPublicContent(); notify('Product and uploaded photo deleted.') }).catch(error => notify(error.message))
  }
  if (event.target.closest('[data-look-delete]')) {
    if (!window.confirm('Delete this lookbook photo?')) return
    postAdmin('looks', { lookId: event.target.closest('[data-look-delete]').dataset.lookDelete }, 'DELETE').then(async result => { if (!result.success) throw new Error(result.message); await refreshAdmin(); await loadPublicContent(); renderApp() }).catch(error => notify(error.message))
  }
  if (event.target.closest('[data-clear-looks]')) {
    if (!window.confirm('Delete every lookbook photo? This cannot be undone.')) return
    postAdmin('looks/clear', {}, 'DELETE').then(async result => { if (!result.success) throw new Error(result.message); await refreshAdmin(); await loadPublicContent(); renderApp() }).catch(error => notify(error.message))
  }
  if (event.target.closest('[data-clear-products]')) {
    if (!window.confirm('Delete every product and uploaded product photo? This cannot be undone.')) return
    postAdmin('products/clear', {}, 'DELETE').then(async result => { if (!result.success) throw new Error(result.message); await refreshAdmin(); await loadPublicContent(); notify('All catalog products and uploaded photos deleted.') }).catch(error => notify(error.message))
  }
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
    if (form.dataset.form === 'site-search') {
      const query = String(data.query || '').trim().toLowerCase()
      const featuredProducts = query
        ? products.filter(product => [product.name, product.category, product.description].some(value => String(value || '').toLowerCase().includes(query)))
        : products.slice(0, 5)
      const productTrack = document.querySelector('#product-track')
      const title = document.querySelector('#featured-title')
      const eyebrow = document.querySelector('#featured-eyebrow')
      if (productTrack && title && eyebrow) {
        productTrack.replaceChildren(featuredProducts.length
          ? productCards(featuredProducts)
          : cloneTemplate('empty-search-template'))
        title.textContent = query ? 'Search results' : 'Top picks for you'
        eyebrow.textContent = query ? `${featuredProducts.length} items found` : 'Picked for you'
        document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    if (form.dataset.form === 'login' || form.dataset.form === 'signup') {
      const result = await postAuth(form.dataset.form === 'login' ? 'login' : 'signup', data)
      if (!result.success) throw new Error(result.message)
      navigateTo('/')
      notify(form.dataset.form === 'login' ? 'Welcome back.' : 'Your account has been created.')
      return
    }
    if (form.dataset.form === 'admin-request') {
      const result = await postAdmin('request-code', { number: data.number, password: data.password })
      if (!result.success) throw new Error(result.message)
      state.adminNumber = data.number
      state.adminPassword = ''
      if (getCurrentRoute() !== 'admin') renderApp()
      else renderApp()
      return
    }
    if (form.dataset.form === 'admin-verify') {
      const result = await postAdmin('verify-code', { number: state.adminNumber, code: data.code })
      if (!result.success) throw new Error(result.message)
      await loadAdminData()
      navigateTo('/admin/dashboard')
      return
    }
    if (form.dataset.form === 'admin-product') {
      const image = await fileToDataUrl(form.elements.photo.files[0])
      const category = categoryMeta.find(item => item.slug === data.category)
      const result = await fetch('/api/product/create-product', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.name, price: Number(data.price), quantity: Number(data.quantity), image, description: data.description, category: category.label, slug: category.slug }) }).then(response => response.json())
      if (!result.success) throw new Error(result.message)
      form.reset(); await refreshAdmin(); await loadPublicContent(); notify('Product added.')
      return
    }
    if (form.dataset.form === 'admin-product-update') {
      const category = categoryMeta.find(item => item.slug === data.category)
      const productImage = form.elements.photo.files[0] ? await fileToDataUrl(form.elements.photo.files[0]) : undefined
      const result = await fetch('/api/product/update-product', { method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId: form.dataset.productId, name: data.name, price: Number(data.price), quantity: Number(data.quantity), description: data.description, category: category.label, slug: category.slug, productImage }) }).then(response => response.json())
      if (!result.success) throw new Error(result.message)
      await refreshAdmin(); await loadPublicContent(); notify('Product updated.')
      return
    }
    if (form.dataset.form === 'admin-look') {
      const image = await fileToDataUrl(form.elements.photo.files[0])
      const result = await postAdmin('looks', { title: data.title, description: data.description, image })
      if (!result.success) throw new Error(result.message)
      form.reset(); await refreshAdmin(); await loadPublicContent(); notify('Lookbook photo added.')
      return
    }
    if (form.dataset.form === 'admin-colors') {
      const result = await postAdmin('site-settings', data, 'PUT')
      if (!result.success) throw new Error(result.message)
      state.adminSettings = result.settings
      await loadPublicContent(); renderApp(); notify('Website colors saved.')
      return
    }
    if (form.dataset.form === 'track-order') {
      const result = await fetch(`/api/admin/track/${encodeURIComponent(data.trackingId)}`).then(response => response.json())
      const output = document.querySelector('#tracking-result')
      if (!result.success) throw new Error(result.message)
      output.textContent = `${result.order.itemName} · ${result.order.status} · ${result.order.trackingId || data.trackingId}`
      return
    }
    if (form.dataset.form === 'checkout') {
      const result = await postOrder('create-order', { orderData: { customer: data, items: state.cart, total: cartTotal(), paymentRef: 'pending', status: 'pending' } })
      if (!result.success) throw new Error(result.message || 'Could not place order')
      state.cart = []; saveCart(); updateCartCount(); closeModal(); notify(`Order placed. Tracking number: ${result.trackingId}`); return
    }
    if (form.dataset.form === 'service') {
      const result = await postOrder('create-orderA', { formData: data })
      if (!result.success) throw new Error(result.message || 'Could not request booking')
      closeModal(); notify(`Booking requested. Tracking number: ${result.trackingId}`); return
    }
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
  } catch (error) {
    if (form.dataset.form === 'admin-request' || form.dataset.form === 'admin-verify' || form.dataset.form === 'login' || form.dataset.form === 'signup') {
      const message = document.querySelector('#admin-message')
      const authMessage = document.querySelector('#auth-message')
      if (message) message.textContent = error.message
      if (authMessage) authMessage.textContent = error.message
      notify(error.message)
      return
    }
    if (form.dataset.form.startsWith('admin-')) { const message = document.querySelector('#admin-message'); if (message) message.textContent = error.message; else notify(error.message); return }
    if (form.dataset.form === 'track-order') { const output = document.querySelector('#tracking-result'); if (output) output.textContent = error.message; return }
    console.error(error); closeModal(); notify('Request saved. We will contact you shortly.')
  }
})

document.addEventListener('change', async event => {
  const selector = event.target.closest('[data-tracking-id]')
  if (!selector) return
  try {
    const result = await postAdmin('tracking', { orderId: selector.dataset.trackingId, type: selector.dataset.trackingKind, status: selector.value }, 'PATCH')
    if (!result.success) throw new Error(result.message)
    notify(`Tracking ${result.order.trackingId || result.order._id} updated.`)
  } catch (error) {
    notify(error.message)
    await refreshAdmin()
  }
})

const renderRouteOnLocationChange = () => {
  if (window.location.pathname !== '/' || !window.location.hash || window.location.hash.startsWith('#/')) renderApp()
}
window.addEventListener('hashchange', renderRouteOnLocationChange)
window.addEventListener('popstate', renderRouteOnLocationChange)

renderApp()
loadPublicContent()
window.addEventListener('scroll', () => document.querySelector('#site-header')?.classList.toggle('scrolled', window.scrollY > 24))
