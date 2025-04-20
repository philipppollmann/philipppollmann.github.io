<template>
  <button
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
      @click="handleClick"
      class="linkedin-button"
      :class="{ 'button-pressed': isPressed }"
  >
    <div class="button-content">
      <svg class="linkedin-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 10V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 7V7.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="button-text">Connect on LinkedIn</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'LinkedInButton',
  data() {
    return {
      isPressed: false
    }
  },
  methods: {
    handleClick() {
      // Replace with your LinkedIn profile URL
      window.open('https://de.linkedin.com/in/philipp-pollmann-5a3754206', '_blank');
    }
  }
}
</script>

<style scoped>
.linkedin-button {
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
  color: #0077b5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}

.linkedin-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.8);
}

.linkedin-button:hover {
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

.linkedin-icon {
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

.linkedin-button:hover .linkedin-icon {
  transform: scale(1.1) translateZ(0);
}

@media (prefers-reduced-motion: reduce) {
  .linkedin-button, .button-content, .linkedin-icon, .button-text {
    transition: none;
  }
}
</style>