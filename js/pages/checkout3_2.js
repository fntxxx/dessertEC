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
                        <select name="city" id="city" class="checkout__select"></select>
                        <select name="district" id="district" class="checkout__select"></select>
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

    // 切換電子/郵寄發票
    const typeButtons = el.querySelectorAll(".checkout__type-btn");
    typeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            typeButtons.forEach((b) => b.classList.remove("checkout__type-btn--active"));
            btn.classList.add("checkout__type-btn--active");
            location.hash = btn.dataset.page;
        });
    });

    // 點擊確認結帳
    const checkoutBtn = el.querySelector(".checkout__button");
    checkoutBtn.addEventListener("click", () => {
        location.hash = "checkout_success";
    });

    // ====== 縣市資料 ======
    const taiwanCities = {
        "臺北市": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
        "新北市": ["板橋區", "新莊區", "中和區", "永和區", "土城區", "蘆洲區", "三重區", "汐止區", "淡水區", "樹林區", "鶯歌區", "三峽區"],
        "桃園市": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "龜山區", "蘆竹區", "龍潭區"],
        "臺中市": ["中區", "東區", "南區", "西區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "大里區", "太平區"],
        "臺南市": ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "仁德區"],
        "高雄市": ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "左營區", "三民區", "楠梓區", "小港區", "前鎮區", "鳳山區", "岡山區"],
        "基隆市": ["中正區", "信義區", "仁愛區", "中山區", "安樂區", "暖暖區", "七堵區"],
        "新竹市": ["東區", "北區", "香山區"],
        "嘉義市": ["東區", "西區"],
        "宜蘭縣": ["宜蘭市", "羅東鎮", "蘇澳鎮", "頭城鎮", "員山鄉"],
        "彰化縣": ["彰化市", "員林市", "鹿港鎮", "和美鎮", "田中鎮"],
        "雲林縣": ["斗六市", "虎尾鎮", "西螺鎮", "北港鎮"],
        "屏東縣": ["屏東市", "潮州鎮", "東港鎮", "恆春鎮"],
        "花蓮縣": ["花蓮市", "吉安鄉", "新城鄉"],
        "臺東縣": ["臺東市", "成功鎮", "關山鎮"],
        "南投縣": ["南投市", "草屯鎮", "埔里鎮", "竹山鎮"],
        "澎湖縣": ["馬公市", "湖西鄉"],
        "金門縣": ["金城鎮", "金湖鎮", "金沙鎮"],
        "連江縣": ["南竿鄉", "北竿鄉"]
    };

    const citySelect = el.querySelector("#city");
    const districtSelect = el.querySelector("#district");

    // 初始化縣市選單
    function populateCities() {
        citySelect.innerHTML = "";
        Object.keys(taiwanCities).forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    // 根據選定縣市更新鄉鎮市區
    function populateDistricts(city) {
        districtSelect.innerHTML = "";
        taiwanCities[city].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }

    // 當縣市改變時重新載入鄉鎮市區
    citySelect.addEventListener("change", () => {
        const selectedCity = citySelect.value;
        populateDistricts(selectedCity);
    });

    // 預設選項：高雄市 - 新興區
    populateCities();
    citySelect.value = "高雄市";
    populateDistricts("高雄市");
    districtSelect.value = "新興區";

    return el;
}
