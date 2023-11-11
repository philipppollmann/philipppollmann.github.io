<template>
  <div class="flex items-center justify-center m-11">
    <button
        class="group h-10 pl-5 rounded-full flex items-center space-x-4 bg-gradient-to-r from-pink-500 to-violet-500 hover:to-violet-600"
        @click="openEmailClient">
      <span class="text-sm text-white">E-Mail öffnen</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    openEmailClient() {
      const emailAdresse = "philipp.pollmann@example.com";

      const betreff = "Betreff";

      const nachricht = "Nachricht";

      const mailtoLink = `mailto:${emailAdresse}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(nachricht)}`;

      window.location.href = mailtoLink;
    },
  },
};
</script>

<style scoped>

</style>