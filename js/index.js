// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input').value;
  console.log(price, quantity);
  const sub = parseInt(price.innerText) * parseInt(quantity);
  console.log(sub);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sub;
  return parseInt(sub);
}

// end of test

// ITERATION 2

// ITERATION 3

function calculateAll() {
  let total = 0;
  var multiProduct = Array.from(document.getElementsByClassName('product'));
  for (let product of multiProduct) {
    total += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const toDelete = target.parentNode.parentNode;
  toDelete.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = Array.from(
    document.getElementsByClassName('btn-remove')
  );

  removeButton.forEach((el) => el.addEventListener('click', removeProduct));
});
