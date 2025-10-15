<template>
  <div class="events-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">🎉 Events & Festivals</h1>
        <p class="text-xl md:text-2xl opacity-90">Experience the vibrant culture and traditions of Yelagiri</p>
      </div>
    </div>

    <div class="container max-w-7xl mx-auto px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="event in events" 
          :key="event.id"
          class="event-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img :src="event.image" :alt="event.name" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ event.name }}</h3>
            <p class="text-gray-600 mb-4">{{ event.description }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <span class="text-green-600 font-semibold">{{ event.date }}</span>
              <span class="text-sm text-gray-500">{{ event.location }}</span>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    name: 'Yelagiri Festival',
    description: 'Annual cultural festival celebrating local traditions',
    date: 'March 15-17',
    location: 'Main Ground',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Adventure Sports Meet',
    description: 'Competition for paragliding and trekking enthusiasts',
    date: 'April 20-22',
    location: 'Swamimalai Hills',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Food & Craft Fair',
    description: 'Showcase of local cuisine and handicrafts',
    date: 'May 10-12',
    location: 'Market Area',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop'
  }
])
</script>
