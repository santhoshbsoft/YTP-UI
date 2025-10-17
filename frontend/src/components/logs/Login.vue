<template>
  <!-- Modal Overlay -->
  <div
    v-if="show"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
  >
    <!-- Modal Container -->
    <div
      class="relative flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl h-auto md:h-[85vh] bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg animate-cardFadeIn"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 z-50 rounded-full p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-xl cursor-pointer transition"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Left Section: Hill Station Image -->
      <div
        class="flex flex-col justify-center items-center w-full md:w-1/2 bg-cover bg-center relative animate-fadeLeft h-64 md:h-auto"
        style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80');"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 animate-gradientMove"></div>
        <div class="relative z-10 text-center px-6">
          <h2 class="mt-8 font-extrabold text-white text-4xl md:text-6xl animate-fadeInUp">
            Princess of Hills
          </h2>
          <p class="mt-4 text-white text-lg md:text-xl animate-fadeInUp delay-200">
            Travel is the only purchase that enriches you beyond material wealth
          </p>
        </div>
      </div>

      <!-- Right Section: Login Form -->
      <div
        class="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-12 bg-gray-200 dark:bg-gray-800/50 backdrop-blur-md animate-fadeRight"
      >
        <h1 class="text-green-800 dark:text-green-400 font-bold text-3xl md:text-5xl mb-2 animate-fadeInUp">
          Welcome
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-8 animate-fadeInUp delay-200">
          Login with Email
        </p>

        <form class="flex flex-col gap-6 w-full max-w-md animate-fadeInUp delay-400">
          <!-- Email Input -->
          <div class="relative">
            <label
              for="emailOrUsername"
              class="absolute left-3 -top-6  text-sm text-gray-500 dark:text-gray-300 dark:bg-gray-800 px-2 rounded transition-colors duration-200 peer-focus:text-green-500"
            >
              Email or Username
            </label>
            <input
              id="emailOrUsername"
              type="text"
              required
              placeholder="Enter email or username"
              class="peer rounded-lg px-12 py-4 border text-black border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:text-gray-200 w-full transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <!-- Email Icon -->
            <svg
              class="w-6 h-6 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-width="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
          </div>

          <!-- Password Input -->
          <div class="relative mt-2">
            <label
              for="password"
              class="absolute left-3 -top-6 text-sm text-gray-500 dark:text-gray-300  dark:bg-gray-800 px-2 rounded transition-colors duration-200 peer-focus:text-green-500"
            >
              Password
            </label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              required
              placeholder="Enter password"
              class="peer rounded-lg px-12 py-4 border text-black border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:text-gray-200 w-full transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <!-- Lock Icon -->
            <svg
              class="w-6 h-6 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.5 11H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4.5M7 11V7a3 3 0 0 1 6 0v1.5"
              />
            </svg>
            <!-- Eye Icon -->
            <button
              type="button"
              @click="togglePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-green-500 transition-colors"
            >
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.322-3.523M6.3 6.3l11.4 11.4" />
              </svg>
            </button>
          </div>

          <div class="flex justify-end items-center text-gray-600 dark:text-gray-300 text-sm">
            <a href="#" class="hover:underline hover:text-green-500 transition-colors">Forgot Password?</a>
          </div>

          <button type="submit"
            class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-center rounded-lg px-6 py-3 mt-6 text-white font-semibold w-fit shadow-md hover:shadow-lg transition-all duration-300 animate-pulseHover mx-auto">
            LOGIN
          </button>

          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            Don't have an account?
            <button @click="openRegister" type="button" class="text-green-600 font-semibold ml-2 hover:underline">
              Register
            </button>
          </p>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue' // added computed

const props = defineProps({
  modelValue: Boolean
})

const emits = defineEmits(['update:modelValue', 'open-register']) // added open-register

// react to parent v-model properly
const show = computed({
  get() { return props.modelValue },
  set(value) { emits('update:modelValue', value) }
})

const showPassword = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}

function closeModal() {
  // update via computed setter so parent v-model is updated
  show.value = false
}

function openRegister() {
  // close this modal and tell parent to open register
  show.value = false
  emits('open-register')
}
</script>

<style scoped>
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeLeft {
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes fadeRight {
  0% { opacity: 0; transform: translateX(20px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes cardFadeIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes pulseHover {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-cardFadeIn { animation: cardFadeIn 0.8s ease-out forwards; }
.animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
.animate-fadeLeft { animation: fadeLeft 1s ease forwards; }
.animate-fadeRight { animation: fadeRight 1.2s ease forwards; }
.animate-pulseHover:hover { animation: pulseHover 0.3s ease-in-out; }
.animate-gradientMove { background-size: 200% 200%; animation: gradientMove 15s ease infinite; }
.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
.animate-fadeIn { animation: fadeInUp 0.3s ease forwards; }
</style>
