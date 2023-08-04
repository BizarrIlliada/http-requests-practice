<template>
  <LearningSurvey />
  <UserExperiences @loadData="getData" :results="results" />
</template>

<script>
  import LearningSurvey from './components/survey/LearningSurvey.vue';
  import UserExperiences from './components/survey/UserExperiences.vue';

  import { getSurveysData } from './requests'

  export default {
    components: {
      LearningSurvey,
      UserExperiences,
    },

    data() {
      return {
        results: [],
      }
    },

    methods: {
      async getData() {
        this.results = (await getSurveysData()).reverse();
      }
    },

    async mounted() {
      await this.getData();
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>