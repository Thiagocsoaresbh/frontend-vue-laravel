<template>
  <div class="transaction-item">
    <div class="transaction-info">
      <div>{{ transaction.date }}</div>
      <div>{{ transaction.description }}</div>
      <div>{{ transaction.amount }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface TransactionType {
  id: number;
  date: string;
  description: string;
  amount: string;
}

const props = defineProps<{
  transaction: TransactionType
}>()
</script>

<style scoped>
.transaction-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.transaction-info {
  display: flex;
  flex-direction: column;
}
</style>
