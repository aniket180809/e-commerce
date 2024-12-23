let cart = [];

function updateCartCount() {
    document.querySelector('.cart a').textContent = `Cart (${cart.length})`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.productId;
        cart.push(productId);
        updateCartCount();
    });
});
