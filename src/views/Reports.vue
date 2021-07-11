<template>
  <div class="header">
    <span class="material-icons-outlined">summarize</span>
    <h1>تقارير</h1>
  </div>
  <main class="reports_main_content">
    <div class="search_filters">
      <label> من </label>
      <input type="date" required v-model="fromDate" />
      <label> إلي </label>
      <input type="date" required v-model="toDate" />
      <button><span class="material-icons-outlined">search</span> بحث</button>
      <button class="print_btn">
        <span class="material-icons-outlined">print</span> طباعة
      </button>
    </div>
    <div class="income_outcome">
      <div class="income_section">
        <table class="income_outcome_table">
            <thead>
              <th>إسم البند</th>
              <th>المبلغ المحصل</th>
              <th>تاريخ التحصيل</th>
            </thead>
            <tr  v-for="income in incomeItems" :key="income.id" >
              <td>{{income.transactionName}}</td>
              <td>{{income.transactionAmount}}</td>
              <td>{{income.transactionDate}}</td>
            </tr>
          </table>
      </div>
      <div class="outcome_section">
        <!-- <div class="header">
          <span class="material-icons-outlined">summarize</span>
          <h1>مصروفات</h1>
    </div> -->
          <table class="income_outcome_table">
            <thead>
              <th>اسم البند</th>
              <th>المبلغ المصروف</th>
              <th>تاريخ الصرف</th>
            </thead>
            <tr v-for="outcome in outcomeItems" :key="outcome.id">
              <td>{{outcome.transactionName}}</td>
              <td>{{outcome.transactionAmount}}</td>
              <td>{{outcome.transactionDate}}</td>
            </tr>
          </table>
        </div>
      </div>
    <div class="income_outcome_balance">
      <p><strong>صافي الإيرادات : </strong></p>
      <p class="balance_value">500</p>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { jsPDF } from "jspdf";
import getIncome from "../composable/getIncome";
import getOutcome from "../composable/getOutcome";

export default {
  components: {},
  setup() {

       // get the income items
    const { incomeItems, loadIncome } = getIncome();
    loadIncome();

    console.log(incomeItems);

     // get the outcome items
    const { outcomeItems, loadOutcome } = getOutcome();
    loadOutcome();
    console.log(outcomeItems);
    

    let fromDate = ref(null);
    let toDate = ref(null);


    return {incomeItems ,outcomeItems , fromDate , toDate};
  },
};
</script>

<style>
hr {
  background: var(--main_white_color);

  width: 50%;
  opacity: 20%;
  margin: 0px;
}
.reports_main_content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0;
}
.header h1
{
    margin: 0;
}
.header span {
  font-size: 30px;
}
span.material-icons-outlined {
  margin: 0 15px;
}
.income_outcome {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.income_section,
.outcome_section,
.income_outcome_balance,
.search_filters {
  background: white;
  border-radius: 8px;
  padding: 10px;
  flex-grow: 1;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.income_section , .outcome_section
{
    padding-top : 30px;
    max-height: 330px;
    overflow-y: scroll;
}
.outcome_section
{
    flex-direction: column;
}
.balance_value {
  background: rgba(233, 155, 59, 0.1);
  padding: 10px 20px;
  border-radius: 8px;
  color: var(--accent_color);
  margin: 10px;
  font-size: 20px;
}
.reports_main_content input {
  margin: 10px;
  padding: 15px;
  outline: none;
  border: none;
  background: var(--main_white_color);
  width: 30%;
}
.reports_main_content button {
  width: 20%;
  background: var(--main_color);
  color: white;
  padding: 10px;
  outline: none;
  border: none;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
}
.reports_main_content button:hover {
  filter: brightness(93%);
  color: var(--main_white_color);
  cursor: pointer;
}
.reports_main_content label {
  font-weight: bold;
  color: var(--secondry_color);
  background: var(--main_white_color);
  padding: 10px;
  border-radius: 8px;
}
.print_btn {
  background: var(--accent_color);
}

table.income_outcome_table {
  font-family: "Arial Black", Gadget, sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
}
table.income_outcome_table td,
table.income_outcome_table th {
  border: 1px solid #f5f7fb;
  height: 50px;
  padding: 3px 2px;
}
table.income_outcome_table tbody td {
  font-size: 13px;
  height: 50px;
  color: #103c86;
}
table.income_outcome_table tr:nth-child(even) {
  background: #f5f7fb;
}
table.income_outcome_table td:nth-child(even) {
  background: #ffffff;
}
table.income_outcome_table thead {
  background: #f5f7fb;
  border-bottom: 3px solid #f5f7fb;
}
table.income_outcome_table thead th {
  font-size: 15px;
  font-weight: bold;
}
table.income_outcome_table thead th:first-child {
  border-left: none;
}

table.income_outcome_table tfoot {
  font-size: 12px;
  font-weight: bold;
  color: #f5f7fb;
  background: #103c86;
}

table.income_outcome_table tfoot td {
  font-size: 12px;
}
table td {
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
table td:hover {
  filter: brightness(95%);
}
table button {
  background: var(--accent_color);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
table button:hover {
  filter: brightness(95%);
  -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.1);
}
</style>
