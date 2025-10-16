<template>
  <div class="blog-page">
    <div class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="container max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">📝 Travel Blog</h1>
        <p class="text-xl md:text-2xl opacity-90">Stories, tips, and insights about Yelagiri Hills</p>
      </div>
    </div>

    <div class=" w-full px-6 py-16 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div 
          v-for="post in blogPosts" 
          :key="post.id"
          class="md:w-49 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        >
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-500">{{ post.date }}</span>
              <span class="text-sm text-green-600">{{ post.category }}</span>
            </div>
            
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const blogPosts = ref([
  {
    id: 1,
    title: 'Top 10 Things to Do in Yelagiri',
    excerpt: 'Discover the must-visit attractions and activities that make Yelagiri Hills a perfect getaway destination.',
    date: 'March 15, 2025',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Best Time to Visit Yelagiri',
    excerpt: 'Learn about the ideal seasons and weather conditions for planning your Yelagiri Hills vacation.',
    date: 'March 10, 2025',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Local Cuisine Guide',
    excerpt: 'Explore the authentic flavors and traditional dishes that Yelagiri has to offer.',
    date: 'March 5, 2025',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Local Cuisine Guide',
    excerpt: 'Explore the authentic flavors and traditional dishes that Yelagiri has to offer.',
    date: 'March 5, 2025',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Local Cuisine Guide',
    excerpt: 'Explore the authentic flavors and traditional dishes that Yelagiri has to offer.',
    date: 'March 5, 2025',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop'
  }   ,
  {
    id: 3,
    title: 'Local Cuisine Guide',
    excerpt: 'Explore the authentic flavors and traditional dishes that Yelagiri has to offer.',
    date: 'March 5, 2025',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=300&fit=crop'
  }   ,
  {
    id: 3,
    title: 'Local Cuisine Guide',
    excerpt: 'Explore the authentic flavors and traditional dishes that Yelagiri has to offer.',
    date: 'March 5, 2025',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  }   ,
  {
    id: 3,
    title: 'Local Cuisine Guide',
    excerpt: 'Explore the authentic flavors and traditional dishes that Yelagiri has to offer.',
    date: 'March 5, 2025',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop'
  }   
])
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
