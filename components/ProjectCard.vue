<template>
  <div class="m-5 p-4 border-solid rounded-8 bg-gray-400 w-auto shadow-inner">
    <h1>
      Meine Überschrift
    </h1>
    <slot/>
  </div>
</template>


<script lang="ts">
export default {
  name: 'ProjectCard'
}

</script>