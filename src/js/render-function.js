import { refs } from './refs';

export function renderCategories(arr) {
  const markup = arr
    .map(
      item => `
      <li class="categories__item">
        <button class="categories__btn" type="button">${item}</button>
    </li>`
    )
    .join('');

  refs.categories.innerHTML = markup;
}

export function renderProducts(arr) {
  const markup = arr.map(p => `<li class="products__item" data-id="${p.id}">
    <img class="products__image" src="${p.thumbnail}" alt="${p.title}"/>
    <p class="products__title">${p.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${p.brand}</p>
    <p class="products__category">Category: ${p.category}</p>
    <p class="products__price">Price: ${p.price}$</p>
 </li>`)
    .join("");
  refs.productsList.insertAdjacentHTML("beforeend", markup);
}

export function clearProducts() {
  refs.productsList.innerHTML = "";
}
