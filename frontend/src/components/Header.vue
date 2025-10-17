<template>
  <header class="bg-green-800 text-white sticky top-0 z-50 shadow-lg bg-cover bg-center"
    style="background-image: linear-gradient(rgba(24, 83, 48, 0.6), rgba(24, 83, 48, 0.9)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop');">
    <div class="ml-8 mr-2 py-4 md:py-8 flex justify-between items-center">
      <!-- Logo -->
      <div class="logo flex items-center gap-4">
        <div>
          <h1 class="text-3xl font-bold">🏔️ Yelagiri Hills</h1>
          <p class="text-sm opacity-90 hidden md:block">Nature's Paradise in South India</p>
        </div>
      </div>

      <!-- Desktop Login -->
      <div>
        <button @click="showLoginModal = true"
          class="bg-orange-500 hidden mr-4 md:block hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Login / Register
        </button>
      </div>

      <!-- Mobile Menu Icon -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <!-- Hamburger Icon -->
          <svg v-if="!openMenu" class="w-[33px] h-[33px] text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>

          <!-- Close Icon -->
          <svg v-else class="w-[33px] h-[33px] text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <nav class="bg-white hidden md:block bg-opacity-10 backdrop-blur-2xl">
      <div class="p-1">
        <ul class="flex gap-2 justify-center flex-wrap">
          <li v-for="item in navigationItems" :key="item.name">
            <router-link :to="item.path"
              class="text-white  px-5 py-2 mb-2 block hover:border-b-4 hover:border-orange-500 transition-all duration-100 rounded font-medium hover:-translate-y-0.2"
              active-class="border-b-4 border-orange-500">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <nav v-if="openMenu" class="md:hidden w-full bg-green-600 transition-all duration-500">
      <div>
        <ul class="flex flex-col items-center space-y-1 py-3 gap-2">
          <li v-for="item in navigationItems" :key="'mobile-' + item.name">
            <router-link :to="item.path" @click="openMenu = false"
              active-class="bg-white bg-opacity-10 border-l-4 border-orange-500 p-2 ">{{ item.name }}
            </router-link>
          </li>
          <button @click="showLoginModal = true, openMenu = false"
            class="bg-orange-500 mt-3 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Login / Register
          </button>
        </ul>
      </div>
    </nav>

    <!-- Login & Register Modal Components -->
    <Login v-model="showLoginModal" @open-register="openRegisterFromLogin" />
    <!-- listen for open-login emitted by Register.vue -->
    <Register v-model="showRegisterModal" @open-login="openLoginFromRegister" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Login from './logs/Login.vue'
import Register from './logs/Register.vue'

const openMenu = ref(false)
const showLoginModal = ref(false)
const showRegisterModal = ref(false)

function toggleMenu() {
  openMenu.value = !openMenu.value
}

function openRegisterFromLogin() {
  // invoked when Login emits 'open-register'
  showRegisterModal.value = true
}

function openLoginFromRegister() {
  // invoked when Register emits 'open-login'
  showLoginModal.value = true
}

const navigationItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Attractions', path: '/attractions' },
  { name: 'Hotels', path: '/booking' },
  { name: 'Restaurants', path: '/restaurants' },
  { name: 'Tour Packages', path: '/packages' },
  { name: 'Guides', path: '/guides' },
  { name: 'Transport', path: '/transport' },
  { name: 'Shopping', path: '/shopping' },
  { name: 'Events', path: '/events' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
])
</script>
