<template>
  <header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <nav class="site-nav pointer-events-auto flex items-center gap-1 rounded-full px-2 py-1.5">
      <a href="#home" class="px-3.5 py-1.5 text-[15px] font-bold tracking-tight text-[var(--ink)]">PP</a>
      <span class="w-px h-4 bg-[var(--line)] mx-0.5"></span>
      <a v-for="item in navItems"
         :key="item.id"
         :href="`#${item.id}`"
         class="nav-link px-3 sm:px-3.5 py-1.5 rounded-full text-[13px] sm:text-sm transition-all duration-200">
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'cv', label: 'CV' },
  { id: 'stack', label: 'Stack' },
  { id: 'life', label: 'Life' },
  { id: 'contact', label: 'Contact' }
];

const checkVisibleSections = () => {
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      const id = section.getAttribute('id');
      document.querySelectorAll('nav a.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
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
.site-nav {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--line);
  box-shadow: 0 6px 24px rgba(33, 31, 28, 0.06);
}

.nav-link {
  color: var(--ink-soft);
}

.nav-link:hover {
  color: var(--ink);
  background: var(--bg-tint);
}

.nav-link.active {
  color: var(--accent);
  background: var(--accent-soft);
}
</style>
