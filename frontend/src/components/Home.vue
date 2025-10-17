<template>
  <div class="home-page">
    <!-- Slider Section -->
    <Slide/>
    <!-- Main Content -->
    <div class="px-6 py-16 md:px-16">
      <!-- Overview Section -->
      <section class="mb-16">
        <h2 class="font-bold text-center text-green-800 mb-4" style="font-size: 3rem;">About Yelagiri Hills</h2>
        <p class="text-2xl text-center text-gray-600 mb-12">A picturesque hill station nestled in the Eastern Ghats of Tamil Nadu</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="  bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 class="text-3xl font-semibold text-green-800 mb-4">🌄 Natural Beauty</h3>
            <p class="text-gray-600 leading-relaxed text-2xl">
              Yelagiri is a serene hill station located at an altitude of 1,410 meters above sea level. Known for its pleasant climate throughout the year, lush green valleys, and breathtaking viewpoints, it offers the perfect escape from city life.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 class="text-3xl font-semibold text-green-800 mb-4">🎯 Perfect Destination</h3>
            <p class="text-gray-600 leading-relaxed text-2xl">
              Whether you're seeking adventure, tranquility, or cultural experiences, Yelagiri has something for everyone. From trekking and paragliding to exploring ancient temples and enjoying local cuisine, your journey here will be unforgettable.
            </p>
          </div>
          <div class=" bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 class="text-3xl font-semibold text-green-800 mb-4">🏞️ Accessibility</h3>
            <p class="text-gray-600 leading-relaxed text-2xl">
              Located just 230 km from Chennai and 160 km from Bangalore, Yelagiri is easily accessible by road. The nearest railway station is Jolarpettai (30 km) and the nearest airport is Bangalore International Airport (160 km).
            </p>
          </div>
        </div>
      </section>

      <!-- Highlights Section -->
      <section class="highlights bg-gradient-to-br from-green-50 to-green-100 py-16 rounded-2xl mb-16">
        <h2 class="font-bold text-center text-gray-800 mb-12" style="font-size: 3rem;">Why Choose Yelagiri?</h2>
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap md:gap-8">
          <div 
            v-for="highlight in highlights" 
            :key="highlight.title"
            class="highlight-item text-center bg-white shadow-xl p-2 m-4 rounded-xl"
          >
            <div class="highlight-icon mb-4" style="font-size: 5rem;">{{ highlight.icon }}</div>
            <h4 class="text-2xl font-semibold text-green-800 mb-2">{{ highlight.title }}</h4>
            <p class="text-gray-600">{{ highlight.description }}</p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="mb-16">
        <h2 class=" font-bold text-center text-gray-800 mb-4" style="font-size: 3rem;">What We Offer</h2>
        <p class="text-xl text-center text-gray-600 mb-12">A complete tourism ecosystem at your fingertips</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="feature-card bg-white p-6 rounded-xl border-4 border-white border-l-green-500 hover:border-l-green-600 hover:border-l-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h4 class="text-xl font-semibold text-green-800 mb-4">{{ feature.icon }} {{ feature.title }}</h4>
            <ul class="space-y-2">
              <li v-for="item in feature.items" :key="item" class="text-gray-600 flex items-start">
                <span class="text-green-600 mr-2">•</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats bg-gradient-to-r from-blue-500 to-green-400 text-white py-16 rounded-2xl mb-16">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-4 md-gap-8">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="stat-item text-center"
          >
            <h3 class="text-3xl md:text-5xl font-bold mb-2" style="font-size: 3rem;">{{ stat.value }}</h3>
            <p class="text-lg">{{ stat.label }}</p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="text-center py-12 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Ready to Explore Yelagiri?</h2>
        <p class="text-xl text-gray-600 mb-8">Start planning your perfect hill station getaway today</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <router-link to="/booking" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Your Hotel
          </router-link>
          <router-link to="/contact" class="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </router-link>
        </div>
      </section>
    </div>
  </div>
  
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Slide from './Slide.vue'



const highlights = ref([
  { icon: '🌡️', title: 'Pleasant Climate', description: 'Year-round comfortable weather (15°C - 30°C)' },
  { icon: '🪂', title: 'Adventure Sports', description: 'Paragliding, trekking, and rock climbing' },
  { icon: '🛕', title: 'Cultural Heritage', description: 'Ancient temples and local traditions' },
  { icon: '🍽️', title: 'Traditional Cuisine', description: 'Authentic Tamil and local delicacies' },
  { icon: '🛍️', title: 'Local Handicrafts', description: 'Unique souvenirs and handmade products' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', description: 'Safe and enjoyable for all ages' }
])

const features = ref([
  {
    icon: '🏨',
    title: 'Accommodation',
    items: [
      'Wide range of hotels and resorts',
      'Budget to luxury options',
      'Real-time availability and booking',
      'Verified reviews and ratings'
    ]
  },
  {
    icon: '🎒',
    title: 'Tour Packages',
    items: [
      'Curated tour packages',
      'Customizable itineraries',
      'Expert local guides',
      'Group and solo options'
    ]
  },
  {
    icon: '🍴',
    title: 'Dining',
    items: [
      'Traditional Tamil cuisine',
      'Multi-cuisine restaurants',
      'Online ordering available',
      'QR-based menus'
    ]
  },
  {
    icon: '🚗',
    title: 'Transportation',
    items: [
      'Taxi and cab services',
      'Bike rentals',
      'Transparent pricing',
      'Reliable local drivers'
    ]
  },
  {
    icon: '🎫',
    title: 'Activities & Events',
    items: [
      'Adventure activities booking',
      'Cultural events calendar',
      'Festival celebrations',
      'Online ticket purchase'
    ]
  },
  {
    icon: '💳',
    title: 'Easy Booking',
    items: [
      'Secure online payments',
      'Instant confirmations',
      '24/7 customer support',
      'Flexible cancellation'
    ]
  }
])

const stats = ref([
  { value: '50+', label: 'Partner Hotels' },
  { value: '100+', label: 'Local Vendors' },
  { value: '25+', label: 'Tour Packages' },
  { value: '15+', label: 'Attractions' }
])


</script>
