<template>
  <section id="skills" class="py-16 px-4 bg-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Skills</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard
            v-for="(skill, index) in skills"
            :key="index"
            :title="skill.title"
            :description="skill.description"
            :icon="skill.icon"
            :gradient="skill.gradient"
            :abilities="skill.abilities"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from './SkillCard.vue';
import skills from "~/server/SkillList";

export default {
  name: 'SkillsSection',
  components: {
    SkillCard
  },
  data() {
    return {
      skills
    };
  }
};
</script>