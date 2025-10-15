<template>
  <header class="bg-gradient-to-r from-green-800 to-green-800 text-white sticky top-0 z-50 shadow-lg">
    <div class=" ml-8 mr-16 py-8 flex justify-between items-center">
      <div class="logo flex items-center gap-4">
        <div>
          <h1 class="text-3xl font-bold">🏔️ Yelagiri Hills</h1>
          <p class="text-sm opacity-90 hidden md:block">Nature's Paradise in South India</p>
        </div>
      </div>
      <div>
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Login / Register
        </button>
      </div>
    </div>
    <nav class="bg-white hidden md:block bg-opacity-30 backdrop-blur-2xl">
      <div class="p-4">
        <ul class="flex gap-2 justify-center flex-wrap">
          <li v-for="item in navigationItems" :key="item.name">
            <router-link 
              :to="item.path" 
              class="text-white hover:bg-white hover:bg-opacity-20 px-5 py-3 block  hover:border-b-4 hover:border-orange-500 transition-all duration-100 rounded-lg font-medium hover:-translate-y-0.5"
              active-class="bg-white bg-opacity-20 border-b-4 border-orange-500"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navigationItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Attractions', path: '/attractions' },
  { name: 'Hotels', path: '/booking' },
  { name: 'Restaurants', path: '/restaurants' },
  { name: 'Tour Packages', path: '/packages' },
  { name: 'Guides', path: '/guides' },
  { name: 'Transport', path: '/transport' },
  { name: 'Shopping', path: '/shopping' },
  { name: 'Events', path: '/events' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
])
</script>
