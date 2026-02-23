<template>
  <button
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @click="handleClick"
      class="contact-btn"
      :class="{ 'is-pressed': isPressed }"
  >
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Follow on GitHub</span>
  </button>
</template>

<script>
export default {
  name: 'GitHubButton',
  data() {
    return { isPressed: false }
  },
  methods: {
    handleClick() {
      window.open('https://github.com/philipppollmann', '_blank');
    }
  }
}
</script>

<style scoped>
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  font-family: inherit;
}

.contact-btn:hover {
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.8);
  transform: translateY(-1px);
}

.contact-btn.is-pressed {
  transform: scale(0.97);
  background: rgba(0, 0, 0, 0.02);
}

.btn-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.contact-btn:hover .btn-icon {
  transform: scale(1.1);
}

@media (prefers-reduced-motion: reduce) {
  .contact-btn, .btn-icon { transition: none; }
}
</style>
