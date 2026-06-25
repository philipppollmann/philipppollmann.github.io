<template>
  <div class="min-h-screen site-bg text-ink font-sans">

    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <CV id="cv"/>
      <TechStack id="stack" />
      <HobbiesSection id="life" />
      <ContactSection id="contact" />
    </main>

    <!-- Scroll to top button -->
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="scroll-top fixed right-6 bottom-6 z-50 p-3 rounded-full transition-all duration-300 hover:-translate-y-0.5">
      <span class="sr-only">Scroll to top</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showScrollButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const checkScroll = () => {
  showScrollButton.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Philipp Pollmann',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Personal website of Philipp Pollmann - Developer, Designer and Innovator' },
    { name: 'theme-color', content: '#faf8f4' },
    { property: 'og:title', content: 'Philipp Pollmann' },
    { property: 'og:description', content: 'Personal website of Philipp Pollmann - Developer, Designer and Innovator' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://philipppollmann.de' }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap',
      media: 'print',
      onload: "this.media='all'"
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>

<style>
:root {
  --bg: #fcfbf9;
  --bg-tint: #f4efe8;
  --surface: #ffffff;
  --ink: #211f1c;
  --ink-soft: #6e685f;
  --ink-faint: #9a9388;
  --line: #e9e2d7;

  /* primary accent — warm coral/terracotta */
  --accent: #d65a3c;
  --accent-ink: #b8482d;
  --accent-soft: #fae8e1;

  /* curated multi-accent palette (used purposefully, Google-style) */
  --c-coral: #e0654a;  --c-coral-soft: #fae6df;
  --c-amber: #e2a23a;  --c-amber-soft: #fbeed4;
  --c-teal:  #2f9e87;  --c-teal-soft:  #d8efe9;
  --c-blue:  #4f86c6;  --c-blue-soft:  #e1ebf6;
  --c-plum:  #b1557f;  --c-plum-soft:  #f4e2ec;
  --c-red:   #cf4436;  --c-red-soft:   #fae0dc;

  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

body {
  font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg);
  color: var(--ink);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* subtle editorial paper grain */
.site-bg {
  background-color: var(--bg);
  position: relative;
}
.site-bg::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.02;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.text-ink { color: var(--ink); }

h1, h2, h3, h4 {
  font-family: "DM Sans", -apple-system, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.eyebrow {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
}

::selection {
  background: var(--accent-soft);
  color: var(--accent-ink);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

a, button {
  transition: all 0.2s ease;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.scroll-top {
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--line);
  box-shadow: 0 8px 24px rgba(33, 31, 28, 0.08);
}

.scroll-top:hover {
  border-color: var(--accent);
  color: var(--accent);
}

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb {
  background: #dcd3c6;
  border-radius: 6px;
  border: 2px solid var(--bg);
}
::-webkit-scrollbar-thumb:hover { background: #c9beac; }

.page-enter-active,
.page-leave-active { transition: opacity 0.3s; }
.page-enter,
.page-leave-to { opacity: 0; }

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>