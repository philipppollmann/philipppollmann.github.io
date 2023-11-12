<template>
  <div class="grid gap-8 items-start justify-center m-8">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200">
      </div>
      <button @click="openEmailClient" class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-gray-600">
        <span class="flex items-center space-x-5">
          <span class="pr-6 text-gray-100">Contact</span>
        </span>
        <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">e-Mail &rarr;</span>
      </button>
    </div>
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