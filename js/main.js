import header from "./parts/header.js";
import footer from "./parts/footer.js";
import { loadPage } from "./router.js";

// 載入 Header / Footer
document.getElementById("header").appendChild(header());
document.getElementById("footer").appendChild(footer());

// 載入初始頁面
const currentPage = location.hash.replace("#", "") || "home";
loadPage(currentPage);

// 監聽 hash 變化
window.addEventListener("hashchange", () => {
    const newPage = location.hash.replace("#", "") || "home";
    loadPage(newPage);
});
