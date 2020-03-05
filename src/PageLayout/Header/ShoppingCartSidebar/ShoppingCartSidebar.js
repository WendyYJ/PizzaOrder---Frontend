
import React from 'react';

const ShoppingCartSidebar  = () =>{
    return(
        <div>
            <button class="btn btn--primary" aria-controls="drawerCart">Show Cart</button>

<div class="drawer dr-cart js-drawer" id="drawerCart">
  <div class="drawer__content flex flex-column" role="alertdialog" tabindex="-1"  aria-labelledby="drawerTitle1">
    <div class="drawer__body padding-x-md padding-y-sm js-drawer__body">
      <h1 class="text-md">Your Cart (2)</h1>
      
      <ol class="margin-top-md">
        <li class="dr-cart__product">
          <a href="#0" class="dr-cart__img"><img src="../../../asset/img/PeriPeri.png" alt="pizza"/></a>

          <div>
            <h2 class="text-base"><a href="#0" class="color-inherit">Product One</a></h2>
            <p class="text-sm color-contrast-medium margin-top-xxxs">Crust: Blue Cheese, Size: 12'</p>

            <div class="margin-top-xxxxs">
              <div class="select dr-cart__select">
                <select class="select__input form-control" name="selectProductQty1" id="selectProductQty1" data-label="Select product quantity">
                  <option value="0">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                </select>
                
                <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
              </div>
            </div>
          </div>

          <div class="text-right">
            <p class="color-contrast-higher">$49.00</p>
            <button class="dr-cart__remove-btn margin-top-xxxs">Remove</button>
          </div>
        </li>

        <li class="dr-cart__product">
          <a href="#0" class="dr-cart__img"><img src="../../../asset/img/proni.png" alt="pizza"/></a>

          <div>
            <h2 class="text-base"><a href="#0" class="color-inherit">Product Two</a></h2>
            <p class="text-sm color-contrast-medium margin-top-xxxs">Crust: default, Size: 16'</p>

            <div class="margin-top-xxxxs">
              <div class="select dr-cart__select">
                <select class="select__input form-control" name="selectProductQty2" id="selectProductQty2" data-label="Select product quantity">
                  <option value="0">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                </select>
                
                <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
              </div>
            </div>
          </div>

          <div class="text-right">
            <p class="color-contrast-higher">$49.00</p>
            <button class="dr-cart__remove-btn margin-top-xxxs">Remove</button>
          </div>
        </li>
      </ol>
    </div>

    <button class="reset drawer__close-btn position-fixed js-drawer__close">
      <svg class="icon" viewBox="0 0 16 16"><title>Close drawer panel</title><g stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line><line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line></g></svg>
    </button>

    <footer class="padding-x-md padding-y-sm border-top border-contrast-lower flex-shrink-0">
      <p class="flex justify-between"><span>Subtotal:</span> <span>$98.00</span></p>
      <a href="#0" class="btn btn--primary btn--md width-100% margin-y-xs">Checkout &rarr;</a>
    </footer>
  </div>
</div>
</div>

    )
}





export default ShoppingCartSidebar;