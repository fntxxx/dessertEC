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
            <div class="product-card__list">
                <div class="product-card__item">
                    <div class="product-card__image">
                        <img src="./img/product/product1.avif" alt="焦糖馬卡龍">
                        <div class="product-card__badge">本日精選</div>
                        <button class="product-card__fav">
                            <img src="./img/ic-favorite.png" alt="加入收藏">
                        </button>
                    </div>
                    <div class="product-card__info">
                        <p class="product-card__name">焦糖馬卡龍</p>
                        <p class="product-card__price">NT$ 450</p>
                    </div>
                    <div class="product-card__action">
                        <button class="product-card__btn">
                            <p>加入購物車</p>
                        </button>
                    </div>
                </div>

                <div class="product-card__item">
                    <div class="product-card__image">
                        <img src="./img/product/product2.avif" alt="焦糖馬卡龍">
                        <div class="product-card__badge">本日精選</div>
                        <button class="product-card__fav">
                            <img src="./img/ic-favorite.png" alt="加入收藏">
                        </button>
                    </div>
                    <div class="product-card__info">
                        <p class="product-card__name">焦糖馬卡龍</p>
                        <p class="product-card__price">NT$ 450</p>
                    </div>
                    <div class="product-card__action">
                        <button class="product-card__btn">
                            <p>加入購物車</p>
                        </button>
                    </div>
                </div>

                <div class="product-card__item">
                    <div class="product-card__image">
                        <img src="./img/product/product3.avif" alt="焦糖馬卡龍">
                        <div class="product-card__badge">本日精選</div>
                        <button class="product-card__fav">
                            <img src="./img/ic-favorite.png" alt="加入收藏">
                        </button>
                    </div>
                    <div class="product-card__info">
                        <p class="product-card__name">焦糖馬卡龍</p>
                        <p class="product-card__price">NT$ 450</p>
                    </div>
                    <div class="product-card__action">
                        <button class="product-card__btn">
                            <p>加入購物車</p>
                        </button>
                    </div>
                </div>

                <div class="product-card__item">
                    <div class="product-card__image">
                        <img src="./img/product/product4.avif" alt="焦糖馬卡龍">
                        <div class="product-card__badge">本日精選</div>
                        <button class="product-card__fav">
                            <img src="./img/ic-favorite.png" alt="加入收藏">
                        </button>
                    </div>
                    <div class="product-card__info">
                        <p class="product-card__name">焦糖馬卡龍</p>
                        <p class="product-card__price">NT$ 450</p>
                    </div>
                    <div class="product-card__action">
                        <button class="product-card__btn">
                            <p>加入購物車</p>
                        </button>
                    </div>
                </div>

                <div class="product-card__item">
                    <div class="product-card__image">
                        <img src="./img/product/product5.avif" alt="焦糖馬卡龍">
                        <div class="product-card__badge">本日精選</div>
                        <button class="product-card__fav">
                            <img src="./img/ic-favorite.png" alt="加入收藏">
                        </button>
                    </div>
                    <div class="product-card__info">
                        <p class="product-card__name">焦糖馬卡龍</p>
                        <p class="product-card__price">NT$ 450</p>
                    </div>
                    <div class="product-card__action">
                        <button class="product-card__btn">
                            <p>加入購物車</p>
                        </button>
                    </div>
                </div>

                <div class="product-card__item">
                    <div class="product-card__image">
                        <img src="./img/product/product6.avif" alt="焦糖馬卡龍">
                        <div class="product-card__badge">本日精選</div>
                        <button class="product-card__fav">
                            <img src="./img/ic-favorite.png" alt="加入收藏">
                        </button>
                    </div>
                    <div class="product-card__info">
                        <p class="product-card__name">焦糖馬卡龍</p>
                        <p class="product-card__price">NT$ 450</p>
                    </div>
                    <div class="product-card__action">
                        <button class="product-card__btn">
                            <p>加入購物車</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    const categoryBtn = el.querySelectorAll(".product-list__category-btn");
    categoryBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            location.hash = "";
            location.hash = "products";
        });
    });

    const addToCart = el.querySelectorAll(".product-card__btn");
    addToCart.forEach(btn => {
        btn.addEventListener("click", () => {
            location.hash = "cart";
        });
    });

    return el;
}
