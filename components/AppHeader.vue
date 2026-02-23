<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/6">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <span class="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#e20074] to-[#8d00ff]">Philipp Pollmann</span>
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#about" class="nav-link">Über mich</a></li>
            <li><a href="#cv" class="nav-link">CV</a></li>
            <li><a href="#contact" class="nav-link">Kontakt</a></li>
          </ul>
        </nav>
        <button @click="toggleMobileMenu" class="md:hidden flex items-center justify-center text-[#0f0f0f]">
          <span class="sr-only">Menü öffnen</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-black/6">
      <div class="max-w-5xl mx-auto px-6 py-3 space-y-1">
        <a v-for="item in navItems"
           :key="item.id"
           :href="`#${item.id}`"
           class="block px-3 py-2 text-sm text-black/60 hover:text-[#e20074] transition-colors"
           @click="closeMobileMenu">
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Über mich' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Kontakt' }
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const checkVisibleSections = () => {
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      const id = section.getAttribute('id');
      document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkVisibleSections);
  checkVisibleSections();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibleSections);
});
</script>

<style scoped>
.nav-link {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.5);
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 2px;
}

.nav-link:hover,
.nav-link.active {
  color: #e20074;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1.5px;
  background: #e20074;
  transition: width 0.25s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>
