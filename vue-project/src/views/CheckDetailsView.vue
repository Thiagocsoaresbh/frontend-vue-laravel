<template>
    <div class="check-details-container">
      <h1>Check Details</h1>
      <div v-if="check">
        <p><strong>Description:</strong> {{ check.description }}</p>
        <p><strong>Amount:</strong> ${{ check.amount }}</p>
        <p><strong>Status:</strong> {{ check.status }}</p>
        <p><strong>Submitted on:</strong> {{ new Date(check.submissionDate).toLocaleDateString() }}</p>
        <img :src="check.imagePath" alt="Check Image" class="check-image" />
  
        <div v-if="isAdmin">
          <button @click="approveCheck">Approve</button>
          <button @click="rejectCheck">Reject</button>
        </div>
      </div>
      <div v-else>
        <p>Check details not available.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '@/axios-config';
  
  export default {
    data() {
      return {
        check: null,
        isAdmin: true, // Assume the user is an admin for now
      };
    },
    methods: {
      fetchCheckDetails() {
        const checkId = this.$route.params.id;
        axios.get(`/checks/${checkId}`, { withCredentials: true })
          .then(response => {
            this.check = response.data;
          })
          .catch(error => {
            console.error("Error fetching check details:", error.response.data);
          });
      },
      approveCheck() {
        const checkId = this.$route.params.id;
        axios.post(`/admin/checks/${checkId}/approve`, {}, { withCredentials: true })
          .then(() => {
            this.check.status = 'accepted';
            alert('Check approved successfully');
          })
          .catch(error => {
            console.error("Error approving check:", error.response.data);
          });
      },
      rejectCheck() {
        const checkId = this.$route.params.id;
        axios.post(`/admin/checks/${checkId}/reject`, {}, { withCredentials: true })
          .then(() => {
            this.check.status = 'rejected';
            alert('Check rejected successfully');
          })
          .catch(error => {
            console.error("Error rejecting check:", error.response.data);
          });
      }
    },
    mounted() {
      this.fetchCheckDetails();
    }
  };
  </script>
  
  <style>
  .check-details-container {
    margin: 0;
  }
  
  .check-image {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
  }
  </style>
  