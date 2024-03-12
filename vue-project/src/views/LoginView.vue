<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
      
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required>
      
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const username = ref('');
const password = ref('');

const login = async () => {
  try {

    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      username: username.value,
      password: password.value
    });


    if (response.status === 200) {

      router.push('/home');
    } else {

      console.error('Erro ao fazer login:', response.data);
    }
  } catch (error) {

    console.error('Erro ao fazer login:', error);
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
