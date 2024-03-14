<template>
  <div class="sidebar-menu">
    <div class="menu-item" v-if="isAdmin">
      <router-link to="/admin/checks">Check List</router-link>
    </div>
    <div class="menu-item" v-if="!isAdmin">
      <router-link to="/home">Home - Balance</router-link>
      <router-link to="/expenses">Expenses</router-link>
      <router-link to="/deposit-check">Deposit a Check</router-link>
      <router-link to="/accepted-checks">Accepted Checks</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/logout" @click.prevent="logout">Logout</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const isAdmin = computed(() => authStore.user?.role === 'admin');

    function logout() {
      authStore.logoutUser();
      router.push('/login');
    }

    return {
      isAdmin,
      logout,
    };
  },
});
</script>

<style scoped>
.sidebar-menu {
  background-color: #f0f0f0;
  padding: 20px;
}

.menu-item {
  margin-bottom: 15px;
}
</style>
