<template>
  <section id="projects" class="py-16 px-4 bg-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Projects</h2>

      <!-- Featured Project -->
      <FeaturedProject
          :title="featuredProject.title"
          :description="featuredProject.description"
          :gradient="featuredProject.gradient"
      />

      <!-- Other Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          category: 'A terraform configuration for monitoring smart home devices using InfluxDB, Grafana and more services in a kubernetes cluster.',
          gradient: 'from-green-500 to-teal-500'
        }
      ]
    }
  }
}
</script>