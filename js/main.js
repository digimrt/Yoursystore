// ==================== MAIN.JS ====================
// الوظائف العامة للموقع - نسخة منقحة

// ============ THEME MANAGEMENT ============
const THEME_STORAGE_KEY = 'mauri-theme';

function getCurrentTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    applyTheme(theme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeToggle(theme);
}

function toggleTheme() {
    const current = getCurrentTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function updateThemeToggle(theme) {
    const toggleBtns = document.querySelectorAll('[data-theme-toggle]');
    toggleBtns.forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
}

function initTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
}

// ============ MOBILE MENU ============
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('[data-menu-toggle] i');
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        
        // تحديث الترجمة عند فتح القائمة (لأنها كانت مخفية)
        if (!mobileMenu.classList.contains('hidden')) {
            if (typeof updatePageTranslations === 'function') {
                updatePageTranslations();
            }
        }
        
        if (menuIcon) {
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        }
    }
}

// ============ SEARCH ============
let searchTimeout;

function handleSearch(input) {
    clearTimeout(searchTimeout);
    const query = input.value.trim();
    
    searchTimeout = setTimeout(() => {
        if (query.length >= 2) {
            const results = searchProducts(query);
            displaySearchResults(results, input);
        } else {
            hideSearchResults();
        }
    }, 300);
}

function displaySearchResults(results, input) {
    let dropdown = document.getElementById('search-dropdown');
    
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'search-dropdown';
        dropdown.className = 'absolute top-full mt-2 w-full bg-background border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto';
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(dropdown);
    }
    
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div class="p-4 text-center text-muted-foreground">
                ${getCurrentLanguage() === 'ar' ? 'لا توجد نتائج' : getCurrentLanguage() === 'fr' ? 'Aucun résultat' : 'No results found'}
            </div>
        `;
    } else {
        dropdown.innerHTML = results.slice(0, 8).map(product => `
            <a href="product.html?id=${product.id}" class="flex items-center gap-3 p-3 hover:bg-muted transition-colors border-b border-border last:border-0">
                <img src="${product.image}" alt="${getProductName(product)}" class="w-12 h-12 object-cover rounded">
                <div class="flex-1 min-w-0">
                    <div class="font-medium truncate">${getProductName(product)}</div>
                    <div class="text-accent font-semibold">${formatPrice(product.price)}</div>
                </div>
            </a>
        `).join('');
    }
    
    dropdown.classList.remove('hidden');
}

function hideSearchResults() {
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-search-container]')) hideSearchResults();
});

// ============ PRODUCT CARD RENDERING ============
function renderProductCard(product) {
    const quantity = getCartItemQuantity(product.id);
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    const discountPercent = hasDiscount ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    const hasVariants = product.variants && product.variants.length > 0;
    
    let isOutOfStock = false;
    let isComingSoon = false;
    
    if (!hasVariants) {
        if (product.comingSoon === true) {
            isComingSoon = true;
        } else if (product.inStock === false) {
            isOutOfStock = true;
        }
    }
    
    return `
        <div class="product-card group bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/30" data-product-id="${product.id}">
            <a href="product.html?id=${product.id}" class="block relative aspect-square overflow-hidden">
                <img src="${product.image}" alt="${getProductName(product)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                ${hasDiscount ? `<span class="absolute top-2 ${getCurrentLanguage() === 'ar' ? 'left-2' : 'right-2'} bg-accent text-white text-xs font-bold px-2 py-1 rounded">-${discountPercent}%</span>` : ''}
                ${product.isNew ? `<span class="absolute top-2 ${getCurrentLanguage() === 'ar' ? 'right-2' : 'left-2'} bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">${t('slider_new')}</span>` : ''}
                ${isComingSoon ? `<span class="absolute bottom-2 left-2 right-2 bg-blue-600 text-white text-xs font-bold py-1 rounded text-center">${t('coming_soon')}</span>` : ''}
                ${isOutOfStock ? `<span class="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs font-bold py-1 rounded text-center">${t('out_of_stock')}</span>` : ''}
            </a>
            <div class="p-4">
                <a href="product.html?id=${product.id}" class="block">
                    <h3 class="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-accent transition-colors text-center">${getProductName(product)}</h3>
                </a>
                <div class="flex items-center justify-center gap-2 mb-3">
                    <span class="text-accent font-bold text-lg">${formatPrice(product.price)}</span>
                    ${hasDiscount ? `<span class="text-muted-foreground line-through text-sm">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                
                ${hasVariants ? `
                    <a href="product.html?id=${product.id}&scrollTo=variants" class="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-list"></i>
                        <span>${t('browse_variants')}</span>
                    </a>
                ` : isComingSoon ? `
                    <button disabled class="w-full py-2.5 px-4 bg-blue-400 text-white rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2">
                        <i class="fa-solid fa-clock"></i>
                        <span>${t('coming_soon')}</span>
                    </button>
                ` : isOutOfStock ? `
                    <button disabled class="w-full py-2.5 px-4 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2">
                        <i class="fa-solid fa-ban"></i>
                        <span>${t('out_of_stock')}</span>
                    </button>
                ` : `
                    <button data-add-btn onclick="addToCart('${product.id}')" class="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 ${quantity > 0 ? 'hidden' : ''}">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>${t('add_to_cart')}</span>
                    </button>
                    <div data-qty-controls class="flex items-center justify-center gap-3 ${quantity > 0 ? '' : 'hidden'}">
                        <button onclick="decrementQuantity('${product.id}')" class="w-10 h-10 rounded-lg bg-secondary text-foreground font-bold transition-all hover:bg-accent hover:text-white active:scale-95"><i class="fa-solid fa-minus"></i></button>
                        <span data-qty-display class="w-8 text-center font-bold text-lg">${quantity}</span>
                        <button onclick="incrementQuantity('${product.id}')" class="w-10 h-10 rounded-lg bg-secondary text-foreground font-bold transition-all hover:bg-accent hover:text-white active:scale-95"><i class="fa-solid fa-plus"></i></button>
                    </div>
                `}
            </div>
        </div>
    `;
}

// ============ CATEGORY FILTER ============
function renderCategoryFilters(containerId, activeCategory = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;
    const categories = ['all', ...getAllCategories()];
    container.innerHTML = categories.map(cat => `
        <button onclick="handleCategoryFilter('${cat}')"
            class="px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-accent hover:text-white'}">
            ${cat === 'all' ? t('all_categories') : t(getCategoryKey(cat))}
        </button>
    `).join('');
}

let currentCategory = 'all';
let currentSearchQuery = '';

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'all';
}

function handleCategoryFilter(category) {
    currentCategory = category;
    const url = new URL(window.location);
    if (category === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    window.history.pushState({}, '', url);
    renderProducts();
    renderCategoryFilters('category-filters', category);
}

function handleProductSearch(query) {
    currentSearchQuery = query.trim();
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');
    if (!grid) return;
    
    let products = currentSearchQuery ? searchProducts(currentSearchQuery) : getAllProducts();
    
    if (currentCategory === 'new') {
        products = products.filter(p => p.isNew === true);
    } else if (currentCategory !== 'all') {
        products = products.filter(p => p.category === currentCategory);
    }
    
    const lang = getCurrentLanguage();
    resultsCount.textContent = lang === 'ar' ? `${products.length} منتج` : lang === 'fr' ? `${products.length} produit${products.length > 1 ? 's' : ''}` : `${products.length} product${products.length > 1 ? 's' : ''}`;
    
    if (products.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        emptyState.classList.add('hidden');
        grid.innerHTML = products.map(p => renderProductCard(p)).join('');
    }
    updateCartUI();
}

function scrollToProductOnLoad() {
    const params = new URLSearchParams(window.location.search);
    const scrollToId = params.get('scrollTo');
    
    if (scrollToId) {
        setTimeout(() => {
            const targetProduct = document.querySelector(`.product-card[data-product-id="${scrollToId}"]`);
            if (targetProduct) {
                targetProduct.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetProduct.classList.add('highlight-product');
                setTimeout(() => {
                    targetProduct.classList.remove('highlight-product');
                }, 2000);
            }
        }, 500);
    }
}

// ============ CART DRAWER ============
function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        renderCartDrawer();
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function renderCartDrawer() {
    const content = document.getElementById('cart-drawer-content');
    if (!content) return;
    const items = getCartItems();
    
    let footer = content.parentElement.querySelector('.cart-footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'cart-footer';
        content.parentElement.appendChild(footer);
    }
    
    if (items.length === 0) {
        content.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-muted-foreground"><i class="fa-solid fa-cart-shopping text-6xl mb-4 opacity-50"></i><p class="text-lg">${t('cart_empty')}</p><a href="products.html" class="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">${t('cart_continue')}</a></div>`;
        footer.innerHTML = '';
        return;
    }
    
    content.innerHTML = `<div class="space-y-4 mb-6">${items.map(item => `
        <div class="flex gap-3 p-3 bg-muted rounded-lg">
            <img src="${item.image}" alt="${getProductName(item)}${item.variantName ? ` - ${item.variantName}` : ''}" class="w-20 h-20 object-cover rounded">
            <div class="flex-1 min-w-0">
                <h4 class="font-medium truncate">${getProductName(item)}${item.variantName ? ` (${item.variantName})` : ''}</h4>
                <p class="text-accent font-bold">${formatPrice(item.price)}</p>
                <div class="flex items-center gap-2 mt-2">
                    <button onclick="decrementQuantity('${item.id}', '${item.variantId || ''}')" class="w-8 h-8 rounded bg-secondary flex items-center justify-center hover:bg-accent hover:text-white"><i class="fa-solid fa-minus text-xs"></i></button>
                    <span class="w-8 text-center font-medium">${item.quantity}</span>
                    <button onclick="incrementQuantity('${item.id}', '${item.variantId || ''}')" class="w-8 h-8 rounded bg-secondary flex items-center justify-center hover:bg-accent hover:text-white"><i class="fa-solid fa-plus text-xs"></i></button>
                    <button onclick="removeFromCart('${item.id}', '${item.variantId || ''}')" class="ms-auto text-red-500 hover:text-red-600"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    `).join('')}</div>`;
    
    footer.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-medium">${t('cart_total')}:</span>
            <span class="text-xl font-bold text-accent">${formatPrice(getCartTotal())}</span>
        </div>
        <a href="cart.html" class="block w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-medium hover:opacity-90">${t('cart_checkout')}</a>
    `;
}

// ============ PAGE: CART ============
let selectedDeliveryOption = null;

function renderCartPage() {
    const items = getCartItems();
    const container = document.getElementById('cart-items-container');
    const emptyCart = document.getElementById('empty-cart');
    const orderSummary = document.getElementById('order-summary');
    if (!container) return;
    
    if (items.length === 0) {
        container.classList.add('hidden');
        emptyCart?.classList.remove('hidden');
        orderSummary?.classList.add('hidden');
        return;
    }
    container.classList.remove('hidden');
    emptyCart?.classList.add('hidden');
    orderSummary?.classList.remove('hidden');
    
    container.innerHTML = `<div class="space-y-4">${items.map(item => `
        <div class="flex gap-4 p-4 bg-card border border-border rounded-xl">
            <a href="product.html?id=${item.id}" class="shrink-0"><img src="${item.image}" alt="${getProductName(item)}${item.variantName ? ` - ${item.variantName}` : ''}" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"></a>
            <div class="flex-1 min-w-0">
                <a href="product.html?id=${item.id}" class="font-bold text-lg hover:text-accent transition-colors line-clamp-2">${getProductName(item)}</a>
                ${item.variantName ? `<p class="text-sm text-muted-foreground">${item.variantName}</p>` : ''}
                <p class="text-accent font-bold text-xl mt-1">${formatPrice(item.price)}</p>
                <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center gap-2">
                        <button onclick="decrementQuantity('${item.id}', '${item.variantId || ''}')" class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"><i class="fa-solid fa-minus"></i></button>
                        <span class="w-12 text-center font-bold text-lg">${item.quantity}</span>
                        <button onclick="incrementQuantity('${item.id}', '${item.variantId || ''}')" class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button onclick="removeFromCart('${item.id}', '${item.variantId || ''}')" class="text-red-500 hover:text-red-600 transition-colors p-2"><i class="fa-solid fa-trash"></i></button>
                </div>
                <p class="text-muted-foreground mt-2">${t('total_label')}: <span class="text-foreground font-bold">${formatPrice(item.price * item.quantity)}</span></p>
            </div>
        </div>
    `).join('')}</div>`;
    
    const total = getCartTotal();
    const itemsCount = getCartCount();
    
    const itemsCountElement = document.getElementById('items-count');
    const totalElement = document.getElementById('total');
    
    if (itemsCountElement) itemsCountElement.textContent = itemsCount;
    if (totalElement) totalElement.textContent = formatPrice(total);
    
    updateFreeShippingUI(total);
    updateCheckoutButton();
    
    if (selectedDeliveryOption === 'delivery') {
        const deliveryAddressLabel = document.querySelector('#delivery-form label');
        if (deliveryAddressLabel) {
            const currentTotal = getCartTotal();
            const isFreeShipping = getFreeShippingStatus(currentTotal);
            const freeMsg = t('free_shipping_eligible');
            const originalText = t('checkout_address');
            
            if (isFreeShipping) {
                deliveryAddressLabel.innerHTML = `${originalText} <span class="text-green-600 dark:text-green-400 text-sm">(${freeMsg})</span>`;
            } else {
                deliveryAddressLabel.innerHTML = originalText;
            }
        }
    }
}

function selectDeliveryOption(option) {
    selectedDeliveryOption = option;
    const pickupOption = document.querySelector('[data-option="pickup"]');
    const deliveryOption = document.querySelector('[data-option="delivery"]');
    const pickupDot = document.getElementById('pickup-dot');
    const deliveryDot = document.getElementById('delivery-dot');
    const pickupInfo = document.getElementById('pickup-info');
    const deliveryForm = document.getElementById('delivery-form');
    const deliveryAddressLabel = document.querySelector('#delivery-form label');
    
    pickupOption?.classList.remove('selected');
    deliveryOption?.classList.remove('selected');
    pickupDot?.classList.add('hidden');
    deliveryDot?.classList.add('hidden');
    pickupInfo?.classList.add('hidden');
    deliveryForm?.classList.add('hidden');
    
    if (option === 'pickup') {
        pickupOption?.classList.add('selected');
        pickupDot?.classList.remove('hidden');
        pickupInfo?.classList.remove('hidden');
    } else {
        deliveryOption?.classList.add('selected');
        deliveryDot?.classList.remove('hidden');
        deliveryForm?.classList.remove('hidden');
        
        if (deliveryAddressLabel) {
            const total = getCartTotal();
            const isFreeShipping = getFreeShippingStatus(total);
            const freeMsg = t('free_shipping_eligible');
            const originalText = t('checkout_address');
            
            if (isFreeShipping) {
                deliveryAddressLabel.innerHTML = `${originalText} <span class="text-green-600 dark:text-green-400 text-sm">(${freeMsg})</span>`;
            } else {
                deliveryAddressLabel.innerHTML = originalText;
            }
        }
    }
    updateCheckoutButton();
}

function updateCheckoutButton() {
    const btn = document.getElementById('checkout-btn');
    const items = getCartItems();
    const address = document.getElementById('delivery-address')?.value.trim() || '';
    if (items.length === 0 || !selectedDeliveryOption) btn.disabled = true;
    else if (selectedDeliveryOption === 'delivery' && !address) btn.disabled = true;
    else btn.disabled = false;
}

function handleCheckout() {
    const items = getCartItems();
    if (items.length === 0) return;
    const address = document.getElementById('delivery-address')?.value.trim() || '';
    sendToWhatsApp(selectedDeliveryOption, address);
}

// ============ CONTACT FORM HANDLER ============
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email') || '';
    const phone = formData.get('phone');
    const message = formData.get('message');
    const lang = getCurrentLanguage();
    
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        showToast(lang === 'ar' ? 'البريد الإلكتروني غير صحيح' : lang === 'fr' ? 'Email invalide' : 'Invalid email', 'error');
        return;
    }
    
    const phoneRegex = /^[\d\s\+\-\(\)]{8,20}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showToast(lang === 'ar' ? 'رقم الهاتف غير صحيح' : lang === 'fr' ? 'Numéro de téléphone invalide' : 'Invalid phone number', 'error');
        return;
    }
    
    const emailText = email || (lang === 'ar' ? 'لم يحدد' : lang === 'fr' ? 'Non spécifié' : 'Not specified');
    
    let whatsappMessage = '';
    if (lang === 'ar') whatsappMessage = `رسالة جديدة من موقع Yoursy Store:%0A%0Aالاسم: ${name}%0Aالبريد: ${emailText}%0Aالهاتف: ${phone}%0A%0Aالرسالة:%0A${message}`;
    else if (lang === 'fr') whatsappMessage = `Nouveau message du site Yoursy Store:%0A%0ANom: ${name}%0AEmail: ${emailText}%0ATéléphone: ${phone}%0A%0AMessage:%0A${message}`;
    else whatsappMessage = `New message from Yoursy Store website:%0A%0AName: ${name}%0AEmail: ${emailText}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;
    
    const url = `https://wa.me/22230764882?text=${whatsappMessage}`;
    if (isTikTokBrowser()) showTikTokWarning(url);
    else { window.open(url, '_blank'); showToast(t('toast_sent')); form.reset(); }
}

// ============ SCROLL TO TOP ============
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        else scrollBtn.classList.add('opacity-0', 'pointer-events-none');
    });
}

// ============ LANGUAGE SELECTOR ============
function initLanguageSelector() {
    const selectors = document.querySelectorAll('[data-lang-select]');
    selectors.forEach(select => {
        select.value = getCurrentLanguage();
        select.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            window.location.reload();
        });
    });
}

// ============ HORIZONTAL SCROLL FUNCTION ============
function scrollHorizontally(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const scrollAmount = 350;
    const isRTL = document.documentElement.dir === 'rtl';
    
    if (direction === 'next') {
        if (isRTL) {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    } else if (direction === 'prev') {
        if (isRTL) {
            container.scrollLeft += scrollAmount;
        } else {
            container.scrollLeft -= scrollAmount;
        }
    }
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initLanguageSelector();
    initScrollToTop();
    
    document.querySelectorAll('.scroll-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const containerId = this.getAttribute('data-scroll');
            const direction = this.getAttribute('data-direction');
            if (containerId && direction) {
                scrollHorizontally(containerId, direction);
            }
        });
    });
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => document.getElementById('mobile-menu')?.classList.add('hidden'));
    });
    
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape') { 
            hideSearchResults(); 
            closeCartDrawer(); 
        } 
    });
    
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarOnScroll() {
        if (window.innerWidth < 768) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('hide');
            } else {
                navbar.classList.remove('hide');
            }
            lastScrollTop = scrollTop;
        } else {
            navbar.classList.remove('hide');
        }
    }
    
    window.addEventListener('scroll', handleNavbarOnScroll);
    window.addEventListener('resize', handleNavbarOnScroll);
    
    window.addEventListener('cartUpdated', () => {
        updateCartUI();
        const drawer = document.getElementById('cart-drawer');
        if (drawer && drawer.classList.contains('open')) renderCartDrawer();
        if (document.getElementById('cart-items-container')) renderCartPage();
    });
    
    if (document.getElementById('products-grid')) {
        currentCategory = getCategoryFromURL();
        renderCategoryFilters('category-filters', currentCategory);
        renderProducts();
        scrollToProductOnLoad();
        
        window.addEventListener('popstate', () => {
            currentCategory = getCategoryFromURL();
            renderCategoryFilters('category-filters', currentCategory);
            renderProducts();
            scrollToProductOnLoad();
        });
    }
    
    if (document.getElementById('cart-items-container')) {
        renderCartPage();
        const addressField = document.getElementById('delivery-address');
        if (addressField) addressField.addEventListener('input', updateCheckoutButton);
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);
    
    updateCartUI();
});

window.addEventListener('beforeunload', () => sessionStorage.setItem('scrollPosition', window.scrollY));
window.addEventListener('load', () => {
    const scrollPos = sessionStorage.getItem('scrollPosition');
    if (scrollPos && document.referrer.includes('product.html')) {
        window.scrollTo(0, parseInt(scrollPos));
        sessionStorage.removeItem('scrollPosition');
    }
});