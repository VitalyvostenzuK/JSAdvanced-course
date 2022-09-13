'use strict';
  











































































// const bsktContMobileEl = document.querySelector('.bskt-container-mobile');
// const productListMobileEL = document.querySelector('.product-list');
// const spanForBtnMobileEl = document.querySelector('.span-for-btn-mobile');
// const bsktTotalSpanMobileEl = document.querySelector('.bskt-total-mobile span');
// const bsktTotalMobileEl = document.querySelector('.bskt-total-mobile');

// document.querySelector('.bskt-mobile-menu').addEventListener('click', () => {
//   bsktContMobileEl.classList.remove('none');
// });

// document.querySelector('.bskt-menu-close-mobile')
// .addEventListener('click', () => { 
//   bsktContMobileEl.classList.add('none');
// });

// const basketMobile = {};

// productListMobileEL.addEventListener('click', ({target}) => {
//   if (target.closest('.card-buttom')) {
//     const productsEl = target.closest('.product');
//     const id = +productsEl.dataset.id;
//     const price = +productsEl.dataset.price;
//     const name = productsEl.dataset.name;
//     cardButtomFunMobile(id, price, name);
//   }
// });

// function cardButtomFunMobile(id, price, name) {
//   if (!(id in basketMobile)) {
//     basketMobile[id] = { id, price, name, count: 0};
//   }
//   basketMobile[id].count++;
//   spanForBtnMobileEl.textContent = Object.values(basketMobile)
//   .reduce((acc, product) => acc + product.count, 0);
//   bsktTotalSpanMobileEl.textContent = Object.values(basketMobile)
//   .reduce((acc, product) => acc + product.count * product.price, 0).toFixed(2);
//   renderProductsInBasketMobile(id);
// }

// function renderProductsInBasketMobile(id) {
//   const basketMadeContent = 
//   bsktContMobileEl.querySelector(`.wrap-goods[data-productId = '${id}']`)
//   if (!basketMadeContent) {
//   getNewContentInBasketMobile(id);
//   return;
//   }
//   basketMadeContent.querySelector('.contentsOfGoods-count')
//   .textContent = basket[id].count;
//   basketMadeContent.querySelector('.contentsOfGoods-total')
//   .textContent = (basket[id].price * basket[id].count).toFixed(2);
// }

// function getNewContentInBasketMobile(productId) {
//   const contentsOfGoods = 
//     `<div class="wrap-goods" data-productId='${productId}'>
//       <div>${basketMobile[productId].name}</div>
//       <div>
//         <span class="contentsOfGoods-count">${basketMobile[productId].count}</span> шт.
//       </div>
//       <div>
//         <div class="contentsOfGoods-price">$${basketMobile[productId].price}</div>
//       </div>
//       <div>
//         $<span class="contentsOfGoods-total"> 
//           ${(basketMobile[productId].price * basketMobile[productId].count).toFixed(2)}
//         </span>
//       </div>
//     </div>`;
//    bsktTotalMobileEl.insertAdjacentHTML('beforebegin', contentsOfGoods);
// }

