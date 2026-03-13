// ===== corrected-cart.js (المصحح) =====

// افترض وجود مصفوفة global اسمها `products`

// cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let currentImageIndex = 0;

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
});

// Load saved availability
function loadAvailability() {
    const savedAvailability = JSON.parse(localStorage.getItem('productsAvailability') || '{}');
    Object.keys(savedAvailability).forEach(id => {
        const product = products.find(p => p.id === parseInt(id, 10));
        if (product) {
            product.available = savedAvailability[id];
        }
    });
}

// Hero Slider (كمثال)
function initHeroSlider() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.heroSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

// Render Products
function renderProducts() {
    const featuredProducts = products.filter(p => p.featured);
    renderProductGrid('featuredProducts', featuredProducts);

    const discountProducts = products.filter(p => p.discount);
    renderProductGrid('discountProducts', discountProducts);

    const categories = ['lip', 'blush', 'perfumes', 'bath', 'lipoil'];
    categories.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);
        renderProductGrid(`${category}Products`, categoryProducts);
    });
}

function renderProductGrid(containerId, productsList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productsList.map(product => {
        const inCart = cart.some(item => item.id === product.id);
        // التحقق من صحة الخصم
        let discountBadge = '';
        if (product.originalPrice && product.originalPrice > product.price) {
            discountBadge = `<span class="product-badge">خصم ${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>`;
        }
        const originalPriceHtml = product.originalPrice ? `<span class="price-original">${product.originalPrice.toLocaleString()} MRU</span>` : '';
        const unavailableBadge = !product.available ? '<span class="product-badge unavailable-badge">غير متوفر</span>' : '';

        let actionBtn = '';
        if (!product.available) {
            actionBtn = `<button class="add-to-cart unavailable-btn" disabled>
                      <i class="fas fa-ban"></i>
                      غير متوفر
                   </button>`;
        } else if (inCart) {
            actionBtn = `<button class="add-to-cart in-cart-btn" disabled>
                      <i class="fas fa-check"></i>
                      في السلة
                   </button>`;
        } else {
            actionBtn = `<button class="add-to-cart" data-id="${product.id}">
                      <i class="fas fa-shopping-bag"></i>
                      أضف إلى السلة
                   </button>`;
        }

        // صورة افتراضية إذا لم توجد صور
        const imageSrc = product.images?.[0] || 'default-image.jpg';

        return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-image" data-id="${product.id}" style="cursor: pointer;">
          <img src="${imageSrc}" alt="${product.name}" loading="lazy">
          ${discountBadge}
          ${unavailableBadge}
        </div>
        <div class="product-info">
          <h3 class="product-name" data-id="${product.id}" style="cursor: pointer;">${product.name}</h3>
          <div class="product-price">
            <span class="price-current">${product.price.toLocaleString()} MRU</span>
            ${originalPriceHtml}
          </div>
          ${actionBtn}
        </div>
      </div>
    `;
    }).join('');
}

// Show Product Detail
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    currentImageIndex = 0;

    window.history.pushState({ productId }, '', `#product-${productId}`);
    renderProductDetail(product);

    document.getElementById('productDetail').style.display = 'block';
    document.getElementById('mainSections').style.display = 'none';
    window.scrollTo(0, 0);
}

function renderProductDetail(product) {
    const detailSection = document.getElementById('productDetail');
    const inCart = cart.some(item => item.id === product.id);

    // التأكد من وجود الصور
    const images = product.images?.length ? product.images : ['default-image.jpg'];
    const mainImage = images[currentImageIndex] || images[0];

    detailSection.innerHTML = `
    <div class="product-detail-container">
      <button class="back-btn" id="backToProducts">
        <i class="fas fa-arrow-right"></i>
        العودة للمنتجات
      </button>
      <div class="product-detail-content">
        <div class="product-gallery">
          <div class="main-image">
            <img id="mainProductImage" src="${mainImage}" alt="${product.name}">
            ${images.length > 1 ? `
              <button class="gallery-nav prev" data-dir="-1"><i class="fas fa-chevron-right"></i></button>
              <button class="gallery-nav next" data-dir="1"><i class="fas fa-chevron-left"></i></button>
            ` : ''}
          </div>
          ${images.length > 1 ? `
            <div class="thumbnail-images">
              ${images.map((img, index) => `
                <img src="${img}" alt="${product.name} ${index + 1}" class="thumbnail ${index === currentImageIndex ? 'active' : ''}" data-index="${index}">
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="product-details-info">
          <div class="product-category-badge">${getCategoryName(product.category)}</div>
          <h1 class="product-detail-title">${product.name}</h1>
          <div class="product-detail-price">
            <span class="detail-price-current">${product.price.toLocaleString()} MRU</span>
            ${product.originalPrice ? `<span class="detail-price-original">${product.originalPrice.toLocaleString()} MRU</span>
            <span class="discount-percentage">خصم ${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
          </div>

          <div class="availability-section">
  <label class="availability-label">حالة المنتج:</label>
  <div class="availability-status">
    <span class="status-badge ${product.available ? 'available' : 'unavailable'}">
      ${product.available ? 'متوفر' : 'غير متوفر'}
    </span>
  </div>
</div>

          <div class="product-description">
            <h3>وصف المنتج</h3>
            <p>${product.description}</p>
          </div>

          <div class="product-actions">
            ${!product.available ? `
              <button class="btn btn-large unavailable-btn" disabled><i class="fas fa-ban"></i> غير متوفر حالياً</button>` :
            inCart ? `<button class="btn btn-primary btn-large in-cart-btn" disabled><i class="fas fa-check"></i> في السلة</button>` :
                `<button class="btn btn-primary btn-large add-to-cart-detail" data-id="${product.id}"><i class="fas fa-shopping-bag"></i> أضف إلى السلة</button>`
        }
            <button class="btn btn-secondary btn-large share-btn" data-id="${product.id}"><i class="fas fa-share-alt"></i> مشاركة</button>
          </div>
        </div>
      </div>
    </div>
  `;

    // small event bindings for dynamic elements inside detail
    detailSection.querySelector('#backToProducts')?.addEventListener('click', closeProductDetail);
}

// helpers
function getCategoryName(category) {
    const names = {
        'lip': 'LIPS',
        'blush': 'BLUSH',
        'perfumes': 'PERFUME',
        'bath': 'BATH',
        'lipoil': 'LIP OIL'
    };
    return names[category] || category;
}

function closeProductDetail() {
    document.getElementById('productDetail').style.display = 'none';
    document.getElementById('mainSections').style.display = 'block';
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo(0, 0);
    currentProduct = null; // إعادة تعيين المنتج الحالي
}

// gallery actions (delegated later)
function changeProductImage(direction) {
    if (!currentProduct) return;
    const images = currentProduct.images?.length ? currentProduct.images : ['default-image.jpg'];
    currentImageIndex += direction;
    // التأكد من أن المؤشر ضمن النطاق
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById('mainProductImage').src = images[currentImageIndex];
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// toggle availability
function toggleAvailability(productId, available) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    product.available = available;
    localStorage.setItem('productsAvailability', JSON.stringify(
        products.reduce((acc, p) => {
            acc[p.id] = p.available;
            return acc;
        }, {})
    ));
    renderProductDetail(product);
    renderProducts();
    showNotification(available ? 'المنتج متوفر الآن' : 'المنتج غير متوفر');
}

// share
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const url = `${window.location.origin}${window.location.pathname}#product-${productId}`;
    const text = `${product.name} - ${product.price.toLocaleString()} MRU`;
    if (navigator.share) {
        navigator.share({ title: product.name, text, url });
    } else {
        navigator.clipboard.writeText(url).then(() => showNotification('تم نسخ رابط المنتج'));
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.available) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || 'default-image.jpg',
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();

    // التحقق من وجود العناصر قبل إضافة الكلاسات
    document.getElementById('cartSidebar')?.classList.add('active');
    document.getElementById('cartOverlay')?.classList.add('active');

    showNotification('تم إضافة المنتج إلى السلة');
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartBody = document.getElementById('cartBody');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    if (!cartBody) return;

    if (cart.length === 0) {
        emptyCart && (emptyCart.style.display = 'flex');
        cartFooter && (cartFooter.style.display = 'none');
        cartBody.innerHTML = '';
        renderProducts(); // refresh buttons states
        return;
    }

    emptyCart && (emptyCart.style.display = 'none');
    cartFooter && (cartFooter.style.display = 'block');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `${total.toLocaleString()} MRU`;

    // Clear existing content
    cartBody.innerHTML = '';

    // Create cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.productId = item.id;

        cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString()} MRU</div>
        <div class="cart-item-actions">
          <button class="qty-btn qty-decrease" data-product-id="${item.id}"><i class="fas fa-minus"></i></button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn qty-increase" data-product-id="${item.id}"><i class="fas fa-plus"></i></button>
          <button class="remove-btn" data-product-id="${item.id}" title="حذف"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
        cartBody.appendChild(cartItem);
    });

    renderProducts(); // update add-to-cart button states
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    const item = cart.find(it => it.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('تم حذف المنتج من السلة');
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => { notification.classList.remove('show'); setTimeout(() => notification.remove(), 300); }, 2000);
}

// Checkout via WhatsApp
function checkout() {
    if (cart.length === 0) return;
    const phoneNumber = '22230764882';
    let message = 'السلام عليكم، أود طلب المنتجات التالية:\n\n';
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `السعر: ${item.price.toLocaleString()} MRU\n`;
        message += `الكمية: ${item.quantity}\n`;
        message += `المجموع: ${(item.price * item.quantity).toLocaleString()} MRU\n\n`;
    });
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `الإجمالي الكلي: ${total.toLocaleString()} MRU`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Event Listeners
function initEventListeners() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    const cartOverlay = document.getElementById('cartOverlay');

    mobileMenuBtn?.addEventListener('click', () => nav.classList.toggle('active'));

    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');

    searchBtn?.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        document.getElementById('searchInput')?.focus();
    });

    searchClose?.addEventListener('click', () => searchOverlay.classList.remove('active'));
    searchOverlay?.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); });

    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');

    cartBtn?.addEventListener('click', () => { cartSidebar.classList.add('active'); cartOverlay.classList.add('active'); });
    cartClose?.addEventListener('click', () => { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); });

    cartOverlay?.addEventListener('click', () => { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); nav.classList.remove('active'); });

    document.getElementById('checkoutBtn')?.addEventListener('click', checkout);

    // Event delegation for cart item buttons
    const cartBody = document.getElementById('cartBody');
    cartBody?.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        // استخراج productId بشكل موحد باستخدام dataset.productId
        const productId = target.dataset.productId ? parseInt(target.dataset.productId, 10) : null;
        if (!productId) return;

        if (target.classList.contains('qty-increase')) {
            const item = cart.find(item => item.id === productId);
            if (item) updateQuantity(productId, item.quantity + 1);
        } else if (target.classList.contains('qty-decrease')) {
            const item = cart.find(item => item.id === productId);
            if (item) updateQuantity(productId, item.quantity - 1);
        } else if (target.classList.contains('remove-btn')) {
            removeFromCart(productId);
        }
    });
    // مستمع مباشر لزر السلة (موجود بالفعل)
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
    });

    // إضافة مستمع عن طريق delegation لضمان العمل في جميع الحالات
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('#cartBtn')) {
            e.preventDefault();
            cartSidebar?.classList.add('active');
            cartOverlay?.classList.add('active');
        }
    });

    // Delegate clicks on product grid to open product detail or add to cart
    document.body.addEventListener('click', (e) => {
        const cardImage = e.target.closest('.product-image[data-id], .product-name[data-id]');
        if (cardImage) {
            const id = parseInt(cardImage.dataset.id, 10);
            if (id) showProductDetail(id);
            return;
        }
        const addBtn = e.target.closest('.add-to-cart[data-id]');
        if (addBtn) {
            const id = parseInt(addBtn.dataset.id, 10);
            if (id) addToCart(id);
            return;
        }
        const addDetailBtn = e.target.closest('.add-to-cart-detail[data-id]');
        if (addDetailBtn) {
            const id = parseInt(addDetailBtn.dataset.id, 10);
            if (id) addToCart(id);
            return;
        }
        const shareBtn = e.target.closest('.share-btn[data-id]');
        if (shareBtn) {
            const id = parseInt(shareBtn.dataset.id, 10);
            if (id) shareProduct(id);
            return;
        }
        const availBtn = e.target.closest('.availability-btn');
        if (availBtn && e.target.closest('.product-detail-container')) {
            const avail = availBtn.dataset.availability === 'true';
            const pid = currentProduct?.id;
            if (pid !== undefined) toggleAvailability(pid, avail);
            return;
        }
        const galleryNav = e.target.closest('.gallery-nav[data-dir]');
        if (galleryNav) {
            const dir = parseInt(galleryNav.dataset.dir, 10);
            changeProductImage(dir);
            return;
        }
        const thumb = e.target.closest('.thumbnail[data-index]');
        if (thumb) {
            const idx = parseInt(thumb.dataset.index, 10);
            if (currentProduct && currentProduct.images && idx >= 0 && idx < currentProduct.images.length) {
                currentImageIndex = idx;
                document.getElementById('mainProductImage').src = currentProduct.images[currentImageIndex];
                document.querySelectorAll('.thumbnail').forEach((t, i) => t.classList.toggle('active', i === currentImageIndex));
            }
            return;
        }
    });

    // تفويض الأحداث للروابط (nav-link و category-card) بدلاً من المستمعات المباشرة
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link, .category-card');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href?.startsWith('#') && !href.startsWith('#product-')) {
            e.preventDefault();
            closeProductDetail();
            setTimeout(() => {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // إغلاق القائمة إذا كانت مفتوحة
                    nav?.classList.remove('active');
                }
            }, 100);
        }
    });

    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.productId) {
            showProductDetail(e.state.productId);
        } else {
            closeProductDetail();
        }
    });
}