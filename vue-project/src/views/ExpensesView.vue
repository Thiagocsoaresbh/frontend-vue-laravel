<template>
  <div class="expenses-container">
    <h1>Expenses</h1>
    <button @click="goToAddPurchase">Add Purchase</button>
    <div v-if="expenses.length">
      <ul>
        <li v-for="expense in expenses" :key="expense.id">
          {{ expense.description }} - {{ expense.amount }} USD on {{ expense.date }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No expenses recorded.</p>
    </div>
  </div>
</template>

<script>
import axios from '../axios-config';

export default {
  data() {
    return {
      expenses: [],
    };
  },
  created() {
    this.fetchExpenses();
  },
  methods: {
    async fetchExpenses() {
      try {
        const response = await axios.get('/expenses', { withCredentials: true });
        this.expenses = response.data;
      } catch (error) {
        console.error('Error fetching expenses:', error.response.data);

      }
    },
    goToAddPurchase() {
      this.$router.push('/add-purchase');
    },
  },
};
</script>
