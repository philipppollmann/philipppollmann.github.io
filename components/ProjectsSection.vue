<template>
  <section id="projects" class="py-16 px-4 bg-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Projekte</h2>

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
        description: 'Eine innovative Plattform, die modernste Web-Technologien nutzt, um ein nahtloses Benutzererlebnis zu schaffen. Das Projekt demonstriert meine Fähigkeiten in Frontend- und Backend-Entwicklung.',
        gradient: 'from-indigo-500 to-purple-600'
      },
      projects: [
        {
          title: 'Homepage',
          category: 'Frontend-Entwicklung, UI/UX',
          gradient: 'from-red-500 to-orange-500'
        },
        {
          title: 'Smart-Home-Monitoring',
          category: 'Backend-Entwicklung, API',
          gradient: 'from-green-500 to-teal-500'
        },
        {
          title: 'Projekt Gamma',
          category: 'Mobile App, Cross-Platform',
          gradient: 'from-blue-500 to-violet-500'
        }
      ]
    }
  }
}
</script>