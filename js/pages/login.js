/* login.js */

export default function login() {
    const el = document.createElement("section");

    el.innerHTML = `
    <section class="login">
        <div class="login__container">
            <form id="login-form" class="login__form" autocomplete="on">
                <h2 class="login__title">會員登入</h2>

                <div class="login__social--sm">
                    <ul class="login__social-list">
                        <li class="login__social-item">
                            <button type="button" class="login__social-btn" aria-label="使用 Facebook 登入">
                                <img src="./img/login/ic-facebook-logotype.png" alt="Facebook 登入圖示">
                            </button>
                        </li>
                        <li class="login__social-item">
                            <button type="button" class="login__social-btn" aria-label="使用 Google 登入">
                                <img src="./img/login/ic-google.png" alt="Google 登入圖示">
                            </button>
                        </li>
                        <li class="login__social-item">
                            <button type="button" class="login__social-btn" aria-label="使用 Yahoo 登入">
                                <img src="./img/login/ic-yahoo.png" alt="Yahoo 登入圖示">
                            </button>
                        </li>
                    </ul>
                </div>


                <div class="login__field">
                    <div class="login__icon">
                        <img src="./img/ic-person.png" alt="會員帳號圖示">
                    </div>
                    <input type="text" id="login-email" class="login__input" placeholder="電子信箱/手機號碼">
                </div>

                <div class="login__field">
                    <div class="login__icon">
                        <img src="./img/ic-key.png" alt="會員密碼圖示">
                    </div>
                    <input type="password" id="login-password" class="login__input" placeholder="請輸入使用者密碼">
                </div>

                <div class="login__remember">
                    <input type="checkbox" id="remember-me" class="login__checkbox">
                    <label for="remember-me" class="login__checkbox-label">記住我</label>
                </div>

                <button type="submit" class="login__button">
                    <p>登入帳號</p>
                </button>
            </form>
        </div>

        <div class="login__social--lg">
            <h3 class="login__social-title">—— 連結社群帳號 ——</h3>
            <ul class="login__social-list">
                <li class="login__social-item">
                    <button type="button" class="login__social-btn" aria-label="使用 Facebook 登入">
                        <img src="./img/login/ic-facebook-logotype.png" alt="Facebook 登入圖示">
                    </button>
                </li>
                <li class="login__social-item">
                    <button type="button" class="login__social-btn" aria-label="使用 Google 登入">
                        <img src="./img/login/ic-google.png" alt="Google 登入圖示">
                    </button>
                </li>
                <li class="login__social-item">
                    <button type="button" class="login__social-btn" aria-label="使用 Yahoo 登入">
                        <img src="./img/login/ic-yahoo.png" alt="Yahoo 登入圖示">
                    </button>
                </li>
            </ul>
        </div>
    </section>
  `;

    // 綁定表單事件
    const form = el.querySelector("#login-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // 防止重新整理
        alert("登入成功");

        location.hash = "home";
    });

    const socialBtn = el.querySelectorAll(".login__social-btn");
    socialBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("登入成功");
            location.hash = "home";
        });
    });


    return el;
}
