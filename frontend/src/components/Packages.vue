<template>
  <div class="packages-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">🎒 Curated Tour Packages</h1>
        <p class="text-xl md:text-2xl opacity-90">Explore Yelagiri with our expertly designed tour packages</p>
      </div>
    </div>

    <div class="px-6 py-16 md:px-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Choose Your Adventure</h2>
        <p class="text-xl text-gray-600">From adventure seekers to culture enthusiasts, we have the perfect package for everyone</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Adventure Package -->
        <div class="package-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop" alt="Adventure Package" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">₹4,999/person</div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-2">Adventure Seeker Package</h3>
            <p class="text-orange-600 font-semibold mb-3">⏱️ 2 Days / 1 Night</p>
            <p class="text-gray-600 mb-4">Perfect for thrill-seekers! Experience paragliding, trekking, and rock climbing in the beautiful Yelagiri hills.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <strong class="text-green-800">Includes:</strong>
              <ul class="mt-2 text-gray-600 space-y-1">
                <li>• Paragliding session</li>
                <li>• Swamimalai trekking</li>
                <li>• Rock climbing training</li>
                <li>• 1-night hotel stay</li>
                <li>• All meals included</li>
                <li>• Expert guide</li>
              </ul>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>

        <!-- Family Package -->
        <div class="package-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
          <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop" alt="Family Package" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">₹12,999/family</div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-2">Family Fun Package</h3>
            <p class="text-orange-600 font-semibold mb-3">⏱️ 3 Days / 2 Nights</p>
            <p class="text-gray-600 mb-4">Create lasting memories with your loved ones. Family-friendly activities and comfortable accommodations.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <strong class="text-green-800">Includes:</strong>
              <ul class="mt-2 text-gray-600 space-y-1">
                <li>• Punganoor Lake boating</li>
                <li>• Nature park visit</li>
                <li>• Children's play area</li>
                <li>• 2-nights family accommodation</li>
                <li>• All meals & snacks</li>
                <li>• Local sightseeing</li>
              </ul>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>

        <!-- Romantic Package -->
        <div class="package-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
          <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=250&fit=crop" alt="Romantic Package" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">₹8,999/couple</div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-2">Romantic Getaway</h3>
            <p class="text-orange-600 font-semibold mb-3">⏱️ 2 Days / 1 Night</p>
            <p class="text-gray-600 mb-4">Escape to paradise with your partner. Enjoy scenic views, candlelight dinner, and peaceful moments.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <strong class="text-green-800">Includes:</strong>
              <ul class="mt-2 text-gray-600 space-y-1">
                <li>• Luxury suite accommodation</li>
                <li>• Candlelight dinner</li>
                <li>• Couple spa session</li>
                <li>• Sunrise viewpoint visit</li>
                <li>• Private transportation</li>
                <li>• Champagne & cake</li>
              </ul>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>

        <!-- Nature Explorer -->
        <div class="package-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" alt="Nature Package" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">₹6,499/person</div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-2">Nature Explorer Package</h3>
            <p class="text-orange-600 font-semibold mb-3">⏱️ 3 Days / 2 Nights</p>
            <p class="text-gray-600 mb-4">Immerse yourself in nature. Bird watching, nature trails, and waterfall visits await you.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <strong class="text-green-800">Includes:</strong>
              <ul class="mt-2 text-gray-600 space-y-1">
                <li>• Guided nature walks</li>
                <li>• Jalagamparai waterfall trek</li>
                <li>• Bird watching session</li>
                <li>• 2-nights eco-resort stay</li>
                <li>• Organic meals</li>
                <li>• Nature photography guide</li>
              </ul>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>

        <!-- Wellness Retreat -->
        <div class="package-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=250&fit=crop" alt="Wellness Package" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">₹9,999/person</div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-2">Wellness Retreat Package</h3>
            <p class="text-orange-600 font-semibold mb-3">⏱️ 4 Days / 3 Nights</p>
            <p class="text-gray-600 mb-4">Rejuvenate your mind, body, and soul with our comprehensive wellness retreat program.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <strong class="text-green-800">Includes:</strong>
              <ul class="mt-2 text-gray-600 space-y-1">
                <li>• Daily yoga sessions</li>
                <li>• Meditation classes</li>
                <li>• Ayurvedic spa treatments</li>
                <li>• 3-nights wellness resort</li>
                <li>• Healthy organic meals</li>
                <li>• Wellness consultation</li>
              </ul>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>

        <!-- Cultural Heritage -->
        <div class="package-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
          <img src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=400&h=250&fit=crop" alt="Cultural Package" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">₹7,299/person</div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-2">Cultural Heritage Package</h3>
            <p class="text-orange-600 font-semibold mb-3">⏱️ 3 Days / 2 Nights</p>
            <p class="text-gray-600 mb-4">Discover the rich cultural heritage and traditions of Yelagiri Hills.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <strong class="text-green-800">Includes:</strong>
              <ul class="mt-2 text-gray-600 space-y-1">
                <li>• Temple visits & rituals</li>
                <li>• Traditional cooking class</li>
                <li>• Local handicraft workshop</li>
                <li>• 2-nights heritage accommodation</li>
                <li>• Cultural performances</li>
                <li>• Local guide</li>
              </ul>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <!-- Custom Package Section -->
      <section class="bg-gradient-to-br from-green-50 to-green-100 py-16 rounded-2xl mb-16">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Customize Your Package</h2>
          <p class="text-xl text-gray-600 mb-8">Can't find what you're looking for? Create your own perfect Yelagiri experience!</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="custom-option bg-white p-6 rounded-xl shadow-lg">
              <div class="text-4xl mb-4">🏨</div>
              <h3 class="text-lg font-semibold text-green-800 mb-2">Accommodation</h3>
              <p class="text-gray-600 text-sm">Choose from budget to luxury stays</p>
            </div>
            <div class="custom-option bg-white p-6 rounded-xl shadow-lg">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-lg font-semibold text-green-800 mb-2">Activities</h3>
              <p class="text-gray-600 text-sm">Pick your preferred activities</p>
            </div>
            <div class="custom-option bg-white p-6 rounded-xl shadow-lg">
              <div class="text-4xl mb-4">🍽️</div>
              <h3 class="text-lg font-semibold text-green-800 mb-2">Dining</h3>
              <p class="text-gray-600 text-sm">Select your meal preferences</p>
            </div>
            <div class="custom-option bg-white p-6 rounded-xl shadow-lg">
              <div class="text-4xl mb-4">🚗</div>
              <h3 class="text-lg font-semibold text-green-800 mb-2">Transport</h3>
              <p class="text-gray-600 text-sm">Include transportation options</p>
            </div>
          </div>
          
          <button class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Create Custom Package
          </button>
        </div>
      </section>

      <!-- Package Benefits -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose Our Packages?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="benefit-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">Best Price Guarantee</h3>
            <p class="text-gray-600">We offer the most competitive prices with no hidden costs</p>
          </div>
          <div class="benefit-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">Safe & Secure</h3>
            <p class="text-gray-600">All bookings are secure with instant confirmation</p>
          </div>
          <div class="benefit-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="text-4xl mb-4">👨‍💼</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">Expert Guides</h3>
            <p class="text-gray-600">Professional local guides for the best experience</p>
          </div>
          <div class="benefit-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">24/7 Support</h3>
            <p class="text-gray-600">Round-the-clock customer support for your peace of mind</p>
          </div>
          <div class="benefit-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="text-4xl mb-4">🔄</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">Flexible Cancellation</h3>
            <p class="text-gray-600">Easy cancellation and modification options</p>
          </div>
          <div class="benefit-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="text-4xl mb-4">⭐</div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">Verified Partners</h3>
            <p class="text-gray-600">All our partners are verified and highly rated</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Packages component logic can be added here if needed
</script>
