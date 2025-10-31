/* checkout_success.js */

export default function checkout_success() {
    const el = document.createElement("section");
    el.innerHTML = `
    <section class="checkout-success">
        <div class="checkout-success__container">
            <img src="./img/checkout/success-bg.avif" alt="付款成功主視覺" class="checkout-success__image">

            <div class="checkout-success__content">
                <div class="checkout-success__progress">
                    <div class="checkout-success__progress-circle">
                        <img src="./img/ic-check_light.png" alt="步驟完成圖示">
                    </div>
                    <div class="checkout-success__progress-link"></div>
                    <div class="checkout-success__progress-circle">
                        <img src="./img/ic-check_light.png" alt="步驟完成圖示">
                    </div>
                    <div class="checkout-success__progress-link"></div>
                    <div class="checkout-success__progress-circle">
                        <img src="./img/ic-check_light.png" alt="步驟完成圖示">
                    </div>
                </div>
                <img src="./img/checkout/lg-success.png" alt="付款成功" class="checkout-success__icon">
                <button type="button" class="checkout-success__button checkout-success__button--lg">
                    <p>繼續逛逛</p>
                </button>
            </div>
        </div>
        <button type="button" class="checkout-success__button checkout-success__button--sm">
            <p>繼續逛逛</p>
        </button>
    </section>
  `;

    const checkoutBtn = el.querySelectorAll(".checkout-success__button");
    checkoutBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            location.hash = "home";
        })
    })

    return el;
}
