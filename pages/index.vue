<template>
  <div class="min-h-screen site-bg text-ink font-sans">

    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <CV id="cv"/>
      <TechStack id="stack" />
      <ProjectsSection id="projects" />
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
    { name: 'description', content: 'Philipp Pollmann — Product Owner & Platform Engineer at Deutsche Telekom. Internal developer platforms and open-source AI on Kubernetes.' },
    { name: 'theme-color', content: '#fafafa' },
    { property: 'og:title', content: 'Philipp Pollmann' },
    { property: 'og:description', content: 'Product Owner & Platform Engineer at Deutsche Telekom. Internal developer platforms and open-source AI on Kubernetes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://philipp.pollmann.rocks' }
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
  --bg: #fafafa;
  --bg-tint: #f1f1ef;
  --surface: #ffffff;
  --ink: #161616;
  --ink-soft: #5c5c58;
  --ink-faint: #8c8c86;
  --line: #e6e6e2;

  /* primary accent — restrained tech blue */
  --accent: #2563eb;
  --accent-ink: #1d4fc4;
  --accent-soft: #e8eefc;

  /* curated multi-accent palette (used purposefully, Google-style) */
  --c-coral: #e0654a;  --c-coral-soft: #fae6df;
  --c-amber: #dd9b33;  --c-amber-soft: #faeed6;
  --c-teal:  #199a80;  --c-teal-soft:  #d8efe9;
  --c-blue:  #2563eb;  --c-blue-soft:  #e1ebf6;
  --c-plum:  #a04f96;  --c-plum-soft:  #f2e2f0;
  --c-red:   #cf4436;  --c-red-soft:   #fae0dc;

  /* smooth deceleration, no overshoot — crisper motion */
  --spring: cubic-bezier(0.22, 1, 0.36, 1);
}

body {
  font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg);
  color: var(--ink);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.site-bg {
  background-color: var(--bg);
  position: relative;
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

.eyebrow .no {
  opacity: 0.55;
  font-variant-numeric: tabular-nums;
  margin-right: 0.6em;
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
  background: #d2d2ce;
  border-radius: 6px;
  border: 2px solid var(--bg);
}
::-webkit-scrollbar-thumb:hover { background: #bcbcb6; }

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