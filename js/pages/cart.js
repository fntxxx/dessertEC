export default function cart() {
  const el = document.createElement("section");
  el.innerHTML = `
    <section class="cart">
        <!-- 左側：購物車內容 -->
        <div class="cart__content">
            <h2 class="cart__title">您的購物車</h2>

            <div class="cart__items">
                <!-- 商品項目 -->
                <div class="cart__item">
                    <div class="cart__item-info">
                        <img src="./img/cart/product1.avif" alt="焦糖馬卡龍商品圖片" class="cart__item-image">
                        <div class="cart__item-details">
                            <div class="cart__item-header">
                                <p class="cart__item-name">焦糖馬卡龍</p>
                                <p class="cart__item-price">NT$ 450</p>
                            </div>
                            <div class="cart__item-quantity">
                                <button type="button" class="cart__qty-btn">-</button>
                                <span class="cart__qty-value">2</span>
                                <button type="button" class="cart__qty-btn">+</button>
                            </div>
                        </div>
                    </div>
                    <hr class="cart__divider--sm">
                    <div class="cart__item-summary">
                        <p class="cart__item-total">NT$ 900</p>
                        <button type="button" class="cart__item-delete">
                            <img src="./img/ic-delete.png" alt="刪除商品" class="cart__delete-icon">
                        </button>
                    </div>
                    <hr class="cart__divider--sm">
                </div>

                <hr class="cart__divider">

                <div class="cart__item">
                    <div class="cart__item-info">
                        <img src="./img/cart/product2.avif" alt="焦糖馬卡龍商品圖片" class="cart__item-image">
                        <div class="cart__item-details">
                            <div class="cart__item-header">
                                <p class="cart__item-name">焦糖馬卡龍</p>
                                <p class="cart__item-price">NT$ 450</p>
                            </div>
                            <div class="cart__item-quantity">
                                <button type="button" class="cart__qty-btn">-</button>
                                <span class="cart__qty-value">2</span>
                                <button type="button" class="cart__qty-btn">+</button>
                            </div>
                        </div>
                    </div>
                    <hr class="cart__divider--sm">
                    <div class="cart__item-summary">
                        <p class="cart__item-total">NT$ 900</p>
                        <button type="button" class="cart__item-delete">
                            <img src="./img/ic-delete.png" alt="刪除商品" class="cart__delete-icon">
                        </button>
                    </div>
                    <hr class="cart__divider--sm">
                </div>

                <hr class="cart__divider">

                <div class="cart__item">
                    <div class="cart__item-info">
                        <img src="./img/cart/product3.avif" alt="焦糖馬卡龍商品圖片" class="cart__item-image">
                        <div class="cart__item-details">
                            <div class="cart__item-header">
                                <p class="cart__item-name">焦糖馬卡龍</p>
                                <p class="cart__item-price">NT$ 450</p>
                            </div>
                            <div class="cart__item-quantity">
                                <button type="button" class="cart__qty-btn">-</button>
                                <span class="cart__qty-value">2</span>
                                <button type="button" class="cart__qty-btn">+</button>
                            </div>
                        </div>
                    </div>
                    <hr class="cart__divider--sm">
                    <div class="cart__item-summary">
                        <p class="cart__item-total">NT$ 900</p>
                        <button type="button" class="cart__item-delete">
                            <img src="./img/ic-delete.png" alt="刪除商品" class="cart__delete-icon">
                        </button>
                    </div>
                    <hr class="cart__divider--sm">
                </div>
            </div>
        </div>

        <!-- 右側：訂單摘要 -->
        <aside class="cart__summary">
            <h2 class="cart__summary-title">訂單摘要</h2>
            <hr class="cart__summary-divider">

            <div class="cart__summary-list">
                <p class="cart__summary-item">
                    <span>小計</span>
                    <span>NT$ 2,700</span>
                </p>
                <p class="cart__summary-item">
                    <span>運費</span>
                    <span>NT$ 300</span>
                </p>
                <p class="cart__summary-item cart__summary-item--total">
                    <span>總計</span>
                    <span>NT$ 3,000</span>
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
