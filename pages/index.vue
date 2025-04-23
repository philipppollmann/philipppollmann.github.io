<template>
  <div class="min-h-screen bg-black text-white font-sans">

    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <CV id="cv"/>
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>

    <!-- Scroll to top button -->
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed right-6 bottom-6 bg-[#e20074] hover:bg-[#bc005f] z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
      <span class="sr-only">Nach oben scrollen</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    lang: 'de'
  },
  title: 'Philipp Pollmann',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Personal website of Philipp Pollmann - Developer, Designer and Innovator' },
    { name: 'theme-color', content: '#000000' },
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
      href: 'https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap',
      media: 'print',
      onload: "this.media='all'"
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>

<style>
:root {
  --primary: #e20074;
  --secondary: #8d00ff;
  --accent: #009983;
  --background: #0f0f0f;
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --transition-standard: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--background);
  color: var(--text-primary);
  line-height: 1.6;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

.rounded-3xl {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.rounded-3xl:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

a, button {
  transition: all 0.2s ease;
}

:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  :root {
    --section-padding: 3rem 1rem;
  }

  body {
    font-size: 0.95rem;
  }

  h1 {
    font-size: 2.5rem !important;
  }

  h2 {
    font-size: 1.75rem !important;
  }

  h3 {
    font-size: 1.25rem !important;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  :root {
    --section-padding: 4rem 2rem;
  }
}

@media (min-width: 1025px) {
  :root {
    --section-padding: 5rem 3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (prefers-color-scheme: dark) {
  .bg-black {
    background-color: #000;
  }

  .text-white {
    color: #fff;
  }
}
</style>