<template>
  <div class="guides-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">👨‍💼 Local Guides</h1>
        <p class="text-xl md:text-2xl opacity-90">Expert local guides to make your Yelagiri experience unforgettable</p>
      </div>
    </div>

    <div class="px-6 py-16 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="guide in guides" 
          :key="guide.id"
          class="guide-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img :src="guide.image" :alt="guide.name" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ guide.name }}</h3>
            <p class="text-green-600 font-medium mb-2">{{ guide.specialization }}</p>
            <p class="text-gray-600 mb-4">{{ guide.experience }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="text-yellow-500">⭐</span>
                <span class="text-sm text-gray-600">{{ guide.rating }} ({{ guide.reviews }} reviews)</span>
              </div>
              <span class="text-green-600 font-semibold">₹{{ guide.price }}/day</span>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="language in guide.languages" 
                :key="language"
                class="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs"
              >
                {{ language }}
              </span>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
              Book Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const guides = ref([
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialization: 'Adventure & Trekking',
    experience: '5 years of experience in adventure tourism',
    rating: 4.8,
    reviews: 124,
    price: 1200,
    languages: ['English', 'Tamil', 'Hindi'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    specialization: 'Cultural Heritage',
    experience: 'Certified cultural guide with deep local knowledge',
    rating: 4.7,
    reviews: 98,
    price: 1000,
    languages: ['English', 'Tamil', 'Telugu'],
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Mohan Reddy',
    specialization: 'Nature & Wildlife',
    experience: 'Expert in local flora and fauna',
    rating: 4.9,
    reviews: 156,
    price: 1500,
    languages: ['English', 'Tamil', 'Telugu', 'Hindi'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
  }
])
</script>
