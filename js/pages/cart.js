/* cart.js */

export const products = [
    { img: "./img/cart/product1.avif", name: "焦糖馬卡龍", price: 450, qty: 2 },
    { img: "./img/cart/product2.avif", name: "草莓塔", price: 450, qty: 1 },
    { img: "./img/cart/product3.avif", name: "巧克力布朗尼", price: 450, qty: 3 },
];

export default function cart() {
    const el = document.createElement("section");

    const subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
    const shipping = 300;
    const total = subtotal + shipping;

    const itemsHTML = products.map(p => `
        <div class="cart__item">
            <div class="cart__item-info">
                <img src="${p.img}" alt="${p.name}" class="cart__item-image">
                <div class="cart__item-details">
                    <div class="cart__item-header">
                        <p class="cart__item-name">${p.name}</p>
                        <p class="cart__item-price">NT$ ${p.price}</p>
                    </div>
                    <div class="cart__item-quantity">
                        <button type="button" class="cart__qty-btn">-</button>
                        <span class="cart__qty-value">${p.qty}</span>
                        <button type="button" class="cart__qty-btn">+</button>
                    </div>
                </div>
            </div>
            <hr class="cart__divider--sm">
            <div class="cart__item-summary">
                <p class="cart__item-total">NT$ ${p.price * p.qty}</p>
                <button type="button" class="cart__item-delete">
                    <img src="./img/ic-delete.png" alt="刪除商品" class="cart__delete-icon">
                </button>
            </div>
            <hr class="cart__divider--sm">
        </div>
        <hr class="cart__divider">
    `).join("");

    el.innerHTML = `
    <section class="cart">
        <!-- 左側：購物車內容 -->
        <div class="cart__content">
            <h2 class="cart__title">您的購物車</h2>

            <div class="cart__items">
                <!-- 商品項目 -->
                ${itemsHTML}
            </div>
        </div>

        <!-- 右側：訂單摘要 -->
        <aside class="cart__summary">
            <h2 class="cart__summary-title">訂單摘要</h2>
            <hr class="cart__summary-divider">

            <div class="cart__summary-list">
                <p class="cart__summary-item">
                    <span>小計</span>
                    <span>NT$ ${subtotal}</span>
                </p>
                <p class="cart__summary-item">
                    <span>運費</span>
                    <span>NT$ ${shipping}</span>
                </p>
                <p class="cart__summary-item cart__summary-item--total">
                    <span>總計</span>
                    <span>NT$ ${total}</span>
                </p>
            </div>

            <button type="button" class="cart__checkout-btn">
                結帳
            </button>
        </aside>
    </section>
  `;

    const checkoutBtn = el.querySelector(".cart__checkout-btn");
    checkoutBtn.addEventListener("click", () => {
        location.hash = "checkout1";
    })

    return el;
}
