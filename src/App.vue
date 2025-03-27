<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-dark position-absolute top-0  text-white ">
    <div class="container text-center d-flex justify-content-between align-items-md-center">
      <h1>My Store</h1>
      <nav class="nav justify-content-center">
        <RouterLink class="nav-link text-light" to="/">Home</RouterLink>
        <RouterLink class="nav-link text-light" to="/cart">Cart<i class="bi bi-cart"></i></RouterLink>
      </nav>
    </div>
  </header>

  <main class="container mt-4 ">
    <RouterView />
  </main>
</template>

<style scoped>
.nav-link {
  font-weight: bold;
  transition: 0.3s;
}
header{
  left: 0;
  right: 0;
}
.nav-link:hover {
  color: #ff9800 !important;
}
</style>
