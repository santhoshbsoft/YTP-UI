<template>
  <div class="contact-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">📞 Contact Us</h1>
        <p class="text-xl md:text-2xl opacity-90">Get in touch with us for any queries or assistance</p>
      </div>
    </div>

    <div class="container max-w-7xl mx-auto px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select 
                v-model="form.subject"
                required
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="packages">Tour Packages</option>
                <option value="support">Customer Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                required
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="text-green-600 text-xl">📍</div>
                <div>
                  <h3 class="font-semibold text-gray-800">Address</h3>
                  <p class="text-gray-600">Yelagiri Hills, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="text-green-600 text-xl">📧</div>
                <div>
                  <h3 class="font-semibold text-gray-800">Email</h3>
                  <p class="text-gray-600">info@yelagirihills.com</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="text-green-600 text-xl">📞</div>
                <div>
                  <h3 class="font-semibold text-gray-800">Phone</h3>
                  <p class="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="text-green-600 text-xl">🕒</div>
                <div>
                  <h3 class="font-semibold text-gray-800">Support Hours</h3>
                  <p class="text-gray-600">24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Quick Links</h2>
            
            <div class="grid grid-cols-1 gap-4">
              <router-link 
                v-for="link in quickLinks" 
                :key="link.name"
                :to="link.path"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span class="text-green-600">{{ link.icon }}</span>
                <span class="text-gray-700">{{ link.name }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const quickLinks = ref([
  { name: 'Book Hotels', path: '/booking', icon: '🏨' },
  { name: 'Tour Packages', path: '/packages', icon: '🎒' },
  { name: 'Local Guides', path: '/guides', icon: '👨‍💼' },
  { name: 'Attractions', path: '/attractions', icon: '🌄' },
  { name: 'Restaurants', path: '/restaurants', icon: '🍴' },
  { name: 'Shopping', path: '/shopping', icon: '🛍️' }
])

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>
