<template>
  <section class="cv-section relative overflow-hidden bg-black text-white py-24 px-6">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="grid-overlay"></div>
      <div class="gradient-sphere gradient-sphere-1"></div>
      <div class="gradient-sphere gradient-sphere-2"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Header with animated text reveal -->
      <div class="mb-16 overflow-hidden">
        <h2 class="text-5xl font-bold tracking-tight text-reveal text-white">CV</h2>
        <p class="mt-4 text-xl text-white max-w-2xl text-reveal-delayed">
          An overview of my professional career and my skills.
        </p>
      </div>

      <!-- Timeline component -->
      <div class="timeline-container mb-24">
        <div class="timeline-header mb-10">
          <h3 class="text-2xl font-semibold text-white">Professional experience</h3>
          <div class="h-px w-full bg-gradient-to-r from-white to-transparent mt-2"></div>
        </div>

        <div class="timeline-items space-y-16">

          <!-- GSUS DevOps Engineer-->
          <div class="timeline-item relative pl-8 reveal-item">
            <span class="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#e20074]"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-xl font-medium text-white">DevOps Engineer & Team Lead</h4>
              <span class="text-white text-lg">Deutsche Telekom AG</span>
              <span class="text-white">Jan 2025 – Present</span>
            </div>
            <p class="mt-2 text-white">
              Development of a cloud-independent Kubernetes platform. Implementation of CI/CD pipelines and automation of business processes.
            </p>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Terraform
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Kubernetes & Helm
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Docker
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Python
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Microsoft Azure
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Team Management
              </li>
            </ul>
          </div>

          <!-- Dual Student Main Entry -->
          <div class="timeline-item relative pl-8 reveal-item">
            <span class="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#e20074]"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-xl font-medium text-white">Dual Student</h4>
              <span class="text-white text-lg">Deutsche Telekom AG</span>
              <span class="text-white">Oct 2021 - Dec 2024</span>
            </div>
            <p class="mt-2 text-white">
              Development and management across different departments and locations
            </p>
          </div>

          <!-- Sub-Entry: Current GSUS -->
          <div class="timeline-subitem relative pl-16 reveal-item ml-8">
            <span class="absolute left-9 top-1 h-3 w-3 rounded-full bg-[#e20074] opacity-80"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-lg font-medium text-white">GSUS REM and Procurement</h4>
              <span class="text-white text-base">Jul 2023 - Dec 2024</span>
            </div>
            <p class="mt-2 text-white">
              Development of microservices and deployment on cloud platforms
            </p>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Microsoft Azure
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Python
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Kubernetes
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Docker
              </li>
            </ul>
          </div>

          <!-- Sub-Entry: Magyar Telekom -->
          <div class="timeline-subitem relative pl-16 reveal-item ml-8">
            <span class="absolute left-9 top-1 h-3 w-3 rounded-full bg-[#e20074] opacity-80"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-lg font-medium text-white">Magyar Telekom Budapest</h4>
              <span class="text-white text-base">Jul 2023 - Aug 2023</span>
            </div>
            <p class="mt-2 text-white">
              Development of microservices and deployment on cloud platforms
            </p>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                IoT Sensor Configuration
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Python
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Terraform
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Compliance & Security
              </li>
            </ul>
          </div>

          <!-- Sub-Entry: AWS Powerhouse -->
          <div class="timeline-subitem relative pl-16 reveal-item ml-8">
            <span class="absolute left-9 top-1 h-3 w-3 rounded-full bg-[#e20074] opacity-80"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-lg font-medium text-white">AWS Powerhouse</h4>
              <span class="text-white text-lg">T-Systems GmbH</span>
              <span class="text-white text-base">Feb 2023 - Jul 2023</span>
            </div>
            <p class="mt-2 text-white">
              Development of microservices and deployment on cloud platforms
            </p>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                AWS
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Terraform
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Python & Django
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Docker
              </li>
            </ul>
          </div>

          <!-- Sub-Entry: First GSUS Part -->
          <div class="timeline-subitem relative pl-16 reveal-item ml-8">
            <span class="absolute left-9 top-1 h-3 w-3 rounded-full bg-[#e20074] opacity-80"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-lg font-medium text-white">GSUS Real Estate Management</h4>
              <span class="text-white text-base">Oct 2021 - Feb 2023</span>
            </div>
            <p class="mt-2 text-white">
              Development of microservices and deployment on cloud platforms
            </p>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                C#
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Python
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Power Bi
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Microsoft Azure
              </li>
            </ul>
          </div>

          <!-- Timeline item -->
          <div class="timeline-item relative pl-8 reveal-item">
            <span class="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#8d00ff]"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-xl font-medium text-white">Internship</h4>
              <span class="text-white text-lg">PeopleWare (formerly Invision AG)</span>
              <span class="text-white">Jan 2017</span>
            </div>
            <p class="mt-2 text-white">
              Basic understanding of programming languages like ruby and TypeScript
            </p>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Ruby
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                TypeScript
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                Docker
              </li>
              <li class="text-white flex items-center">
                <span class="inline-block h-1 w-1 rounded-full bg-white mr-2"></span>
                UI & UX Design
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education section and rest of the component remain unchanged -->
      <!-- Education section -->
      <div class="education-container">
        <!-- ... Rest of the content ... -->
      </div>

      <!-- Certifications section -->
      <div class="certification-container mt-24">
        <!-- ... Rest of the content ... -->
      </div>

      <!-- Download CV button -->
      <div class="mt-16 text-center">
        <!-- ... Rest of the content ... -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CV',
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Add intersection observer to handle reveal animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      // Observe all elements with reveal classes
      document.querySelectorAll('.text-reveal, .text-reveal-delayed, .reveal-item').forEach(el => {
        observer.observe(el);
      });
    }
  }
};
</script>

<style scoped>
.cv-section * {
  color: white !important; /* Force all text within the CV section to be white */
}

/* ... Rest of the styles ... */

/* Add new styles for subitems */
.timeline-subitem::before {
  content: '';
  position: absolute;
  left: 9.5px;
  top: 10px;
  bottom: -32px;
  width: 1px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
}

.timeline-subitem:last-child::before {
  content: none;
}

/* Connector line from parent to first child */
.timeline-item + .timeline-subitem::after {
  content: '';
  position: absolute;
  top: 0;
  left: 2px;
  width: 7px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}
</style>