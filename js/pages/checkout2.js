export default function checkout2() {
  const el = document.createElement("section");
  el.innerHTML = `
    <h2>信用卡付款資料</h2>
    <p>請輸入卡號與有效期限。</p>
    <a href="#checkout3_1">下一步：電子發票</a> |
    <a href="#checkout3_2">下一步：郵寄發票</a>
  `;
  return el;
}
