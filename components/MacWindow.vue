<template>
  <div class="macwindow">
    <div class="buttons">
      <div class="btn close-btn"></div>
      <div class="btn min-btn"></div>
      <div class="btn max-btn"></div>
    </div>
    <table>
      <tr>
        <h1>Hello there,</h1>
        <TypingAnimation></TypingAnimation>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import TypingAnimation from "~/components/TypingAnimation.vue";

export default {
  name: 'MacWindow',
  components: {TypingAnimation}
}

</script>

<style lang="css">
.macwindow{
  background-color: #1f1e1e;
  height: 700px;
  border-radius: 30px;
  margin: auto;
  margin-top: 50px;
  width: 50%;
  padding: 10px;
  color: white;
  font-size: 40px;
}

.macwindow table{
  margin-top: 30px;
  margin-left: 40px;
}

.macwindow .macwindowcontent{
  background-color: aqua;
  width: 100px;
}

.macwindow .buttons{
  width: 120px;
  height: 40px;
}

.btn{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  float: left;
}

.close-btn{
  background-color: #FF5D5B;
  border: 4px solid #cf544d;
}

.min-btn{
  background-color: #FFBB39;
  border: 4px solid #CFA642;
}

.max-btn{
  background-color: #00CD4E;
  border: 4px solid #0EA642;
}

</style>