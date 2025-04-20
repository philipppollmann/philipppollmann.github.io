<template>
  <div class="rounded-3xl overflow-hidden bg-gray-900 hover:scale-105 transition-transform">
    <div :class="`aspect-video bg-gradient-to-r ${gradient}`"></div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-400 mb-4">{{ category }}</p>
      <a href="#" class="text-blue-400 hover:text-blue-300">Details →</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    gradient: {
      type: String,
      required: true
    }
  }
}
</script>