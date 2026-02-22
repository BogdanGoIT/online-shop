// API ендпоінти:

import axios from 'axios';
import { BASE_URL, ENDPOINTS, LIMIT } from './constants';

// https://dummyjson.com/docs/products - документація бекенду, розділ продукти
// https://dummyjson.com/products?limit=10&skip=10 - отримати всі продукти з пагінацією
// https://dummyjson.com/products/1 - отримати один продукт по ID
// https://dummyjson.com/products/search?q=nail - пошук продукту по ключовому слову
// https://dummyjson.com/products/category-list - отримати список категорій продуктів
// https://dummyjson.com/products/category/smartphones - отримати продукти по категорії

axios.defaults.baseURL = BASE_URL;

export async function fetchCategories() {
  const { data } = await axios(ENDPOINTS.categories);
  return data;
}

export async function fetchAllProducts(page = 1) {
  //const { data } = await axios.get(`${ENDPOINTS.products}?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`)
  const { data } = await axios.get(ENDPOINTS.products, {
    params: {
      limit: LIMIT,
      skip: (page - 1) * LIMIT
    }
  })
  return data;
}

export async function fetchProductsByCategory(category) {
  const { data } = await axios.get(`${ENDPOINTS.productsByCategory}${category}`);
  return data;
}