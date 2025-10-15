import { userResource } from "@/data/user"
import { createRouter, createWebHistory } from "vue-router"
import { session } from "./data/session"

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/components/Home.vue"),
	},
	{
		name: "Login",
		path: "/account/login",
		component: () => import("@/pages/Login.vue"),
	},
	{
		path: "/attractions",
		name: "Attractions",
		component: () => import("@/components/Attractions.vue"),
	},
	{
		path: "/booking",
		name: "Booking",
		component: () => import("@/components/Booking.vue"),
	},
	{
		path: "/restaurants",
		name: "Restaurants",
		component: () => import("@/components/Restaurants.vue"),
	},
	{
		path: "/packages",
		name: "Packages",
		component: () => import("@/components/Packages.vue"),
	},
	{
		path: "/guides",
		name: "Guides",
		component: () => import("@/components/Guides.vue"),
	},
	{
		path: "/transport",
		name: "Transport",
		component: () => import("@/components/Transport.vue"),
	},
	{
		path: "/shopping",
		name: "Shopping",
		component: () => import("@/components/Shopping.vue"),
	},
	{
		path: "/events",
		name: "Events",
		component: () => import("@/components/Events.vue"),
	},
	{
		path: "/blog",
		name: "Blog",
		component: () => import("@/components/Blog.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("@/components/Contact.vue"),
	},
]

const router = createRouter({
	history: createWebHistory("/frontend"),
	routes,
})

// Authentication middleware can be added back when needed
// router.beforeEach(async (to, from, next) => {
// 	let isLoggedIn = session.isLoggedIn
// 	try {
// 		await userResource.promise
// 	} catch (error) {
// 		isLoggedIn = false
// 	}

// 	if (to.name === "Login" && isLoggedIn) {
// 		next({ name: "Home" })
// 	} else if (to.name !== "Login" && !isLoggedIn) {
// 		next({ name: "Login" })
// 	} else {
// 		next()
// 	}
// })

export default router
