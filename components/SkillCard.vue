<template>
  <div class="rounded-3xl overflow-hidden relative group skill-card" ref="skillCard">
    <!-- Hintergrund mit Verlauf -->
    <div :class="`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90`"></div>

    <!-- Inhalt -->
    <div class="relative p-8 z-10">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-2xl font-bold mb-2 text-white card-element">{{ title }}</h3>
          <p class="text-lg text-gray-100 card-element" style="--delay: 0.1s">
            {{ description }}
          </p>
        </div>
        <div class="text-4xl text-white card-element" style="--delay: 0.15s">{{ icon }}</div>
      </div>
      <!-- Animated Bar -->
      <div class="mt-8 space-y-2">
        <div
            v-for="(ability, index) in abilities"
            :key="index"
            class="flex items-center card-element"
            :style="`--delay: ${0.2 + index * 0.1}s`"
        >
          <span class="mr-2 text-white whitespace-nowrap">
            {{ ability.name }} ({{ ability.level * 10 }}/10)
          </span>
          <div class="h-2 bg-white/30 rounded-full flex-grow overflow-hidden">
            <div
                class="h-2 rounded-full skill-bar"
                :style="{
                  backgroundColor: ability.color || 'white',
                  '--skill-level': `${ability.level * 100}%`,
                  '--delay': `${0.3 + index * 0.1}s`
                }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    gradient: {
      type: String,
      required: true
    },
    abilities: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
      );

      observer.observe(this.$refs.skillCard);
    }
  }
}
</script>

<style scoped>
.skill-card {
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-card.revealed {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.card-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.revealed .card-element {
  opacity: 1;
  transform: translateY(0);
}

.skill-bar {
  width: 0;
  transition-delay: var(--delay, 0s);
}

.revealed .skill-bar {
  animation: skillBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes skillBar {
  from {
    width: 0;
  }
  to {
    width: var(--skill-level, 0%);
  }
}

/* Apple-like hover effect */
.skill-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
  box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
</style>