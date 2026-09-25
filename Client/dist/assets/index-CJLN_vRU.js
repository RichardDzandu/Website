(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const k=[{slug:"womens-wear",label:"Women's Wear",blurb:"Modern silhouettes, statement layers, and effortless comfort for everyday confidence.",hero:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2070"},{slug:"mens-wear",label:"Men's Wear",blurb:"Refined essentials, tailored layers, and elevated basics built for everyday wear.",hero:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070"},{slug:"cosmetics",label:"Cosmetics",blurb:"Glow-first essentials with premium formulation and skin-loving texture.",hero:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070"},{slug:"food",label:"Food",blurb:"Crafted bites, fresh ingredients, and comforting meals made to feel indulgent.",hero:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070"},{slug:"gadgets",label:"Gadgets",blurb:"Smart tools and everyday tech that keep life moving beautifully.",hero:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"}],p=[{id:1,image:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887",name:"Silk Wrap Dress",price:220,category:"Women's Wear",slug:"womens-wear",tag:"Bestseller",description:"Flowing silk wrap dress with adjustable tie. Perfect for day to night transitions. Ethically sourced from Ghanaian artisans."},{id:2,image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974",name:"Kente Blazer Set",price:340,category:"Women's Wear",slug:"womens-wear",tag:"New",description:"Modern Kente print blazer with matching wide-leg trousers. Power dressing redefined."},{id:3,image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080",name:"Glow Facial Package",price:85,category:"Cosmetics",slug:"cosmetics",description:"60-minute deep cleanse facial with dermaplaning and LED therapy. Leave with glass skin."},{id:4,image:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070",name:"Braided Crown Style",price:120,category:"Cosmetics",slug:"cosmetics",tag:"Trending",description:"Intricate braided crown with gold cuffs. Lasts 6-8 weeks with proper care."},{id:5,image:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",name:"Evening Gown",price:450,category:"Women's Wear",slug:"womens-wear",description:"Floor-length silk gown with thigh slit. Red carpet approved."},{id:6,image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",name:"Ankara Jumpsuit",price:180,category:"Women's Wear",slug:"womens-wear",tag:"Limited",description:"Bold Ankara print jumpsuit with wide legs and cinched waist."},{id:7,image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",name:"Bridal Glam Package",price:300,category:"Cosmetics",slug:"cosmetics",description:"Full bridal makeup + hair styling. Includes trial session."},{id:8,image:"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070",name:"Acrylic Nail Set",price:60,category:"Cosmetics",slug:"cosmetics",description:"Custom acrylic set with nail art. 3-week guarantee."},{id:9,image:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2070",name:"Tailored Linen Shirt",price:210,category:"Men's Wear",slug:"mens-wear",tag:"New",description:"Crisp linen shirt in a relaxed fit, built for warmer days and polished evenings."},{id:10,image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070",name:"Classic Wool Suit",price:420,category:"Men's Wear",slug:"mens-wear",description:"Structured wool suit with a softly tapered fit. Ready for formal and custom styling."},{id:11,image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2070",name:"Leather Weekend Jacket",price:360,category:"Men's Wear",slug:"mens-wear",tag:"Trending",description:"Sleek leather jacket with relaxed shoulders and modern utility detailing."},{id:12,image:"https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070",name:"Casual Knit Polo",price:180,category:"Men's Wear",slug:"mens-wear",description:"Lightweight knit polo in premium cotton blend for elevated everyday layering."},{id:13,image:"https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070",name:"Signature Jollof Box",price:95,category:"Food",slug:"food",tag:"Chef pick",description:"Comforting Ghanaian jollof paired with grilled chicken, plantain, and fresh salad."},{id:14,image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070",name:"Grilled Chicken Feast",price:110,category:"Food",slug:"food",description:"Marinated grilled chicken, roasted potatoes, and sautéed greens for a more indulgent feast."},{id:15,image:"https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070",name:"Wellness Smoothie Set",price:55,category:"Food",slug:"food",description:"Fresh fruit smoothie bundles with immune-boosting ingredients and vibrant flavor."},{id:16,image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",name:"Chef’s Daily Platter",price:130,category:"Food",slug:"food",tag:"Popular",description:"A rotating platter of seasonal favorites curated for sharing and late dinners."},{id:17,image:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=2070",name:"Noise-Cancel Earbuds",price:240,category:"Gadgets",slug:"gadgets",tag:"Hot",description:"Wireless earbuds with deep bass, long battery, and immersive noise canceling."},{id:18,image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2070",name:"Smart Fitness Watch",price:310,category:"Gadgets",slug:"gadgets",description:"Track workouts, health, notifications, and sleep with premium built-in sensors."},{id:19,image:"https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070",name:"Pocket Projector",price:420,category:"Gadgets",slug:"gadgets",description:"Movie-night-ready projector with wireless casting for home enjoyment and travel."},{id:20,image:"https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2070",name:"Smart Home Speaker",price:195,category:"Gadgets",slug:"gadgets",tag:"New",description:"Compact speaker with voice assistant support, room filling sound, and seamless pairing."}],A=[{id:1,icon:"✦",title:"Hair Styling",description:"Braids, silk press, frontal installs, and custom wigs. Our stylists specialize in natural and protective styles.",price:80,duration:"2-4 hrs",image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069"},{id:2,icon:"◌",title:"Makeup Artistry",description:"Soft glam, bridal, editorial looks. Using premium products for melanin-rich skin tones.",price:60,duration:"45-90 min",image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080"},{id:3,icon:"◇",title:"Personal Styling",description:"1-on-1 wardrobe consultation, personal shopping, and event styling. Find your signature look.",price:150,duration:"2 hrs",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070"},{id:4,icon:"✧",title:"Facial Treatments",description:"Deep cleanse, dermaplaning, and glow facials. Customized for your skin type and concerns.",price:85,duration:"60 min",image:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070"},{id:5,icon:"○",title:"Nail Artistry",description:"Acrylics, gel, and intricate designs. We are obsessed with detail and long-lasting sets.",price:40,duration:"1-2 hrs",image:"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070"},{id:6,icon:"▧",title:"Full Glam Package",description:"Hair + makeup + styling for photoshoots, weddings, and special events. Red carpet ready.",price:350,duration:"4-5 hrs",image:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070"}],l=[{image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",title:"Urban Goddess",description:"Ankara meets streetwear"},{image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",title:"Minimal Muse",description:"Clean lines, bold energy"},{image:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",title:"Evening Royale",description:"Silk and statement jewelry"}],W="berrys-closet-cart",M=localStorage.getItem(W)||localStorage.getItem("aura-cart")||"[]",s={cart:JSON.parse(M),theme:localStorage.getItem("theme")||"dark",lookIndex:0,product:null,service:null,modal:null,checkout:!1,adminNumber:"",adminData:null},c=e=>`GHS${Number(e).toFixed(2)}`,u=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t]),f=()=>localStorage.setItem(W,JSON.stringify(s.cart)),h=()=>s.cart.reduce((e,t)=>e+t.price*t.quantity,0),q=()=>s.cart.reduce((e,t)=>e+t.quantity,0);function S(){const e=window.location.hash.replace(/^#\/?/,"")||"home";return e==="top"?"home":e}function L(e=null){return(e?p.filter(a=>a.slug===e):p).map(a=>`
    <article class="product-card" data-product="${a.id}">
      <div class="product-image"><img src="${a.image}" alt="${u(a.name)}" loading="lazy">${a.tag?`<span class="tag">${a.tag}</span>`:""}</div>
      <div class="product-copy"><span class="eyebrow">${a.category}</span><h3>${a.name}</h3><strong>${c(a.price)}</strong></div>
    </article>`).join("")}function C(e=S()){return`
    <header class="site-header" id="site-header">
      <a class="brand" href="#top">Berry's <span>Closet</span></a>
      <nav>
        ${[{href:"#/",label:"Home",slug:"home"},...k.map(a=>({href:`#/${a.slug}`,label:a.label,slug:a.slug})),{href:"#consultation",label:"Item Request",slug:"consultation"},{href:"#/login",label:"Account",slug:"login"}].map(a=>`<a href="${a.href}" class="nav-link ${e===a.slug?"active":""}">${a.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="icon-button" data-action="theme" aria-label="Toggle theme">${s.theme==="dark"?"☼":"◐"}</button>
        <button class="cart-button" data-action="cart" aria-label="Open shopping cart">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h2l2.3 9.1a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 7H7"/><circle cx="10" cy="18.5" r="1.2"/><circle cx="17" cy="18.5" r="1.2"/></svg>
          <b id="cart-count">${q()}</b>
        </button>
      </div>
    </header>
  `}function F(){return`
    ${C("home")}
    <main id="top">
      <section class="hero"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" alt="Fashion editorial"><div class="hero-shade"></div><div class="hero-copy"><span class="eyebrow">New season / Accra</span><h1>Define your<br><em>signature look.</em></h1><p>Curated pieces and bespoke styling for the modern muse. Accra to the world.</p><div class="button-row"><a class="button button-accent" href="#/womens-wear">Shop collections</a><a class="button button-line" href="#consultation">Item request</a></div></div></section>
      <section class="section collections" id="collections"><div class="section-heading"><div><span class="eyebrow">The edit / 20 pieces</span><h2>Collections</h2></div><div class="scroll-actions"><button class="icon-button" data-action="scroll-products" data-direction="left" aria-label="Scroll products left">←</button><button class="icon-button" data-action="scroll-products" data-direction="right" aria-label="Scroll products right">→</button></div></div><div class="product-track" id="product-track">${L()}</div></section>
      <section class="section lookbook" id="lookbook"><div class="section-heading center"><div><span class="eyebrow">A visual diary</span><h2>Lookbook</h2></div></div><div class="lookbook-frame"><img id="lookbook-image" src="${l[0].image}" alt="${l[0].title}"><div class="lookbook-shade"></div><div class="lookbook-copy"><span class="eyebrow">0${s.lookIndex+1} / 0${l.length}</span><h3 id="lookbook-title">${l[0].title}</h3><p id="lookbook-description">${l[0].description}</p></div><button class="carousel-button prev" data-action="look-prev" aria-label="Previous look">←</button><button class="carousel-button next" data-action="look-next" aria-label="Next look">→</button></div></section>
      <section class="section services" id="services"><div class="section-heading center"><div><span class="eyebrow">What we do</span><h2>Rituals of beauty</h2><p>From everyday glow-ups to special occasions, we make your getting-ready ritual feel like an event.</p></div></div><div class="service-grid">${A.map(e=>`<article class="service-card"><div class="service-image"><img src="${e.image}" alt="${e.title}" loading="lazy"><span>${e.icon}</span></div><div class="service-copy"><h3>${e.title}</h3><p>${e.description}</p><div class="service-meta"><strong>From ${c(e.price)}</strong><span>${e.duration}</span></div><button class="button button-dark" data-service="${e.id}">Book now</button></div></article>`).join("")}</div></section>
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
  `}function x(){const e=s.cart;return`
    ${C("cart")}
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
            ${e.length?e.map(t=>`
              <article class="cart-page-item">
                <img src="${t.image}" alt="${t.name}">
                <div class="cart-page-copy">
                  <div>
                    <h3>${t.name}</h3>
                    <p>${t.category}</p>
                  </div>
                  <strong>${c(t.price)}</strong>
                </div>
                <div class="cart-page-controls">
                  <div class="quantity">
                    <button data-quantity="${t.cartItemId}" data-change="-1">−</button>
                    <span>${t.quantity}</span>
                    <button data-quantity="${t.cartItemId}" data-change="1">+</button>
                  </div>
                  <button class="remove" data-remove="${t.cartItemId}">Remove</button>
                </div>
              </article>
            `).join(""):'<div class="empty-cart"><p>Your cart is empty. Add a few items from the collection.</p><a class="button button-accent" href="#/womens-wear">Continue shopping</a></div>'}
          </section>

          <aside class="cart-summary">
            <span class="eyebrow">Summary</span>
            <h3>Order total</h3>
            <div class="cart-total-row"><span>Subtotal</span><strong>${c(h())}</strong></div>
            <div class="cart-total-row"><span>Delivery</span><strong>GHS0.00</strong></div>
            <div class="cart-total-row total"><span>Total</span><strong>${c(h())}</strong></div>
            <button class="button button-accent" data-action="checkout" ${e.length?"":"disabled"}>Checkout</button>
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
  `}function D(e){const t=k.find(o=>o.slug===e)||k[0],a=p.filter(o=>o.slug===e);return`
    ${C(e)}
    <main class="category-page" id="top">
      <section class="category-hero" style="background-image: linear-gradient(90deg, rgba(0,0,0,.68), rgba(0,0,0,.15)), url('${t.hero}');">
        <div class="category-hero-copy">
          <span class="eyebrow">Curated edit</span>
          <h1>${t.label}</h1>
          <p>${t.blurb}</p>
          <div class="button-row">
            <a class="button button-accent" href="#collections">Browse ${t.label}</a>
            <a class="button button-line" href="#consultation">Item request</a>
          </div>
        </div>
      </section>

      <section class="section category-content">
        <div class="section-heading center">
          <div>
            <span class="eyebrow">Featured picks</span>
            <h2>${t.label}</h2>
          </div>
        </div>
        <div class="category-grid">${a.map(o=>`
          <article class="product-card category-product" data-product="${o.id}">
            <div class="product-image"><img src="${o.image}" alt="${u(o.name)}" loading="lazy">${o.tag?`<span class="tag">${o.tag}</span>`:""}</div>
            <div class="product-copy"><span class="eyebrow">${o.category}</span><h3>${o.name}</h3><strong>${c(o.price)}</strong></div>
          </article>
        `).join("")}</div>
      </section>
    </main>
    <footer>
      <div><a class="brand" href="#top">Berry's <span>Closet</span></a><p>Accra-based. Global style.</p></div>
      <div><b>Shop</b><a href="#/womens-wear">Women's Wear</a><a href="#/mens-wear">Men's Wear</a><a href="#/cosmetics">Cosmetics</a></div>
      <div><b>More</b><a href="#/food">Food</a><a href="#/gadgets">Gadgets</a><a href="#consultation">Item Request</a></div>
      <small>© 2026 Berry's Closet. All rights reserved.</small>
    </footer>
    <div id="modal-root"></div>
  `}function R(){return`
    <main class="item-request-page">
      <form class="booking-form item-request-form" data-form="consultation">
        <input name="name" placeholder="Your full name" required>
        <input name="productName" placeholder="Product name" required>
        <input name="photo" type="file" accept="image/*" required>
        <button class="button button-accent">Send request</button>
      </form>
    </main>
  `}function O(){if(s.adminData)return T(s.adminData);const e=!!s.adminNumber;return`
    <main class="admin-page">
      <section class="admin-panel">
        <span class="eyebrow">Restricted access</span>
        <h1>Admin portal</h1>
        <p>${e?`Enter the code sent to ${s.adminNumber}.`:"Enter an authorized mobile number to receive a verification code."}</p>
        <form class="admin-form" data-form="${e?"admin-verify":"admin-request"}">
          ${e?'<input name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" placeholder="6-digit code" required>':'<input name="number" type="tel" autocomplete="tel" placeholder="Mobile number" required>'}
          <button class="button button-accent">${e?"Verify code":"Send code"}</button>
        </form>
        ${e?'<button class="admin-secondary" data-action="admin-change-number">Use a different number</button>':""}
        <p class="admin-message" id="admin-message" aria-live="polite"></p>
      </section>
    </main>
  `}function T(e){const t=[...e.itemRequests.map(a=>({type:"Item request",customer:a.name,item:a.productName,status:a.status,date:a.createdAt||a.date})),...e.itemOrders.map(a=>({type:"Order",customer:a.customerName,item:a.itemName,status:a.status,date:a.createdAt})),...e.serviceOrders.map(a=>({type:"Service",customer:a.clientName,item:a.serviceName,status:a.status,date:a.createdAt||a.date}))];return`
    <main class="admin-page admin-dashboard">
      <section class="admin-panel admin-panel-wide">
        <div class="admin-heading"><div><span class="eyebrow">Restricted access</span><h1>Admin dashboard</h1></div><button class="admin-secondary" data-action="admin-logout">Log out</button></div>
        <div class="admin-stats"><div><strong>${e.itemRequests.length}</strong><span>Item requests</span></div><div><strong>${e.itemOrders.length}</strong><span>Orders</span></div><div><strong>${e.serviceOrders.length}</strong><span>Services</span></div></div>
        <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Type</th><th>Customer</th><th>Request</th><th>Status</th><th>Date</th></tr></thead><tbody>${t.length?t.map(a=>`<tr><td>${a.type}</td><td>${u(a.customer||"Unknown")}</td><td>${u(a.item||"")}</td><td>${u(a.status||"Pending")}</td><td>${a.date?new Date(a.date).toLocaleDateString():"-"}</td></tr>`).join(""):'<tr><td colspan="5">No records yet.</td></tr>'}</tbody></table></div>
      </section>
    </main>
  `}function I(e="login"){const t=e==="login";return`
    <main class="auth-page">
      <section class="auth-panel">
        <a class="brand" href="#/">Berry's <span>Closet</span></a>
        <span class="eyebrow">Your account</span>
        <h1>${t?"Welcome back.":"Create your account."}</h1>
        <p>${t?"Sign in to continue shopping.":"Join Berry’s Closet to keep your details ready for checkout."}</p>
        <form class="auth-form" data-form="${t?"login":"signup"}">
          ${t?"":'<input name="name" placeholder="Full name" autocomplete="name" required>'}
          ${t?"":'<input name="number" type="tel" placeholder="Mobile number" autocomplete="tel" required>'}
          <input name="email" type="email" placeholder="Email address" autocomplete="email" required>
          <input name="password" type="password" placeholder="Password" autocomplete="${t?"current-password":"new-password"}" minlength="8" required>
          <button class="button button-accent">${t?"Log in":"Sign up"}</button>
        </form>
        <p class="auth-message" id="auth-message" aria-live="polite"></p>
        <a class="auth-switch" href="#/${t?"signup":"login"}">${t?"Need an account? Sign up":"Already have an account? Log in"}</a>
      </section>
    </main>
  `}function r(){document.documentElement.className=s.theme;const e=S(),t=e==="home"||e==="collections"||e==="lookbook"||e==="services"?"home":e==="consultation"?"item-request":e==="admin"?"admin":e==="login"||e==="signup"?e:e==="cart"?"cart":e;document.querySelector("#app").innerHTML=t==="home"?F():t==="cart"?x():t==="item-request"?R():t==="admin"?O():t==="login"?I("login"):t==="signup"?I("signup"):D(t),g()}function g(){const e=document.querySelector("#cart-count");e&&(e.textContent=q())}function b(e,t=""){document.querySelector("#modal-root").innerHTML=`<div class="modal-backdrop" data-action="close-modal"></div><div class="modal ${t}">${e}</div>`,document.body.classList.add("modal-open")}function y(){document.querySelector("#modal-root").innerHTML="",document.body.classList.remove("modal-open"),s.modal=null}function j(e){s.cart.push({...e,cartItemId:crypto.randomUUID(),quantity:1}),f(),g(),y(),m(`${e.name} added to your bag.`)}function m(e){const t=document.createElement("div");t.className="toast",t.textContent=e,document.body.append(t),setTimeout(()=>t.remove(),2800)}function B(e){s.modal="product",b(`<button class="modal-close" data-action="close-modal">×</button><div class="product-modal"><img src="${e.image}" alt="${e.name}"><div class="modal-content"><span class="eyebrow">${e.category}</span><h2>${e.name}</h2><strong class="price">${c(e.price)}</strong><p>${e.description}</p><div class="specs"><span><small>Material</small>Premium finish</span><span><small>Fit</small>Curated style</span></div><button class="button button-accent" data-add-product="${e.id}">Add to bag</button></div></div>`,"wide-modal")}function E(e){s.modal="service",b(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content"><span class="eyebrow">${e.title} / ${c(e.price)}</span><h2>Reserve your session.</h2><p>${e.description}</p><form class="booking-form" data-form="service"><input type="hidden" name="serviceName" value="${e.title}"><input type="hidden" name="servicePrice" value="${e.price}"><input name="name" placeholder="Full name" required><input name="email" type="email" placeholder="Email" required><input name="phone" placeholder="Phone" required><input name="date" type="date" required><select name="time" required><option value="">Preferred time</option><option>9:00 AM</option><option>11:00 AM</option><option>1:00 PM</option><option>3:00 PM</option><option>5:00 PM</option></select><button class="button button-accent">Request booking</button></form></div>`)}function G(e){return new Promise((t,a)=>{const o=new FileReader;o.onload=()=>t(o.result),o.onerror=()=>a(new Error("Could not read file")),o.readAsDataURL(e)})}function H(){b('<button class="modal-close" data-action="close-modal">×</button><div class="modal-content"><span class="eyebrow">Product request</span><h2>Request an item.</h2><p>Share your name, the product you want, and a clear photo to help us find it.</p><form class="booking-form" data-form="consultation"><input name="name" placeholder="Your full name" required><input name="productName" placeholder="Product name" required><input name="photo" type="file" accept="image/*" required><button class="button button-accent">Send request</button></form></div>')}function N(){s.modal="cart";const e=s.cart.map(t=>`<div class="cart-item"><img src="${t.image}" alt="${t.name}"><div><strong>${t.name}</strong><small>${c(t.price)} / ${t.category}</small><div class="quantity"><button data-quantity="${t.cartItemId}" data-change="-1">−</button><span>${t.quantity}</span><button data-quantity="${t.cartItemId}" data-change="1">+</button></div></div><button class="remove" data-remove="${t.cartItemId}">Remove</button></div>`).join("");b(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content cart-modal"><span class="eyebrow">Your selection / ${q()} items</span><h2>Shopping bag.</h2>${e||'<div class="empty">Your bag is waiting for something special.</div>'}${e?`<div class="cart-total"><span>Subtotal</span><strong>${c(h())}</strong></div><button class="button button-accent" data-action="checkout">Checkout</button>`:""}</div>`,"cart-modal-shell")}function Y(){b(`<button class="modal-close" data-action="close-modal">×</button><div class="modal-content"><span class="eyebrow">Secure checkout</span><h2>Almost yours.</h2><form class="booking-form" data-form="checkout"><input name="name" placeholder="Full name" required><input name="email" type="email" placeholder="Email" required><input name="phone" placeholder="Phone" required><input name="address" placeholder="Delivery address" required><button class="button button-accent">Place order · ${c(h())}</button></form></div>`)}async function w(e,t){return(await fetch(`/api/order/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function J(e,t){return(await fetch(`/api/auth/${e}`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function $(e,t={}){return(await fetch(`/api/admin/${e}`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function U(){return(await fetch("/api/admin/dashboard",{credentials:"include"})).json()}function P(e){s.lookIndex=(s.lookIndex+e+l.length)%l.length;const t=l[s.lookIndex];document.querySelector("#lookbook-image").src=t.image,document.querySelector("#lookbook-image").alt=t.title,document.querySelector("#lookbook-title").textContent=t.title,document.querySelector("#lookbook-description").textContent=t.description,document.querySelector(".lookbook-copy .eyebrow").textContent=`0${s.lookIndex+1} / 0${l.length}`}document.addEventListener("click",e=>{const t=e.target.closest('a[href^="#/"]');if(t){const n=t.getAttribute("href");if(n==="#/"||n==="#consultation"||n==="#top")return;if(n.startsWith("#/")){e.preventDefault(),window.location.hash=n,r();return}}const a=e.target.closest("[data-action]")?.dataset.action,o=e.target.closest("[data-product]")?.dataset.product,i=S()==="cart";if(o&&B(p.find(n=>n.id===Number(o))),e.target.closest("[data-add-product]")&&j(p.find(n=>n.id===Number(e.target.closest("[data-add-product]").dataset.addProduct))),e.target.closest("[data-service]")&&E(A.find(n=>n.id===Number(e.target.closest("[data-service]").dataset.service))),e.target.closest("[data-quantity]")){const n=e.target.closest("[data-quantity]"),d=s.cart.find(v=>v.cartItemId===n.dataset.quantity);d.quantity+=Number(n.dataset.change),d.quantity<1&&(s.cart=s.cart.filter(v=>v.cartItemId!==d.cartItemId)),f(),i?r():N(),g()}e.target.closest("[data-remove]")&&(s.cart=s.cart.filter(n=>n.cartItemId!==e.target.closest("[data-remove]").dataset.remove),f(),i?r():N(),g()),a==="theme"&&(s.theme=s.theme==="dark"?"light":"dark",localStorage.setItem("theme",s.theme),r()),a==="cart"&&(window.location.hash="#/cart",r()),a==="close-modal"&&y(),a==="look-prev"&&P(-1),a==="look-next"&&P(1),a==="consultation"&&H(),a==="admin-change-number"&&(s.adminNumber="",s.adminData=null,r()),a==="admin-logout"&&$("logout").finally(()=>{s.adminNumber="",s.adminData=null,r()}),a==="checkout"&&Y(),a==="scroll-products"&&document.querySelector("#product-track").scrollBy({left:e.target.closest("[data-direction]").dataset.direction==="left"?-340:340,behavior:"smooth"})});document.addEventListener("submit",async e=>{const t=e.target;if(t.id==="newsletter-form"){e.preventDefault(),t.reset(),m("Welcome to Berry's Closet.");return}if(!t.matches("[data-form]"))return;e.preventDefault();const a=Object.fromEntries(new FormData(t));try{if(t.dataset.form==="login"||t.dataset.form==="signup"){const o=await J(t.dataset.form==="login"?"login":"register",a);if(!o.success)throw new Error(o.message);window.location.hash="#/",r(),m(t.dataset.form==="login"?"Welcome back.":"Your account has been created.");return}if(t.dataset.form==="admin-request"){const o=await $("request-code",{number:a.number});if(!o.success)throw new Error(o.message);s.adminNumber=a.number,r();return}if(t.dataset.form==="admin-verify"){const o=await $("verify-code",{number:s.adminNumber,code:a.code});if(!o.success)throw new Error(o.message);const i=await U();if(!i.success)throw new Error(i.message);s.adminData=i,r();return}if(t.dataset.form==="checkout"&&(await w("create-order",{orderData:{customer:a,items:s.cart,total:h(),paymentRef:"pending",status:"pending"}}),s.cart=[],f(),g()),t.dataset.form==="service"&&await w("create-orderA",{formData:a}),t.dataset.form==="consultation"){const o=t.elements.photo?.files?.[0],i=o?await G(o):"",n={orderData:{customer:{name:a.name,email:"request@berryscloset.com",phone:"Not provided",date:new Date().toISOString(),productName:a.productName,photo:i}}};await w("consult",n)}y(),m("Thank you. We will be in touch shortly.")}catch(o){if(t.dataset.form==="admin-request"||t.dataset.form==="admin-verify"||t.dataset.form==="login"||t.dataset.form==="signup"){const i=document.querySelector("#admin-message"),n=document.querySelector("#auth-message");i&&(i.textContent=o.message),n&&(n.textContent=o.message);return}console.error(o),y(),m("Request saved. We will contact you shortly.")}});window.addEventListener("hashchange",r);r();window.addEventListener("scroll",()=>document.querySelector("#site-header")?.classList.toggle("scrolled",window.scrollY>24));
