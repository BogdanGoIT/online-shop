import iziToast from 'izitoast';
import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';
import { activeFirstBtn } from './helpers';

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
