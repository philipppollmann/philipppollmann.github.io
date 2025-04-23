<template>
  <button
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @click="handleClick"
      class="mail-button"
      :class="{ 'button-pressed': isPressed }"
      aria-label="E-Mail senden"
  >
    <div class="button-content">
      <svg class="mail-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M22 7L13.03 13.2C12.4 13.6 11.6 13.6 10.97 13.2L2 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="button-text">Send me a Mail</span>
    </div>
    <div class="button-glow"></div>
  </button>
</template>

<script>
export default {
  name: 'MailButton',
  data() {
    return {
      isPressed: false
    }
  },
  methods: {
    handleClick() {
      // E-Mail-Client öffnen mit vorgegebener E-Mail-Adresse
      window.location.href = 'mailto:kontakt@beispiel.de';
    }
  }
}
</script>

<style scoped>
.mail-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: linear-gradient(to bottom, #f5f5f7, #e8e8eb);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  color: #007AFF;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}

.mail-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.9);
}

.mail-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 119, 255, 0.15);
}

.button-pressed {
  transform: scale(0.97);
  background: linear-gradient(to bottom, #e8e8eb, #dedee3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform: translateZ(0);
  transition: transform 0.2s ease;
  position: relative;
  z-index: 2;
}

.mail-icon {
  width: 20px;
  height: 20px;
  transform: translateZ(0);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button-text {
  font-size: 14px;
  letter-spacing: -0.01em;
  transition: all 0.2s ease;
}

.mail-button:hover .mail-icon {
  transform: scale(1.1) rotate(-3deg) translateZ(0);
}

.button-glow {
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 140%;
  background: radial-gradient(ellipse at center, rgba(0, 122, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.mail-button:hover .button-glow {
  opacity: 1;
}

.mail-button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .mail-button, .button-content, .mail-icon, .button-text, .button-glow {
    transition: none;
  }
}
</style>