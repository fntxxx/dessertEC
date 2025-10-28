export default function checkout2() {
  const el = document.createElement("section");
  el.innerHTML = `
    <section class="checkout-payment">

        <!-- 左側表單區 -->
        <form class="checkout-payment__form">
            <fieldset class="checkout-payment__fieldset">
                <div class="checkout-payment__header">
                    <h2 class="checkout-payment__title">付款</h2>
                    <div class="checkout-payment__progress">進度條（暫放）</div>
                </div>

                <!-- 信用卡卡號 -->
                <div class="checkout-payment__field">
                    <label for="card-number" class="checkout-payment__label">信用卡卡號</label>
                    <input type="text" id="card-number" placeholder="9012-3456-7890-1234"
                        class="checkout-payment__input">
                </div>

                <!-- 持卡人姓名 -->
                <div class="checkout-payment__field">
                    <label class="checkout-payment__label">持卡人姓名</label>
                    <div class="checkout-payment__name-group">
                        <input type="text" id="card-last-name" placeholder="王" class="checkout-payment__input">
                        <input type="text" id="card-first-name" placeholder="小明" class="checkout-payment__input">
                    </div>
                </div>

                <!-- 有效期限 -->
                <div class="checkout-payment__field checkout-payment__field--expiry">
                    <label for="expiry-month" class="checkout-payment__label">有效期限</label>
                    <div class="checkout-payment__select-group">
                        <select name="expiry-month" id="expiry-month" class="checkout-payment__select">
                            <option>月</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                        <select name="expiry-year" id="expiry-year" class="checkout-payment__select">
                            <option>年</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                            <option value="2035">2035</option>
                        </select>
                    </div>
                </div>

                <!-- 背面末三碼 -->
                <div class="checkout-payment__field checkout-payment__field--last">
                    <label for="cvc" class="checkout-payment__label">背面末三碼</label>
                    <input type="text" id="cvc" placeholder="123" class="checkout-payment__input">
                </div>
            </fieldset>

            <!-- 下一步按鈕 -->
            <button type="button" class="checkout-payment__button">
                <p>下一步</p>
            </button>
        </form>

        <!-- 右側區塊 -->
        <div class="checkout-payment__side">
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

  const checkoutBtn = el.querySelector(".checkout-payment__button");
  checkoutBtn.addEventListener("click", () => {
    location.hash = "checkout3_1";
  })

  return el;
}
