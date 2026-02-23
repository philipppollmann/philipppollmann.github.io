<template>
  <section id="about" class="py-16 px-6 bg-[#f7f8fa]">
    <div class="max-w-5xl mx-auto">
      <div class="mb-10">
        <p class="text-[#e20074] text-xs font-semibold tracking-[0.2em] uppercase mb-4">About me</p>
        <h2 class="text-4xl md:text-5xl font-bold text-[#0f0f0f] tracking-tight">Who I am</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div class="md:col-span-2">
          <div class="relative inline-block w-full max-w-[260px]">
            <img
              src="https://avatars.githubusercontent.com/u/17802232?v=4"
              alt="Philipp Pollmann"
              class="w-full rounded-2xl object-cover aspect-square"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8 pointer-events-none"></div>
          </div>
        </div>

        <div class="md:col-span-3 space-y-5 text-[#6b7280] text-lg leading-relaxed">
          <p>
            I'm <span class="text-[#0f0f0f] font-medium">Philipp Pollmann</span>, a DevOps Engineer and Product Owner at
            <span class="text-[#0f0f0f] font-medium">Deutsche Telekom AG</span>, leading the development of a
            <span class="text-[#0f0f0f] font-medium">cloud-independent Kubernetes platform</span> for Real Estate &amp; Procurement.
          </p>
          <p>
            My focus is on <span class="text-[#0f0f0f] font-medium">microservice architectures</span>, CI/CD automation,
            and infrastructure that scales — making enterprise systems faster, more resilient, and cloud-agnostic.
          </p>
          <p>
            Currently pursuing a <span class="text-[#0f0f0f] font-medium">Master's in AI &amp; Business Analytics</span>
            at FOM University, exploring the intersection of machine learning and operational excellence.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
