<template>
  <section id="about" class="py-20 px-4 bg-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
        About me
      </h2>
      <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-white/10">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="md:w-1/3 flex justify-center">
            <div class="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg shadow-purple-500/30 ring-2 ring-white/10"></div>
          </div>
          <div class="md:w-2/3 text-gray-300 text-lg space-y-5 leading-relaxed">
            <p>
              I am <span class="text-white font-semibold">23 years old</span> and work at
              <span class="text-white font-semibold">Deutsche Telekom AG</span> in the
              <span class="text-white font-semibold">Real Estate & Procurement</span> department.
              In my role as <span class="text-white font-semibold">DevOps Engineer</span> and
              <span class="text-white font-semibold">Team Lead</span> of our DevOps team, I am responsible for the
              development and operation of an <span class="text-white font-semibold">Azure-based Kubernetes platform</span>.
            </p>
            <p>
              Together, we automate business processes by using
              <span class="text-white font-semibold">microservice architectures</span> – with the aim of
              strengthening <span class="text-white font-semibold">efficiency</span>,
              <span class="text-white font-semibold">scalability</span> and
              <span class="text-white font-semibold">innovative strength</span> within the Group through a platform that is
              as <span class="text-white font-semibold">cloud-independent</span> as possible.
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