<template>
  <div class="transaction-item">
    <div>{{ formatDate(transaction.date) }}</div>
    <div>{{ transaction.description }}</div>
    <div :class="{'income': isIncome, 'expense': !isIncome}">
      {{ currencyFormat(transaction.amount) }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  transaction: {
    type: Object,
    required: true
  }
});

const isIncome = computed(() => props.transaction.type === 'income');

// Composable to formatt date
function formatDate(value) {
  if (value) {
    return new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

// Composable to format currency
function currencyFormat(value) {
  if (value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }
}
</script>

<style scoped>
.income {
  color: green;
}

.expense {
  color: red;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
