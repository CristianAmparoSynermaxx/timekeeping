<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header v-if="$route.meta.showHeader" />
  <RouterView />
</template>

<style scoped></style>
