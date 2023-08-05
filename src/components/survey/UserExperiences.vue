<template>
  <section>
    <BaseCard>
      <h2>Submitted Experiences</h2>
      <div>
        <BaseButton @click="loadExperiences">Load Submitted Experiences</BaseButton>
      </div>
      <p v-if="isLoading">Data is loading...</p>
      <p v-else-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-else-if="Array.isArray(results) && !results.length">It's no data here yet.</p>
      <ul v-else>
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
  import { getSurveysData } from '../../requests';

  import SurveyResult from './SurveyResult.vue';

  export default {
    name: 'UserExperiences',
    emits: ['loadData'],
    components: {
    SurveyResult,
},

    data() {
      return {
        results: [],
        isLoading: false,
        errorMessage: '',
      }
    },

    methods: {
      async loadExperiences() {
        this.isLoading = true;
        this.errorMessage = '';
        const response = (await getSurveysData());

        if (Array.isArray(response)) {
          this.results = response.reverse();
        } else {
          this.errorMessage = response;
        }

        this.isLoading = false;
      },
    },

    async mounted() {
      await this.loadExperiences();
    },
  };
</script>

<style scoped>
  .error-message{
    color: #f00;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>