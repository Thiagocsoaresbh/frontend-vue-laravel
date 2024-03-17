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
        <!-- Error msg abour the lengh of the password -->
        <p v-if="password.length > 0 && password.length < 8" class="error-message">
          Password must be at least 8 characters long.
        </p>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Import the auth store
import { useRouter } from 'vue-router';
import { errorMessages } from 'vue/compiler-sfc';

const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const authStore = useAuthStore();
const router = useRouter();

const handleRegister = async () => {
  errorMessages.value = '';
  try {
    await authStore.registerUser({
      username: username.value,
      email: email.value,
      password: password.value,
      role: 'customer', 
    });
    
    router.push('/login');
  } catch (error) {
    errorMessages.value = 'Regiter failed! Please try again.'
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

.separator {
  height: 2px;
  background-color: grey;
  width: 5%;
  margin: 20px auto;
  border-radius: 15;
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