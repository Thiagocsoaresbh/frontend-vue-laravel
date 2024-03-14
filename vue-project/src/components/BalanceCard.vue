<template>
  <div class="balance-card">
    <h2>Current Balance</h2>
    <p class="balance-amount">$ {{ balance.toFixed(2) }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/axios-config';

const balance = ref(0.00);

const fetchCurrentBalance = async () => {
  try {
    const response = await axios.get('/accounts/balance', { withCredentials: true });
    balance.value = response.data.balance;
  } catch (error) {
    console.error("Error fetching current balance:", error.response?.data || error.message);
  }
};

onMounted(fetchCurrentBalance);
</script>

<style>
.balance-card {
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.balance-amount {
  font-size: 2rem;
  font-weight: bold;
}
</style>
