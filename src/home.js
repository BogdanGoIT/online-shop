//Логіка сторінки Home

import { getAllProducts, getCategories, getProductsByCategory } from './js/handlers';
import { refs } from './js/refs';

getCategories();
getAllProducts();

refs.categories.addEventListener("click", getProductsByCategory)