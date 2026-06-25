<template>
  <section class="cv-section relative py-24 md:py-32 px-6">
    <div class="max-w-4xl mx-auto relative">
      <div class="mb-16 reveal-item">
        <p class="eyebrow">Career</p>
        <h2 class="mt-4 text-4xl md:text-5xl font-medium text-[var(--ink)] leading-tight">Experience &amp; education</h2>
        <p class="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          A look at where I've worked, what I've studied, and the things I've built along the way.
        </p>
      </div>

      <!-- Professional experience -->
      <div class="mb-16">
        <h3 class="group-label">Professional experience</h3>

        <div class="timeline-items">
          <!-- DevOps Engineer & PO -->
          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <span class="timeline-date">Jan 2025 – Present</span>
            <h4 class="entry-title">Product Owner &amp; Platform Engineer</h4>
            <span class="entry-org">Deutsche Telekom AG · GSUS</span>
            <p class="entry-text">
              Product owner of the Innovation Platform — a cloud-agnostic platform engineering platform.
              Leading a team of seven DevOps engineers while staying hands-on: an internal developer
              platform on Kubernetes with GitOps, policy automation and open-source AI models in production.
            </p>
            <div class="chips">
              <span class="chip">Kubernetes</span><span class="chip">ArgoCD</span><span class="chip">Terraform / OpenTofu</span>
              <span class="chip">Kyverno</span><span class="chip">Helm</span><span class="chip">Spotify Backstage</span>
              <span class="chip">vLLM</span><span class="chip">MLflow</span><span class="chip">Keycloak</span>
              <span class="chip">Grafana</span><span class="chip">Traefik</span><span class="chip">Vue &amp; Nuxt</span>
              <span class="chip">Team Lead</span>
            </div>
          </div>

          <!-- Dual Student -->
          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <span class="timeline-date">Oct 2021 – Dec 2024</span>
            <h4 class="entry-title">Dual Student</h4>
            <span class="entry-org">Deutsche Telekom AG</span>
            <p class="entry-text">
              Development and project work across different departments and locations.
            </p>
          </div>

          <div class="timeline-subitem reveal-item">
            <span class="timeline-subdot"></span>
            <span class="timeline-date">Jul 2023 – Dec 2024</span>
            <h4 class="sub-title">GSUS REM &amp; Procurement</h4>
            <p class="entry-text">Developing microservices and deploying to cloud platforms.</p>
            <div class="chips">
              <span class="chip">Azure</span><span class="chip">Python</span><span class="chip">Kubernetes</span><span class="chip">Docker</span>
            </div>
          </div>

          <div class="timeline-subitem reveal-item">
            <span class="timeline-subdot"></span>
            <span class="timeline-date">Jul 2023 – Aug 2023</span>
            <h4 class="sub-title">Magyar Telekom, Budapest</h4>
            <p class="entry-text">IoT sensor configuration, automation and compliance.</p>
            <div class="chips">
              <span class="chip">IoT</span><span class="chip">Python</span><span class="chip">Terraform</span><span class="chip">Security</span>
            </div>
          </div>

          <div class="timeline-subitem reveal-item">
            <span class="timeline-subdot"></span>
            <span class="timeline-date">Feb 2023 – Jul 2023</span>
            <h4 class="sub-title">AWS Powerhouse <span class="text-[var(--ink-faint)] font-normal">· T-Systems</span></h4>
            <p class="entry-text">Building microservices and deploying to cloud platforms.</p>
            <div class="chips">
              <span class="chip">AWS</span><span class="chip">Terraform</span><span class="chip">Python &amp; Django</span><span class="chip">Docker</span>
            </div>
          </div>

          <div class="timeline-subitem reveal-item">
            <span class="timeline-subdot"></span>
            <span class="timeline-date">Oct 2021 – Feb 2023</span>
            <h4 class="sub-title">GSUS Real Estate Management</h4>
            <p class="entry-text">Building microservices and data tooling.</p>
            <div class="chips">
              <span class="chip">C#</span><span class="chip">Python</span><span class="chip">Azure</span>
            </div>
          </div>

          <!-- Internship -->
          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <span class="timeline-date">Jan 2017</span>
            <h4 class="entry-title">Internship</h4>
            <span class="entry-org">PeopleWare (formerly Invision AG)</span>
            <p class="entry-text">
              First steps in programming with Ruby and TypeScript, and a taste of UI/UX design.
            </p>
            <div class="chips">
              <span class="chip">Ruby</span><span class="chip">TypeScript</span><span class="chip">Docker</span><span class="chip">UI/UX</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="mb-16" style="--dot: var(--c-teal)">
        <h3 class="group-label">Education</h3>
        <div class="timeline-items">
          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <span class="timeline-date">Sep 2025 – Feb 2028</span>
            <h4 class="entry-title">M.Sc. AI &amp; Business Analytics</h4>
            <span class="entry-org">FOM University of Applied Sciences, Cologne</span>
            <p class="entry-text">Focus: artificial intelligence, mathematics, business requirements and MLOps.</p>
          </div>

          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <span class="timeline-date">Oct 2021 – Dec 2024</span>
            <h4 class="entry-title">B.Sc. Business Informatics</h4>
            <span class="entry-org">FOM University of Applied Sciences, Cologne</span>
            <p class="entry-text">Focus: AI, software development, project management and cloud infrastructure.</p>
          </div>

          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <span class="timeline-date">Aug 2018 – Jul 2023</span>
            <h4 class="entry-title">A-levels</h4>
            <span class="entry-org">Leo-Statz-Berufskolleg, Düsseldorf</span>
            <p class="entry-text">Focus: web development and design.</p>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mb-14" style="--dot: var(--c-amber)">
        <h3 class="group-label">Certifications</h3>
        <div class="timeline-items">
          <div class="timeline-item reveal-item">
            <span class="timeline-dot"></span>
            <h4 class="entry-title">AWS Certified Cloud Practitioner</h4>
            <p class="entry-text">Foundational knowledge of AWS services, cloud security, architecture and pricing.</p>
          </div>
        </div>
      </div>

      <div class="mt-16 reveal-item">
        <a href="/CV_Philipp_Pollmann.pdf" download class="cv-download">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586V3a1 1 0 112 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          Download full CV
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CV',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
    this.$el.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
  }
};
</script>

<style scoped>
.group-label {
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  padding-bottom: 1rem;
  margin-bottom: 2.25rem;
  border-bottom: 1px solid var(--line);
  font-family: "DM Sans", sans-serif;
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-subitem {
  position: relative;
  padding-left: 4rem;
  margin-left: 2rem;
}

.timeline-date {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--dot, var(--accent));
  font-variant-numeric: tabular-nums;
}

.entry-title {
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--ink);
  margin-top: 0.3rem;
}

.sub-title {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--ink);
  margin-top: 0.2rem;
}

.entry-org {
  display: block;
  font-size: 0.95rem;
  color: var(--ink-soft);
  margin-top: 0.15rem;
}

.entry-text {
  margin-top: 0.7rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 42rem;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 7px;
  height: 12px;
  width: 12px;
  border-radius: 9999px;
  background: var(--dot, var(--accent));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--dot, var(--accent)) 16%, transparent);
}

.timeline-subdot {
  position: absolute;
  left: 38px;
  top: 7px;
  height: 9px;
  width: 9px;
  border-radius: 9999px;
  border: 2px solid var(--dot, var(--accent));
  background: var(--bg);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 5.5px;
  top: 24px;
  bottom: -2.5rem;
  width: 1px;
  background: var(--line);
}

.timeline-item:last-child::before { content: none; }

.timeline-subitem::before {
  content: '';
  position: absolute;
  left: 42px;
  top: 22px;
  bottom: -2.5rem;
  width: 1px;
  background: var(--line);
}

.timeline-subitem:last-child::before { content: none; }

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.chip {
  padding: 4px 13px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ink-soft);
  background: var(--surface);
  border: 1px solid var(--line);
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.chip {
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.3s var(--spring);
}

.chip:hover {
  border-color: var(--dot, var(--accent));
  color: var(--dot, var(--accent));
  transform: translateY(-2px);
}

.cv-download {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 26px;
  border-radius: 9999px;
  background: var(--ink);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 8px 22px rgba(33, 31, 28, 0.18);
  transition: transform 0.3s var(--spring), background 0.2s ease, box-shadow 0.3s ease;
}

.cv-download:hover {
  background: #000;
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 14px 30px rgba(33, 31, 28, 0.26);
}

.cv-download:active { transform: scale(0.97); }

.cv-download svg {
  transition: transform 0.4s var(--spring);
}

.cv-download:hover svg { transform: translateY(2px); }

.reveal-item {
  opacity: 0;
  transform: translateY(26px) scale(0.985);
  transition: opacity 0.7s var(--spring), transform 0.7s var(--spring);
}

.reveal-item.revealed { opacity: 1; transform: translateY(0) scale(1); }

@media (max-width: 640px) {
  .timeline-subitem { padding-left: 28px; margin-left: 8px; }
  .timeline-subitem::before { left: 4.5px; }
  .timeline-subdot { left: 0; }
  .entry-title { font-size: 1.2rem; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-item { opacity: 1; transform: none; }
}
</style>
