<template>
  <div class="booking-page">
    <!-- Hero -->
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p class="text-lg md:text-xl opacity-90">Discover comfortable accommodations in Yelagiri Hills</p>
      </div>
    </div>

    <div class="px-4 md:px-16 py-8 md:py-16">
      <!-- Search + Mobile Filter Toggle -->
      <div class="bg-white rounded-2xl shadow-lg p-4 md:p-8 mb-6">
        <div class="flex flex-col md:flex-row gap-4 md:items-end">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
              <input
                v-model="searchForm.checkin"
                type="date"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
              <input
                v-model="searchForm.checkout"
                type="date"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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
            <div class="flex items-center">
              <button
                @click="searchHotels"
                class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Search Hotels
              </button>
            </div>
          </div>

          <!-- Mobile: Filters toggle -->
          <div class="md:hidden flex items-center gap-2">
            <button
              @click="toggleFilters"
              class="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              Filters
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Filters Sidebar (desktop) -->
        <aside class="filters-sidebar bg-white p-6 rounded-xl shadow-lg h-fit sticky top-20 hidden lg:block">
          <h3 class="text-xl font-semibold text-green-800 mb-6">Filters</h3>

          <!-- Price Range -->
          <div class="filter-section mb-6 pb-6 border-b border-gray-200">
            <h4 class="text-lg font-medium text-green-800 mb-4">Price Range</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <input v-model="filters.priceRange" type="radio" value="budget" id="budget" class="mr-3" />
                <label for="budget" class="text-gray-700">Budget (₹500 - ₹1500)</label>
              </div>
              <div class="flex items-center">
                <input v-model="filters.priceRange" type="radio" value="mid" id="mid" class="mr-3" />
                <label for="mid" class="text-gray-700">Mid-range (₹1500 - ₹3000)</label>
              </div>
              <div class="flex items-center">
                <input v-model="filters.priceRange" type="radio" value="luxury" id="luxury" class="mr-3" />
                <label for="luxury" class="text-gray-700">Luxury (₹3000+)</label>
              </div>
            </div>
          </div>

          <!-- Amenities -->
          <div class="filter-section mb-6 pb-6 border-b border-gray-200">
            <h4 class="text-lg font-medium text-green-800 mb-4">Amenities</h4>
            <div class="space-y-3">
              <div v-for="amenity in amenities" :key="amenity" class="flex items-center">
                <input v-model="filters.amenities" :value="amenity" type="checkbox" :id="amenity" class="mr-3" />
                <label :for="amenity" class="text-gray-700">{{ amenity }}</label>
              </div>
            </div>
          </div>

          <!-- Rating -->
          <div class="filter-section mb-6 pb-6 border-b border-gray-200">
            <h4 class="text-lg font-medium text-green-800 mb-4">Minimum Rating</h4>
            <div class="space-y-3">
              <div v-for="rating in [4, 3, 2, 1]" :key="rating" class="flex items-center">
                <input v-model="filters.minRating" :value="rating" type="radio" :id="`rating-${rating}`" class="mr-3" />
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
        </aside>

        <!-- Mobile Filters Drawer -->
        <transition name="fade">
          <div
            v-if="showFilters"
            class="fixed inset-0 z-50 bg-black/40 flex items-start justify-end p-4 lg:hidden"
            @click.self="toggleFilters"
          >
            <div class="w-full max-w-sm bg-white rounded-xl shadow-xl p-6 overflow-auto h-full">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-green-800">Filters</h3>
                <button @click="toggleFilters" class="text-gray-700">Close</button>
              </div>

              <!-- re-use same filter blocks -->
              <div class="mb-4">
                <h4 class="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <input v-model="filters.priceRange" type="radio" value="budget" id="mbudget" class="mr-3" />
                    <label for="mbudget" class="text-gray-700">Budget (₹500 - ₹1500)</label>
                  </div>
                  <div class="flex items-center">
                    <input v-model="filters.priceRange" type="radio" value="mid" id="mmid" class="mr-3" />
                    <label for="mmid" class="text-gray-700">Mid-range (₹1500 - ₹3000)</label>
                  </div>
                  <div class="flex items-center">
                    <input v-model="filters.priceRange" type="radio" value="luxury" id="mluxury" class="mr-3" />
                    <label for="mluxury" class="text-gray-700">Luxury (₹3000+)</label>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <h4 class="text-sm font-medium text-gray-700 mb-2">Amenities</h4>
                <div class="space-y-2">
                  <div v-for="amenity in amenities" :key="'m'+amenity" class="flex items-center">
                    <input v-model="filters.amenities" :value="amenity" type="checkbox" :id="'m'+amenity" class="mr-3" />
                    <label :for="'m'+amenity" class="text-gray-700">{{ amenity }}</label>
                  </div>
                </div>
              </div>

              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-700 mb-2">Minimum Rating</h4>
                <div class="space-y-2">
                  <div v-for="rating in [4,3,2,1]" :key="'mrate-'+rating" class="flex items-center">
                    <input v-model="filters.minRating" :value="rating" type="radio" :id="'mrating-'+rating" class="mr-3" />
                    <label :for="'mrating-'+rating" class="text-gray-700 flex items-center">
                      <span v-for="i in rating" :key="i" class="text-yellow-500 mr-1">⭐</span>
                      <span class="ml-2">{{ rating }}+ stars</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="flex gap-3">
                <button @click="applyAndCloseFilters" class="flex-1 bg-green-600 text-white py-2 rounded-lg">Apply</button>
                <button @click="clearFilters" class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg">Clear</button>
              </div>
            </div>
          </div>
        </transition>

        <!-- Hotels Results -->
        <main class="lg:col-span-3">
          <div class="results-header bg-white p-4 md:p-6 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800">
              {{ filteredHotels.length }} Hotels Found
            </h2>

            <div class="flex items-center gap-3 w-full md:w-auto">
              <button class="hidden md:inline-flex bg-gray-100 px-3 py-2 rounded-md text-gray-700">Sort</button>

              <select
                v-model="sortBy"
                class="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 w-full md:w-auto"
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
              <div class="grid grid-cols-1 md:grid-cols-[300px_1fr]">
                <div class="relative">
                  <img :src="hotel.image" :alt="hotel.name" class="w-full h-56 md:h-full object-cover" />
                  <div v-if="hotel.discount" class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {{ hotel.discount }}% OFF
                  </div>
                </div>

                <div class="p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-start mb-4">
                      <div class="pr-4">
                        <h3 class="text-lg md:text-2xl font-bold text-green-800 mb-1">{{ hotel.name }}</h3>
                        <p class="text-gray-600 text-sm md:text-base flex items-center gap-2">
                          <span class="text-sm">📍</span>
                          <span class="truncate md:overflow-visible">{{ hotel.location }}</span>
                        </p>
                      </div>
                      <div class="bg-green-600 text-white px-3 py-1 rounded-lg font-semibold flex items-center gap-2 text-sm">
                        <span>⭐</span>
                        {{ hotel.rating }}
                      </div>
                    </div>

                    <div class="amenities flex flex-wrap gap-2 mb-4">
                      <span
                        v-for="amenity in hotel.amenities"
                        :key="amenity"
                        class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {{ amenity }}
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-200 gap-3">
                    <div class="price-section text-center md:text-left">
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

            <div v-if="sortedHotels.length === 0" class="text-center text-gray-600 py-8 bg-white rounded-xl shadow">
              No hotels match your filters.
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Hotel Details Modal -->
    <div
      v-if="selectedHotel"
      class="modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      @click.self="closeModal"
    >
      <div class="modal-content bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          @click="closeModal"
          class="modal-close absolute top-4 right-4 bg-white border-none text-2xl cursor-pointer w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20"
        >
          ×
        </button>

        <div class="modal-images grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-t-2xl overflow-hidden">
          <img
            v-for="(image, index) in selectedHotel.images"
            :key="index"
            :src="image"
            :alt="selectedHotel.name"
            class="w-full h-48 object-cover"
          />
        </div>

        <div class="modal-body p-6 md:p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{{ selectedHotel.name }}</h2>
          <p class="text-base md:text-lg text-gray-600 mb-6">{{ selectedHotel.fullDescription }}</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
const showFilters = ref(false)

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
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop'
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
    name: "Nature's Paradise Resort",
    location: 'Near Jalagamparai Waterfalls',
    rating: 4.7,
    price: 4200,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop'
    ],
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Pool', 'Spa', 'Room Service'],
    fullDescription: "Nature's Paradise Resort is an eco-friendly property located near the famous Jalagamparai Waterfalls.",
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
      return sorted
    default:
      return sorted
  }
})

const searchHotels = () => {
  console.log('Searching hotels with criteria:', searchForm.value)
}

const clearFilters = () => {
  filters.value = {
    priceRange: '',
    amenities: [],
    minRating: 0
  }
}

const applyAndCloseFilters = () => {
  // We already bind filters reactively, just close drawer
  showFilters.value = false
}

const toggleFilters = () => {
  showFilters.value = !showFilters.value
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
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  searchForm.value.checkin = today.toISOString().split('T')[0]
  searchForm.value.checkout = tomorrow.toISOString().split('T')[0]
})
</script>

<style scoped>
/* small transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ensure modal content scales nicely on small screens */
.modal-content {
  max-width: 100%;
}

/* keep long location text readable */
.truncate {
  max-width: 200px;
}

/* ensure sticky doesn't overlap on small devices */
@media (max-width: 1024px) {
  .filters-sidebar.sticky {
    position: static !important;
    top: auto !important;
  }
}
</style>
