import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    pageTitle: 'Home'
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:3000/products');
        this.products = response.data;
      } catch (err) {
        this.error = 'Failed to load products';
      } finally {
        this.loading = false;
      }
    },
    setPageTitle(title) {
      this.pageTitle = title;
    }
  }
});
