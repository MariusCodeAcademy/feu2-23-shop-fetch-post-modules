'use strict';
console.log('main.js');

class Shop {
  // html element targets
  el = {};
  items = [];

  constructor() {
    this.initTargets();
    this.getItems();
  }

  initTargets() {
    this.el.list = document.getElementById('products');
  }

  getItems() {
    getProducts().then((products) => {
      this.items = products;
      // console.log(JSON.stringify(products[0], null, 2));
    });
  }
}

const app = new Shop();
console.log('app ===', app);
