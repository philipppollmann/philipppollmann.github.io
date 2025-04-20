<template>
  <section id="contact" class="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Lass uns zusammenarbeiten</h2>
      <p class="text-xl text-gray-300 mb-8">
        Du hast ein Projekt oder eine Idee? Kontaktiere mich und lass uns darüber sprechen.
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <MailButton/>
        <LinkedInButton/>
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