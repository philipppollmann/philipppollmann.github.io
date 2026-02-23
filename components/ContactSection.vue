<template>
  <section id="contact" class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="mb-10">
        <p class="text-[#e20074] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
        <h2 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span class="text-[#0f0f0f]">Let's build</span><br>
          <span class="text-black/20">something great.</span>
        </h2>
      </div>
      <p class="text-[#9ca3af] text-lg mb-8 max-w-md leading-relaxed">
        Open for collaborations, interesting projects, and conversations about cloud &amp; AI.
      </p>
      <div class="flex flex-wrap gap-3">
        <MailButton/>
        <LinkedInButton/>
        <GitHubButton/>
      </div>
    </div>
  </section>
</template>

<script>
import LinkedInButton from "~/components/LinkeInButton.vue";

export default {
  name: 'ContactSection',
  components: {
    LinkedInButton,
  }
}
</script>
