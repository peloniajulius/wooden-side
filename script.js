let cartBtn = document.querySelectorAll('.add-to-cart');

let cart = document.querySelector('.cart');

let cartCount = 0;

cartBtn.forEach(button =>{
    button.addEventListener('click', () =>{
        cartCount++;
        cart.innerHTML = `(${cartCount})`;
        alert('product added to cart');
    })
})

