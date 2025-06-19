function cart() {
    return {
        cartItems: [],
        totalPrice: 0.00,

        init() {
            this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            this.totalPrice = this.cartItems.reduce((total, item) => Number.parseFloat(total + item.price).toFixed(2), 0);
        },

        addItem(item) {
            console.log(item);
            this.cartItems.push(item);
            this.totalPrice += item.price;
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

            // GA Event: add_to_cart
            if (typeof gtag === 'function') {
                gtag('event', 'add_to_cart', {
                    item_id: item.id,
                    item_name: item.title,
                    price: item.price,
                    quantity: 1 // Assuming quantity is always 1 for this action
                });
            }
        },

        clearCart() {
            this.cartItems = [];
            this.totalPrice = 0.00;
            localStorage.removeItem('cartItems');
            // Potentially track 'clear_cart' event if needed
        },

        removeItem(index) {
            if (index > -1) {
                const item = this.cartItems[index];
                this.totalPrice -= item.price;
                this.cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

                // GA Event: remove_from_cart
                if (typeof gtag === 'function') {
                    gtag('event', 'remove_from_cart', {
                        item_id: item.id,
                        item_name: item.title,
                        price: item.price,
                        quantity: 1 // Assuming quantity is always 1 for this action
                    });
                }
            }
        },

        viewCart() {
            // GA Event: view_cart
            // This event is simpler as GA automatically tracks page views.
            // This custom event can be used if specific interaction with cart dropdown needs tracking.
            if (typeof gtag === 'function') {
                gtag('event', 'view_cart', {
                    // You can add parameters like number of items if desired
                    // item_count: this.cartItems.length
                });
            }
        }
    }
}

function getItems() {
    return {
        cards: [],
        search: '',
        async fetchItems() {
            await fetch('data.json').then(response => response.json()).then(json => this.cards = json.items);
        },

        get filterItems() {
            return this.cards.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()));
        }

    }
}