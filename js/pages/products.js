export default function products() {
    const el = document.createElement("section");
    el.innerHTML = `
    <section class="product-hero">
        <div class="product-hero__image-wrapper">
            <img src="./img/product/banner.avif" alt="商品頁主視覺" class="product-hero__image">
            <div class="product-hero__slogan--lg">
                <img src="./img/product/lg-text.png" alt="想吃甜點是不需要理由的">
            </div>
            <div class="product-hero__slogan--sm">
                <img src="./img/product/sm-text.png" alt="想吃甜點是不需要理由的">
            </div>
        </div>
    </section>

    <section class="product-list">

        <div class="product-list__categories">
            <table class="product-list__category-table">
                <thead>
                    <tr>
                        <th>
                            <p>甜點類別</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button type="button" class="product-list__category-btn">
                                <p>所有甜點（48）</p>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="product-list__category-btn">
                                <p>本日精選（10）</p>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="product-list__category-btn">
                                <p>人氣推薦（26）</p>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="product-list__category-btn">
                                <p>新品上市（12）</p>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="product-card">
            <div class="product-card__list"></div>

            <div class="product-card__turn-page">
                <button class="turn-page__btn turn-page__btn--prev">
                    <img src="./img/ic-arrow_left.png" alt="上一頁">
                </button>
                <button class="turn-page__btn">
                    <p class="turn-page__number turn-page__number--active">1</p>
                </button>
                <button class="turn-page__btn">
                    <p class="turn-page__number">2</p>
                </button>
                <button class="turn-page__btn">
                    <p class="turn-page__number">3</p>
                </button>
                <button class="turn-page__btn turn-page__btn--next">
                    <img src="./img/ic-arrow_right.png" alt="下一頁">
                </button>
            </div>
        </div>
    </section>
    `;

    const productList = el.querySelector(".product-card__list");
    const productsData = [
        {
            name: "焦糖馬卡龍",
            price: 450,
            image: "./img/product/product1.avif",
            badge: "本日精選"
        },
        {
            name: "焦糖馬卡龍",
            price: 450,
            image: "./img/product/product2.avif",
            badge: "人氣推薦"
        },
        {
            name: "焦糖馬卡龍",
            price: 450,
            image: "./img/product/product3.avif",
            badge: "新品上市"
        },
        {
            name: "焦糖馬卡龍",
            price: 450,
            image: "./img/product/product4.avif",
            badge: "本日精選"
        },
        {
            name: "焦糖馬卡龍",
            price: 450,
            image: "./img/product/product5.avif",
            badge: "本日精選"
        },
        {
            name: "焦糖馬卡龍",
            price: 450,
            image: "./img/product/product6.avif",
            badge: "本日精選"
        },
    ];

    // 動態生成商品
    productsData.forEach(item => {
        const productEl = document.createElement("div");
        productEl.classList.add("product-card__item");
        productEl.innerHTML = `
            <div class="product-card__image">
                <img src="${item.image}" alt="${item.name}">
                <div class="product-card__badge">${item.badge}</div>
                <button class="product-card__fav">
                    <img src="./img/ic-favorite.png" alt="加入收藏">
                </button>
            </div>
            <div class="product-card__info">
                <p class="product-card__name">${item.name}</p>
                <p class="product-card__price">NT$ ${item.price}</p>
            </div>
            <div class="product-card__action">
                <button class="product-card__btn"><p>加入購物車</p></button>
            </div>
        `;
        productList.appendChild(productEl);
    });

    // 商品分類按鈕
    const categoryButtons = el.querySelectorAll(".product-list__category-btn");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            location.hash = "";
            location.hash = "products";
        });
    });

    // 分頁頁碼按鈕
    const pageNumberButtons = el.querySelectorAll(".turn-page__number");
    pageNumberButtons.forEach(button => {
        button.addEventListener("click", () => {
            pageNumberButtons.forEach(b => b.classList.remove("turn-page__number--active"));
            button.classList.add("turn-page__number--active");
        });
    });

    // 加入購物車按鈕
    const addToCartButtons = el.querySelectorAll(".product-card__btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            location.hash = "cart";
        });
    });

    return el;
}
