class Shop {
  // html element targets
  el = {};
  items = [];

  constructor() {
    this.initTargets();
    this.getItems();
  }
  // prideti naujam sukurtam produktui i sarasa
  addNewProductToList(prod) {
    this.items.unshift(prod);
    this.renderList();
  }

  initTargets() {
    this.el.list = document.getElementById('products');
  }

  getItems() {
    getProducts().then((products) => {
      this.items = products;
      // console.log(JSON.stringify(products[0], null, 2));
      this.renderList();
    });
  }

  makeOneItem(itemObj) {
    /* 
    <div class="shop-item card">
    </div>
    */
    const divEl = document.createElement('div');
    divEl.className = 'shop-item card';
    divEl.innerHTML = `
      <img src="${itemObj.thumbnail}" alt="preke">
        <h3>${itemObj.title}</h3>
        <p class="price">${itemObj.price} eur</p>
        <p>Category: ${itemObj.category} (id:${itemObj.id})</p>
        <div class="control">
          <button>Add to cart</button>
          <a href="product.html?prId=${itemObj.id}">more info ></a>
        </div>
    `;
    return divEl;
  }

  filterCategory(event) {
    const filterValue = event.target.value;
    console.log('filterValue ===', filterValue);
    // 4.1. padaryti kad pasirinkus kategorija parsiustume ir rodytume tik tos kategorijos produktus.(tam reiktu nebenaudoti db.json o siustis is https://dummyjson.com/products/category/smartphones kur smartphones yra kategorija)
  }

  renderList() {
    this.el.list.innerHTML = '';
    this.items
      .map((iObj) => this.makeOneItem(iObj))
      .forEach((htmlEl) => this.el.list.append(htmlEl));
  }
} // class end
