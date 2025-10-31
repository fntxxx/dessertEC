export default function footer() {
    const el = document.createElement("footer");
    el.innerHTML = `
    <div class="footer__subscription">
        <div class="footer__subscription--inner">
            <div class="footer__subscription-info">
                <img src="./img/footer/logo-light.png" alt="LOGO">
                <p>訂閱你我的甜蜜郵件</p>
            </div>
            <div class="footer__subscription-form">
                <div class="footer__ic-mail">
                    <img src="./img/footer/ic-mail.png" alt="電子郵件圖示">
                </div>
                <input type="email" class="footer__input" aria-label="訂閱電子報的電子郵件輸入欄">
                <button type="button" class="footer__button" aria-label="送出訂閱">
                    <img src="./img/footer/ic-arrow.png" alt="">
                </button>
            </div>
        </div>
    </div>

    <div class="footer__content">
        <div class="footer__content--inner ">
            <div class="footer__info">
                <div class="footer__brand">
                    <div class="footer__logo">
                        <img src="./img/footer/logotype-lg-dark.png" alt="Sweetaste 品牌標誌">
                    </div>
                    <div class="footer__contact">
                        <p>07-1234-5678</p>
                        <p>sweetaste@email.com</p>
                        <p>800 高雄市新興區幸福路 520 號</p>
                    </div>
                </div>
                <div class="footer__slogan">
                    <img src="./img/footer/sm-今天是個吃甜點的好日子.png" alt="今天是個吃甜點的好日子">
                </div>
            </div>
            <div class="footer__social">
                <div class="footer__social-icons">
                    <img src="./img/footer/ic-line@.png" alt="">
                    <img src="./img/footer/ic-facebook.png" alt="">
                </div>
                <p class="footer__copyright">© 2018 Sweetaste* All Rights Reserved</p>
            </div>
        </div>
    </div>
  `;

    // === 加入清空功能 ===
    const input = el.querySelector(".footer__input");
    const button = el.querySelector(".footer__button");

    button.addEventListener("click", () => {
        input.value = "";
        alert("訂閱成功！");
    });

    const year = new Date().getFullYear();
    el.querySelector(".footer__copyright").textContent = `© ${year} Sweetaste* All Rights Reserved`;


    return el;
}
