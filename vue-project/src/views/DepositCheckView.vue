<template>
    <div class="deposit-check-container">
      <h1>Deposit Check</h1>
      <form @submit.prevent="handleDepositCheck">
        <div class="form-group">
          <label for="amount">Amount:</label>
          <input id="amount" v-model.number="amount" type="number" step="0.01" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <input id="description" v-model="description" type="text" required>
        </div>
        <div class="form-group">
          <label for="checkImage">Check Image:</label>
          <input id="checkImage" ref="checkImage" type="file" @change="handleFileUpload" required>
        </div>
        <button type="submit">Deposit Check</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from '../axios-config';
  
  export default {
    data() {
      return {
        amount: null,
        description: '',
        checkImage: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.checkImage = event.target.files[0];
      },
      async handleDepositCheck() {
        try {
          const formData = new FormData();
          formData.append('amount', this.amount);
          formData.append('description', this.description);
          formData.append('checkImage', this.checkImage);
  
          await axios.post('/checks/deposit', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
          });
          alert('Check submitted successfully for review!');
          this.$router.push('/checks');
        } catch (error) {
          console.error('Error depositing check:', error.response.data);

        }
      },
    },
  };
  </script>
  
  <style>
  .deposit-check-container {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="file"] {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  </style>
  