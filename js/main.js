/* main.js */

import header from "./parts/header.js";
import footer from "./parts/footer.js";
import { loadPage } from "./router.js";

function parseHash() {
    const hash = location.hash.replace("#", "") || "home";
    const [page, queryString] = hash.split("?");
    const query = {};
    if (queryString) {
        queryString.split("&").forEach(param => {
            const [key, value] = param.split("=");
            query[key] = value;
        });
    }
    return { page, query };
}

// 載入 Header / Footer
document.getElementById("header").appendChild(header());
document.getElementById("footer").appendChild(footer());

// 載入初始頁面
let { page, query } = parseHash();
loadPage(page, query);

// 監聽 hash 變化
window.addEventListener("hashchange", () => {
    ({ page, query } = parseHash());
    loadPage(page, query);
    window.scrollTo({ top: 0, behavior: "smooth" });
});
