<script setup>
import { useProductsStore } from '../stores/products.js'
import { useCartStore } from '../stores/cart.js'
import { onMounted } from 'vue'

const productsStore = useProductsStore()
const cartStore = useCartStore()

onMounted(() => {
  productsStore.fetchProducts()
})

const addProduct = (product) => {
  cartStore.addProduct(product)
}
</script>

<template>
  <section class="mt-5 p-5">
    <h2 class="text-center mb-3">Products</h2>
    <div v-if="productsStore.loading" class="alert alert-info text-center">Loading products...</div>
    <div v-else-if="productsStore.error" class="alert alert-danger text-center">
      {{ productsStore.error }}
    </div>
    <div v-else class="row p-5">
      <div v-for="product in productsStore.products" :key="product.id" class="col-md-4">
        <div class="card shadow-sm product-card">
          <img :src="product.thumbnail" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <h6 class="text-muted">Brand: {{ product.brand }}</h6>
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-primary me-2">Category: {{ product.category }}</span>
              <span :class="stockBadge">{{ product.availabilityStatus }}</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <span class="text-muted">${{ product.price }}</span>
            </div>
            <p class="small text-muted">{{ product.description }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary" @click="addProduct(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
