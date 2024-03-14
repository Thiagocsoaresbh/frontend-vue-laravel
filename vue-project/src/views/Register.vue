<template>
  <div class="register-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="username" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Import the auth store
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const handleRegister = async () => {
  try {
    await authStore.registerUser({
      username: username.value,
      email: email.value,
      password: password.value,
      role: 'customer', 
    });
    alert('User registered successfully!');
    router.push('/login');
  } catch (error) {
    console.error('Error signing up:', error.response?.data?.message || 'Unknown error');
  }
};
</script>

<style scoped>
.register-container {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #2899fb;
  border-radius: 15px;
  padding: 20px;
  background-color: #ffffff;
}

h1 {
  color: #FFFFFF;
  background-color: #007BFF;
  padding: 20px;
  border-radius: 15px 15px 0 0;
  margin: -20px -20px 20px -20px;
}

form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
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

.separator {
  border-top: 1px solid #2899fb;
  margin: 20px 0;
}

.existing-account {
  margin-top: 20px;
}

.existing-account p {
  font-size: 14px;
}

.existing-account button {
  background: none;
  border: none;
  color: #2899fb;
  cursor: pointer;
}

.router-link-exact-active {
  font-weight: bold;
  color: #007BFF;
}
</style>