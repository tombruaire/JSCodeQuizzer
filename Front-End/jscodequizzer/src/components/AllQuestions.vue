<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Question from '../components/Question.vue';

interface QuestionType {
  libelle: string;
  r1: string,
  r2: string,
  r3: string,
  r4: string,
  answers: string[]
  // Autres propriétés...
}

const questionText = ref('');

// Déclarez questions comme une référence à un tableau d'objets de type QuestionType
let questions = ref<Array<QuestionType>>([]);

const getQuestion = async () => {
  try {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const response = await fetch("http://localhost:3000/api/question", {
      method: "GET",
      headers: headers
    });

    if (response.status === 200) {
      const responseData = await response.json();
      questions.value = responseData; // Utilisez la propriété value pour affecter la valeur à la référence
      console.log(questions.value);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

onMounted(async () => {
  getQuestion();
});
</script>

<template>
    <div v-for="question in questions">
      <div class="card mb-5">
        <div class="card-header">
            <p class="card-text">{{ question.libelle }}</p>
        </div>
        <div class="card-body">

          <div v-if="question.answers.length > 1">
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" value="" id="rep1Multiple" class="form-check-input">
                <label class="form-check-label" for="rep1Multiple">
                  {{ question.r1 }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" value="" id="rep2Multiple" class="form-check-input">
                <label class="form-check-label" for="rep2Multiple">
                  {{ question.r2 }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" value="" id="rep3Multiple" class="form-check-input">
                <label class="form-check-label" for="rep3Multiple">
                  {{ question.r3 }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" value="" id="rep4Multiple" class="form-check-input">
                <label class="form-check-label" for="rep4Multiple">
                  {{ question.r4 }}
                </label>
              </div>
            </div>
          </div>

          <div v-if="question.answers.length == 1">
            <div class="mb-3">
              <div class="form-check">
                <input type="radio" name="flexRadioDefault" id="rep1Only" class="form-check-input">
                <label class="form-check-label" for="rep1Only">
                  {{ question.r1 }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="radio" name="flexRadioDefault" id="rep2Only" class="form-check-input">
                <label class="form-check-label" for="rep2Only">
                  {{ question.r2 }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="radio" name="flexRadioDefault" id="rep3Only" class="form-check-input">
                <label class="form-check-label" for="rep3Only">
                  {{ question.r3 }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="radio" name="flexRadioDefault" id="rep4Only" class="form-check-input">
                <label class="form-check-label" for="rep4Only">
                  {{ question.r4 }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-auto">
          <button type="button" id="button" class="btn btn-success disabled">
            Envoyer mes réponses
          </button>
      </div>
    </div>

</template>
  
<style>

</style>

  