<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e20074] to-[#8d00ff]">Philipp Pollmann</span>
        </div>
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li><a href="#home" class="text-white hover:text-[#e20074] transition-colors">Home</a></li>
            <li><a href="#about" class="text-white hover:text-[#e20074] transition-colors">Über mich</a></li>
            <li><a href="#cv" class="text-white hover:text-[#e20074] transition-colors">CV</a></li>
            <li><a href="#skills" class="text-white hover:text-[#e20074] transition-colors">Skills</a></li>
            <li><a href="#projects" class="text-white hover:text-[#e20074] transition-colors">Projekte</a></li>
            <li><a href="#contact" class="text-white hover:text-[#e20074] transition-colors">Kontakt</a></li>
          </ul>
        </nav>
        <button @click="toggleMobileMenu" class="md:hidden flex items-center justify-center">
          <span class="sr-only">Menü öffnen</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden bg-black/95 backdrop-blur-md">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="item in navItems"
           :key="item.id"
           :href="`#${item.id}`"
           class="block px-3 py-2 text-white hover:bg-gray-900 transition-colors"
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
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projekte' },
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
    const isVisible = (
      rect.top <= 150 &&
      rect.bottom >= 150
    );

    if (isVisible) {
      const id = section.getAttribute('id');
      document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('text-[#e20074]');
          link.classList.remove('text-white');
        } else {
          link.classList.remove('text-[#e20074]');
          link.classList.add('text-white');
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
nav a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: var(--primary, #e20074);
  transition: width 0.3s;
  margin-top: 2px;
}

nav a:hover::after {
  width: 100%;
}
</style>