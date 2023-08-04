<template>
  <section>
    <BaseCard>
      <h2>Submitted Experiences</h2>
      <div>
        <BaseButton @click="loadData">Load Submitted Experiences</BaseButton>
      </div>
      <ul>
        <SurveyResult
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></SurveyResult>
      </ul>
    </BaseCard>
  </section>
</template>

<script>
  import SurveyResult from './SurveyResult.vue';

  export default {
    name: 'UserExperiences',
    props: ['results'],
    emits: ['loadData'],
    components: {
      SurveyResult,
    },

    methods: {
      loadData() {
        this.$emit('loadData')
      },
    }
  };
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>