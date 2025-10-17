<template>
    <div class="slider-container relative w-full h-96 md:h-[600px] overflow-hidden ">
        <button @click="moveSlide(-1)"
            class="slider-arrow absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all z-10">
            ❮
        </button>
        <button @click="moveSlide(1)"
            class="slider-arrow absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all z-10">
            ❯
        </button>

        <div class="slider flex transition-transform duration-500 ease-in-out h-full"
            :style="{ transform: `translateX(-${currentSlideIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index"
                class="slide min-w-full h-full bg-cover bg-center relative flex items-center justify-center"
                :style="{ backgroundImage: `linear-gradient(rgba(188, 219, 198, 0.3), rgba(203, 241, 219, 0.2)), url('${slide.image}')` }">
                <div class="slide-overlay absolute inset-0 bg-black bg-opacity-20"></div>
                <div class="slide-content text-center text-white z-10 px-8">
                    <h2 class="text-4xl md:text-6xl font-bold mb-4">{{ slide.title }}</h2>
                    <p class="text-xl md:text-2xl mb-8">{{ slide.description }}</p>
                    <div class="cta-buttons flex gap-4 justify-center flex-wrap">
                        <router-link v-for="button in slide.buttons" :key="button.text" :to="button.path"
                            :class="button.class"
                            class="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                            {{ button.text }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider-nav absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span v-for="(slide, index) in slides" :key="index" @click="currentSlide(index)"
                :class="{ 'active': index === currentSlideIndex }"
                class="slider-dot w-3 h-3 rounded-full bg-white bg-opacity-50 cursor-pointer transition-all hover:bg-opacity-75"></span>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlideIndex = ref(0)

const slides = ref([
    {
        title: 'Welcome to Yelagiri Hills',
        description: 'Experience the serene beauty of nature\'s paradise',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
        buttons: [
            { text: 'Book Hotels', path: '/booking', class: 'bg-green-600 hover:bg-green-700 text-white' },
            { text: 'Explore Now', path: '/attractions', class: 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white' }
        ]
    },
    {
        title: 'Adventure Awaits',
        description: 'Trek through lush green valleys and misty mountains',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=900&fit=crop',
        buttons: [
            { text: 'View Packages', path: '/packages', class: 'bg-green-600 hover:bg-green-700 text-white' },
            { text: 'Find Guides', path: '/guides', class: 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white' }
        ]
    },
    {
        title: 'Cultural Heritage',
        description: 'Discover ancient temples and rich traditions',
        image: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=1600&h=900&fit=crop',
        buttons: [
            { text: 'Traditional Food', path: '/restaurants', class: 'bg-green-600 hover:bg-green-700 text-white' },
            { text: 'Local Handicrafts', path: '/shopping', class: 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white' }
        ]
    },
    {
        title: 'Perfect Getaway',
        description: 'Pleasant weather all year round at 1,410m altitude',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1600&h=900&fit=crop',
        buttons: [
            { text: 'Plan Your Trip', path: '/booking', class: 'bg-green-600 hover:bg-green-700 text-white' },
            { text: 'Transport Services', path: '/transport', class: 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white' }
        ]
    }
])
let autoSlideInterval = null

const showSlide = (index) => {
    if (index >= slides.value.length) currentSlideIndex.value = 0
    if (index < 0) currentSlideIndex.value = slides.value.length - 1
}

const moveSlide = (direction) => {
    currentSlideIndex.value += direction
    if (currentSlideIndex.value >= slides.value.length) currentSlideIndex.value = 0
    if (currentSlideIndex.value < 0) currentSlideIndex.value = slides.value.length - 1
}

const currentSlide = (index) => {
    currentSlideIndex.value = index
}

onMounted(() => {
    // Auto-slide every 5 seconds
    autoSlideInterval = setInterval(() => {
        moveSlide(1)
    }, 5000)
})

onUnmounted(() => {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval)
    }
})
</script>

<style scoped>
.slider-dot.active {
    @apply bg-opacity-100 bg-white;
}
</style>
