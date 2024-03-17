<template>
  <div class="login-container">
    <h1>Login</h1>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  errorMessage.value = '';
  try {
    await authStore.loginUser({ email: email.value, password: password.value });
    router.push({ name: 'Home' });
  } catch (error) {
    errorMessage.value = 'Authentication failed. Please check your email and password information.';
    console.error('Error logging in:', error); // Remember do clean in production later
  }
};
</script>

<style scoped>
.login-container, .register-container {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #ccc;
  background-color: #ffffff;
}

h1 {
  color: #FFFFFF;
  background-color: #007BFF;
  padding: 20px;
  border-radius: 15px 15px 0 0;
  margin: -20px -20px 20px -20px;
}

.form-group {
  margin-bottom: 15px;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
}

button {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #007BFF;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056B3;
}
</style>