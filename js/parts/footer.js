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
                <input type="email" class="footer__input">
                <button type="button" class="footer__button">
                    <img src="./img/footer/ic-arrow.png" alt="送出箭頭">
                </button>
            </div>
        </div>
    </div>

    <div class="footer__content">
        <div class="footer__content--inner ">
            <div class="footer__info">
                <div class="footer__brand">
                    <div class="footer__logo">
                        <img src="./img/footer/logotype-lg-dark.png" alt="">
                    </div>
                    <div class="footer__contact">
                        <p>07-1234-5678</p>
                        <p>sweetaste@email.com</p>
                        <p>800 高雄市新興區幸福路 520 號</p>
                    </div>
                </div>
                <div class="footer__slogan">
                    <img src="./img/footer/sm-今天是個吃甜點的好日子.png" alt="">
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
        input.value = ""; // 清空輸入框
    });

    return el;
}
