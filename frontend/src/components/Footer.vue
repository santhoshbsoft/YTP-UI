<template>
  <footer class="bg-gray-900 text-white py-12 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div class="footer-section">
          <h3 class="text-green-400 text-xl font-semibold mb-4">About Us</h3>
          <p class="text-gray-300 mb-4">
            The Yelagiri Hills Tourism Portal is a digital initiative to showcase the natural beauty and culture of Yelagiri Hills.
          </p>
          <div class="footer-partners mt-4">
            <p class="font-semibold text-gray-300">Powered by:</p>
            <p class="text-gray-400">Bosco Soft Technologies</p>
            <p class="text-gray-400">Don Bosco College, Yelagiri</p>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="text-green-400 text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/attractions" class="text-gray-300 hover:text-green-400 transition-colors">Attractions</router-link></li>
            <li><router-link to="/booking" class="text-gray-300 hover:text-green-400 transition-colors">Hotels</router-link></li>
            <li><router-link to="/packages" class="text-gray-300 hover:text-green-400 transition-colors">Tour Packages</router-link></li>
            <li><router-link to="/restaurants" class="text-gray-300 hover:text-green-400 transition-colors">Restaurants</router-link></li>
            <li><router-link to="/guides" class="text-gray-300 hover:text-green-400 transition-colors">Guides</router-link></li>
            <li><router-link to="/transport" class="text-gray-300 hover:text-green-400 transition-colors">Transport</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="text-green-400 text-xl font-semibold mb-4">For Partners</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors">Register Your Hotel</a></li>
            <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors">Become a Guide</a></li>
            <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors">Vendor Registration</a></li>
            <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors">Restaurant Partnership</a></li>
            <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors">Transport Services</a></li>
            <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors">Partner Login</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="text-green-400 text-xl font-semibold mb-4">Contact Info</h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <span class="text-gray-300">Yelagiri Hills, Tamil Nadu</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-gray-300">info@yelagirihills.com</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-gray-300">+91 XXXXX XXXXX</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-gray-300">24/7 Support Available</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 pt-8 text-center">
        <p class="text-gray-400 mb-2">
          &copy; 2025 Yelagiri Hills Tourism Portal. All rights reserved. | Made with by Bosco Soft
        </p>
        <p class="text-gray-500 text-sm">
          A joint initiative by Bosco Soft Technologies Pvt. Ltd. & Don Bosco College, Yelagiri Hills
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic can be added here if needed
</script>
