<template>
    <CVOverview></CVOverview>
    <CompetencyList></CompetencyList>
    <SocialMediaLinks></SocialMediaLinks>
    <EmailButton></EmailButton>
</template>

<script>
import {defineComponent} from "vue";
import EmailButton from "~/components/EmailButton.vue";

export default defineComponent({
  components: {EmailButton}
})
</script>