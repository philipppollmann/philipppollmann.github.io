<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <HeroSection />
    <AboutSection />
    <CV/>
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Philipp Pollmann - Developer & Designer',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Personal website of Philipp Pollmann - Developer, Designer and Innovator' }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap'
    }
  ]
})
</script>

<style>
body {
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html {
  scroll-behavior: smooth;
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

@media (prefers-color-scheme: dark) {
  .bg-black {
    background-color: #000;
  }

  .text-white {
    color: #fff;
  }
}

</style>