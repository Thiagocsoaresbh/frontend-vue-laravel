<template>
    <div class="checks-list-view">
      <h1>Check List</h1>
      <select v-model="selectedStatus">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
      <ul v-if="filteredChecks.length">
        <li v-for="check in filteredChecks" :key="check.id">
          <p>Description: {{ check.description }}</p>
          <p>Amount: ${{ check.amount }}</p>
          <p>Status: {{ check.status }}</p>
        </li>
      </ul>
      <p v-else>No checks to display.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        checks: [],
        selectedStatus: 'all',
      };
    },
    computed: {
      filteredChecks() {
        if (this.selectedStatus === 'all') {
          return this.checks;
        } else {
          return this.checks.filter(check => check.status === this.selectedStatus);
        }
      },
    },
    mounted() {
      this.fetchChecks();
    },
    methods: {
      async fetchChecks() {

        // I will implement here the logic to fetch the checks from the server
      },
    },
  };
  </script>
  
  <style>
  .checks-list-view {
    margin: 0;
  }
  </style>
  