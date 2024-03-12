<template>
  <div class="app-container">
    <div class="home-container">  
  <div class="home">
    <h1>BNB Bank</h1>
    <div class="balance-section">
      <h2>Current Balance</h2>
      <p>$8000.00</p>
      <p>August, 2021</p>
    </div>
    <div class="actions">
      <div class="income-section">
        <h3>Incomes</h3>
        <p>$7100.00</p>
        <button @click="depositCheck">Deposit Check</button>
      </div>
      <div class="expense-section">
        <h3>Expenses</h3>
        <p>$780.00</p>
        <button @click="purchase">Purchase</button>
      </div>
    </div>
    <div class="transactions">
      <h3>Transactions</h3>
      <div class="transaction-item">
        <div>t-shirt</div>
        <div>08/18/2021, 02:25 PM</div>
        <div>$40.00</div>
      </div>
      <div class="transaction-item">
        <div>Freelance work</div>
        <div>08/13/2021, 10:03 PM</div>
        <div>$3200.00</div>
      </div>
      <!-- More transactions here -->
    </div>
  </div>    </div>
  </div>
</template>

<script>
export default {
  methods: {
    depositCheck() {
      console.log('Depositar cheque');
    },
    purchase() {
      console.log('Fazer uma compra');
    }
  }
};
</script>

<style scoped>

.home {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 10px;
  background-color: #f0f0f0;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  padding-top: 50px;
}

.home-container {
  text-align: center;
  width: 300px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.balance-section {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.actions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.income-section,
.expense-section {
  width: 45%;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #007BFF;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
}

.transactions {
  margin-top: 20px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
</style>
