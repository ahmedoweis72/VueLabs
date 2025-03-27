<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const removeProduct = (productId) => {
  cartStore.removeProduct(productId)
}

const clearCart = () => {
  cartStore.clearCart()
}

</script>

<template>
  <div class="container mt-5">
    <h2 class="text-center pt-5 mb-4">Your Cart</h2>
    <div v-if="cartStore.totalItems === 0" class="alert alert-info text-center">
      Your cart is empty.
    </div>
    <div v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.items" :key="item.id">
            <td>{{ item.title }}</td>
            <td>${{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeProduct(item.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <h4>Total Price: ${{ cartStore.totalPrice.toFixed(2) }}</h4>
        <button class="btn btn-warning" @click="clearCart">Clear Cart</button>
      </div>
    </div>
  </div>
</template>


