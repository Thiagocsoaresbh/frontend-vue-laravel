<template>
  <div class="check-item">
    <h3>{{ check.description }}</h3>
    <p>Amount: ${{ check.amount }}</p>
    <p>Status: {{ check.status }}</p>
    <p>Date: {{ formatDate(check.submissionDate) }}</p>
    <button v-if="showActions && check.status === 'pending'" @click="approveCheck">Approve</button>
    <button v-if="showActions && check.status === 'pending'" @click="rejectCheck">Reject</button>
  </div>
</template>

<script setup>
import { defineProps, emit } from 'vue';

const { check, showActions } = defineProps({
  check: {
    type: Object,
    required: true,
  },
  showActions: {
    type: Boolean,
    default: false,
  }
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const approveCheck = () => emit('approve', check.id);
const rejectCheck = () => emit('reject', check.id);
</script>

<style>
.check-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.check-item h3 {
  margin: 0 0 10px 0;
}

.check-item p {
  margin: 5px 0;
}

button {
  margin-right: 5px;
}
</style>
