fetch('data.json')
.then(response => response.json())
.then(data => {
const productsList = document.getElementById('products');

data.products.forEach(product => {
    const table = document.createElement('tr');
    tr.textContent = `${product.name} - $${product.price} - ${product.size} - ${product.from} - ${product.description}`;
    productsList.appendChild(tr);
});
})
.catch(error => console.error('Error fetching data:', error));
