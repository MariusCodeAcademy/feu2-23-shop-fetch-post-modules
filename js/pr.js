'use strict';
console.log('pr.js');

const productEl = document.getElementById('item');
const titleEl = document.querySelector('h1');

// suzinoti koks dabartinio produkto id
// Create urlParams query string
console.log('window.location.search ===', window.location.search);
const urlParams = new URLSearchParams(window.location.search);

// Get value of single parameter
const procutId = urlParams.get('prId');

// Output value to console
console.log(procutId);

// parsiusti ta produka
getSingleProduct(procutId).then((productObj) => {
  console.log('productObj ===', productObj);
  titleEl.textContent = productObj.title;
  // sugeneruoti jo html arba supildyti html
  const htmlProductEl = makeOneSingleItem(productObj);
  // patalpinti DOM
  productEl.append(htmlProductEl);
});
