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
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { errorMessage } from 'vue/compiler-sfc';
import axios from '../axios-config';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = '';
      try {
        const response = await axios.post('/login', {
          email: this.email,
          password: this.password,
        }, { withCredentials: true });
        if (response.data) {
          
          this.$router.push('/home');
        }
      } catch (error) {
        console.error('Error logging in:', error.response.data);
        this.errorMessage = error.response.data.message || 'Error to conect';
      }
    },
  },
};
</script>
<style>
.error-message {
  color: red;
  margin: 10px 0;
}
</style>