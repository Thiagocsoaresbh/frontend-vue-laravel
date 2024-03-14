<template>
  <div class="check-item">
    <h3>{{ check.description }}</h3>
    <p>Amount: ${{ check.amount }}</p>
    <p>Status: {{ check.status }}</p>
    <p>Date: {{ formatDate(check.submissionDate) }}</p>
    <button v-if="showActions && check.status === 'pending'" @click="approveCheck(check.id)">Approve</button>
    <button v-if="showActions && check.status === 'pending'" @click="rejectCheck(check.id)">Reject</button>
  </div>
</template>

<script>
export default {
  props: {
    check: {
      type: Object,
      required: true,
    },
    showActions: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    approveCheck(id) {
      this.$emit('approve', id);
    },
    rejectCheck(id) {
      this.$emit('reject', id);
    },
  },
};
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
