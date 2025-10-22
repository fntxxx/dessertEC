export default function checkout_success() {
  const el = document.createElement("section");
  el.innerHTML = `
    <h2>結帳完成</h2>
    <p>感謝您的購買！</p>
    <a href="#home">回首頁</a>
  `;
  return el;
}
