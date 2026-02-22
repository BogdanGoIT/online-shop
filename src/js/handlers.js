import iziToast from 'izitoast';
import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from './products-api';
import { clearProducts, renderCategories, renderProducts } from './render-function';
import { activBtn, activeFirstBtn } from './helpers';
import { refs } from './refs';

export async function getCategories() {
  try {
    const categories = await fetchCategories();
    renderCategories(['all', ...categories]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'something went wrong',
    });
  }
}

export async function getAllProducts() {
  try {
    const { products } = await fetchAllProducts();
    
    renderProducts(products);
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'something went wrong',
    });
  }
}

export async function getProductsByCategory(event) {
  if (!event.target.classList.contains("categories__btn")) return;
  const nameCat = event.target.textContent;
  activBtn(event.target);
  try { 
    let currentProducts = null;
    if (nameCat === 'all') {
      const { products } = await fetchAllProducts();
      currentProducts = products;
    } else {
      const { products } = await fetchProductsByCategory(nameCat);
      currentProducts = products;
    }
    if (currentProducts.length === 0) { 
      refs.notFound.classList.add('not-found--visible');
    } else {
      refs.notFound.classList.remove('not-found--visible');
    }
      clearProducts();
      renderProducts(currentProducts); 
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'something went wrong',
    })
  
  }
}


