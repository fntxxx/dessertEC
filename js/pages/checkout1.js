export default function checkout1() {
  const el = document.createElement("section");
  el.innerHTML = `
    <section class="checkout-shipping">
        <!-- 運送資訊表單 -->
        <form class="checkout-shipping__form">
            <fieldset class="checkout-shipping__fieldset">
                <div class="checkout-shipping__header">
                    <h2 class="checkout-shipping__title">運送</h2>
                    <div class="checkout-shipping__progress">進度條（暫放）</div>
                </div>

                <!-- 姓名 -->
                <div class="checkout-shipping__name-group">
                    <div class="checkout-shipping__field">
                        <label for="last-name" class="checkout-shipping__label">姓氏</label>
                        <input type="text" id="last-name" placeholder="王" class="checkout-shipping__input">
                    </div>
                    <div class="checkout-shipping__field">
                        <label for="first-name" class="checkout-shipping__label">名字</label>
                        <input type="text" id="first-name" placeholder="小明" class="checkout-shipping__input">
                    </div>
                </div>

                <!-- 電話 -->
                <div class="checkout-shipping__field">
                    <label for="phone" class="checkout-shipping__label">電話</label>
                    <input type="text" id="phone" placeholder="0912-345-678" class="checkout-shipping__input">
                </div>

                <!-- 地址 -->
                <div class="checkout-shipping__field checkout-shipping__field--address">
                    <label for="address" class="checkout-shipping__label">地址</label>
                    <div class="checkout-shipping__select-group">
                        <select name="city" id="city" class="checkout-shipping__select">
                            <option value="臺北市">臺北市</option>
                            <option value="臺中市">臺中市</option>
                            <option value="高雄市" selected>高雄市</option>
                        </select>
                        <select name="district" id="district" class="checkout-shipping__select">
                            <option value="新興區" selected>新興區</option>
                        </select>
                    </div>
                    <input type="text" id="address" placeholder="幸福路 520 號" class="checkout-shipping__input">
                </div>
            </fieldset>

            <!-- 下一步按鈕 -->
            <button type="button" class="checkout-shipping__button">
                <p>下一步</p>
            </button>
        </form>

        <!-- 右側區塊 -->
        <div class="checkout-shipping__side">
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

  const checkoutBtn = el.querySelector(".checkout-shipping__button");
  checkoutBtn.addEventListener("click", () => {
    location.hash = "checkout2";
  })

  return el;
}
