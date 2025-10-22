export default function checkout3_2() {
  const el = document.createElement("section");
  el.innerHTML = `
    <h2>郵寄發票</h2>
    <p>請輸入寄送地址。</p>
    <a href="#checkout_success">完成結帳</a>
  `;
  return el;
}
