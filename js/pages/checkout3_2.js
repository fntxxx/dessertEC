export default function checkout3_2() {
    const el = document.createElement("section");
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
                    <button type="button" class="checkout__type-btn" data-page="checkout3_1">
                        <p>電子發票</p>
                    </button>
                    <button type="button" class="checkout__type-btn checkout__type-btn--active"
                        data-page="checkout3_2">
                        <p>郵寄發票</p>
                    </button>
                </div>

                <!-- 郵寄地址 -->
                <div class="checkout__field checkout__field--address">
                    <div class="checkout__address-header">
                        <label for="address" class="checkout__label">地址</label>
                        <div class="checkout__checkbox-wrap">
                            <input type="checkbox" id="same-as-shipping" class="checkout__checkbox">
                            <label for="same-as-shipping" class="checkout__checkbox-label">同運送地址</label>
                        </div>
                    </div>

                    <div class="checkout__select-group">
                        <select name="city" id="city" class="checkout__select">
                            <option value="臺北市">臺北市</option>
                            <option value="臺中市">臺中市</option>
                            <option value="高雄市" selected>高雄市</option>
                        </select>
                        <select name="district" id="district" class="checkout__select">
                            <option value="新興區" selected>新興區</option>
                        </select>
                    </div>

                    <input type="text" id="address" placeholder="幸福路 520 號" class="checkout__input">
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
                    <p class="checkout-summary__item">
                        <span>小計</span>
                        <span>NT$ 2,700</span>
                    </p>
                    <p class="checkout-summary__item">
                        <span>運費</span>
                        <span>NT$ 300</span>
                    </p>
                    <p class="checkout-summary__item checkout-summary__item--total">
                        <span>總計</span>
                        <span>NT$ 3,000</span>
                    </p>
                </div>
            </aside>

            <!-- 購物清單 -->
            <aside class="checkout-cart">
                <h3 class="checkout-cart__title">購物清單</h3>
                <div class="checkout-cart__list">

                    <div class="checkout-cart__item">
                        <div class="checkout-cart__image-wrapper">
                            <img src="./img/cart/product1.avif" alt="焦糖馬卡龍商品圖片" class="checkout-cart__image">
                        </div>
                        <div class="checkout-cart__details">
                            <p class="checkout-cart__name">焦糖馬卡龍（2）</p>
                            <p class="checkout-cart__price">NT$ 900</p>
                        </div>
                    </div>

                    <div class="checkout-cart__item">
                        <div class="checkout-cart__image-wrapper">
                            <img src="./img/cart/product2.avif" alt="焦糖馬卡龍商品圖片" class="checkout-cart__image">
                        </div>
                        <div class="checkout-cart__details">
                            <p class="checkout-cart__name">焦糖馬卡龍（2）</p>
                            <p class="checkout-cart__price">NT$ 900</p>
                        </div>
                    </div>

                    <div class="checkout-cart__item">
                        <div class="checkout-cart__image-wrapper">
                            <img src="./img/cart/product3.avif" alt="焦糖馬卡龍商品圖片" class="checkout-cart__image">
                        </div>
                        <div class="checkout-cart__details">
                            <p class="checkout-cart__name">焦糖馬卡龍（2）</p>
                            <p class="checkout-cart__price">NT$ 900</p>
                        </div>
                    </div>

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
