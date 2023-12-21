<script setup lang="ts">
import { onMounted, ref } from 'vue';

const questionText = ref('');

let questions = ref('');

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
      console.log(responseData); // Ne s'affiche pas
      questions = responseData;
      console.log(questions);
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
    <div class="card">
      <div class="card-header">
          <p class="card-text">{{ questions }}</p>
      </div>
      <div class="card-body">
        <!-- Si question à plusieurs réponses -->
         <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" value="" id="rep1Multiple" class="form-check-input">
            <label class="form-check-label" for="rep1Multiple">
              Réponse 1
            </label>
          </div>
         </div>
         <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" value="" id="rep2Multiple" class="form-check-input">
            <label class="form-check-label" for="rep2Multiple">
              Réponse 2
            </label>
          </div>
         </div>
         <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" value="" id="rep3Multiple" class="form-check-input">
            <label class="form-check-label" for="rep3Multiple">
              Réponse 3
            </label>
          </div>
         </div>
         <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" value="" id="rep4Multiple" class="form-check-input">
            <label class="form-check-label" for="rep4Multiple">
              Réponse 4
            </label>
          </div>
         </div>

         <!-- Si question à une réponse -->
         <div class="mb-3">
          <div class="form-check">
            <input type="radio" name="flexRadioDefault" id="rep1Only" class="form-check-input">
            <label class="form-check-label" for="rep1Only">
              Réponse 1
            </label>
          </div>
         </div>
         <div class="mb-3">
          <div class="form-check">
            <input type="radio" name="flexRadioDefault" id="rep2Only" class="form-check-input">
            <label class="form-check-label" for="rep2Only">
              Réponse 2
            </label>
          </div>
         </div>
         <div class="mb-3">
          <div class="form-check">
            <input type="radio" name="flexRadioDefault" id="rep3Only" class="form-check-input">
            <label class="form-check-label" for="rep3Only">
              Réponse 3
            </label>
          </div>
         </div>
         <div class="mb-3">
          <div class="form-check">
            <input type="radio" name="flexRadioDefault" id="rep4Only" class="form-check-input">
            <label class="form-check-label" for="rep4Only">
              Réponse 4
            </label>
          </div>
         </div>
      </div>
      <div class="card-footer">
         <!-- (1) Affichage par défaut --> 
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
                <button type="button" id="button" class="btn btn-success disabled">
                  Valider
                </button>
            </div>
        </div>
        <!-- (2) Affichage une fois le bouton "Valider" cliqué --> 
        <div class="row d-flex justify-content-center">
            <div class="col-auto">
                <button type="button" id="button" class="btn btn-primary" style="overflow: hidden; opacity: 0;">
                  Question suivante
                </button>
            </div>
        </div>
      </div>
    </div>
</template>
  
<style>

</style>

  