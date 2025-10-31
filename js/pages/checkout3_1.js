/* checkout3_1.js */

import { products } from "./cart.js";

export default function checkout3_1() {
    const el = document.createElement("section");

    const itemsHTML = products.map(p => `
        <div class="checkout-cart__item">
            <div class="checkout-cart__image-wrapper">
                <img src="${p.img}" alt="${p.name}" class="checkout-cart__image">
            </div>
            <div class="checkout-cart__details">
                <p class="checkout-cart__name">${p.name}（${p.qty}）</p>
                <p class="checkout-cart__price">NT$ ${p.price * p.qty}</p>
            </div>
        </div>
    `).join("");

    const subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
    const shipping = 300;
    const total = subtotal + shipping;

    el.innerHTML = `
    <section class="checkout">

        <!-- 左側表單區 -->
        <form class="checkout__form">
            <fieldset class="checkout__fieldset">

                <!-- 標題與進度條 -->
                <div class="checkout__header">
                    <h2 class="checkout__title">發票</h2>
                    <div class="checkout__progress">
                        <div class="checkout__progress-circle checkout__progress-circle--done">
                            <img src="./img/ic-check.png" alt="步驟完成圖示">
                        </div>
                        <div class="checkout__progress-link"></div>
                        <div class="checkout__progress-circle checkout__progress-circle--done">
                            <img src="./img/ic-check.png" alt="步驟完成圖示">
                        </div>
                        <div class="checkout__progress-link"></div>
                        <div class="checkout__progress-circle checkout__progress-circle--active">
                            <div class="checkout__progress-core"></div>
                        </div>
                    </div>
                </div>

                <!-- 發票種類選擇 -->
                <div class="checkout__type-group">
                    <button type="button" class="checkout__type-btn checkout__type-btn--active" data-page="checkout3_1">
                        <p>電子發票</p>
                    </button>
                    <button type="button" class="checkout__type-btn" data-page="checkout3_2">
                        <p>郵寄發票</p>
                    </button>
                </div>

                <!-- 電子郵件 -->
                <div class="checkout__field">
                    <label for="invoice-email" class="checkout__label">電子郵件信箱</label>
                    <input type="text" id="invoice-email" placeholder="example@email.com"
                        class="checkout__input">
                </div>

                <!-- 統一編號 -->
                <div class="checkout__field">
                    <label for="invoice-tax-id" class="checkout__label">統一編號（選填）</label>
                    <input type="text" id="invoice-tax-id" placeholder="12345678" class="checkout__input">
                </div>

            </fieldset>

            <!-- 確認結帳按鈕 -->
            <button type="button" class="checkout__button">
                <p>確認結帳</p>
            </button>
        </form>

        <!-- 右側區塊 -->
        <div class="checkout__side">

            <!-- 訂單摘要 -->
            <aside class="checkout-summary">
                <h3 class="checkout-summary__title">訂單摘要</h3>
                <div class="checkout-summary__list">
                    <p class="checkout-summary__item"><span>小計</span><span>NT$ ${subtotal}</span></p>
                    <p class="checkout-summary__item"><span>運費</span><span>NT$ ${shipping}</span></p>
                    <p class="checkout-summary__item checkout-summary__item--total"><span>總計</span><span>NT$ ${total}</span></p>
                </div>
            </aside>

            <!-- 購物清單 -->
            <aside class="checkout-cart">
                <h3 class="checkout-cart__title">購物清單</h3>
                <div class="checkout-cart__list">
                    ${itemsHTML}
                </div>
            </aside>
        </div>
    </section>
  `;

    const typeButtons = el.querySelectorAll(".checkout__type-btn");
    typeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            typeButtons.forEach((b) => b.classList.remove("checkout__type-btn--active"));
            btn.classList.add("checkout__type-btn--active");
            location.hash = btn.dataset.page;
        });
    });


    const checkoutBtn = el.querySelector(".checkout__button");
    checkoutBtn.addEventListener("click", () => {
        location.hash = "checkout_success";
    })
    return el;
}
