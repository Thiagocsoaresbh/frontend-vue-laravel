<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/expenses">Expenses</RouterLink>
        <RouterLink to="/add-purchase">Add Purchase</RouterLink>
        <RouterLink to="/accepted-checks">Accepted Checks</RouterLink>
        <RouterLink to="/deposit-check">Deposit Check</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
