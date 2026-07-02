<template>
  <section class="relative overflow-hidden">
    <!-- soft pastel gradient backdrop -->
    <div class="hero-aura" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-6 pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">

        <!-- Text -->
        <div class="reveal">
          <span class="eyebrow inline-flex items-center gap-2.5">
            <span class="dot"></span>
            Open to new projects
          </span>

          <h1 class="mt-8 text-[3.6rem] md:text-7xl lg:text-[6rem] font-bold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
            Philipp<br>
            <span class="name-grad">Pollmann</span>
          </h1>

          <p class="mt-8 text-lg md:text-xl text-[var(--ink-soft)] max-w-xl leading-relaxed">
            Platform engineer at Deutsche Telekom, based in
            <span class="text-[var(--ink)] font-medium">Cologne, Germany</span>. I build internal
            developer platforms and run open-source AI models on Kubernetes — and I care as much
            about how things feel as how they work.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" class="btn-primary group">
              Get in touch
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#cv" class="btn-ghost">View my CV</a>
          </div>

          <div class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--ink-faint)]">
            <span class="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Cologne, Germany
            </span>
            <span class="hidden sm:block w-px h-4 bg-[var(--line)]"></span>
            <span>Cloud-native platforms &amp; automation</span>
          </div>
        </div>

        <!-- Portrait -->
        <div class="reveal relative mx-auto lg:mx-0 w-fit" style="transition-delay: .12s">
          <span class="float-shape float-shape--amber" aria-hidden="true"></span>
          <span class="float-shape float-shape--teal" aria-hidden="true"></span>
          <div class="portrait-arch-bg"></div>
          <div class="portrait-arch">
            <img
              src="https://avatars.githubusercontent.com/u/17802232?v=4"
              alt="Philipp Pollmann"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>

    <!-- tech marquee -->
    <div class="marquee reveal" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="n in 2" :key="n" class="marquee-group">
          <span v-for="item in marqueeItems" :key="item + n" class="marquee-item">
            {{ item }}<i class="marquee-star">✦</i>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const marqueeItems = [
  'Kubernetes', 'GitOps', 'ArgoCD', 'Terraform', 'Spotify Backstage',
  'vLLM', 'Open-source LLMs', 'Kyverno', 'Grafana', 'Vue & Nuxt', 'Platform Engineering'
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
</script>

<style scoped>
.name-grad {
  background-image: linear-gradient(105deg, var(--c-blue), var(--c-plum), var(--c-teal), var(--c-blue));
  background-size: 260% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: nameShift 9s ease-in-out infinite;
}

@keyframes nameShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.float-shape {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

.float-shape--amber {
  top: -26px;
  right: -30px;
  width: 74px;
  height: 74px;
  background: var(--c-blue);
  opacity: 0.4;
  border-radius: 58% 42% 55% 45% / 50% 58% 42% 50%;
  animation: floatA 7s ease-in-out infinite;
}

.float-shape--teal {
  bottom: -20px;
  left: -36px;
  width: 56px;
  height: 56px;
  background: var(--c-teal);
  opacity: 0.35;
  border-radius: 45% 55% 48% 52% / 55% 45% 55% 45%;
  animation: floatB 9s ease-in-out infinite;
}

.marquee {
  position: relative;
  z-index: 2;
  padding-bottom: 2.5rem;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 36s linear infinite;
}

.marquee:hover .marquee-track { animation-play-state: paused; }

.marquee-group {
  display: flex;
  flex-shrink: 0;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.marquee-star {
  font-style: normal;
  font-size: 0.6rem;
  color: var(--accent);
  opacity: 0.7;
  margin: 0 1.6rem;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 28px;
  border-radius: 9999px;
  background: var(--ink);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 8px 24px rgba(33, 31, 28, 0.18);
  transition: transform 0.3s var(--spring), background 0.2s ease, box-shadow 0.3s ease;
}

.btn-arrow {
  width: 17px;
  height: 17px;
  transition: transform 0.35s var(--spring);
}

.btn-primary:hover .btn-arrow { transform: translateX(4px); }

.btn-primary:hover {
  background: #000;
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 14px 32px rgba(33, 31, 28, 0.26);
}

.btn-primary:active { transform: scale(0.97); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 13px 26px;
  border-radius: 9999px;
  border: 1px solid var(--line);
  color: var(--ink-soft);
  font-size: 0.95rem;
  font-weight: 500;
  background: var(--surface);
}

.btn-ghost:hover {
  border-color: var(--ink-soft);
  color: var(--ink);
}

.portrait-arch {
  position: relative;
  width: 320px;
  height: 400px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(22, 22, 22, 0.06), 0 24px 48px rgba(22, 22, 22, 0.14);
  z-index: 2;
}

.portrait-arch-bg {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 320px;
  height: 400px;
  border-radius: 1.5rem;
  background: linear-gradient(150deg, var(--c-blue), var(--c-plum));
  opacity: 0.35;
  z-index: 1;
}

@media (min-width: 1024px) {
  .portrait-arch, .portrait-arch-bg { width: 360px; height: 450px; border-radius: 1.5rem; }
}

/* large soft flowing aurora — the Wispr signature */
.hero-aura {
  position: absolute;
  top: -25%;
  right: -15%;
  width: 90%;
  height: 150%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(32% 38% at 62% 16%, color-mix(in srgb, var(--c-blue) 42%, transparent) 0%, transparent 68%),
    radial-gradient(36% 42% at 80% 50%, color-mix(in srgb, var(--c-plum) 36%, transparent) 0%, transparent 70%),
    radial-gradient(36% 42% at 46% 72%, color-mix(in srgb, var(--c-teal) 30%, transparent) 0%, transparent 70%);
  filter: blur(56px);
  opacity: 0.5;
  animation: aura 22s ease-in-out infinite alternate;
}

@keyframes aura {
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  50%  { transform: translate(-3%, 2%) scale(1.08) rotate(4deg); }
  100% { transform: translate(2%, -2%) scale(1.04) rotate(-3deg); }
}

@media (max-width: 1023px) {
  .hero-aura { width: 130%; right: -25%; top: -12%; height: 90%; opacity: 0.35; }
}

@keyframes floatA {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(8deg); }
}

@keyframes floatB {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(12px) translateX(-8px); }
}

.reveal {
  opacity: 0;
  transform: translateY(26px) scale(0.985);
  transition: opacity 0.8s var(--spring), transform 0.8s var(--spring);
}

.reveal.in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; }
  .hero-aura, .name-grad, .float-shape, .marquee-track { animation: none; }
}
</style>
