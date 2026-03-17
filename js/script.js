// ============================================
// Yoursy Store - Main Script
// ============================================

// ============================================
// الحالة العامة (State)
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let currentImageIndex = 0;
let savedScrollPosition = 0; // لحفظ موقع التمرير قبل فتح التفاصيل

// الوضع العكسي للتوفر (true = متوفر يعني لا يمكن الإضافة، والعكس)
const invertedAvailabilityMode = false;

// ============================================
// دوال مساعدة (Helpers)
// ============================================

/**
 * التحقق مما إذا كان المنتج قابل للإضافة (حسب وضع التوفر)
 */
function isInteractive(product) {
    return invertedAvailabilityMode ? !product.available : !!product.available;
}

/**
 * حفظ السلة في التخزين المحلي
 */
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * تنسيق السعر
 */
function formatPrice(price) {
    return price.toLocaleString() + ' MRU';
}

/**
 * عرض إشعار للمستخدم
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

/**
 * الحصول على اسم الفئة بالعربية
 */
function getCategoryName(category) {
    const names = {
        'makeup': 'MAKEUP',
        'skincare': 'SKIN CARE',
        'perfumes': 'PERFUME',
        // 'bath': 'BATH',
        // 'lipoil': 'LIP OIL'
    };
    return names[category] || category;
}

// ============================================
// إدارة التوفر (Availability)
// ============================================

/**
 * تحميل حالة التوفر من التخزين المحلي
 */
function loadAvailability() {
    const saved = JSON.parse(localStorage.getItem('productsAvailability') || '{}');
    Object.keys(saved).forEach(id => {
        const product = products.find(p => p.id === parseInt(id, 10));
        if (product) product.available = saved[id];
    });
}

// ============================================
// السلايدر الرئيسي (Hero Slider)
// ============================================

function initHeroSlider() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.heroSwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
    });
}

// ============================================
// عرض المنتجات (Rendering)
// ============================================

/**
 * عرض جميع المنتجات في الشبكات المخصصة
 */
function renderProducts() {
    const featured = products.filter(p => p.featured);
    const discount = products.filter(p => p.discount);
    const categories = ['makeup', 'skincare', 'perfumes']; // أضف المزيد حسب الحاجة

    renderProductGrid('featuredProducts', featured);
    renderProductGrid('discountProducts', discount);
    
    categories.forEach(cat => {
        renderProductGrid(`${cat}Products`, products.filter(p => p.category === cat));
    });
}

/**
 * عرض قائمة منتجات في عنصر معين
 */
function renderProductGrid(containerId, productsList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productsList.map(product => {
        const inCart = cart.some(item => item.id === product.id);
        const interactive = isInteractive(product);
        const imageSrc = product.images?.[0] || 'default-image.jpg';
        
        // شارات الخصم وعدم التوفر
        let discountBadge = '';
        if (product.originalPrice && product.originalPrice > product.price) {
            const percent = Math.round((1 - product.price / product.originalPrice) * 100);
            discountBadge = `<span class="product-badge">خصم ${percent}%</span>`;
        }
        
        let unavailableBadge = !interactive ? '<span class="product-badge unavailable-badge">غير متوفر</span>' : '';
        
        // السعر الأصلي
        let originalPriceHtml = product.originalPrice 
            ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>`
            : '';
        
        // زر الإجراء
        let actionBtn = '';
        if (!interactive) {
            actionBtn = `<button class="add-to-cart unavailable-btn" disabled><i class="fas fa-ban"></i> غير متوفر</button>`;
        } else if (inCart) {
            actionBtn = `<button class="add-to-cart in-cart-btn" disabled><i class="fas fa-check"></i> في السلة</button>`;
        } else {
            actionBtn = `<button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-bag"></i> أضف إلى السلة</button>`;
        }

        return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image" data-id="${product.id}" style="cursor:pointer;">
                <img src="${imageSrc}" alt="${product.name}" loading="lazy">
                ${discountBadge} ${unavailableBadge}
            </div>
            <div class="product-info">
                <h3 class="product-name" data-id="${product.id}" style="cursor:pointer;">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    ${originalPriceHtml}
                </div>
                ${actionBtn}
            </div>
        </div>`;
    }).join('');
}

// ============================================
// تفاصيل المنتج (Product Detail)
// ============================================

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // حفظ موقع التمرير الحالي قبل فتح التفاصيل
    savedScrollPosition = window.scrollY;

    currentProduct = product;
    currentImageIndex = 0;

    window.history.pushState({ productId }, '', `#product-${productId}`);
    renderProductDetail(product);

    // إخفاء الأقسام الرئيسية وإظهار التفاصيل
    document.getElementById('productDetail').style.display = 'block';
    const main = document.getElementById('mainSections');
    main.style.visibility = 'visible';
    main.style.height = '0';
    main.style.overflow = 'hidden';
    // لا نستخدم window.scrollTo(0,0) هنا
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
                    ${images.length > 1 ? `
                    <button class="gallery-nav prev" data-dir="-1"><i class="fas fa-chevron-right"></i></button>
                    <button class="gallery-nav next" data-dir="1"><i class="fas fa-chevron-left"></i></button>
                    ` : ''}
                </div>
                ${images.length > 1 ? `
                <div class="thumbnail-images">
                    ${images.map((img, i) => `
                        <img src="${img}" alt="${product.name} ${i + 1}" 
                             class="thumbnail ${i === currentImageIndex ? 'active' : ''}" 
                             data-index="${i}">
                    `).join('')}
                </div>` : ''}
            </div>
            <div class="product-details-info">
                <div class="product-category-badge">${getCategoryName(product.category)}</div>
                <h1>${product.name}</h1>
                <div class="product-detail-price">
                    <span class="detail-price-current">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `
                        <span class="detail-price-original">${formatPrice(product.originalPrice)}</span>
                        <span class="discount-percentage">خصم ${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                    ` : ''}
                </div>
                <div class="availability-section">
                    <label>حالة المنتج:</label>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
                <div class="product-description">
                    <h3>وصف المنتج</h3>
                    <p>${product.description}</p>
                </div>
                <div class="product-actions">
                    ${!interactive 
                        ? `<button class="btn unavailable-btn" disabled>غير متوفر</button>`
                        : inCart 
                            ? `<button class="btn in-cart-btn" disabled>في السلة</button>`
                            : `<button class="btn add-to-cart-detail" data-id="${product.id}">أضف إلى السلة</button>`
                    }
                    <button class="btn share-btn" data-id="${product.id}">مشاركة</button>
                </div>
            </div>
        </div>
    </div>`;

    detail.querySelector('#backToProducts')?.addEventListener('click', closeProductDetail);
}

function closeProductDetail() {
    document.getElementById('productDetail').style.display = 'none';
    const main = document.getElementById('mainSections');
    main.style.visibility = 'visible';
    main.style.height = 'auto';
    main.style.overflow = 'visible';
    currentProduct = null;
    window.history.pushState({}, '', window.location.pathname);
    
    // العودة إلى الموضع المحفوظ
    window.scrollTo({
        top: savedScrollPosition,
        behavior: 'auto' // يمكن تغييرها إلى 'smooth' إذا أردت تمريراً سلساً
    });
}

function changeProductImage(direction) {
    if (!currentProduct) return;
    const images = currentProduct.images || ['default-image.jpg'];
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    
    document.getElementById('mainProductImage').src = images[currentImageIndex];
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentImageIndex);
    });
}

// ============================================
// سلة التسوق (Cart)
// ============================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!isInteractive(product)) {
        showNotification('لا يمكن إضافة هذا المنتج حالياً');
        return;
    }

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
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
    
    // تحديث زر التفاصيل إذا كان مفتوحاً
    if (currentProduct && currentProduct.id === productId) {
        renderProductDetail(currentProduct);
    }

    showNotification('تم إضافة المنتج إلى السلة');
}

function updateQuantity(productId, newQty) {
    if (newQty < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = newQty;
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('تم حذف المنتج من السلة');
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');
    const emptyCart = document.getElementById('emptyCart');
    const cartTotalEl = document.getElementById('cartTotal');

    // تحديث العدد في الأيقونة
    if (cartCountEl) {
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalQty;
    }

    if (!cartBody) return;

    // عرض محتوى السلة
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'flex';
        if (cartFooter) cartFooter.style.display = 'none';
        cartBody.innerHTML = ''; // مسح المحتوى
        renderProducts(); // تحديث أزرار المنتجات (لإزالة حالة "في السلة")
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    // حساب المجموع
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);

    // رسم عناصر السلة
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item" data-product-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-actions">
                    <button class="qty-btn qty-decrease" data-product-id="${item.id}">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn qty-increase" data-product-id="${item.id}">+</button>
                    <button class="remove-btn" data-product-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    `).join('');

    // تحديث أزرار المنتجات (لإضافة حالة "في السلة")
    renderProducts();
}

// ============================================
// مشاركة المنتج (Share)
// ============================================

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const url = `${window.location.origin}${window.location.pathname}#product-${productId}`;
    
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.name,
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('تم نسخ رابط المنتج');
        });
    }
}

// ============================================
// إتمام الطلب عبر واتساب (نسخة متقدمة)
// ============================================

/**
 * فتح رابط واتساب بطرق متعددة لضمان العمل داخل المتصفحات الداخلية (تيك توك)
 */
function openWhatsApp(url) {
    // الكشف عن نظام التشغيل
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    // استخراج الرقم والنص من الرابط (للاستخدام في intent)
    let phone = '', text = '';
    try {
        const urlObj = new URL(url);
        phone = urlObj.searchParams.get('phone') || '';
        text = urlObj.searchParams.get('text') || '';
    } catch (e) {}
    
    // رابط intent للأندرويد
    const intentUrl = isAndroid && phone ? `intent://send?phone=${phone}&text=${encodeURIComponent(text)}#Intent;scheme=whatsapp;package=com.whatsapp;end` : null;
    
    let opened = false;
    
    // محاولة فتح intent إذا كان أندرويد
    if (isAndroid && intentUrl) {
        try {
            window.location.href = intentUrl;
            opened = true;
            // ننتظر قليلاً لنرى إذا تم الانتقال
            setTimeout(() => {
                if (!document.hidden) {
                    // لم ينتقل، نجرب الطرق الأخرى
                    tryRegularMethods();
                }
            }, 500);
            return;
        } catch (e) {
            // إذا فشل intent، نكمل
        }
    }
    
    tryRegularMethods();
    
    function tryRegularMethods() {
        // الطريقة 2: window.open
        const win = window.open(url, '_blank');
        if (win) {
            opened = true;
            // بعض المتصفحات تفتح نافذة فارغة، نتحقق بعد ثانية
            setTimeout(() => {
                if (win.closed) {
                    // النافذة أغلقت فوراً، جرب location.href
                    window.location.href = url;
                }
            }, 1000);
        } else {
            // الطريقة 3: location.href
            window.location.href = url;
            
            // الطريقة 4: إنشاء رابط HTML والنقر عليه
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                document.body.removeChild(link);
            }, 100);
        }
        
        // إذا لم يفتح بعد 2 ثانية، اعرض خيار المساعدة
        setTimeout(() => {
            if (!document.hidden && !window.location.href.includes('whatsapp')) {
                showExternalBrowserOption(url);
            }
        }, 2000);
    }
}

/**
 * عرض خيار الفتح في متصفح خارجي أو نسخ الرابط
 */
function showExternalBrowserOption(url) {
    // إزالة أي خيار سابق
    const existing = document.querySelector('.external-browser-option');
    if (existing) existing.remove();
    
    const externalDiv = document.createElement('div');
    externalDiv.className = 'external-browser-option';
    externalDiv.innerHTML = `
        <div class="external-content">
            <p>لم يتم فتح واتساب تلقائياً. يمكنك:</p>
            <button class="btn btn-primary" id="retryWhatsApp">محاولة مرة أخرى</button>
            <button class="btn btn-secondary" id="copyWhatsAppLink">نسخ الرابط</button>
            <button class="close-external">×</button>
        </div>
    `;
    
    // إضافة الأنماط (يمكن نقلها لملف CSS لاحقاً)
    const style = document.createElement('style');
    style.textContent = `
        .external-browser-option {
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow-hover);
            z-index: 10000;
            padding: 15px;
            direction: rtl;
            animation: slideUp 0.3s ease;
        }
        .external-content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
        }
        .external-content p {
            flex: 1;
            margin: 0;
            font-weight: 600;
            color: var(--text-dark);
            font-size: 0.9rem;
        }
        .external-content .btn {
            padding: 8px 16px;
            font-size: 0.85rem;
        }
        .close-external {
            background: transparent;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            color: var(--text-light);
            padding: 0 5px;
        }
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // إضافة الأحداث
    externalDiv.querySelector('#retryWhatsApp').addEventListener('click', () => {
        externalDiv.remove();
        openWhatsApp(url); // إعادة المحاولة
    });
    
    externalDiv.querySelector('#copyWhatsAppLink').addEventListener('click', () => {
        copyToClipboard(url);
        showNotification('تم نسخ الرابط');
        externalDiv.remove();
    });
    
    externalDiv.querySelector('.close-external').addEventListener('click', () => {
        externalDiv.remove();
    });
    
    document.body.appendChild(externalDiv);
    
    // إزالة تلقائية بعد 15 ثانية
    setTimeout(() => {
        if (externalDiv.parentNode) externalDiv.remove();
    }, 15000);
}

/**
 * نسخ النص إلى الحافظة
 */
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
    
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('فشل النسخ', err);
        }
        document.body.removeChild(textarea);
    }
}

/**
 * دالة الدفع الرئيسية
 */
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

    const phone = '22230764882'; // بدون علامة +

    // بناء نص الرسالة
    let message = 'السلام عليكم، أود طلب المنتجات التالية:\n\n';
    cart.forEach((item, index) => {
        message += `${index + 1}- ${item.name}\n`;
        message += `الكمية: ${item.quantity}\n`;
        message += `السعر: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `المجموع الكلي: ${formatPrice(total)}\n`;
    message += `العنوان: ${location}\n`;

    // استخدام رابط api.whatsapp.com (قد يكون أكثر توافقاً)
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    // فتح الرابط بالطريقة المتوافقة
    openWhatsApp(url);
}

// ============================================
// معالجات الأحداث (Event Listeners)
// ============================================

function initEventListeners() {
    const nav = document.getElementById('nav');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.getElementById('cartClose');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');
    const searchOverlay = document.getElementById('searchOverlay');

    // القائمة المتنقلة
    mobileMenuBtn?.addEventListener('click', () => nav.classList.toggle('active'));

    // البحث
    searchBtn?.addEventListener('click', () => searchOverlay?.classList.add('active'));
    searchClose?.addEventListener('click', () => searchOverlay?.classList.remove('active'));
    searchOverlay?.addEventListener('click', (e) => {
        if (e.target === searchOverlay) searchOverlay.classList.remove('active');
    });

    // فتح وإغلاق السلة
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
        // تأخير بسيط لتركيز حقل العنوان
        setTimeout(() => {
            document.getElementById('customerLocation')?.focus();
        }, 250);
    });

    cartClose?.addEventListener('click', () => {
        cartSidebar?.classList.remove('active');
        cartOverlay?.classList.remove('active');
    });

    cartOverlay?.addEventListener('click', () => {
        cartSidebar?.classList.remove('active');
        cartOverlay?.classList.remove('active');
        nav?.classList.remove('active');
    });

    // زر الدفع
    checkoutBtn?.addEventListener('click', checkout);

    // الاستماع للأحداث على المستند (delegation)
    document.body.addEventListener('click', handleBodyClick);

    // تمرير سلس للروابط (يشمل جميع الروابط الداخلية ما عدا روابط المنتجات)
    document.body.addEventListener('click', handleSmoothScroll);

    // العودة من التفاصيل عند الضغط على زر الرجوع في المتصفح
    window.addEventListener('popstate', handlePopState);
}

/**
 * معالج النقر العام على الجسم
 */
function handleBodyClick(e) {
    // فتح تفاصيل المنتج عند النقر على الصورة أو الاسم
    const productCard = e.target.closest('.product-image[data-id], .product-name[data-id]');
    if (productCard) {
        showProductDetail(parseInt(productCard.dataset.id, 10));
        return;
    }

    // إضافة إلى السلة
    const addBtn = e.target.closest('.add-to-cart, .add-to-cart-detail');
    if (addBtn) {
        addToCart(parseInt(addBtn.dataset.id, 10));
        return;
    }

    // مشاركة المنتج
    const shareBtn = e.target.closest('.share-btn');
    if (shareBtn) {
        shareProduct(parseInt(shareBtn.dataset.id, 10));
        return;
    }

    // التنقل بين صور المنتج
    const galleryNav = e.target.closest('.gallery-nav');
    if (galleryNav) {
        changeProductImage(parseInt(galleryNav.dataset.dir, 10));
        return;
    }

    // اختيار صورة مصغرة
    const thumbnail = e.target.closest('.thumbnail[data-index]');
    if (thumbnail && currentProduct) {
        const index = parseInt(thumbnail.dataset.index, 10);
        if (!isNaN(index) && currentProduct.images && currentProduct.images[index]) {
            currentImageIndex = index;
            document.getElementById('mainProductImage').src = currentProduct.images[currentImageIndex];
            document.querySelectorAll('.thumbnail').forEach((t, i) => {
                t.classList.toggle('active', i === currentImageIndex);
            });
        }
        return;
    }

    // أزرار كمية المنتج في السلة
    const qtyBtn = e.target.closest('.qty-increase, .qty-decrease, .remove-btn');
    if (qtyBtn) {
        const pid = parseInt(qtyBtn.dataset.productId, 10);
        if (isNaN(pid)) return;
        
        if (qtyBtn.classList.contains('qty-increase')) {
            const item = cart.find(i => i.id === pid);
            if (item) updateQuantity(pid, item.quantity + 1);
        } else if (qtyBtn.classList.contains('qty-decrease')) {
            const item = cart.find(i => i.id === pid);
            if (item) updateQuantity(pid, item.quantity - 1);
        } else if (qtyBtn.classList.contains('remove-btn')) {
            removeFromCart(pid);
        }
    }
}

/**
 * معالج التمرير السلس لجميع الروابط الداخلية (عدا روابط المنتجات)
 */
function handleSmoothScroll(e) {
    // استهداف أي رابط يبدأ بـ # وليس #product-
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#product-')) {
        e.preventDefault();
        
        // إغلاق صفحة التفاصيل إذا كانت مفتوحة
        const productDetail = document.getElementById('productDetail');
        if (productDetail && productDetail.style.display === 'block') {
            closeProductDetail();
        }
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // إغلاق القائمة في الموبايل
        document.getElementById('nav')?.classList.remove('active');
    }
}

/**
 * معالج زر الرجوع في المتصفح
 */
function handlePopState(e) {
    if (e.state && e.state.productId) {
        showProductDetail(e.state.productId);
    } else {
        closeProductDetail();
    }
}

// ============================================
// وضع الظلام (Dark Mode)
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
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
}

// ============================================
// التهيئة الرئيسية (Initialization)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // تنظيف مؤقت للاختبار (يمكن إزالته)
    localStorage.removeItem('productsAvailability');
    localStorage.removeItem('cart');

    // تحميل البيانات
    loadAvailability();
    
    // تهيئة العناصر
    initHeroSlider();
    initThemeToggle();
    initEventListeners();
    
    // عرض المنتجات
    renderProducts();
    updateCartUI();

    // التحقق من وجود هاش لتفاصيل المنتج
    if (window.location.hash.startsWith('#product-')) {
        const productId = parseInt(window.location.hash.replace('#product-', ''), 10);
        if (!isNaN(productId)) {
            showProductDetail(productId);
        }
    }
});