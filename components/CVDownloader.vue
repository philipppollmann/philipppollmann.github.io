<script lang="ts">
export default {
  name: 'CVDownloader',
  methods: {
    downloadDocument(){
      const cvPath = '';

      const downloadLink = document.createElement('a');

      downloadLink.href = cvPath;

      downloadLink.download = 'CV.pdf'

      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
    }
  }
};

</script>

<template>
  <div class="grid gap-8 items-start justify-center m-8">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200">
      </div>
      <button @click="downloadDocument" class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-gray-600">
        <span class="flex items-center space-x-5">
          <span class="pr-6 text-gray-100"> Labs Release 2023.11</span>
        </span>
        <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See whats new &rarr;</span>
      </button>
    </div>
  </div>


</template>

<style scoped>

</style>