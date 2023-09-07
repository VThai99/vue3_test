<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="mt-4 d-flex justify-content-center align-items-center gap-3 nav">
    <RouterLink to="/" class="text-decoration-none">Home Page</RouterLink> |
    <RouterLink to="/table" class="text-decoration-none">Table Vue3</RouterLink>
  </div>
</template>
