export default function checkout3_1() {
  const el = document.createElement("section");
  el.innerHTML = `
    <section class="checkout-invoice">

        <!-- 左側表單區 -->
        <form class="checkout-invoice__form">
            <fieldset class="checkout-invoice__fieldset">

                <!-- 標題與進度條 -->
                <div class="checkout-invoice__header">
                    <h2 class="checkout-invoice__title">發票</h2>
                    <div class="checkout-invoice__progress">進度條（暫放）</div>
                </div>

                <!-- 發票種類選擇 -->
                <div class="checkout-invoice__type-group">
                    <button type="button" class="checkout-invoice__type-btn checkout-invoice__type-btn--active" data-page="checkout3_1">
                        <p>電子發票</p>
                    </button>
                    <button type="button" class="checkout-invoice__type-btn" data-page="checkout3_2">
                        <p>郵寄發票</p>
                    </button>
                </div>

                <!-- 電子郵件 -->
                <div class="checkout-invoice__field">
                    <label for="invoice-email" class="checkout-invoice__label">電子郵件信箱</label>
                    <input type="text" id="invoice-email" placeholder="example@email.com"
                        class="checkout-invoice__input">
                </div>

                <!-- 統一編號 -->
                <div class="checkout-invoice__field">
                    <label for="invoice-tax-id" class="checkout-invoice__label">統一編號（選填）</label>
                    <input type="text" id="invoice-tax-id" placeholder="12345678" class="checkout-invoice__input">
                </div>

            </fieldset>

            <!-- 確認結帳按鈕 -->
            <button type="button" class="checkout-invoice__button">
                <p>確認結帳</p>
            </button>
        </form>

        <!-- 右側區塊 -->
        <div class="checkout-invoice__side">

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

  const typeButtons = el.querySelectorAll(".checkout-invoice__type-btn");
  typeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeButtons.forEach((b) => b.classList.remove("checkout-invoice__type-btn--active"));
      btn.classList.add("checkout-invoice__type-btn--active");
      location.hash = btn.dataset.page;
    });
  });


  const checkoutBtn = el.querySelector(".checkout-invoice__button");
  checkoutBtn.addEventListener("click", () => {
    location.hash = "checkout_success";
  })
  return el;
}
