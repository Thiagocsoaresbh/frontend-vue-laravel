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
          <!-- Adicione mais detalhes conforme necessário -->
        </li>
      </ul>
      <p v-else>No checks to display.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        checks: [], // Este array deve ser preenchido com os dados do seu backend
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
        // Implemente a lógica para buscar os cheques do seu backend aqui
        // Por exemplo, usar axios para fazer uma solicitação GET ao endpoint apropriado
        // this.checks = resposta do seu backend
      },
    },
  };
  </script>
  
  <style>
  .checks-list-view {
    margin: 0;
  }
  </style>
  