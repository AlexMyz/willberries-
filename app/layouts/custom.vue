<template>
  <Header />
  <slot />
  <Cart v-if="viewCart" />
</template>

<script setup lang="ts">
const viewCart = useViewCart()
</script>