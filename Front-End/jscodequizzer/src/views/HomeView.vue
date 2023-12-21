<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import { ref } from 'vue';

const username = ref('');
const button = document.getElementById("button");

if (username.value !== '') {
    // button.classList.remove("disabled");
}

function startQuizz(): void {
    // Redirection vers la première question
}
</script>

<template>
  <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-auto">
                <h1>JSCodeQuizzer</h1>
            </div>
        </div>
    </div>
  <div class="card">
    <div class="card-header">
        <p class="card-text">Merci d'indiquer un nom d'utilisateur avant de commencer le Quiz</p>
    </div>
    <div class="card-body">
        <div class="form-floating mb-3">
            <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" class="form-control" v-model="username">
            <label for="floatingInput">Nom d'utilisateur</label>
        </div>
    </div>
    <div class="card-footer">
        <div class="row d-flex justify-content-center">
            <div class="col-auto">
                <button type="button" id="button" class="btn btn-primary disabled" @click="startQuizz()">Commencer le Quizz</button>
            </div>
        </div>
    </div>
  </div>
</template>
