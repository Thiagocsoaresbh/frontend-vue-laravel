<template>
    <nav class="navbar">
      <div class="navbar-brand">BNB Bank</div>
      <div class="navbar-links">
        <router-link to="/home">Home</router-link>
        <router-link to="/expenses">Expenses</router-link>
        <router-link to="/checks">Checks</router-link>
        <!-- I need to add the las of the links here, but not now -->
      </div>
      <div class="navbar-actions">
        <button v-if="isLoggedIn" @click="logout">Logout</button>
        <router-link v-else to="/login">Login</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  // Deciding if i use vuex or pinia
  import { useStore } from 'vuex';
  
  export default {
    name: 'Navbar',
    setup() {
      const store = useStore();
      const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);
      const logout = () => {
        store.dispatch('auth/logout').then(() => {
          this.$router.push('/login');
        });
      };
  
      return { isLoggedIn, logout };
    },
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
  