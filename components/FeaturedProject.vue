<template>
  <div class="mb-4 rounded-2xl border border-black/8 bg-white p-8 md:p-10 hover:border-black/14 hover:shadow-sm transition-all duration-300">
    <div class="mb-6">
      <span class="text-[10px] font-bold px-3 py-1.5 rounded-full bg-[#e20074]/8 text-[#e20074] border border-[#e20074]/15 tracking-[0.15em] uppercase">
        Featured Project
      </span>
    </div>
    <h3 class="text-2xl md:text-3xl font-bold text-[#0f0f0f] mb-4 tracking-tight">{{ title }}</h3>
    <p class="text-[#6b7280] leading-relaxed max-w-2xl text-base">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeaturedProject',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    gradient: { type: String, required: true }
  }
}
</script>
