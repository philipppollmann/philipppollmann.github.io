<template>
  <div class="mb-12">
    <div class="rounded-3xl overflow-hidden bg-gray-900 relative">
      <div class="md:flex">
        <div :class="`md:w-1/2 bg-gradient-to-br ${gradient} aspect-video`"></div>
        <div class="md:w-1/2 p-8">
          <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
          <p class="text-gray-300 mb-6">
            {{ description }}
          </p>
          <button class="bg-white text-black rounded-full px-6 py-2 font-medium hover:bg-gray-200 transition-colors">
            Mehr erfahren
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedProject',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
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