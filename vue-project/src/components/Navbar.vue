<template>
  <nav class="navbar">
    <div class="navbar-brand">BNB Bank</div>
    <div class="navbar-links">
      <router-link to="/home">Home</router-link>
      <router-link to="/expenses">Expenses</router-link>
      <router-link to="/checks">Checks</router-link>
        <!-- I'll consult the user stories to view the other links -->
    </div>
    <div class="navbar-actions">
      <button v-if="isLoggedIn" @click="logout">Logout</button>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// diretiva computed to check if the user is logged in
const isLoggedIn = computed(() => authStore.isLoggedIn);

const logout = async () => {
  await authStore.logoutUser();
  router.push('/login');
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
}

.navbar-brand {
  font-weight: bold;
}

.navbar-links a, .navbar-actions button, .navbar-actions a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

button:hover, .navbar-links a:hover {
  text-decoration: underline;
}
</style>
