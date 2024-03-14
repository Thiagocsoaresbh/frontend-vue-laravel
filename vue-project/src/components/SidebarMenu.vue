<template>
    <aside class="sidebar-menu">
      <nav>
        <router-link to="/home">Home - Balance</router-link>
        <router-link to="/expenses">Expenses</router-link>
        <router-link to="/deposit-check">Deposit a Check</router-link>
        <!-- Links Admin -->
        <router-link v-if="isAdmin" to="/checks">Check List</router-link>
      </nav>
      <div class="actions">
        <button @click="logout">Logout</button>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const isAdmin = computed(() => authStore.user?.role === 'admin');
  
  const logout = () => {
    authStore.logoutUser();
    router.push('/login');
  };
  </script>
  
  <style>
  .sidebar-menu {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #f5f5f5;
    padding: 1rem;
  }
  .sidebar-menu nav a {
    display: block;
    margin-bottom: 1rem;
    color: #007bff;
    text-decoration: none;
  }
  .actions {
    margin-top: 2rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  