<template>
  <div class="app">
    <Header />
    <main >
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Global styles can be added here */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  width: 100%;
}
</style>
