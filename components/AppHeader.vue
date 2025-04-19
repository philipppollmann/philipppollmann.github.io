<template>
  <header class="bg-black/80 backdrop-blur-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-2xl font-medium">
        <span class="text-white">Philipp Pollmann</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a href="#about" class="text-gray-300 hover:text-white transition-colors">Über mich</a>
        <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Skills</a>
        <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projekte</a>
        <a href="#contact" class="text-gray-300 hover:text-white transition-colors">Kontakt</a>
      </div>
      <!-- Mobile menu button -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900 py-4">
      <div class="flex flex-col items-center space-y-4">
        <a @click="closeMobileMenu" href="#about" class="text-gray-300 hover:text-white transition-colors">Über mich</a>
        <a @click="closeMobileMenu" href="#skills" class="text-gray-300 hover:text-white transition-colors">Skills</a>
        <a @click="closeMobileMenu" href="#projects" class="text-gray-300 hover:text-white transition-colors">Projekte</a>
        <a @click="closeMobileMenu" href="#contact" class="text-gray-300 hover:text-white transition-colors">Kontakt</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
}
</script>