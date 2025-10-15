<template>
  <div class="booking-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p class="text-xl md:text-2xl opacity-90">Discover comfortable accommodations in Yelagiri Hills</p>
      </div>
    </div>

    <div class="container max-w-7xl mx-auto px-8 py-8">
      <!-- Search Form -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
            <input 
              v-model="searchForm.checkin"
              type="date" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
            <input 
              v-model="searchForm.checkout"
              type="date" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <select 
              v-model="searchForm.guests"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
          <div class="flex items-end">
            <button 
              @click="searchHotels"
              class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Search Hotels
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Filters Sidebar -->
        <div class="filters-sidebar bg-white p-6 rounded-xl shadow-lg h-fit sticky top-24">
          <h3 class="text-xl font-semibold text-green-800 mb-6">Filters</h3>
          
          <!-- Price Range -->
          <div class="filter-section mb-6 pb-6 border-b border-gray-200">
            <h4 class="text-lg font-medium text-green-800 mb-4">Price Range</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <input 
                  v-model="filters.priceRange" 
                  type="radio" 
                  value="budget" 
                  id="budget"
                  class="mr-3"
                >
                <label for="budget" class="text-gray-700">Budget (₹500 - ₹1500)</label>
              </div>
              <div class="flex items-center">
                <input 
                  v-model="filters.priceRange" 
                  type="radio" 
                  value="mid" 
                  id="mid"
                  class="mr-3"
                >
                <label for="mid" class="text-gray-700">Mid-range (₹1500 - ₹3000)</label>
              </div>
              <div class="flex items-center">
                <input 
                  v-model="filters.priceRange" 
                  type="radio" 
                  value="luxury" 
                  id="luxury"
                  class="mr-3"
                >
                <label for="luxury" class="text-gray-700">Luxury (₹3000+)</label>
              </div>
            </div>
          </div>

          <!-- Amenities -->
          <div class="filter-section mb-6 pb-6 border-b border-gray-200">
            <h4 class="text-lg font-medium text-green-800 mb-4">Amenities</h4>
            <div class="space-y-3">
              <div v-for="amenity in amenities" :key="amenity" class="flex items-center">
                <input 
                  v-model="filters.amenities" 
                  :value="amenity"
                  type="checkbox" 
                  :id="amenity"
                  class="mr-3"
                >
                <label :for="amenity" class="text-gray-700">{{ amenity }}</label>
              </div>
            </div>
          </div>

          <!-- Rating -->
          <div class="filter-section mb-6 pb-6 border-b border-gray-200">
            <h4 class="text-lg font-medium text-green-800 mb-4">Minimum Rating</h4>
            <div class="space-y-3">
              <div v-for="rating in [4, 3, 2, 1]" :key="rating" class="flex items-center">
                <input 
                  v-model="filters.minRating" 
                  :value="rating"
                  type="radio" 
                  :id="`rating-${rating}`"
                  class="mr-3"
                >
                <label :for="`rating-${rating}`" class="text-gray-700 flex items-center">
                  <span v-for="i in rating" :key="i" class="text-yellow-500 mr-1">⭐</span>
                  <span class="ml-2">{{ rating }}+ stars</span>
                </label>
              </div>
            </div>
          </div>

          <button 
            @click="clearFilters"
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Clear Filters
          </button>
        </div>

        <!-- Hotels Results -->
        <div class="lg:col-span-3">
          <div class="results-header bg-white p-6 rounded-xl shadow-lg mb-6 flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-800">
              {{ filteredHotels.length }} Hotels Found
            </h2>
            <div class="flex items-center gap-4">
              <label class="text-gray-700">Sort by:</label>
              <select 
                v-model="sortBy"
                class="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="distance">Distance</option>
              </select>
            </div>
          </div>

          <div class="space-y-6">
            <div 
              v-for="hotel in sortedHotels" 
              :key="hotel.id"
              class="hotel-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              @click="openHotelDetails(hotel)"
            >
              <div class="grid grid-cols-1 md:grid-cols-[350px_1fr]">
                <div class="relative">
                  <img :src="hotel.image" :alt="hotel.name" class="w-full h-64 md:h-full object-cover">
                  <div v-if="hotel.discount" class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {{ hotel.discount }}% OFF
                  </div>
                </div>
                
                <div class="p-6 flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-start mb-4">
                      <div>
                        <h3 class="text-2xl font-bold text-green-800 mb-2">{{ hotel.name }}</h3>
                        <p class="text-gray-600 flex items-center gap-2">
                          <span>📍</span>
                          {{ hotel.location }}
                        </p>
                      </div>
                      <div class="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                        <span>⭐</span>
                        {{ hotel.rating }}
                      </div>
                    </div>

                    <div class="amenities flex flex-wrap gap-2 mb-4">
                      <span 
                        v-for="amenity in hotel.amenities" 
                        :key="amenity"
                        class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {{ amenity }}
                      </span>
                    </div>
                  </div>

                  <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div class="price-section">
                      <p v-if="hotel.originalPrice" class="text-gray-500 line-through text-sm">
                        ₹{{ hotel.originalPrice }}/night
                      </p>
                      <p class="text-2xl font-bold text-green-800">₹{{ hotel.price }}/night</p>
                      <p class="text-gray-600 text-sm">per night</p>
                    </div>
                    <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hotel Details Modal -->
    <div 
      v-if="selectedHotel" 
      class="modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      @click.self="closeModal"
    >
      <div class="modal-content bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          @click="closeModal"
          class="modal-close absolute top-4 right-4 bg-white border-none text-2xl cursor-pointer w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          ×
        </button>
        
        <div class="modal-images grid grid-cols-3 gap-2 rounded-t-2xl overflow-hidden">
          <img 
            v-for="(image, index) in selectedHotel.images" 
            :key="index"
            :src="image" 
            :alt="selectedHotel.name"
            class="w-full h-48 object-cover"
          >
        </div>
        
        <div class="modal-body p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ selectedHotel.name }}</h2>
          <p class="text-lg text-gray-600 mb-6">{{ selectedHotel.fullDescription }}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-green-800 mb-4">Room Types</h3>
              <div class="space-y-4">
                <div 
                  v-for="room in selectedHotel.rooms" 
                  :key="room.type"
                  class="room-type-card bg-gray-50 p-4 rounded-lg"
                >
                  <h4 class="font-semibold text-gray-800">{{ room.type }}</h4>
                  <p class="text-gray-600 text-sm mb-2">{{ room.description }}</p>
                  <div class="flex justify-between items-center">
                    <span class="text-green-600 font-semibold">₹{{ room.price }}/night</span>
                    <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-green-800 mb-4">Amenities</h3>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="amenity in selectedHotel.amenities" :key="amenity" class="flex items-center">
                  <span class="text-green-600 mr-2">✓</span>
                  <span class="text-gray-700">{{ amenity }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Now - ₹{{ selectedHotel.price }}/night
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchForm = ref({
  checkin: '',
  checkout: '',
  guests: '2'
})

const filters = ref({
  priceRange: '',
  amenities: [],
  minRating: 0
})

const sortBy = ref('price-low')
const selectedHotel = ref(null)

const amenities = ref([
  'Free WiFi',
  'Parking',
  'Restaurant',
  'Pool',
  'Spa',
  'Gym',
  'Room Service',
  'Air Conditioning'
])

const hotels = ref([
  {
    id: 1,
    name: 'Green Valley Resort & Spa',
    location: 'Near Punganoor Lake, Yelagiri Hills',
    rating: 4.5,
    price: 3375,
    originalPrice: 4500,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    ],
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Pool', 'Spa'],
    fullDescription: 'Green Valley Resort & Spa offers a perfect blend of luxury and nature. Located near Punganoor Lake, it provides stunning views and world-class amenities.',
    rooms: [
      { type: 'Deluxe Room', description: 'Spacious room with lake view', price: 3375 },
      { type: 'Suite', description: 'Premium suite with balcony', price: 4500 },
      { type: 'Family Room', description: 'Perfect for families', price: 5500 }
    ]
  },
  {
    id: 2,
    name: 'Mountain View Hotel',
    location: 'Swamimalai Road, Yelagiri Hills',
    rating: 4.2,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    ],
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Gym'],
    fullDescription: 'Mountain View Hotel offers comfortable accommodations with panoramic views of the surrounding hills.',
    rooms: [
      { type: 'Standard Room', description: 'Comfortable room with mountain view', price: 2500 },
      { type: 'Deluxe Room', description: 'Upgraded room with better amenities', price: 3200 }
    ]
  },
  {
    id: 3,
    name: 'Nature\'s Paradise Resort',
    location: 'Near Jalagamparai Waterfalls',
    rating: 4.7,
    price: 4200,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    ],
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Pool', 'Spa', 'Room Service'],
    fullDescription: 'Nature\'s Paradise Resort is an eco-friendly property located near the famous Jalagamparai Waterfalls.',
    rooms: [
      { type: 'Eco Cottage', description: 'Eco-friendly cottage with nature views', price: 4200 },
      { type: 'Luxury Villa', description: 'Private villa with waterfall view', price: 6500 }
    ]
  }
])

const filteredHotels = computed(() => {
  let filtered = hotels.value

  // Filter by price range
  if (filters.value.priceRange) {
    filtered = filtered.filter(hotel => {
      switch (filters.value.priceRange) {
        case 'budget': return hotel.price <= 1500
        case 'mid': return hotel.price > 1500 && hotel.price <= 3000
        case 'luxury': return hotel.price > 3000
        default: return true
      }
    })
  }

  // Filter by amenities
  if (filters.value.amenities.length > 0) {
    filtered = filtered.filter(hotel =>
      filters.value.amenities.every(amenity =>
        hotel.amenities.includes(amenity)
      )
    )
  }

  // Filter by minimum rating
  if (filters.value.minRating > 0) {
    filtered = filtered.filter(hotel => hotel.rating >= filters.value.minRating)
  }

  return filtered
})

const sortedHotels = computed(() => {
  const sorted = [...filteredHotels.value]
  
  switch (sortBy.value) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating)
    case 'distance':
      return sorted // Assuming all are similar distance for demo
    default:
      return sorted
  }
})

const searchHotels = () => {
  // In a real app, this would make an API call
  console.log('Searching hotels with criteria:', searchForm.value)
}

const clearFilters = () => {
  filters.value = {
    priceRange: '',
    amenities: [],
    minRating: 0
  }
}

const openHotelDetails = (hotel) => {
  selectedHotel.value = hotel
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedHotel.value = null
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  // Set default dates
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  searchForm.value.checkin = today.toISOString().split('T')[0]
  searchForm.value.checkout = tomorrow.toISOString().split('T')[0]
})
</script>
