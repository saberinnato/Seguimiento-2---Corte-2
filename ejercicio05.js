class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(name, price, quantity) {
        this.products.push({ name, price, quantity });
        console.log(`Producto ${name} agregado al carrito`);
    }

    calculateTotal() {
        const total = this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        console.log(`Total de la compra: $${total}`);
    }

    showCart() {
        console.log('Carrito de compras: ', this.products);
    }
}

// Uso:
const cart = new Cart();
cart.addProduct('Laptop', 2000, 1);
cart.addProduct('Mouse', 50, 2);
cart.showCart();
cart.calculateTotal();
