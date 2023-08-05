<template>
  <LearningSurvey />
  <UserExperiences />
</template>

<script>
  import LearningSurvey from './components/survey/LearningSurvey.vue';
  import UserExperiences from './components/survey/UserExperiences.vue';

  export default {
    name: 'App',
    components: {
      LearningSurvey,
      UserExperiences,
    },
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