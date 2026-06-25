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
  border: none;
  background: var(--ink);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(33, 31, 28, 0.18);
  transition: all 0.2s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  font-family: inherit;
}

.contact-btn:hover {
  background: #000;
  transform: translateY(-1px);
  box-shadow: 0 11px 28px rgba(33, 31, 28, 0.26);
}

.contact-btn.is-pressed {
  transform: scale(0.97);
  box-shadow: 0 4px 12px rgba(33, 31, 28, 0.2);
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
