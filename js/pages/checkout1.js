export default function checkout1() {
  const el = document.createElement("section");
  el.innerHTML = `
    <h2>運送資料</h2>
    <p>請填寫收件人與地址。</p>
    <a href="#checkout2">下一步：付款方式</a>
  `;
  return el;
}
