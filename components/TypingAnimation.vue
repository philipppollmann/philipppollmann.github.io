<template>
  <div>
    <span>{{ typedText }}<span v-if="showCursor">|</span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "I am Philipp, a dual student at Deutsche Telekom. " +
          "I'm studying Business Information Systems in Cologne.",
      typedText: "",
      currentIndex: 0,
      typingSpeed: 50,
      showCursor: true,
    };
  },
  mounted() {
    this.typeText();
    this.startCursorBlinking();
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.text.length) {
        setTimeout(() => {
          this.typedText += this.text[this.currentIndex];
          this.currentIndex++;
          this.typeText();
        }, this.typingSpeed);
      } else {
        setTimeout(() => {
          this.typedText = "";
          this.currentIndex = 0;
          this.typeText();
        }, 2000);
      }
    },
    startCursorBlinking() {
      setInterval(() => {
        this.showCursor = !this.showCursor;
      }, 500); // Hier kannst du die Blinkgeschwindigkeit des Cursors anpassen (500 ms = 0,5 Sekunden)
    },
  },
};
</script>
