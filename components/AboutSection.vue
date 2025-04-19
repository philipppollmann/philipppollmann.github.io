<template>
  <section id="about" class="py-16 px-4 bg-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Über mich</h2>
      <div class="bg-gray-900 rounded-3xl p-8 md:p-12 backdrop-blur-lg">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/3">
            <div class="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div class="md:w-2/3">
            <p class="text-lg text-gray-300 mb-4">
              Ich bin ein leidenschaftlicher Entwickler mit einem Auge für modernes, minimalistisches Design.
              Meine Arbeit konzentriert sich auf die Schaffung nahtloser digitaler Erlebnisse,
              die nicht nur funktional, sondern auch ästhetisch ansprechend sind.
            </p>
            <p class="text-lg text-gray-300">
              Mit jahrelanger Erfahrung in der Webentwicklung und Designbranche
              strebe ich danach, innovative Lösungen zu schaffen, die Menschen begeistern.
            </p>
          </div>
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