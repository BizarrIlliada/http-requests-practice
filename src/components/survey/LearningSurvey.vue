<template>
  <section>
    <BaseCard>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p
          v-if="invalidInput"
        >
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p
          v-if="errorMessage"
        >
          Something went wrong! - {{ errorMessage }}
        </p>
        <div>
          <BaseButton>Submit</BaseButton>
        </div>
      </form>
    </BaseCard>
  </section>
</template>

<script>
  import { addSurveyData } from '../../requests'

  export default {
    name: 'LearningSurvey',

    data() {
      return {
        enteredName: '',
        chosenRating: null,
        invalidInput: false,
        errorMessage: '',
      };
    },

    methods: {
      async submitSurvey() {
        if (this.enteredName === '' || !this.chosenRating) {
          this.invalidInput = true;
          return;
        }

        this.invalidInput = false;

        this.errorMessage = await addSurveyData({
          name: this.enteredName,
          rating: this.chosenRating,
        })

        this.enteredName = '';
        this.chosenRating = null;
      },
    },
  };
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>