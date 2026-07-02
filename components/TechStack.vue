<template>
  <section id="stack" class="relative overflow-hidden py-24 md:py-32 px-6">
    <div class="stack-aura" aria-hidden="true"></div>
    <div class="relative max-w-5xl mx-auto">
      <div class="reveal mb-14 md:mb-16">
        <p class="eyebrow" style="color: var(--c-blue)"><span class="no">03</span>What I work with</p>
        <h2 class="mt-4 text-4xl md:text-5xl text-[var(--ink)] leading-tight">My toolbox</h2>
        <p class="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          The technologies I reach for day to day — grouped by where they live in my work.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <article
          v-for="(group, i) in groups"
          :key="group.title"
          class="stack-card reveal"
          :class="{ 'sm:col-span-2 lg:col-span-1': group.wide }"
          :style="`--c: ${group.color}; transition-delay: ${i * 0.06}s`"
        >
          <div class="flex items-center gap-2.5 mb-4">
            <span class="cat-dot"></span>
            <h3 class="text-[0.95rem] font-medium text-[var(--ink)]">{{ group.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="t in group.items" :key="t" class="tech-chip">{{ t }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechStack',
  data() {
    return {
      groups: [
        {
          title: 'Kubernetes & Infrastructure',
          color: 'var(--c-teal)',
          items: ['Kubernetes', 'Terraform / OpenTofu', 'Helm', 'ArgoCD', 'Kyverno', 'Traefik'],
        },
        {
          title: 'AI & MLOps',
          color: 'var(--c-red)',
          items: ['vLLM', 'MLflow', 'Open-source LLMs', 'Python'],
        },
        {
          title: 'Internal Developer Platform',
          color: 'var(--c-blue)',
          items: ['Spotify Backstage', 'GitLab', 'Keycloak', 'Keycloakify', 'Docusaurus'],
        },
        {
          title: 'Observability & FinOps',
          color: 'var(--c-plum)',
          items: ['Grafana', 'Prometheus', 'Loki', 'OpenSearch', 'OpenCost'],
        },
        {
          title: 'Languages',
          color: 'var(--c-amber)',
          items: ['TypeScript', 'Python', 'Kotlin', 'C#', 'Ruby'],
        },
        {
          title: 'Frontend',
          color: 'var(--accent)',
          items: ['Vue', 'Nuxt', 'Tailwind CSS'],
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },
};
</script>

<style scoped>
.stack-aura {
  position: absolute;
  top: -20%;
  left: -10%;
  width: 60%;
  height: 90%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(36% 44% at 30% 30%, color-mix(in srgb, var(--c-teal) 38%, transparent) 0%, transparent 72%),
    radial-gradient(38% 46% at 60% 60%, color-mix(in srgb, var(--c-blue) 34%, transparent) 0%, transparent 72%),
    radial-gradient(34% 42% at 18% 64%, color-mix(in srgb, var(--c-amber) 26%, transparent) 0%, transparent 72%);
  filter: blur(56px);
  opacity: 0.3;
  animation: saura 24s ease-in-out infinite alternate;
}

@keyframes saura {
  0%   { transform: translate(0, 0) scale(1); }
  100% { transform: translate(4%, -3%) scale(1.1); }
}

.stack-card {
  position: relative;
  overflow: hidden;
  background: color-mix(in srgb, var(--surface) 84%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  padding: 1.8rem;
  transition: border-color 0.3s ease, transform 0.4s var(--spring), box-shadow 0.3s ease;
}

.stack-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--c);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--spring);
}

.stack-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--c) 45%, transparent);
  box-shadow: 0 16px 34px color-mix(in srgb, var(--c) 16%, transparent);
}

.stack-card:hover::before { transform: scaleX(1); }

.cat-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--c);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--c) 16%, transparent);
}

.tech-chip {
  padding: 5px 13px;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-soft);
  background: color-mix(in srgb, var(--c) 7%, var(--surface));
  border: 1px solid color-mix(in srgb, var(--c) 22%, var(--line));
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.3s var(--spring);
}

.tech-chip:hover {
  color: var(--c);
  border-color: var(--c);
  transform: translateY(-2px);
}

.reveal {
  opacity: 0;
  transform: translateY(26px) scale(0.985);
  transition: opacity 0.7s var(--spring), transform 0.7s var(--spring);
}
.reveal.in { opacity: 1; transform: translateY(0) scale(1); }

@media (prefers-reduced-motion: reduce) {
  .stack-card, .tech-chip, .reveal { transition: none; }
  .reveal { opacity: 1; transform: none; }
  .stack-aura { animation: none; }
}
</style>
