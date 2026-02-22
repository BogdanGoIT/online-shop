import"./assets/styles-JE8YjOlG.js";import{a as e,i as r}from"./assets/vendor-ZnMw6IGI.js";const c="https://dummyjson.com",a={products:"/products",productById:"/products/",productsByCategory:"/products/category/",productsByQuery:"/products/search",categories:"/products/category-list"};e.defaults.baseURL=c;async function i(){const{data:t}=await e(a.categories);return t}const n={categories:document.querySelector(".categories")};function u(t){const o=t.map(s=>`
      <li class="categories__item">
        <button class="categories__btn" type="button">${s}</button>
    </li>`).join("");n.categories.innerHTML=o}function g(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}async function d(){try{const t=await i();u(["all",...t]),g()}catch(t){console.log(t),r.error({message:"something went wrong"})}}d();
//# sourceMappingURL=index.js.map
