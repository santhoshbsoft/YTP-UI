<template>
  <div class="transport-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">🚗 Transportation</h1>
        <p class="text-xl md:text-2xl opacity-90">Convenient transport options to explore Yelagiri Hills</p>
      </div>
    </div>

    <div class="px-6 py-16 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="transport in transportOptions" 
          :key="transport.id"
          class="transport-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img :src="transport.image" :alt="transport.name" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ transport.name }}</h3>
            <p class="text-gray-600 mb-4">{{ transport.description }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <span class="text-green-600 font-semibold">₹{{ transport.price }}/{{ transport.unit }}</span>
              <span class="text-sm text-gray-500">{{ transport.capacity }}</span>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const transportOptions = ref([
  {
    id: 1,
    name: 'Taxi Service',
    description: 'Comfortable taxi rides with experienced local drivers',
    price: 800,
    unit: 'day',
    capacity: '4 passengers',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Bike Rental',
    description: 'Explore Yelagiri on two wheels with our bike rental service',
    price: 300,
    unit: 'day',
    capacity: '1 passenger',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Bus Service',
    description: 'Affordable bus transportation to major attractions',
    price: 50,
    unit: 'trip',
    capacity: '40 passengers',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop'
  }
])
</script>
