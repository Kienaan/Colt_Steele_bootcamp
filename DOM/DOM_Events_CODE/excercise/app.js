// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('#lis');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const prdct = form.elements.product;
    const quantity = form.elements.qty;
    addUl(prdct.value, quantity.value);
    prdct.value = '';
    quantity.value = '';
})

const addUl = (prdct, q) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = (`${q} ${prdct}s`);
    ul.appendChild(newProduct);
}



 // newQty.appendChild(product)
    // newProduct.appendChild(newQty);
    // newProduct.appendChild(qty);