<template>
  <section class="cv-section relative overflow-hidden bg-black text-white py-24 px-6">
    <div class="absolute inset-0">
      <div class="grid-overlay"></div>
      <div class="gradient-sphere gradient-sphere-1"></div>
      <div class="gradient-sphere gradient-sphere-2"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="mb-16 overflow-hidden">
        <h2 class="text-5xl font-bold tracking-tight text-reveal text-white">CV</h2>
        <p class="mt-4 text-xl text-white max-w-2xl text-reveal-delayed">
          An overview of my professional career and my skills.
        </p>
      </div>

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

      <!-- Education section -->
      <div class="education-container">
        <div class="timeline-header mb-10">
          <h3 class="text-2xl font-semibold text-white">Education</h3>
          <div class="h-px w-full bg-gradient-to-r from-white to-transparent mt-2"></div>
        </div>

        <div class="timeline-items space-y-16">
          <!-- Education item -->
          <div class="timeline-item relative pl-8 reveal-item">
            <span class="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#009983]"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-xl font-medium text-white">Bachelor in Business Informatics</h4>
              <span class="text-white text-lg">FOM University of Applied Sciences Cologne, Germany</span>
              <span class="text-white">Oct 2021 - Dec 2024</span>
            </div>
            <p class="mt-2 text-white">
              Focus: Artificial intelligence, software development, project management and cloud infrastructure
            </p>
          </div>

          <!-- Education item -->
          <div class="timeline-item relative pl-8 reveal-item">
            <span class="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#eb6a09]"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-xl font-medium text-white">A-levels</h4>
              <span class="text-white text-lg">Leo-Statz-Berufskolleg Düsseldorf, Germany</span>
              <span class="text-white">Aug 2018 - Jul 2023</span>
            </div>
            <p class="mt-2 text-white">
              Focus: Web development with web design using Photoshop and balance sheets
            </p>
          </div>
        </div>
      </div>

      <!-- Certifications section -->
      <div class="certification-container mt-24">
        <div class="timeline-header mb-10">
          <h3 class="text-2xl font-semibold text-white">Certifications</h3>
          <div class="h-px w-full bg-gradient-to-r from-white to-transparent mt-2"></div>
        </div>
        <div class="timeline-items space-y-16">
          <!-- Certification item -->
          <div class="timeline-item relative pl-8 reveal-item">
            <span class="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#ff9900]"></span>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h4 class="text-xl font-medium text-white">AWS Certified Cloud Practitioner</h4>
            </div>
            <p class="mt-2 text-white">
              Basic understanding of the AWS cloud and its services. Knowledge of cloud security, architecture and pricing.
            </p>
          </div>
        </div>
      </div>

      <!-- Download CV button -->
      <div class="mt-16 text-center">
        <a href="/CV_Philipp_Pollmann.pdf" download class="cv-download-button group relative overflow-hidden rounded-full bg-white px-6 py-3 text-black transition-all duration-300 inline-block hover:scale-105">
          <span class="relative z-10 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Download CV
          </span>
          <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
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
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

      document.querySelectorAll('.text-reveal, .text-reveal-delayed, .reveal-item').forEach(el => {
        observer.observe(el);
      });
    }
  }
};
</script>

<style scoped>
:root {
  --primary: #e20074;
  --secondary: #8d00ff;
  --accent: #009983;
}

.cv-section * {
  color: white !important; /* Alle Texte im CV-Bereich weiß machen */
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

.gradient-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.gradient-sphere-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(17, 24, 39, 0) 70%);
  top: -100px;
  right: -100px;
  animation: float 20s infinite alternate ease-in-out;
}

.gradient-sphere-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(17, 24, 39, 0) 70%);
  bottom: -100px;
  left: -100px;
  animation: float 25s infinite alternate-reverse ease-in-out;
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, -40px);
  }
  100% {
    transform: translate(-40px, 40px);
  }
}

.text-reveal, .text-reveal-delayed, .reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.text-reveal-delayed {
  transition-delay: 0.2s;
}

.text-reveal.revealed, .text-reveal-delayed.revealed, .reveal-item.revealed {
  opacity: 1;
  transform: translateY(0);
}

.cv-download-button {
  background: linear-gradient(to right, #4f46e5, #9333ea);
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px 24px;
  border-radius: 9999px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.5);
}

.cv-download-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(147, 51, 234, 0.5);
}

.cv-download-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-45deg);
  transition: left 0.5s ease;
}

.cv-download-button:hover::before {
  left: 100%;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 1.5px;
  top: 10px;
  bottom: -32px;
  width: 1px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}

.timeline-item:last-child::before {
  content: none;
}

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

.timeline-item + .timeline-subitem::after {
  content: '';
  position: absolute;
  top: 0;
  left: 2px;
  width: 7px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .timeline-subitem {
    padding-left: 12px;
    margin-left: 4px;
  }

  .timeline-subitem::before {
    left: 6px;
  }

  .timeline-subitem span.absolute {
    left: 6px;
  }

  .timeline-header h3 {
    font-size: 1.5rem;
  }

  .timeline-item h4, .timeline-subitem h4 {
    font-size: 1.1rem;
  }

  .cv-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.timeline-item, .timeline-subitem {
  transition: transform 0.3s ease;
}

.timeline-item:hover, .timeline-subitem:hover {
  transform: translateX(5px);
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
</style>