# Yelagiri Hills Tourism Portal - Vue.js Frontend

A comprehensive Vue.js application for the Yelagiri Hills Tourism Portal, showcasing the natural beauty and tourism services of Yelagiri Hills, Tamil Nadu.

## 🚀 Project Overview

This project is a modern, responsive web application built with Vue 3 and Vite, designed to provide tourists with comprehensive information about Yelagiri Hills including accommodations, attractions, restaurants, tour packages, and local services.

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **CSS Framework**: TailwindCSS
- **Icons**: Feather Icons (already available in the project)
- **Package Manager**: Yarn
- **Linting**: Biome
- **Testing**: Vitest

## 📁 Project Structure

```
src/
├── components/           # Vue components
│   ├── Header.vue       # Global header with navigation
│   ├── Footer.vue       # Global footer
│   ├── Home.vue         # Homepage with hero slider
│   ├── Attractions.vue  # Tourist attractions listing
│   ├── Booking.vue      # Hotel booking interface
│   ├── Restaurants.vue  # Restaurant listings and menus
│   ├── Packages.vue     # Tour packages showcase
│   ├── Guides.vue       # Local guides directory
│   ├── Shopping.vue     # Local shopping and handicrafts
│   ├── Events.vue       # Events and festivals calendar
│   ├── Blog.vue         # Travel blog and articles
│   ├── Contact.vue      # Contact form and information
│   └── Transport.vue    # Transportation options
├── pages/               # Page components (existing)
│   ├── Home.vue         # Original home page
│   └── Login.vue        # Authentication page
├── router.js            # Vue Router configuration
├── App.vue              # Root component
├── main.js              # Application entry point
├── assets/              # Static assets
│   └── Inter/           # Font files
└── data/                # Data management
    ├── session.js       # Session handling
    └── user.js          # User data management
```

## 🎯 Features

### Core Functionality
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, modern interface with TailwindCSS
- **Interactive Components**: Sliders, modals, and dynamic content
- **Vue Router**: Client-side routing for seamless navigation
- **Reactive Data**: Vue 3 Composition API for reactive state management

### Pages & Components

#### 🏠 Home Page
- Hero slider with auto-rotation
- Overview sections with key highlights
- Feature showcase
- Statistics display
- Call-to-action sections

#### 🌄 Attractions
- Featured attractions carousel
- Filterable attraction listings
- Detailed attraction modals
- Adventure activities showcase
- Category-based filtering

#### 🏨 Booking
- Advanced search and filtering
- Hotel listings with detailed information
- Price range filtering
- Amenity-based filtering
- Rating-based sorting
- Detailed hotel modals

#### 🍴 Restaurants
- Featured restaurants showcase
- Category-based filtering
- Local specialties section
- Detailed restaurant modals with menus
- Contact information and features

#### 🎒 Tour Packages
- Curated package offerings
- Adventure, family, romantic, and wellness packages
- Custom package builder
- Package benefits and features
- Direct booking integration

#### 👨‍💼 Guides
- Local guide directory
- Specialization-based filtering
- Language capabilities
- Rating and review system
- Direct booking functionality

#### 🛍️ Shopping
- Local handicrafts showcase
- Product categories
- Shopping cart functionality
- Local product information

#### 🎉 Events
- Event calendar
- Festival information
- Cultural event listings
- Event details and booking

#### 📝 Blog
- Travel articles and tips
- Category-based organization
- Article previews
- Full article reading

#### 📞 Contact
- Contact form with validation
- Contact information display
- Quick links navigation
- Support information

#### 🚗 Transport
- Transportation options
- Pricing information
- Booking functionality
- Service details

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ytp-frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

5. **Preview production build**
   ```bash
   yarn preview
   ```

### Development Commands

```bash
# Development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linter
yarn lint

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#1e5631` (Dark Green)
- **Secondary Green**: `#2d7a4d` (Medium Green)
- **Accent Orange**: `#ff6b35` (Orange)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333333` (Dark Gray)

### Typography
- **Font Family**: Inter (loaded from assets)
- **Headings**: Bold weights (700, 600)
- **Body Text**: Regular weight (400)
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Rounded with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with backdrop blur

## 📱 Responsive Design Strategy

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

### Grid System
- **CSS Grid**: Used for complex layouts
- **Flexbox**: Used for component alignment
- **TailwindCSS**: Responsive utility classes

### Mobile-First Approach
- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized images and assets

## 🎭 Icon Usage

The application uses **Feather Icons** (already available in the project) instead of emojis for a more professional look:

- **Navigation**: Menu, user, search icons
- **Features**: Mountain, hotel, restaurant, car icons
- **Actions**: Book, contact, share icons
- **Status**: Star ratings, checkmarks, alerts

## 🧩 Component Architecture

### Global Components
- **Header**: Navigation and branding
- **Footer**: Links and contact information

### Page Components
- **Self-contained**: Each page manages its own state
- **Reusable**: Components can be reused across pages
- **Modular**: Clear separation of concerns

### State Management
- **Local State**: Component-level reactive data
- **Props**: Parent-child communication
- **Events**: Child-parent communication
- **Computed Properties**: Derived reactive data

## 🔧 Modal Usage Instructions

### Opening Modals
- Click on any card or item to open detailed modal
- Modals are implemented with Vue's reactive state
- Background click or close button closes modal
- Body scroll is disabled when modal is open

### Modal Features
- **Responsive**: Adapts to different screen sizes
- **Scrollable**: Content scrolls if it exceeds viewport
- **Accessible**: Proper focus management
- **Animated**: Smooth open/close transitions

## 🚀 Deployment

### Build Process
```bash
yarn build
```

### Build Output
- Optimized assets in `dist/` directory
- Static files ready for deployment
- Base path configured for `/assets/ytp/frontend/`

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFront, CloudFlare
- **Server**: Nginx, Apache

## 🔒 Security Considerations

- **Input Validation**: Form inputs are validated
- **XSS Prevention**: Vue's built-in protection
- **HTTPS**: Recommended for production
- **Environment Variables**: Sensitive data in env files

## 📈 Performance Optimization

- **Code Splitting**: Lazy-loaded routes
- **Image Optimization**: Responsive images
- **Bundle Analysis**: Vite's built-in analysis
- **Caching**: Browser caching strategies

## 🧪 Testing Strategy

- **Unit Tests**: Component testing with Vitest
- **Integration Tests**: Router and API testing
- **E2E Tests**: Full user journey testing
- **Coverage**: Comprehensive test coverage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is part of the Yelagiri Tourism Portal initiative by Bosco Soft Technologies Pvt. Ltd. & Don Bosco College, Yelagiri Hills.

## 📞 Support

For support and queries:
- **Email**: info@yelagirihills.com
- **Phone**: +91 XXXXX XXXXX
- **Support**: 24/7 Customer Support Available

---

**Made with ❤️ by Bosco Soft Technologies for Yelagiri Hills Tourism**