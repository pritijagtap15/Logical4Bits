document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.dataset.filter;

            products.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    window.addEventListener('resize', function() {
        adjustAddToCartButton();
    });

    adjustAddToCartButton(); // Call the function initially
});
