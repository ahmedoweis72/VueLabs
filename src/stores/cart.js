import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [], 
    }),
    getters: {
        totalItems: (state) => state.items.length,
        totalPrice: (state) =>
            state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    },
    actions: {
        addProduct(product) {
            const existingItem = this.items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        removeProduct(productId) {
            this.items = this.items.filter((item) => item.id !== productId);
        },
        clearCart() {
            this.items = [];
        },
    },
});