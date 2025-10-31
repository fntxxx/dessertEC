/* home.js */

import productsData from "./products-data.js";

export default function home() {
    const el = document.createElement("section");
    el.innerHTML = `
    <section class="hero">
        <div class="hero__image-wrapper">
            <img src="./img/home/banner1.avif" alt="首頁主視覺" class="hero__image">
        </div>

        <div class="hero__category-buttons">
            <button type="button" class="hero__button hero__button--daily" data-category="daily">
                <p>本日精選</p>
            </button>

            <button type="button" class="hero__button hero__button--popular" data-category="popular">
                <p>人氣推薦</p>
            </button>

            <button type="button" class="hero__button hero__button--new" data-category="new">
                <p>新品上市</p>
            </button>
        </div>
    </section>

    <section class="section-why-choose">
        <div class="section-why-choose__text-only--sm">
            <img src="./img/home/sm-text1.png" alt="為什麼選擇了做甜點">
        </div>
        <div class="section-why-choose__group">
            <div class="section-why-choose__group--inner">
                <div class="section-why-choose__image">
                    <img src="./img/home/banner2.avif" alt="甜點圖片1">
                </div>
                <div class="section-why-choose__text">
                    <div class="section-why-choose__title">
                        <img src="./img/home/lg-text1.png" alt="為什麼選擇了做甜點">
                    </div>
                    <div class="section-why-choose__description">
                        <p>
                            我們選擇做甜點，不只是因為喜歡甜食的滋味，
                            更因為那份「從無到有」的創造過程。
                            每一次攪拌、烘烤與裝飾，都是將溫度與心意融入其中，
                            讓人從第一口開始，就能感受到幸福的延伸。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-why-choose__text-only--sm">
            <img src="./img/home/sm-text2.png" alt="為什麼一定要吃甜點">
        </div>
        <div class="section-why-choose__group">
            <div class="section-why-choose__group--inner">
                <div class="section-why-choose__image">
                    <img src="./img/home/banner3.avif" alt="甜點圖片2">
                </div>
                <div class="section-why-choose__text">
                    <div class="section-why-choose__title">
                        <img src="./img/home/lg-text2.png" alt="為什麼一定要吃甜點">
                    </div>
                    <div class="section-why-choose__description">
                        <p>
                            吃甜點不只是為了滿足味蕾，而是犒賞生活的儀式感。
                            當日常的步調讓人疲憊，一口甜點，
                            就能讓世界暫時慢下來，提醒我們幸福其實很簡單。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-why-choose__text-only--sm">
            <img src="./img/home/sm-text3.png" alt="想吃甜點是不需要理由的">
        </div>
        <div class="section-why-choose__text-only--lg">
            <img src="./img/home/lg-text3.png" alt="想吃甜點是不需要理由的">
        </div>
    </section>

    <section class="section-products">
        <div class="section-products__list">
        </div>
    </section>
    `;

    // 首頁三個類別按鈕：切換至商品頁
    const heroBtn = el.querySelectorAll(".hero__button");
    heroBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.dataset.category;
            location.hash = `products?category=${category}`;
        });
    });

    const sectionProductsList = el.querySelector(".section-products__list");

    // 篩選出「本日精選」商品
    const dailyProducts = productsData.filter(item => item.badge === "daily");

    // 隨機取出 3 筆
    const randomDaily = dailyProducts
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const fragment = document.createDocumentFragment();

    randomDaily.forEach(item => {
        const productEl = document.createElement("div");
        productEl.classList.add("section-products__item");
        productEl.innerHTML = `
            <div class="section-products__image">
                <img src="${item.image}" alt="${item.name}">
                <div class="section-products__badge">本日精選</div>
                <button class="section-products__fav">
                    <img src="./img/ic-favorite.png" alt="加入收藏">
                </button>
            </div>
            <div class="section-products__info">
                <p class="section-products__name">${item.name}</p>
                <p class="section-products__price">NT$ ${item.price}</p>
            </div>
            <div class="section-products__action">
                <button class="section-products__btn"><p>加入購物車</p></button>
            </div>
        `;
        fragment.appendChild(productEl);
    });

    sectionProductsList.appendChild(fragment);

    // 事件委派：加入購物車
    sectionProductsList.addEventListener("click", e => {
        const btn = e.target.closest(".section-products__btn");
        if (btn) location.hash = "cart";
    });


    return el;
}
