<template>
  <div class="register-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="Register">
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

<script>
import { ref } from 'vue';
import axios from '../axios-config';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const handleRegister = async () => {
      try {
        const response = await axios.post('/register', {
          username: username.value,
          email: email.value,
          password: password.value,
          role: 'customer' // Adding the role
        });
        if (response.data) {
          alert('User registered successfully!');
          // Redirect to home page
          this.$router.push('/home');
        }
      } catch (error) {
        console.error('Error signing up:', error.response.data);
        // Handle error, I need to implement here later the rest
      }
    };

    return { username, email, password, handleRegister };
  },
};
</script>
