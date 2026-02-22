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
