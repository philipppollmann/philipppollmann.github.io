<template>
  <section class="py-20 px-4 text-center bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Philipp Pollmann
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
        Entwickler. Designer. Innovator.
      </p>
      <button class="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-gray-200 transition-colors animate-fade-in-delay-2">
        Mehr entdecken
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.4s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>