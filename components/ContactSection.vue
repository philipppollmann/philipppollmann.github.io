<template>
  <section id="contact" class="relative overflow-hidden py-28 md:py-40 px-6">
    <div class="contact-aura" aria-hidden="true"></div>
    <div class="relative max-w-3xl mx-auto text-center">
      <p class="eyebrow reveal" style="color: var(--c-plum)">Get in touch</p>
      <h2 class="reveal mt-5 text-4xl md:text-6xl font-medium text-[var(--ink)] leading-[1.08]">
        Let's make something<br>
        <span class="italic font-normal accent-word">thoughtful</span> together.
      </h2>
      <p class="reveal mt-7 text-lg text-[var(--ink-soft)] max-w-xl mx-auto leading-relaxed">
        Always happy to talk about cloud, platforms, AI — or just trade coffee tips.
        Drop me a line and I'll get back to you.
      </p>
      <div class="reveal mt-10 flex flex-wrap justify-center gap-3">
        <MailButton/>
        <LinkedInButton/>
        <GitHubButton/>
        <CodebergButton/>
      </div>
    </div>
  </section>
</template>

<script>
import LinkedInButton from "~/components/LinkeInButton.vue";

export default {
  name: 'ContactSection',
  components: {
    LinkedInButton,
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
</script>

<style scoped>
.contact-aura {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 760px;
  max-width: 120%;
  height: 460px;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(30% 46% at 26% 38%, color-mix(in srgb, var(--c-plum) 52%, transparent) 0%, transparent 70%),
    radial-gradient(32% 46% at 68% 32%, color-mix(in srgb, var(--c-coral) 50%, transparent) 0%, transparent 70%),
    radial-gradient(34% 46% at 82% 64%, color-mix(in srgb, var(--c-amber) 44%, transparent) 0%, transparent 72%),
    radial-gradient(34% 48% at 44% 76%, color-mix(in srgb, var(--c-blue) 40%, transparent) 0%, transparent 72%);
  filter: blur(48px);
  opacity: 0.85;
  animation: caura 20s ease-in-out infinite alternate;
}

@keyframes caura {
  0%   { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) scale(1.12) rotate(6deg); }
}

@media (prefers-reduced-motion: reduce) {
  .contact-aura { animation: none; }
}

.accent-word {
  background-image: linear-gradient(100deg, var(--c-plum), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.reveal {
  opacity: 0;
  transform: translateY(24px) scale(0.98);
  transition: opacity 0.7s var(--spring), transform 0.7s var(--spring);
}
.reveal.in { opacity: 1; transform: translateY(0) scale(1); }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; }
}
</style>
