<template>
  <section class="relative flex items-center justify-center overflow-hidden bg-white pt-28 pb-16">
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#e20074]/5 blur-[160px]"></div>
      <div class="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#8d00ff]/4 blur-[140px]"></div>
      <div class="hero-grid absolute inset-0"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-black/8 bg-black/[0.03] text-sm text-black/45 mb-6 fade-up" style="animation-delay: 0s">
        <span class="h-1.5 w-1.5 rounded-full bg-[#e20074] animate-pulse flex-shrink-0"></span>
        DevOps Engineer &amp; Product Owner · Deutsche Telekom AG
      </div>

      <h1 class="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-5 fade-up" style="animation-delay: 0.1s">
        <span class="text-[#0f0f0f]">Philipp</span><br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#e20074] to-[#8d00ff]">Pollmann</span>
      </h1>

      <p class="text-black/40 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed fade-up" style="animation-delay: 0.2s">
        Building cloud-native platforms &amp; automating enterprise infrastructure at scale.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3 fade-up" style="animation-delay: 0.3s">
        <a href="#cv" class="px-7 py-3 rounded-full bg-[#0f0f0f] text-white text-sm font-semibold hover:bg-black/85 transition-all duration-200 hover:scale-105 active:scale-95">
          View CV
        </a>
        <a href="#contact" class="px-7 py-3 rounded-full border border-black/10 text-black/55 text-sm hover:border-black/20 hover:bg-black/[0.03] hover:text-black/75 transition-all duration-200">
          Get in touch
        </a>
      </div>
    </div>

    <div class="flex flex-col items-center gap-2.5 mt-10 fade-up" style="animation-delay: 0.6s">
      <span class="text-[10px] text-black/20 tracking-[0.3em] uppercase">scroll</span>
      <div class="h-8 w-px bg-gradient-to-b from-black/20 to-transparent"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
}

.fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
