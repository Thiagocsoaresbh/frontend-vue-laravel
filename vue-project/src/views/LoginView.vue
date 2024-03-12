<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
    
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '@/services/AuthService';

const router = useRouter();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const token = await AuthService.login(email.value, password.value);
    if (token) {
      router.push('/home');
      console.log('Login bem-sucedido!');
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
