<template>
    <div class="add-purchase-container">
      <h1>Add Purchase</h1>
      <form @submit.prevent="handleAddPurchase">
        <div class="form-group">
          <label for="description">Description:</label>
          <input id="description" v-model="description" type="text" required>
        </div>
        <div class="form-group">
          <label for="amount">Amount (USD):</label>
          <input id="amount" v-model.number="amount" type="number" step="0.01" required>
        </div>
        <div class="form-group">
          <label for="date">Date:</label>
          <input id="date" v-model="date" type="date" required>
        </div>
        <button type="submit">Add Purchase</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from '@/axios-config';
  
  export default {
    data() {
      return {
        description: '',
        amount: null,
        date: '',
      };
    },
    methods: {
      async handleAddPurchase() {
        try {
          await axios.post('/expenses', {
            description: this.description,
            amount: this.amount,
            date: this.date,
          }, { withCredentials: true });
          alert('Purchase added successfully!');
          this.$router.push('/expenses'); // Redirect back to the expenses list after successful addition
        } catch (error) {
          console.error('Error adding purchase:', error.response.data);
          // Handle error here, e.g., show error message to user
        }
      },
    },
  };
  </script>
  
  <style>
  .add-purchase-container {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="date"] {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  </style>
  