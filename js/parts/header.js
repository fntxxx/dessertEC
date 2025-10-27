export default function header() {
    const el = document.createElement("header");
    el.innerHTML = `
    <nav class="nav">
        <div class="nav__menu">
            <img src="./img/header/menu.png" alt="選單圖示" class="nav__logo-img">
        </div>

        <div class="nav__logo--lg">
            <a href="#home">
                <img src="./img/header/logo-all-dark.png" alt="LOGO" class="nav__logo-img">
            </a>
        </div>
        <div class="nav__logo--sm">
            <a href="#home">
                <img src="./img/header/logotype-sm-dark.png" alt="LOGO" class="nav__logo-img">
            </a>
        </div>

        <div class="nav__links">
            <div class="nav__links-bar--lg">
                <a href="#home">首頁</a>
                <a href="#products">甜點</a>
                <a href="#login">登入</a>
            </div>

            <div class="nav__cart">
                <a href="#cart">
                    <img src="./img/header/cart-icon.png" alt="購物車圖示" class="nav__cart-img">
                </a>
            </div>
        </div>
    </nav>

    <div class="nav__links-bar--sm">
        <a href="#home">首頁</a>
        <a href="#products">甜點</a>
        <a href="#login">登入</a>
    </div>
    `;

    const navMenu = el.querySelector(".nav__menu");
    const navLinks = el.querySelector(".nav__links-bar--sm");

    navMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    return el;
}