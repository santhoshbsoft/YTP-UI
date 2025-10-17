<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
        <div
            class="relative flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl h-auto md:h-[85vh] bg-white dark:bg-gray-800/30 backdrop-blur-lg animate-cardFadeIn">
            <!-- Image Side -->
            <div class="flex flex-col justify-center items-center w-full md:w-1/2 bg-cover bg-center relative animate-fadeLeft h-64 md:h-auto"
                style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80');">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
                    alt="Login Image" class="w-full h-full object-cover" />
            </div>

            <!-- Form Side -->
            <div class="w-full md:w-1/2 p-8 relative flex justify-center items-center">
                <div class="w-full max-w-md">
                    <button @click="closeModal"
                        class="absolute top-4 right-4 z-50 rounded-full p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 class="text-2xl font-bold mb-6 text-center text-green-800 dark:text-green-400">Create an Account
                    </h2>

                    <form class="flex flex-col gap-4">
                        <input v-model="form.name" type="text" placeholder="Full name"
                            class="rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none" />
                        <input v-model="form.email" type="email" placeholder="Email"
                            class="rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none" />
                        <input v-model="form.password" type="password" placeholder="Password"
                            class="rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none" />
                        <input v-model="form.confirmPassword" type="password" placeholder="Confirm password"
                            class="rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none" />

                        <div class="flex justify-center mt-4">
                            <button @click.prevent="submit"
                                class="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">Register</button>
                        </div>
                    </form>

                    <!-- Login Button -->
                    <p class="text-center mt-4 text-gray-600 dark:text-gray-300">
                        Already have an account?
                        <button @click="goToLogin"
                            class="text-green-600 dark:text-green-400 font-semibold hover:underline">Login</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    modelValue: Boolean
})
const emits = defineEmits(['update:modelValue', 'open-login'])

const show = computed({
    get() { return props.modelValue },
    set(v) { emits('update:modelValue', v) }
})

const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
})

const router = useRouter()

function closeModal() {
    show.value = false
}

function submit() {
    if (!form.name || !form.email || !form.password) return
    if (form.password !== form.confirmPassword) return

    show.value = false
    // Add your registration logic here
}

function goToLogin() {
    show.value = false
    emits('open-login')
}
</script>

<style scoped>
div[v-if] {
    animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
