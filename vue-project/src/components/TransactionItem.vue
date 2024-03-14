<template>
  <div class="transaction-item">
    <div>{{ transaction.date | formatDate }}</div>
    <div>{{ transaction.description }}</div>
    <div :class="{'income': isIncome, 'expense': !isIncome}">
      {{ transaction.amount | currencyFormat }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  transaction: {
    type: Object,
    required: true
  }
});

const isIncome = computed(() => {
  return transaction.type === 'income';
});

// Filter to format the date
app.config.globalProperties.$filters = {
  formatDate(value) {
    if (value) {
      return new Date(value).toLocaleDateString();
    }
  },
  currencyFormat(value) {
    if (value) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    }
  }
};
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
