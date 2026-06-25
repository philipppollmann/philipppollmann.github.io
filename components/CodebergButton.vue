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
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.75"/>
      <path d="M3.2 17.5 11.4 6.9a.75.75 0 0 1 1.2 0l8.2 10.6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 7.5 15.6 19" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
    </svg>
    <span>Codeberg</span>
  </button>
</template>

<script>
export default {
  name: 'CodebergButton',
  data() {
    return { isPressed: false }
  },
  methods: {
    handleClick() {
      window.open('https://codeberg.org/PhilippPollmann', '_blank');
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
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink-soft);
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
  border-color: var(--ink-soft);
  color: var(--ink);
  transform: translateY(-1px);
}

.contact-btn.is-pressed {
  transform: scale(0.97);
  background: var(--bg-tint);
}

.btn-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #2185d0;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.contact-btn:hover .btn-icon {
  transform: scale(1.1);
}

@media (prefers-reduced-motion: reduce) {
  .contact-btn, .btn-icon { transition: none; }
}
</style>
