/* router.js */

import home from "./pages/home.js";
import products from "./pages/products.js";
import login from "./pages/login.js";
import cart from "./pages/cart.js";
import checkout1 from "./pages/checkout1.js";
import checkout2 from "./pages/checkout2.js";
import checkout3_1 from "./pages/checkout3_1.js";
import checkout3_2 from "./pages/checkout3_2.js";
import checkout_success from "./pages/checkout_success.js";
import notfound from "./pages/notfound.js";

export function loadPage(pageName, query = {}) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const routes = {
        home,
        products,
        login,
        cart,
        checkout1,
        checkout2,
        checkout3_1,
        checkout3_2,
        checkout_success
    };

    const page = routes[pageName] || notfound;

    // 如果是 products，傳 category 給 products.js
    if (pageName === "products") {
        content.appendChild(page(query.category));
    } else {
        content.appendChild(page());
    }
}
