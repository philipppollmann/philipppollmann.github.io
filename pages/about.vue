<template>
  <title>Philipp Pollmann - About</title>
  <CVOverview></CVOverview>
  <CompetencyList></CompetencyList>
  <EmailButton></EmailButton>
  <CVDownloader></CVDownloader>
  <SocialMediaLinks></SocialMediaLinks>y
</template>

<script>
import {defineComponent} from "vue";
import EmailButton from "~/components/EmailButton.vue";

export default defineComponent({
  components: {EmailButton}
})
</script>