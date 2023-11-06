<template>
  <div>
    <span> {{ typedText }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: " I am Philipp a dual Student at Deutsche Telekom." +
          "I'm studying Business Information Systems in Cologne",
      typedText: "",
      currentIndex: 0,
      typingSpeed: 100,
    };
  },
  mounted() {
    this.typeText();
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
  },
};
</script>
