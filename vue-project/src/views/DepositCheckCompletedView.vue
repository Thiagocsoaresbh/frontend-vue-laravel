<template>
    <div class="deposit-check-completed-container">
      <h1>Check Deposit Submitted</h1>
      <p>Your check has been successfully submitted for review. You will be notified once it has been processed.</p>
      <button @click="goToHome">Go to home</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToHome() {
        this.$router.push('/home'); 
      },
    },
  };
  </script>
  
  <style>
  .deposit-check-completed-container {
    padding: 1rem;
    text-align: center;
  }
  
  button {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  