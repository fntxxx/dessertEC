export default function notfound() {
    const el = document.createElement("section");
    el.innerHTML = `
    <h2>❌ 404 - 找不到頁面</h2>
    <p>您輸入的頁面不存在。</p>
    <a href="#home">回首頁</a>
  `;
    return el;
}
