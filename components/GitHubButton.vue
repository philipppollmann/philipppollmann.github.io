<template>
  <button
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @click="handleClick"
      class="github-button"
      :class="{ 'button-pressed': isPressed }"
  >
    <div class="button-content">
      <svg class="github-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="button-text">Follow me on GitHub</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'GitHubButton',
  data() {
    return {
      isPressed: false
    }
  },
  methods: {
    handleClick() {
      window.open('https://github.com/philipppollmann', '_blank');
    }
  }
}
</script>

<style scoped>
.github-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: linear-gradient(to bottom, #f5f5f7, #e3e3e5);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}

.github-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.8);
}

.github-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.button-pressed {
  transform: scale(0.97);
  background: linear-gradient(to bottom, #e3e3e5, #d8d8da);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform: translateZ(0);
  transition: transform 0.2s ease;
}

.github-icon {
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

.github-button:hover .github-icon {
  transform: scale(1.1) translateZ(0);
}

@media (prefers-reduced-motion: reduce) {
  .github-button, .button-content, .github-icon, .button-text {
    transition: none;
  }
}
</style>