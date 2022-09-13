'use strict';

const basketContainEl = document.querySelector('.bskt-container');

document.querySelector('.basket-svg-cont')
.addEventListener('click', () => {
  basketContainEl.classList.remove('none');
});

document.querySelector('.bskt-menu-close')
.addEventListener('click', () => {
  basketContainEl.classList.add('none');
});

const basket = {};

document.querySelector('.product-list')
.addEventListener('click', ({target}) => {
  if (target.closest('.card-buttom')) {
    const productElem = target.closest('.product');
    const id = productElem.dataset.id;
    const price = productElem.dataset.price;
    const name = productElem.dataset.name;
    createFunObj(id, price, name);
  }
});

function createFunObj(id, price, name) {
  if (!(id in basket)) {
    basket[id] = {id, price, name, count: 0};
  }
  basket[id].count++;
  document.querySelector('.span-for-btn')
  .textContent = Object.values(basket)
  .reduce((acc, product) => acc + product.count, 0);
  document.querySelector('.bskt-total span')
  .textContent = Object.values(basket)
  .reduce((acc, product) => acc + product.price * product.count, 0).toFixed(2);
  createAndInputMarkup(id);
}

function createAndInputMarkup(id) {
  const checkNewMarkup = 
  basketContainEl.querySelector(`.wrap-goods[data-productId='${id}']`);
  if (!checkNewMarkup) {
    createNewMarkup(id);
    return;
  }
  checkNewMarkup.querySelector('.contentsOfGoods-count')
  .textContent = basket[id].count;
  checkNewMarkup.querySelector('.contentsOfGoods-total')
  .textContent = (basket[id].count * basket[id].price).toFixed(2);
}

function createNewMarkup(productId) {
  const contentsOfGoods = 
    `<div class="wrap-goods" data-productId='${productId}'>
      <div>${basket[productId].name}</div>
      <div>
        <span class="contentsOfGoods-count">${basket[productId].count}</span> шт.
      </div>
      <div>
        <div class="contentsOfGoods-price">$${basket[productId].price}</div>
      </div>
      <div>
        $<span class="contentsOfGoods-total"> 
          ${(basket[productId].price)}
        </span>
      </div>
    </div>`;
    document.querySelector('.bskt-total')
    .insertAdjacentHTML('beforebegin', contentsOfGoods);
}

































// const bsktContEl = document.querySelector('.bskt-container');
// const spanElBasket = document.querySelector('.span-for-btn');
// const bsktSpanElTotal = document.querySelector('.bskt-total span');
// const bsktTotalEl = document.querySelector('.bskt-total');

// document.querySelector('.basket-svg-cont')
// .addEventListener('click', () => {
//   bsktContEl.classList.toggle('none');
// });

// document.querySelector('.bskt-menu-close')
// .addEventListener('click', () => {
//   bsktContEl.classList.add('none');
// });

// document.querySelector('.product-list')
// .addEventListener('click', ({target}) => {
//   if (target.closest('.card-buttom')) {
//     const productGoods = target.closest('.product');
//     const id = productGoods.dataset.id;
//     const price = productGoods.dataset.price;
//     const name = productGoods.dataset.name;
//     addObjFun(id, price, name);
//   }
// });

// const basket = {};

// function addObjFun(id, price, name) {
//   if (!(id in basket)) {
//     basket[id] = {id, price, name, count: 0};
//   }
//   basket[id].count++;
//   spanElBasket.textContent = Object.values(basket)
//   .reduce((acc, prod) => acc + prod.count, 0);
//   bsktSpanElTotal.textContent = Object.values(basket)
//   .reduce((total, goods) => total + goods.count * goods.price, 0).toFixed(2);
//   createAndInsert(id);
// }

// function createAndInsert(id) {
//   const checkMarkup = 
//   bsktContEl.querySelector(`.wrap-goods[data-productId='${id}']`);
//   if (!checkMarkup) {
//     createNewMarkup(id);
//     return;
//   }
//   checkMarkup.querySelector('.contentsOfGoods-count')
//   .textContent = basket[id].count;
//   checkMarkup.querySelector('.contentsOfGoods-total')
//   .textContent = (basket[id].count * basket[id].price).toFixed(2);
// }

// function createNewMarkup(productId) {
//   const new_markup = 
//   `<div class="wrap-goods" data-productId='${productId}'>
//       <div>${basket[productId].name}</div>
//       <div>
//         <span class="contentsOfGoods-count">${basket[productId].count}</span> шт.
//       </div>
//       <div>
//         <div class="contentsOfGoods-price">$${basket[productId].price}</div>
//       </div>
//       <div>
//         $<span class="contentsOfGoods-total"> 
//           ${(basket[productId].price * basket[productId].count).toFixed(2)}
//         </span>
//       </div>
//     </div>`;
//     bsktTotalEl.insertAdjacentHTML('beforebegin', new_markup);
// }











































  
// const bsktContEl = document.querySelector('.bskt-container');
// const productListEL = document.querySelector('.product-list');
// const spanForBtnEl = document.querySelector('.span-for-btn');
// const bsktTotalSpanEl = document.querySelector('.bskt-total span');
// const bsktTotalElems = document.querySelector('.bskt-total');

// document.querySelector('.basket-svg-cont').addEventListener('click', () => {
//   bsktContEl.classList.remove('none');
// });

// document.querySelector('.bskt-menu-close').addEventListener('click', () => {
//   bsktContEl.classList.add('none');
// });

// const basket = {};

// productListEL.addEventListener('click', ({target}) => {
//   if (target.closest('.card-buttom')) {
//     const productsEl = target.closest('.product');
//     const id = +productsEl.dataset.id;
//     const price = +productsEl.dataset.price;
//     const name = productsEl.dataset.name;
//     cardButtomFun(id, price, name);
//   }
// });

// function cardButtomFun(id, price, name) {
//   if (!(id in basket)) {
//     basket[id] = { id, price, name, count: 0};
//   }
//   basket[id].count++;
//   spanForBtnEl.textContent = Object.values(basket)
//   .reduce((acc, product) => acc + product.count, 0);
//   bsktTotalSpanEl.textContent = Object.values(basket)
//   .reduce((acc, product) => acc + product.count * product.price, 0).toFixed(2);
//   renderProductsInBasket(id);
// }

// function renderProductsInBasket(id) {
//   const basketMadeContent = 
//   bsktContEl.querySelector(`.wrap-goods[data-productId = '${id}']`)
//   if (!basketMadeContent) {
//   getNewContentInBasket(id);
//   return;
//   }
//   basketMadeContent.querySelector('.contentsOfGoods-count')
//   .textContent = basket[id].count;
//   basketMadeContent.querySelector('.contentsOfGoods-total')
//   .textContent = (basket[id].price * basket[id].count).toFixed(2);
// }

// function getNewContentInBasket(productId) {
//   const contentsOfGoods = 
//     `<div class="wrap-goods" data-productId='${productId}'>
//       <div>${basket[productId].name}</div>
//       <div>
//         <span class="contentsOfGoods-count">${basket[productId].count}</span> шт.
//       </div>
//       <div>
//         <div class="contentsOfGoods-price">$${basket[productId].price}</div>
//       </div>
//       <div>
//         $<span class="contentsOfGoods-total"> 
//           ${(basket[productId].price * basket[productId].count).toFixed(2)}
//         </span>
//       </div>
//     </div>`;
//    bsktTotalElems.insertAdjacentHTML('beforebegin', contentsOfGoods);
// }

