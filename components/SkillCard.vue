<template>
  <div class="rounded-3xl overflow-hidden relative group">
    <div :class="`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90`"></div>
    <div class="relative p-8 z-10">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
          <p class="text-lg text-gray-100">
            {{ description }}
          </p>
        </div>
        <div class="text-4xl">{{ icon }}</div>
      </div>
      <div class="mt-8 space-y-2">
        <div v-for="(ability, index) in abilities" :key="index" class="flex items-center">
          <span class="mr-2">{{ ability.name }}</span>
          <div class="h-2 bg-white/30 rounded-full flex-grow">
            <div class="h-2 bg-white rounded-full" :style="{ width: `${ability.level * 100}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    gradient: {
      type: String,
      required: true
    },
    abilities: {
      type: Array,
      required: true
    }
  }
}
</script>