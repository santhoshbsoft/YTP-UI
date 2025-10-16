<template>
  <div class="restaurants-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">🍴 Culinary Delights</h1>
        <p class="text-xl md:text-2xl opacity-90">Savor authentic Tamil cuisine and local delicacies</p>
      </div>
    </div>

    <div class="px-6 py-16 md:px-16">
      <!-- Featured Restaurants -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Featured Restaurants</h2>
        <p class="text-xl text-center text-gray-600 mb-12">Top-rated dining experiences in Yelagiri</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="restaurant in featuredRestaurants" 
            :key="restaurant.id"
            class="restaurant-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            @click="openRestaurantModal(restaurant)"
          >
            <div class="relative">
              <img :src="restaurant.image" :alt="restaurant.name" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ restaurant.category }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ restaurant.name }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ restaurant.description }}</p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <span class="text-yellow-500">⭐</span>
                  <span class="text-sm text-gray-600">{{ restaurant.rating }} ({{ restaurant.reviews }} reviews)</span>
                </div>
                <span class="text-green-600 font-semibold">{{ restaurant.priceRange }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <span>📍</span>
                <span>{{ restaurant.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- All Restaurants -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">All Restaurants</h2>
        
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
            v-for="restaurant in filteredRestaurants" 
            :key="restaurant.id"
            class="restaurant-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            @click="openRestaurantModal(restaurant)"
          >
            <img :src="restaurant.image" :alt="restaurant.name" class="w-full h-32 object-cover">
            <div class="p-4">
              <h4 class="font-semibold text-gray-800 mb-1">{{ restaurant.name }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ restaurant.category }}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="text-green-600">{{ restaurant.priceRange }}</span>
                <div class="flex items-center gap-1">
                  <span class="text-yellow-500">⭐</span>
                  <span>{{ restaurant.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Local Specialties -->
      <section class="bg-gradient-to-br from-green-50 to-green-100 py-16 rounded-2xl mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Local Specialties</h2>
        <p class="text-xl text-center text-gray-600 mb-12">Must-try dishes from Yelagiri</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="dish in localSpecialties" 
            :key="dish.id"
            class="dish-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="text-4xl mb-4">{{ dish.icon }}</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">{{ dish.name }}</h3>
            <p class="text-gray-600 mb-4">{{ dish.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-green-600 font-semibold">{{ dish.price }}</span>
              <span class="text-sm text-gray-500">{{ dish.availability }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Restaurant Modal -->
    <div 
      v-if="selectedRestaurant" 
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
            v-for="(image, index) in selectedRestaurant.images" 
            :key="index"
            :src="image" 
            :alt="selectedRestaurant.name"
            class="w-full h-48 object-cover"
          >
        </div>
        
        <div class="modal-body p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ selectedRestaurant.name }}</h2>
          <p class="text-lg text-gray-600 mb-6">{{ selectedRestaurant.fullDescription }}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-green-800 mb-4">Menu Highlights</h3>
              <div class="space-y-4">
                <div 
                  v-for="item in selectedRestaurant.menu" 
                  :key="item.name"
                  class="menu-item bg-gray-50 p-4 rounded-lg"
                >
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold text-gray-800">{{ item.name }}</h4>
                      <p class="text-gray-600 text-sm">{{ item.description }}</p>
                    </div>
                    <span class="text-green-600 font-semibold ml-4">{{ item.price }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-green-800 mb-4">Restaurant Info</h3>
              <ul class="space-y-3 text-gray-600">
                <li><strong>Category:</strong> {{ selectedRestaurant.category }}</li>
                <li><strong>Location:</strong> {{ selectedRestaurant.location }}</li>
                <li><strong>Timings:</strong> {{ selectedRestaurant.timings }}</li>
                <li><strong>Price Range:</strong> {{ selectedRestaurant.priceRange }}</li>
                <li><strong>Contact:</strong> {{ selectedRestaurant.contact }}</li>
              </ul>
              
              <div class="mt-6">
                <h4 class="font-semibold text-green-800 mb-3">Features</h4>
                <div class="grid grid-cols-2 gap-2">
                  <div v-for="feature in selectedRestaurant.features" :key="feature" class="flex items-center">
                    <span class="text-green-600 mr-2">✓</span>
                    <span class="text-gray-700">{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Full Menu
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
const selectedRestaurant = ref(null)

const categories = ref(['All', 'Traditional', 'Multi-cuisine', 'Street Food', 'Fine Dining', 'Cafes'])

const featuredRestaurants = ref([
  {
    id: 1,
    name: 'Tamil Nadu Kitchen',
    category: 'Traditional',
    description: 'Authentic Tamil cuisine with traditional recipes passed down through generations.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 156,
    priceRange: '₹200-500',
    location: 'Main Road, Yelagiri Hills',
    fullDescription: 'Experience the authentic flavors of Tamil Nadu with our traditional recipes. Our chefs use age-old cooking methods to bring you the true taste of South India.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    ],
    menu: [
      { name: 'Dosa', description: 'Crispy rice crepe with sambar', price: '₹80' },
      { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil curry', price: '₹60' },
      { name: 'Biryani', description: 'Fragrant rice with spices and meat', price: '₹180' },
      { name: 'Rasam', description: 'Traditional South Indian soup', price: '₹40' }
    ],
    timings: '7:00 AM - 10:00 PM',
    contact: '+91 98765 43210',
    features: ['Home Delivery', 'Takeaway', 'Vegetarian Options', 'Family Friendly']
  },
  {
    id: 2,
    name: 'Mountain View Restaurant',
    category: 'Multi-cuisine',
    description: 'Multi-cuisine restaurant with stunning views of the surrounding hills.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    rating: 4.4,
    reviews: 98,
    priceRange: '₹300-800',
    location: 'Hotel Green Valley, Yelagiri Hills',
    fullDescription: 'Enjoy a diverse menu featuring Indian, Chinese, and Continental cuisines while taking in the breathtaking mountain views.',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
    ],
    menu: [
      { name: 'Butter Chicken', description: 'Creamy tomato-based curry', price: '₹280' },
      { name: 'Hakka Noodles', description: 'Stir-fried noodles with vegetables', price: '₹160' },
      { name: 'Grilled Fish', description: 'Fresh fish with herbs', price: '₹350' },
      { name: 'Pasta Alfredo', description: 'Creamy pasta with cheese', price: '₹220' }
    ],
    timings: '11:00 AM - 11:00 PM',
    contact: '+91 98765 43211',
    features: ['Mountain View', 'Indoor Seating', 'Outdoor Seating', 'Bar Available']
  },
  {
    id: 3,
    name: 'Hill Station Cafe',
    category: 'Cafes',
    description: 'Cozy cafe perfect for breakfast, coffee, and light meals with a relaxed atmosphere.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    rating: 4.3,
    reviews: 87,
    priceRange: '₹100-300',
    location: 'Near Punganoor Lake',
    fullDescription: 'A charming cafe offering freshly brewed coffee, homemade pastries, and light meals in a cozy mountain setting.',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    ],
    menu: [
      { name: 'Filter Coffee', description: 'Traditional South Indian coffee', price: '₹25' },
      { name: 'Masala Chai', description: 'Spiced tea with milk', price: '₹20' },
      { name: 'Sandwich', description: 'Fresh vegetable sandwich', price: '₹80' },
      { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: '₹120' }
    ],
    timings: '6:00 AM - 9:00 PM',
    contact: '+91 98765 43212',
    features: ['WiFi Available', 'Pet Friendly', 'Outdoor Seating', 'Fresh Pastries']
  }
])

const allRestaurants = ref([
  { id: 4, name: 'Local Food Court', category: 'Street Food', priceRange: '₹50-200', rating: 4.2, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
  { id: 5, name: 'Spice Garden', category: 'Traditional', priceRange: '₹250-600', rating: 4.5, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop' },
  { id: 6, name: 'Pizza Corner', category: 'Multi-cuisine', priceRange: '₹200-400', rating: 4.1, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop' },
  { id: 7, name: 'Sweet Shop', category: 'Traditional', priceRange: '₹30-150', rating: 4.4, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop' },
  { id: 8, name: 'Fine Dining', category: 'Fine Dining', priceRange: '₹800-1500', rating: 4.7, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop' },
  { id: 9, name: 'Quick Bites', category: 'Street Food', priceRange: '₹40-180', rating: 4.0, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
  { id: 10, name: 'Coffee House', category: 'Cafes', priceRange: '₹60-250', rating: 4.3, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop' },
  { id: 11, name: 'Family Restaurant', category: 'Multi-cuisine', priceRange: '₹300-700', rating: 4.2, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop' }
])

const localSpecialties = ref([
  {
    id: 1,
    name: 'Yelagiri Honey',
    icon: '🍯',
    description: 'Pure mountain honey collected from local beekeepers',
    price: '₹300/500g',
    availability: 'All Year'
  },
  {
    id: 2,
    name: 'Jackfruit Curry',
    icon: '🍈',
    description: 'Traditional jackfruit curry with coconut and spices',
    price: '₹120',
    availability: 'Seasonal'
  },
  {
    id: 3,
    name: 'Mountain Tea',
    icon: '🍵',
    description: 'Locally grown tea with unique mountain flavor',
    price: '₹25/cup',
    availability: 'All Year'
  },
  {
    id: 4,
    name: 'Wild Berry Jam',
    icon: '🫐',
    description: 'Homemade jam from wild berries found in the hills',
    price: '₹200/jar',
    availability: 'Limited'
  },
  {
    id: 5,
    name: 'Bamboo Rice',
    icon: '🍚',
    description: 'Traditional rice cooked in bamboo tubes',
    price: '₹180',
    availability: 'Special Occasions'
  },
  {
    id: 6,
    name: 'Hill Station Pickles',
    icon: '🥒',
    description: 'Traditional pickles made with local vegetables',
    price: '₹150/bottle',
    availability: 'All Year'
  }
])

const filteredRestaurants = computed(() => {
  if (selectedCategory.value === 'All') {
    return allRestaurants.value
  }
  return allRestaurants.value.filter(restaurant => 
    restaurant.category.toLowerCase() === selectedCategory.value.toLowerCase()
  )
})

const openRestaurantModal = (restaurant) => {
  selectedRestaurant.value = restaurant
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedRestaurant.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
