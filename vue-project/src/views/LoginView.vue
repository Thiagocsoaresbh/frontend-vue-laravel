<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
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
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    // Call the loginUser method from the auth store
    const result = await authStore.loginUser({ email: email.value, password: password.value });
    if(result) {
      router.push({ name: 'Home' });
    } else {
      console.error('Authentication failed');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
</script>
