export default function login() {
  const el = document.createElement("section");

  el.innerHTML = `
    <h2>登入</h2>
    <form id="login-form">
      <label>Email：<input type="email"></label><br>
      <label>密碼：<input type="password"></label><br>
      <button type="submit">登入</button>
    </form>
  `;

  // 綁定表單事件
  const form = el.querySelector("#login-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 防止重新整理

    // 可在這裡加上驗證或登入邏輯（例如檢查帳密）
    // 假設登入成功後導回首頁
    location.hash = "home"; // 導回首頁
  });

  return el;
}
