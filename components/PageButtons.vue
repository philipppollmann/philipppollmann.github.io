<template>
  <ul>
    <li>
      <NuxtLink to="/" class="Button" style="--clr: #ff8800">
        <span>HOME</span>
        <i></i>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about" class="Button" style="--clr: #ffd900">
        <span>ABOUT</span>
        <i></i>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/projects" class="Button" style="--clr: #ff8800">
        <span>PROJECTS</span>
        <i></i>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'PageButtons'
}
</script>

<style scoped src="../assets/css/PageButtons.css">

</style>