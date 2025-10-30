import productsData from "./products-data.js";

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
                        <th><p>甜點類別</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button type="button" class="product-list__category-btn" data-badge="all"><p>所有甜點（48）</p></button></td>
                    </tr>
                    <tr>
                        <td><button type="button" class="product-list__category-btn" data-badge="daily"><p>本日精選（10）</p></button></td>
                    </tr>
                    <tr>
                        <td><button type="button" class="product-list__category-btn" data-badge="popular"><p>人氣推薦（26）</p></button></td>
                    </tr>
                    <tr>
                        <td><button type="button" class="product-list__category-btn" data-badge="new"><p>新品上市（12）</p></button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="product-card">
            <div class="product-card__list"></div>
            <div class="product-card__turn-page"></div>
        </div>
    </section>
    `;

    const productList = el.querySelector(".product-card__list");
    const paginationEl = el.querySelector(".product-card__turn-page");
    const categoryButtons = el.querySelectorAll(".product-list__category-btn");

    const ITEMS_PER_PAGE = 6;
    let currentPage = 0;
    let currentData = productsData;

    // 英文 badge 對應中文顯示
    const badgeMap = {
        daily: "本日精選",
        popular: "人氣推薦",
        new: "新品上市"
    };

    // 讀取 URL hash 參數，設定初始分類
    function getInitialCategory() {
        const hash = location.hash;
        const match = hash.match(/category=(\w+)/);
        return match ? match[1] : "all";
    }

    function setActiveCategoryButton(badge) {
        categoryButtons.forEach(btn => btn.classList.remove("product-list__category-btn--active"));
        const activeBtn = Array.from(categoryButtons).find(btn => btn.dataset.badge === badge);
        if (activeBtn) activeBtn.classList.add("product-list__category-btn--active");
    }

    function filterDataByBadge(badge) {
        currentData = badge === "all" ? productsData : productsData.filter(p => p.badge === badge);
        currentPage = 0;
        renderProducts(currentPage);
    }

    function renderProducts(page = 0) {
        productList.innerHTML = "";
        const start = page * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageItems = currentData.slice(start, end);

        pageItems.forEach(item => {
            const productEl = document.createElement("div");
            productEl.classList.add("product-card__item");
            productEl.innerHTML = `
                <div class="product-card__image">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product-card__badge">${badgeMap[item.badge]}</div>
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

        // 事件委派：加入購物車
        productList.querySelectorAll(".product-card__btn").forEach(btn => {
            btn.addEventListener("click", () => location.hash = "cart");
        });

        renderPagination();
    }

    function renderPagination() {
        paginationEl.innerHTML = "";
        const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);

        // 上一頁
        const prevBtn = document.createElement("button");
        prevBtn.className = "turn-page__btn turn-page__btn--prev";
        prevBtn.innerHTML = `<img src="./img/ic-arrow_left.png" alt="上一頁">`;
        prevBtn.disabled = currentPage === 0;
        prevBtn.addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                renderProducts(currentPage);
            }
        });
        paginationEl.appendChild(prevBtn);

        // 頁碼按鈕
        const maxVisible = 3;
        let startPage = Math.max(0, currentPage - 1);
        let endPage = Math.min(totalPages - 1, startPage + maxVisible - 1);
        startPage = Math.max(0, endPage - maxVisible + 1);

        if (startPage > 0) {
            const leftEllipsis = document.createElement("span");
            leftEllipsis.textContent = "...";
            leftEllipsis.className = "turn-page__btn pagination-ellipsis";
            leftEllipsis.style.cursor = "pointer";
            leftEllipsis.addEventListener("click", () => {
                currentPage = 0;
                renderProducts(currentPage);
            });
            paginationEl.appendChild(leftEllipsis);
        }

        for (let i = startPage; i <= endPage; i++) {
            const btn = document.createElement("button");
            btn.className = "turn-page__btn";
            btn.innerHTML = `<p class="turn-page__number ${i === currentPage ? "turn-page__number--active" : ""}">${i + 1}</p>`;
            btn.addEventListener("click", () => {
                currentPage = i;
                renderProducts(currentPage);
            });
            paginationEl.appendChild(btn);
        }

        if (endPage < totalPages - 1) {
            const rightEllipsis = document.createElement("span");
            rightEllipsis.textContent = "...";
            rightEllipsis.className = "turn-page__btn pagination-ellipsis";
            rightEllipsis.style.cursor = "pointer";
            rightEllipsis.addEventListener("click", () => {
                currentPage = totalPages - 1;
                renderProducts(currentPage);
            });
            paginationEl.appendChild(rightEllipsis);
        }

        // 下一頁
        const nextBtn = document.createElement("button");
        nextBtn.className = "turn-page__btn turn-page__btn--next";
        nextBtn.innerHTML = `<img src="./img/ic-arrow_right.png" alt="下一頁">`;
        nextBtn.disabled = currentPage === totalPages - 1;
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                renderProducts(currentPage);
            }
        });
        paginationEl.appendChild(nextBtn);
    }

    // 類別按鈕事件 + hash 篩選
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const badge = btn.dataset.badge;
            location.hash = `products?category=${badge}`;
        });
    });

    // 初始分類
    const initialCategory = getInitialCategory();
    setActiveCategoryButton(initialCategory);
    filterDataByBadge(initialCategory);

    return el;
}
