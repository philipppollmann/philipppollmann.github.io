<template>
  <div class="rounded-2xl border border-black/8 bg-white p-6 hover:border-black/14 hover:shadow-sm transition-all duration-300">
    <h3 class="text-lg font-semibold text-[#0f0f0f] mb-2 tracking-tight">{{ title }}</h3>
    <p class="text-[#9ca3af] text-sm leading-relaxed">{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: { type: String, required: true },
    category: { type: String, required: true },
    gradient: { type: String, required: true }
  }
}
</script>
