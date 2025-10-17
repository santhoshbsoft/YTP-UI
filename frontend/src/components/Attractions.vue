<template>
  <div class="attractions-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Discover Yelagiri's Wonders</h1>
        <p class="text-xl md:text-2xl opacity-90">Explore the natural beauty and cultural heritage of our hill station</p>
      </div>
    </div>

    <div class="px-6 py-16 md:px-16">
      <!-- Featured Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Must-Visit Attractions</h2>
        <p class="text-xl text-center text-gray-600 mb-12">The most popular spots that make Yelagiri special</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="attraction in featuredAttractions" 
            :key="attraction.id"
            class="attraction-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            @click="openAttractionModal(attraction)"
          >
            <div class="relative">
              <img :src="attraction.image" :alt="attraction.name" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ attraction.category }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ attraction.name }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ attraction.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-yellow-500">⭐</span>
                  <span class="text-sm text-gray-600">{{ attraction.rating }} ({{ attraction.reviews }} reviews)</span>
                </div>
                <span class="text-green-600 font-semibold">{{ attraction.distance }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- All Attractions Grid -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">All Attractions</h2>
        
        <!-- Filter Tabs -->
        <div class="flex justify-center mb-8">
          <div class="bg-gray-100 rounded-lg p-1">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-6 py-2 rounded-md font-medium transition-all',
                selectedCategory === category 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="attraction in filteredAttractions" 
            :key="attraction.id"
            class="attraction-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            @click="openAttractionModal(attraction)"
          >
            <img :src="attraction.image" :alt="attraction.name" class="w-full h-32 object-cover">
            <div class="p-4">
              <h4 class="font-semibold text-gray-800 mb-1">{{ attraction.name }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ attraction.category }}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="text-green-600">{{ attraction.distance }}</span>
                <div class="flex items-center gap-1">
                  <span class="text-yellow-500">⭐</span>
                  <span>{{ attraction.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Adventure Activities -->
      <section class="bg-gradient-to-br from-green-50 to-green-100 py-16 rounded-2xl mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Adventure Activities</h2>
        <p class="text-xl text-center text-gray-600 mb-12">Thrill-seekers, this is for you!</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="activity in adventureActivities" 
            :key="activity.id"
            class="activity-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="text-4xl mb-4">{{ activity.icon }}</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">{{ activity.name }}</h3>
            <p class="text-gray-600 mb-4">{{ activity.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-green-600 font-semibold">{{ activity.duration }}</span>
              <span class="text-lg font-bold text-green-800">{{ activity.price }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Attraction Modal -->
    <div 
      v-if="selectedAttraction" 
      class="modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      @click.self="closeModal"
    >
      <div class="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          @click="closeModal"
          class="modal-close absolute top-4 right-4 bg-white border-none text-2xl cursor-pointer w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          ×
        </button>
        
        <div class="modal-images grid grid-cols-3 gap-2 rounded-t-2xl overflow-hidden">
          <img 
            v-for="(image, index) in selectedAttraction.images" 
            :key="index"
            :src="image" 
            :alt="selectedAttraction.name"
            class="w-full h-48 object-cover"
          >
        </div>
        
        <div class="modal-body p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ selectedAttraction.name }}</h2>
          <p class="text-lg text-gray-600 mb-6">{{ selectedAttraction.fullDescription }}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-green-800 mb-3">Details</h3>
              <ul class="space-y-2 text-gray-600">
                <li><strong>Category:</strong> {{ selectedAttraction.category }}</li>
                <li><strong>Distance:</strong> {{ selectedAttraction.distance }}</li>
                <li><strong>Best Time:</strong> {{ selectedAttraction.bestTime }}</li>
                <li><strong>Entry Fee:</strong> {{ selectedAttraction.entryFee }}</li>
                <li><strong>Timings:</strong> {{ selectedAttraction.timings }}</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-green-800 mb-3">Location & Nearby</h3>
              <ul class="space-y-2 text-gray-600">
                <li v-for="nearby in selectedAttraction.nearby" :key="nearby">
                  {{ nearby }}
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const selectedAttraction = ref(null)

const categories = ref(['All', 'Nature', 'Adventure', 'Culture', 'Religious', 'Waterfalls'])

const featuredAttractions = ref([
  {
    id: 1,
    name: 'Punganoor Lake',
    category: 'Nature',
    description: 'A beautiful artificial lake surrounded by lush greenery, perfect for boating and peaceful walks.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 234,
    distance: '1.5 km',
    fullDescription: 'Punganoor Lake is the crown jewel of Yelagiri, offering stunning views and peaceful surroundings. This artificial lake is perfect for boating, picnics, and nature photography.',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=400&h=300&fit=crop'
    ],
    bestTime: '6 AM - 6 PM',
    entryFee: '₹50 per person',
    timings: 'Daily 6:00 AM - 6:00 PM',
    nearby: [
      'Swamimalai Hills - 3 km (10 min drive)',
      'Nature Park - 2 km (8 min drive)',
      'Paragliding Point - 4 km (15 min drive)'
    ]
  },
  {
    id: 2,
    name: 'Jalagamparai Waterfalls',
    category: 'Waterfalls',
    description: 'A spectacular 40-feet waterfall cascading down rocky cliffs, surrounded by dense forest.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 189,
    distance: '7 km',
    fullDescription: 'Jalagamparai Waterfalls is one of the most spectacular natural attractions in Yelagiri. The 40-feet waterfall cascades down rocky cliffs creating a mesmerizing sight.',
    images: [
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    ],
    bestTime: 'July - September',
    entryFee: '₹30 per person',
    timings: 'Daily 7:00 AM - 5:00 PM',
    nearby: [
      'Swamimalai Hills - 4 km (12 min drive)',
      'Punganoor Lake - 7 km (20 min drive)',
      'Nature Park - 6 km (18 min drive)'
    ]
  },
  {
    id: 3,
    name: 'Swamimalai Hills',
    category: 'Adventure',
    description: 'Perfect for trekking and adventure activities with panoramic views of the surrounding valleys.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 156,
    distance: '3 km',
    fullDescription: 'Swamimalai Hills offers some of the best trekking trails in Yelagiri with breathtaking panoramic views of the surrounding valleys and hills.',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop'
    ],
    bestTime: 'Early Morning',
    entryFee: 'Free',
    timings: 'Always Open',
    nearby: [
      'Punganoor Lake - 3 km (10 min drive)',
      'Paragliding Point - 1 km (5 min walk)',
      'Nature Park - 2 km (8 min drive)'
    ]
  }
])

const allAttractions = ref([
  { id: 4, name: 'Yelagiri Nature Park', category: 'Nature', distance: '2 km', rating: 4.3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop' },
  { id: 5, name: 'Paragliding Point', category: 'Adventure', distance: '2 km', rating: 4.8, image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop' },
  { id: 6, name: 'Telescope House', category: 'Culture', distance: '1 km', rating: 4.2, image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=200&fit=crop' },
  { id: 7, name: 'Vellore Fort Viewpoint', category: 'Nature', distance: '5 km', rating: 4.4, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop' },
  { id: 8, name: 'Murugan Temple', category: 'Religious', distance: '1 km', rating: 4.5, image: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=300&h=200&fit=crop' },
  { id: 9, name: 'Nilavoor Lake', category: 'Nature', distance: '4 km', rating: 4.1, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=200&fit=crop' },
  { id: 10, name: 'Adventure Sports Center', category: 'Adventure', distance: '3 km', rating: 4.7, image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop' },
  { id: 11, name: 'Heritage Walk Trail', category: 'Culture', distance: '2 km', rating: 4.0, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop' }
])

const adventureActivities = ref([
  {
    id: 1,
    name: 'Paragliding',
    icon: '🪂',
    description: 'Soar through the skies and enjoy breathtaking aerial views of Yelagiri.',
    duration: '15-20 mins',
    price: '₹2,500'
  },
  {
    id: 2,
    name: 'Trekking',
    icon: '🥾',
    description: 'Explore scenic trails through lush forests and rocky terrains.',
    duration: '2-4 hours',
    price: '₹800'
  },
  {
    id: 3,
    name: 'Rock Climbing',
    icon: '🧗',
    description: 'Challenge yourself with our guided rock climbing sessions.',
    duration: '1-2 hours',
    price: '₹1,200'
  },
  {
    id: 4,
    name: 'Boating',
    icon: '🚣',
    description: 'Peaceful boat rides on the serene Punganoor Lake.',
    duration: '30-45 mins',
    price: '₹200'
  },
  {
    id: 5,
    name: 'Cycling',
    icon: '🚴',
    description: 'Explore Yelagiri on two wheels with our cycling tours.',
    duration: '2-3 hours',
    price: '₹500'
  },
  {
    id: 6,
    name: 'Nature Photography',
    icon: '📸',
    description: 'Capture the beauty of Yelagiri with guided photography tours.',
    duration: '3-4 hours',
    price: '₹1,000'
  }
])

const filteredAttractions = computed(() => {
  if (selectedCategory.value === 'All') {
    return allAttractions.value
  }
  return allAttractions.value.filter(attraction => 
    attraction.category.toLowerCase() === selectedCategory.value.toLowerCase()
  )
})

const openAttractionModal = (attraction) => {
  selectedAttraction.value = attraction
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedAttraction.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
