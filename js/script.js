// ==========================

// Cart & Products State
// ==========================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let currentImageIndex = 0;

// toggle: false = normal behavior (available => can add)
// true = inverted behavior (available => cannot add, unavailable => can add)
const invertedAvailabilityMode = false;

function isInteractive(product) {
    return invertedAvailabilityMode ? !product.available : !!product.available;
}

localStorage.removeItem('productsAvailability');
localStorage.removeItem('cart');

// ==========================
// DOMContentLoaded
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    loadAvailability();
    renderProducts();
    updateCartUI();
    initEventListeners();

    if (window.location.hash.startsWith('#product-')) {
        const productId = parseInt(window.location.hash.replace('#product-', ''), 10);
        showProductDetail(productId);
    }


    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');

        // استعادة الوضع المحفوظ
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        // حدث النقر
        themeToggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });
    } else {
        console.error('زر التبديل غير موجود في الصفحة');
    }

});



// ==========================
// Load Availability
// ==========================
function loadAvailability() {
    const savedAvailability = JSON.parse(localStorage.getItem('productsAvailability') || '{}');
    Object.keys(savedAvailability).forEach(id => {
        const product = products.find(p => p.id === parseInt(id, 10));
        if (product) product.available = savedAvailability[id];
    });
}

// ==========================
// Hero Slider
// ==========================
function initHeroSlider() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.heroSwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
    });
}

// ==========================
// Render Products
// ==========================
function renderProducts() {
    const featured = products.filter(p => p.featured);
    const discount = products.filter(p => p.discount);
    const categories = ['makeup', 'skincare', 'perfumes', /*'bath', 'lipoil'*/];

    renderProductGrid('featuredProducts', featured);
    renderProductGrid('discountProducts', discount);

    categories.forEach(cat => {
        renderProductGrid(`${cat}Products`, products.filter(p => p.category === cat));
    });
}

function renderProductGrid(containerId, productsList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productsList.map(product => {
        const inCart = cart.some(item => item.id === product.id);
        const interactive = isInteractive(product);

        let discountBadge = product.originalPrice && product.originalPrice > product.price
            ? `<span class="product-badge">خصم ${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : '';
        let unavailableBadge = !interactive ? '<span class="product-badge unavailable-badge">غير متوفر</span>' : '';
        let originalPriceHtml = product.originalPrice ? `<span class="price-original">${product.originalPrice.toLocaleString()} MRU</span>` : '';

        let actionBtn = '';
        if (!interactive) actionBtn = `<button class="add-to-cart unavailable-btn" disabled><i class="fas fa-ban"></i> غير متوفر</button>`;
        else if (inCart) actionBtn = `<button class="add-to-cart in-cart-btn" disabled><i class="fas fa-check"></i> في السلة</button>`;
        else actionBtn = `<button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-bag"></i> أضف إلى السلة</button>`;

        const imageSrc = product.images?.[0] || 'default-image.jpg';

        return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image" data-id="${product.id}" style="cursor:pointer;">
                <img src="${imageSrc}" alt="${product.name}" loading="lazy">
                ${discountBadge} ${unavailableBadge}
            </div>
            <div class="product-info">
                <h3 class="product-name" data-id="${product.id}" style="cursor:pointer;">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">${product.price.toLocaleString()} MRU</span>
                    ${originalPriceHtml}
                </div>
                ${actionBtn}
            </div>
        </div>`;
    }).join('');
}

// ==========================
// Show Product Detail
// ==========================
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    currentImageIndex = 0;

    window.history.pushState({ productId }, '', `#product-${productId}`);
    renderProductDetail(product);

    document.getElementById('productDetail').style.display = 'block';
    const main = document.getElementById('mainSections');
    main.style.visibility = 'visible';
    main.style.height = '0';
    main.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

function renderProductDetail(product) {
    const detail = document.getElementById('productDetail');
    if (!detail) return;

    const inCart = cart.some(item => item.id === product.id);
    const interactive = isInteractive(product);
    const images = product.images?.length ? product.images : ['default-image.jpg'];
    const mainImage = images[currentImageIndex];

    const statusText = interactive ? 'متوفر' : 'غير متوفر';
    const statusClass = interactive ? 'available' : 'unavailable';

    detail.innerHTML = `
    <div class="product-detail-container">
        <button class="back-btn" id="backToProducts"><i class="fas fa-arrow-right"></i> العودة للمنتجات</button>
        <div class="product-detail-content">
            <div class="product-gallery">
                <div class="main-image">
                    <img id="mainProductImage" src="${mainImage}" alt="${product.name}">
                    ${images.length > 1 ? `<button class="gallery-nav prev" data-dir="-1"><i class="fas fa-chevron-right"></i></button>
                    <button class="gallery-nav next" data-dir="1"><i class="fas fa-chevron-left"></i></button>`: ''}
                </div>
                ${images.length > 1 ? `<div class="thumbnail-images">
                    ${images.map((img, i) => `<img src="${img}" alt="${product.name} ${i + 1}" class="thumbnail ${i === currentImageIndex ? 'active' : ''}" data-index="${i}">`).join('')}
                </div>`: ''}
            </div>
            <div class="product-details-info">
                <div class="product-category-badge">${getCategoryName(product.category)}</div>
                <h1>${product.name}</h1>
                <div class="product-detail-price">
                    <span class="detail-price-current">${product.price.toLocaleString()} MRU</span>
                    ${product.originalPrice ? `<span class="detail-price-original">${product.originalPrice.toLocaleString()} MRU</span>
                    <span class="discount-percentage">خصم ${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
                </div>
                <div class="availability-section">
                    <label>حالة المنتج:</label>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
                <div class="product-description"><h3>وصف المنتج</h3><p>${product.description}</p></div>
                <div class="product-actions">
                    ${!interactive ? `<button class="btn unavailable-btn" disabled>غير متوفر</button>` :
            inCart ? `<button class="btn in-cart-btn" disabled>في السلة</button>` :
                `<button class="btn add-to-cart-detail" data-id="${product.id}">أضف إلى السلة</button>`}
                    <button class="btn share-btn" data-id="${product.id}">مشاركة</button>
                </div>
            </div>
        </div>
    </div>`;

    detail.querySelector('#backToProducts')?.addEventListener('click', closeProductDetail);
}

// ==========================
// Cart Functions
// ==========================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!isInteractive(product)) {
        showNotification('لا يمكن إضافة هذا المنتج حالياً');
        return;
    }

    const existing = cart.find(i => i.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ id: product.id, name: product.name, price: product.price, image: product.images?.[0] || 'default-image.jpg', quantity: 1 });

    saveCart();
    updateCartUI();

    if (currentProduct && currentProduct.id === productId) renderProductDetail(currentProduct);

    showNotification('تم إضافة المنتج إلى السلة');
}

function updateQuantity(productId, newQty) {
    if (newQty < 1) { removeFromCart(productId); return; }
    const item = cart.find(i => i.id === productId);
    if (item) { item.quantity = newQty; saveCart(); updateCartUI(); }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('تم حذف المنتج من السلة');
}

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');
    const emptyCart = document.getElementById('emptyCart');
    const cartTotal = document.getElementById('cartTotal');

    if (cartCount) cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
    if (!cartBody) return;

    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'flex';
        if (cartFooter) cartFooter.style.display = 'none';
        cartBody.innerHTML = '';
        renderProducts();
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    cartTotal && (cartTotal.textContent = `${cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toLocaleString()} MRU`);

    cartBody.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.dataset.productId = item.id;
        div.innerHTML = `
        <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
        <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price.toLocaleString()} MRU</div>
            <div class="cart-item-actions">
                <button class="qty-btn qty-decrease" data-product-id="${item.id}">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn qty-increase" data-product-id="${item.id}">+</button>
                <button class="remove-btn" data-product-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`;
        cartBody.appendChild(div);
    });

    renderProducts();
}

// ==========================
// Helpers
// ==========================
function getCategoryName(cat) { return { 'makeup': 'MAKEUP', 'skincare': 'SKIN CARE', 'perfumes': 'PERFUME',/*  'bath': 'BATH', 'lipoil': 'LIP OIL'*/ }[cat] || cat; }
function closeProductDetail() {
    document.getElementById('productDetail').style.display = 'none';
    const main = document.getElementById('mainSections');
    main.style.visibility = 'visible';
    main.style.height = 'auto';
    main.style.overflow = 'visible';
    currentProduct = null;
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo(0, 0);
}

// ==========================
// Gallery
// ==========================
function changeProductImage(direction) {
    if (!currentProduct) return;
    const images = currentProduct.images || ['default-image.jpg'];
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById('mainProductImage').src = images[currentImageIndex];
    document.querySelectorAll('.thumbnail').forEach((t, i) => t.classList.toggle('active', i === currentImageIndex));
}

// ==========================
// Notifications
// ==========================
function showNotification(msg) {
    const n = document.createElement('div');
    n.className = 'notification';
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(() => n.classList.add('show'), 100);
    setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); }, 2000);
}

// ==========================
// Share
// ==========================
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const url = `${window.location.origin}${window.location.pathname}#product-${productId}`;
    if (navigator.share) navigator.share({ title: product.name, text: product.name, url });
    else { navigator.clipboard.writeText(url).then(() => showNotification('تم نسخ رابط المنتج')); }
}

// ==========================
// Checkout (معدل ليشمل التحقق من العنوان)
// ==========================
function checkout() {

    if (cart.length === 0) {
        showNotification('سلة التسوق فارغة');
        return;
    }

    const locationInput = document.getElementById('customerLocation');
    const location = locationInput.value.trim();

    if (!location) {
        showNotification('الرجاء إدخال مكان السكن قبل إتمام الطلب');
        locationInput.focus();
        return;
    }

    const phone = '22230764882';

    let msg = `السلام عليكم، أود طلب المنتجات التالية:

`;

    cart.forEach((item, i) => {
        msg += `${i + 1}- ${item.name}
الكمية: ${item.quantity}
السعر: ${item.price * item.quantity} MRU
`;
    });

    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    msg += `المجموع الكلي: ${total} MRU

`;
    msg += `العنوان: ${location}

`;
    msg += ``;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
}



// ==========================
// Event Listeners
// ==========================
function initEventListeners() {
    const nav = document.getElementById('nav');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');

    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => nav.classList.toggle('active'));
    const searchOverlay = document.getElementById('searchOverlay');
    document.getElementById('searchBtn')?.addEventListener('click', () => searchOverlay.classList.add('active'));
    document.getElementById('searchClose')?.addEventListener('click', () => searchOverlay.classList.remove('active'));
    searchOverlay?.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); });

    document.getElementById('cartBtn')?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');

        // بعد فتح السلة بقليل نركّز على حقل العنوان لتسهيل الإدخال
        setTimeout(() => {
            const locationInput = document.getElementById('customerLocation');
            if (locationInput) locationInput.focus();
        }, 250);
    });

    document.getElementById('cartClose')?.addEventListener('click', () => { cartSidebar?.classList.remove('active'); cartOverlay?.classList.remove('active'); });
    cartOverlay?.addEventListener('click', () => { cartSidebar?.classList.remove('active'); cartOverlay?.classList.remove('active'); nav?.classList.remove('active'); });

    document.getElementById('checkoutBtn')?.addEventListener('click', checkout);

    document.body.addEventListener('click', e => {
        const card = e.target.closest('.product-image[data-id], .product-name[data-id]');
        if (card) { showProductDetail(parseInt(card.dataset.id, 10)); return; }

        const add = e.target.closest('.add-to-cart, .add-to-cart-detail');
        if (add) { addToCart(parseInt(add.dataset.id, 10)); return; }

        const share = e.target.closest('.share-btn');
        if (share) { shareProduct(parseInt(share.dataset.id, 10)); return; }

        const navBtn = e.target.closest('.gallery-nav');
        if (navBtn) { changeProductImage(parseInt(navBtn.dataset.dir, 10)); return; }

        const thumb = e.target.closest('.thumbnail[data-index]');
        if (thumb && currentProduct) {
            currentImageIndex = parseInt(thumb.dataset.index, 10);
            document.getElementById('mainProductImage').src = currentProduct.images[currentImageIndex];
            document.querySelectorAll('.thumbnail').forEach((t, i) => t.classList.toggle('active', i === currentImageIndex)); return;
        }

        const btn = e.target.closest('button[data-product-id]');
        if (btn) {
            const pid = parseInt(btn.dataset.productId, 10);
            if (btn.classList.contains('qty-increase')) updateQuantity(pid, cart.find(i => i.id === pid).quantity + 1);
            else if (btn.classList.contains('qty-decrease')) updateQuantity(pid, cart.find(i => i.id === pid).quantity - 1);
            else if (btn.classList.contains('remove-btn')) removeFromCart(pid);
        }
    });

    // Smooth scroll for nav links
    document.body.addEventListener('click', e => {
        const link = e.target.closest('.nav-link, .category-card');
        if (!link) return;
        const href = link.getAttribute('href');
        if (href?.startsWith('#') && !href.startsWith('#product-')) {
            e.preventDefault();

            // التحقق مما إذا كانت صفحة التفاصيل مفتوحة وإغلاقها
            const productDetail = document.getElementById('productDetail');
            if (productDetail && productDetail.style.display === 'block') {
                closeProductDetail(); // استدعاء الدالة التي تغلق التفاصيل
            }

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            nav?.classList.remove('active');
        }
    });



    // Back button
    window.addEventListener('popstate', e => {
        if (e.state && e.state.productId) showProductDetail(e.state.productId);
        else closeProductDetail();
    });
}



