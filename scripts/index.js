'use strict';
/* global shoppingList, $ */

// eslint-disable-next-line no-unused-vars

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);