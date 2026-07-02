<template>
  <section id="about" class="relative py-24 md:py-32 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="reveal mb-14 md:mb-16">
        <p class="eyebrow" style="color: var(--c-teal)"><span class="no">01</span>About</p>
        <h2 class="mt-4 text-4xl md:text-5xl font-medium text-[var(--ink)] leading-tight">
          A bit about me
        </h2>
      </div>

      <div class="grid md:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
        <!-- Prose -->
        <div class="reveal space-y-6 text-lg text-[var(--ink-soft)] leading-relaxed">
          <p>
            I'm a platform engineer at
            <span class="text-[var(--ink)] font-medium">Deutsche Telekom</span> and product owner of the
            <span class="text-[var(--ink)] font-medium">Innovation Platform</span> — a cloud-agnostic
            platform engineering platform at GSUS. I lead a team of seven DevOps engineers and stay
            hands-on, working the tickets right alongside them.
          </p>
          <p>
            Day to day that means an internal developer platform on Kubernetes — from GitOps and
            policy automation to running open-source AI models in production.
          </p>
          <p>
            My work lives where engineering meets people: making complex systems simple, reliable
            and pleasant to use. I like clean architecture, thoughtful automation, and the quiet
            satisfaction of something that just works.
          </p>
          <p>
            On the side I'm finishing a master's in AI &amp; Business Analytics — and outside of work
            you'll usually find me running, on my road bike, or dialing in an espresso at home.
          </p>
        </div>

        <!-- Facts panel -->
        <div class="reveal" style="transition-delay: .1s">
          <div class="fact-card">
            <dl class="divide-y divide-[var(--line)]">
              <div class="fact-row">
                <dt>Role</dt>
                <dd>Product Owner &amp; Platform Engineer</dd>
              </div>
              <div class="fact-row">
                <dt>Company</dt>
                <dd>Deutsche Telekom AG · GSUS</dd>
              </div>
              <div class="fact-row">
                <dt>Team</dt>
                <dd>Leading 7 DevOps Engineers (hands-on)</dd>
              </div>
              <div class="fact-row">
                <dt>Focus</dt>
                <dd>Platform Engineering &amp; AI/MLOps</dd>
              </div>
              <div class="fact-row">
                <dt>Studying</dt>
                <dd>M.Sc. AI &amp; Business Analytics</dd>
              </div>
              <div class="fact-row">
                <dt>Based in</dt>
                <dd>Cologne, Germany</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
</script>

<style scoped>
.fact-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  padding: 0.5rem 1.75rem;
  box-shadow: 0 1px 2px rgba(22, 22, 22, 0.04), 0 12px 32px rgba(22, 22, 22, 0.05);
  transition: transform 0.4s var(--spring), box-shadow 0.3s ease;
}

.fact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 1px 2px rgba(22, 22, 22, 0.04), 0 16px 36px rgba(22, 22, 22, 0.08);
}

.fact-row dd {
  transition: color 0.2s ease;
}

.fact-row:hover dd { color: var(--c-teal); }

.fact-row {
  padding: 1.1rem 0;
}

.fact-row dt {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 0.3rem;
}

.fact-row dd {
  color: var(--ink);
  font-weight: 500;
}

.reveal {
  opacity: 0;
  transform: translateY(26px) scale(0.985);
  transition: opacity 0.8s var(--spring), transform 0.8s var(--spring);
}

.reveal.in { opacity: 1; transform: translateY(0) scale(1); }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; }
}
</style>
