<template>
  <button
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @click="handleClick"
      class="contact-btn"
      :class="{ 'is-pressed': isPressed }"
      aria-label="E-Mail senden"
  >
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      <path d="M22 7L13.03 13.2C12.4 13.6 11.6 13.6 10.97 13.2L2 7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
    </svg>
    <span>Send me a Mail</span>
  </button>
</template>

<script>
export default {
  name: 'MailButton',
  data() {
    return { isPressed: false }
  },
  methods: {
    handleClick() {
      window.location.href = 'mailto:contact@philipppollmann.de';
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
  transform: scale(1.1) rotate(-5deg);
}

@media (prefers-reduced-motion: reduce) {
  .contact-btn, .btn-icon { transition: none; }
}
</style>
