<template>
    <div class="accepted-checks-container">
      <h1>Accepted Checks</h1>
      <div v-if="checks.length">
        <ul class="checks-list">
          <li v-for="check in checks" :key="check.id">
            <div class="check-item">
              <h3>{{ check.description }}</h3>
              <p>Amount: ${{ check.amount }}</p>
              <p>Date: {{ new Date(check.date).toLocaleDateString() }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No accepted checks found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '@/axios-config';
  
  export default {
    data() {
      return {
        checks: [],
      };
    },
    created() {
      this.fetchAcceptedChecks();
    },
    methods: {
      async fetchAcceptedChecks() {
        try {
          const response = await axios.get('/checks/accepted', { withCredentials: true });
          this.checks = response.data;
        } catch (error) {
          console.error('Error fetching accepted checks:', error.response.data);
          // Handle errors here, such as showing a message to the user
        }
      },
    },
  };
  </script>
  
  <style>
  .accepted-checks-container {
    padding: 1rem;
  }
  
  .checks-list {
    list-style: none;
    padding: 0;
  }
  
  .check-item {
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }
  </style>
  