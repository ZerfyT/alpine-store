function cart() {
    return {
        cartItems: [],
        totalPrice: 0.00,

        init() {
            this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
        },

        addItem(item) {
            console.log(item);
            this.cartItems.push(item);
            this.totalPrice += item.price;
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        },

        clearCart() {
            this.cartItems = [];
            this.totalPrice = 0.00;
            localStorage.removeItem('cartItems');
        },

        removeItem(index) {
            if (index > -1) {
                this.totalPrice -= this.cartItems[index].price;
                this.cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
            }
        },

    }
}