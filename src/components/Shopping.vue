<template>
  <div class="shopping-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">🛍️ Local Shopping</h1>
        <p class="text-xl md:text-2xl opacity-90">Discover unique handicrafts and local products from Yelagiri</p>
      </div>
    </div>

    <div class="px-6 py-16 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in shoppingItems" 
          :key="item.id"
          class="shopping-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ item.name }}</h3>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <span class="text-green-600 font-semibold">₹{{ item.price }}</span>
              <span class="text-sm text-gray-500">{{ item.category }}</span>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const shoppingItems = ref([
  {
    id: 1,
    name: 'Handmade Pottery',
    description: 'Traditional clay pottery made by local artisans',
    price: 450,
    category: 'Handicrafts',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Mountain Honey',
    description: 'Pure honey collected from local beekeepers',
    price: 300,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Wooden Crafts',
    description: 'Beautiful wooden sculptures and decorative items',
    price: 800,
    category: 'Handicrafts',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=300&fit=crop'
  }
])
</script>
