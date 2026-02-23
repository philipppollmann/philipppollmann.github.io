<template>
  <section id="projects" class="py-32 px-6 bg-[#f7f8fa]">
    <div class="max-w-5xl mx-auto">
      <div class="mb-16">
        <p class="text-[#e20074] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Work</p>
        <h2 class="text-4xl md:text-5xl font-bold text-[#0f0f0f] tracking-tight">Projects</h2>
      </div>

      <FeaturedProject
          :title="featuredProject.title"
          :description="featuredProject.description"
          :gradient="featuredProject.gradient"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :category="project.category"
            :gradient="project.gradient"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FeaturedProject from './FeaturedProject.vue';
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'ProjectsSection',
  components: {
    FeaturedProject,
    ProjectCard
  },
  data() {
    return {
      featuredProject: {
        title: 'Bachelor-Thesis',
        description: 'A comparison of multiple regression algorithms for predicting office utilisation of Deutsche Telekom buildings. The model was deployed in a Docker container using FastAPI. The CRISP-DM process was used.',
        gradient: 'from-indigo-500 to-purple-600'
      },
      projects: [
        {
          title: 'Homepage',
          category: 'A Nuxt application used to showcase my projects and skills.',
          gradient: 'from-red-500 to-orange-500'
        },
        {
          title: 'Smart-Home-Monitoring',
          category: 'A Terraform configuration for monitoring smart home devices using InfluxDB, Grafana and more services in a Kubernetes cluster.',
          gradient: 'from-green-500 to-teal-500'
        }
      ]
    }
  }
}
</script>
