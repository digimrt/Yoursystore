// Cart Management for Yoursy Store
const CART_STORAGE_KEY = 'mauri-cart';
const WHATSAPP_NUMBER = '22230764882';
const FREE_SHIPPING_THRESHOLD = 2000;
const FREE_SHIPPING_START_SHOW = 1800;

function getCart() {
    try {
        const cart = localStorage.getItem(CART_STORAGE_KEY);
        if (!cart) return [];
        const parsedCart = JSON.parse(cart);
        return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (e) {
        console.error('Error reading cart:', e);
        return [];
    }
}

function saveCart(cart) {
    try {
        const validCart = Array.isArray(cart) ? cart : [];
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(validCart));
        updateCartUI();
        dispatchCartEvent();
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}

function clearCart() {
    saveCart([]);
    showToast(t('cart_cleared') || 'تم تفريغ السلة');
}

function dispatchCartEvent() {
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: getCart() }));
}

function addToCart(productId, quantity = 1, variantId = null) {
    if (variantId === '') variantId = null;

    const product = getProductById(productId);
    if (!product) return false;

    if (!variantId && (!product.variants || product.variants.length === 0)) {
        if (product.inStock === false) {
            showToast(t('out_of_stock'), 'error');
            return false;
        }
    }

    let variant = null;
    let finalPrice = product.price;
    let variantImage = product.image;
    let variantName = null;

    if (variantId) {
        variant = getVariantById(productId, variantId);
        if (!variant || variant.inStock === false) {
            showToast(t('out_of_stock'), 'error');
            return false;
        }

        finalPrice = variant.price;
        variantImage = variant.image || product.image;
        variantName = getVariantName(variant);
    }

    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === productId && item.variantId === variantId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: productId,
            variantId: variantId,
            quantity: quantity,
            price: finalPrice,
            image: variantImage,
            variantName: variantName
        });
    }

    saveCart(cart);
    showToast(t('toast_added'));
    return true;
}

function removeFromCart(productId, variantId = null) {
    if (variantId === '') variantId = null;
    let cart = getCart();
    cart = cart.filter(item => !(item.id === productId && item.variantId === variantId));
    saveCart(cart);
    showToast(t('toast_removed') || 'تم إزالة المنتج من السلة');
}

function updateCartQuantity(productId, quantity, variantId = null) {
    if (variantId === '') variantId = null;
    const cart = getCart();
    const index = cart.findIndex(item => item.id === productId && item.variantId === variantId);
    if (index > -1) {
        if (quantity <= 0) {
            removeFromCart(productId, variantId);
        } else {
            cart[index].quantity = quantity;
            saveCart(cart);
            showToast(t('toast_updated'));
        }
    }
}

function incrementQuantity(productId, variantId = null) {
    if (variantId === '') variantId = null;
    const cart = getCart();
    const item = cart.find(item => item.id === productId && item.variantId === variantId);
    if (item) {
        updateCartQuantity(productId, item.quantity + 1, variantId);
    } else {
        addToCart(productId, 1, variantId);
    }
}

function decrementQuantity(productId, variantId = null) {
    if (variantId === '') variantId = null;
    const cart = getCart();
    const item = cart.find(item => item.id === productId && item.variantId === variantId);
    if (item && item.quantity > 1) {
        updateCartQuantity(productId, item.quantity - 1, variantId);
    } else if (item) {
        removeFromCart(productId, variantId);
    }
}

function getCartItemQuantity(productId, variantId = null) {
    if (variantId === '') variantId = null;
    const cart = getCart();
    const item = cart.find(item => item.id === productId && item.variantId === variantId);
    return item ? item.quantity : 0;
}

function getCartItems() {
    const cart = getCart();
    return cart.map(item => {
        const product = getProductById(item.id);
        if (!product) return null;
        let variant = null;
        let variantName = item.variantName;
        let effectivePrice = item.price || product.price;
        let variantImage = item.image || product.image;

        if (item.variantId) {
            variant = getVariantById(item.id, item.variantId);
            if (variant) {
                variantName = getVariantName(variant);
                effectivePrice = variant.price;
                variantImage = variant.image || product.image;
            }
        }

        return {
            ...product,
            id: product.id,
            variantId: item.variantId,
            variant: variant,
            variantName: variantName,
            subtitle: (product.variants && product.variants.length > 0) ? null : product.subtitle,
            quantity: item.quantity,
            price: effectivePrice,
            image: variantImage
        };
    }).filter(item => item !== null);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    const items = getCartItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getFreeShippingStatus(total) {
    return total >= FREE_SHIPPING_THRESHOLD;
}

function getRemainingForFreeShipping(total) {
    if (total >= FREE_SHIPPING_THRESHOLD) return 0;
    return FREE_SHIPPING_THRESHOLD - total;
}

function updateFreeShippingUI(total) {
    const freeBanner = document.getElementById('free-shipping-banner');
    const shippingProgress = document.getElementById('shipping-progress');
    const progressBar = document.getElementById('shipping-progress-bar');

    if (!freeBanner || !shippingProgress) return;

    const isEligible = getFreeShippingStatus(total);
    const percentage = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    if (isEligible) {
        freeBanner.classList.remove('hidden');
        shippingProgress.classList.add('hidden');
    } else {
        freeBanner.classList.add('hidden');
        if (total >= FREE_SHIPPING_START_SHOW) {
            shippingProgress.classList.remove('hidden');
        } else {
            shippingProgress.classList.add('hidden');
        }
    }
}

function updateCartUI() {
    const count = getCartCount();
    const countBadges = document.querySelectorAll('[data-cart-count]');
    countBadges.forEach(badge => {
        badge.textContent = count;
        if (count > 0) {
            badge.classList.remove('hidden');
            badge.style.display = 'flex';
        } else {
            badge.classList.add('hidden');
            badge.style.display = 'none';
        }
    });

    document.querySelectorAll('[data-product-id]').forEach(container => {
        const productId = container.getAttribute('data-product-id');
        const variantId = container.getAttribute('data-variant-id') || null;
        const quantity = getCartItemQuantity(productId, variantId);

        const addBtn = container.querySelector('[data-add-btn]');
        const qtyControls = container.querySelector('[data-qty-controls]');
        const qtyDisplay = container.querySelector('[data-qty-display]');

        if (addBtn && qtyControls) {
            if (quantity > 0) {
                addBtn.classList.add('hidden');
                qtyControls.classList.remove('hidden');
                if (qtyDisplay) qtyDisplay.textContent = quantity;
            } else {
                addBtn.classList.remove('hidden');
                qtyControls.classList.add('hidden');
            }
        }
    });

    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }

    const drawer = document.getElementById('cart-drawer');
    if (drawer && drawer.classList.contains('open') && typeof renderCartDrawer === 'function') {
        renderCartDrawer();
    }
}

function buildWhatsAppMessage(deliveryType, address = '') {
    const items = getCartItems();
    const lang = getCurrentLanguage();
    const total = getCartTotal();
    const isFreeShipping = getFreeShippingStatus(total);

    let message = '';

    if (lang === 'ar') message = 'السلام عليكم، أريد طلب المنتجات التالية:%0A%0A';
    else if (lang === 'fr') message = 'Bonjour, je voudrais commander les produits suivants:%0A%0A';
    else message = 'Hello, I would like to order the following products:%0A%0A';

    items.forEach(item => {
    let name = getProductName(item);
    let subtitleText = '';
    // فقط المنتجات التي ليس لها variants تظهر subtitle
    if ((!item.variants || item.variants.length === 0) && item.subtitle) {
        const sub = getProductSubtitle(item);
        if (sub && sub.trim() !== '') {
            subtitleText = ` (${sub})`;
        }
    }
    const variantText = item.variantName ? ` [${item.variantName}]` : '';
    message += `• ${name}${subtitleText}${variantText} x${item.quantity} - ${formatPrice(item.price * item.quantity)}%0A`;
});

    message += '%0A';

    if (isFreeShipping) {
        if (lang === 'ar') message += `✨ ملاحظة: التوصيل مجاني ✨%0A`;
        else if (lang === 'fr') message += `✨ Note: Livraison gratuite ✨%0A`;
        else message += `✨ Note: Free shipping ✨%0A`;
        message += '%0A';
    }

    if (lang === 'ar') message += `المجموع: ${formatPrice(total)}%0A%0A`;
    else if (lang === 'fr') message += `Total: ${formatPrice(total)}%0A%0A`;
    else message += `Total: ${formatPrice(total)}%0A%0A`;

    if (deliveryType === 'pickup') {
        if (lang === 'ar') message += `طريقة الاستلام: سأستلم الطلب من المتجر%0Aالعنوان: عين الطلح قرب مجمع الطينطان`;
        else if (lang === 'fr') message += `Méthode de livraison: Je récupérerai ma commande au magasin%0AAdresse: Ain Talh, près du complexe Tintane`;
        else message += `Delivery method: I will pick up the order from the store%0AAddress: Ain Talh, near Tintane Complex`;
    } else {
        if (lang === 'ar') message += `طريقة الاستلام: توصيل للمنزل%0Aالعنوان: ${address}`;
        else if (lang === 'fr') message += `Méthode de livraison: Livraison à domicile%0AAdresse: ${address}`;
        else message += `Delivery method: Home delivery%0AAddress: ${address}`;
    }
    return message;
}

function sendToWhatsApp(deliveryType, address = '') {
    const items = getCartItems();
    if (items.length === 0) {
        showToast(t('cart_empty'), 'error');
        return;
    }

    const message = buildWhatsAppMessage(deliveryType, address);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    if (isTikTokBrowser()) showTikTokWarning(url);
    else window.open(url, '_blank');
}

function isTikTokBrowser() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.includes('TikTok') || ua.includes('BytedanceWebview') || ua.includes('musical_ly');
}

function showTikTokWarning(url) {
    const modal = document.getElementById('tiktok-modal');
    if (modal) {
        modal.classList.remove('hidden');
        const openBtn = modal.querySelector('[data-open-external]');
        if (openBtn) {
            openBtn.onclick = () => {
                window.location.href = `intent://${url.replace('https://', '')}#Intent;scheme=https;end`;
            };
        }
    } else {
        alert(t('tiktok_warning'));
        navigator.clipboard.writeText(url.replace(/%0A/g, '\n'));
    }
}

function showToast(message, type = 'success') {
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());

    const toast = document.createElement('div');
    toast.className = `toast-notification fixed bottom-4 ${getCurrentLanguage() === 'ar' ? 'left-4' : 'right-4'} z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-full opacity-0`;
    if (type === 'success') toast.classList.add('bg-green-600', 'text-white');
    else if (type === 'error') toast.classList.add('bg-red-600', 'text-white');
    else toast.classList.add('bg-gray-800', 'text-white', 'dark:bg-gray-200', 'dark:text-gray-800');

    toast.innerHTML = `<div class="flex items-center gap-2"><i class="fa-solid ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i><span>${message}</span></div>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.remove('translate-y-full', 'opacity-0'));
    setTimeout(() => {
        toast.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

window.addEventListener('storage', (e) => {
    if (e.key === CART_STORAGE_KEY) updateCartUI();
});

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    console.log('Cart system ready.');
});