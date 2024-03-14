<template>
    <div class="balance-card">
      <h2>Current Balance</h2>
      <p class="balance-amount">$ {{ balance.toFixed(2) }}</p>
    </div>
  </template>
  
  <script>
  import axios from '@/axios-config';
  
  export default {
    data() {
      return {
        balance: 0.00, // Start with a balance of 0
      };
    },
    mounted() {
      this.fetchCurrentBalance();
    },
    methods: {
      fetchCurrentBalance() {
        // I need to verify my path later
        axios.get('/baseURL', { withCredentials: true })
          .then(response => {
            // I need to update later the path to the balance
            this.balance = response.data.balance;
          })
          .catch(error => {
            console.error("Error fetching current balance:", error.response.data);
            // I need to implement here the logic to show an error message to the user
          });
      }
    }
  };
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
  