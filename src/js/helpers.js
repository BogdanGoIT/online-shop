export function activeFirstBtn() {
  const firstBtn = document.querySelector('.categories__btn');
  if (firstBtn) {
    firstBtn.classList.add('categories__btn--active');
  }
}
export function activBtn(btn) { 
   const btns = document.querySelectorAll('.categories__btn--active');
  btns.forEach(btn => btn.classList.remove('categories__btn--active'));
  btn.classList.add('categories__btn--active');
}