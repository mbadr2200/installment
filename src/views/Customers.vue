<template>
  <div class="header">
    <span class="material-icons-outlined">people_alt</span>
    <h1>العملاء</h1>
  </div>
  <div class="customer_search">
    <input type="text" v-model="customerSearch" placeholder="إبحث عن عميل بالإسم أو رقم الموبايل">
  </div>
  <div class="customer_list" v-if="!isPending">
    <customerList :customers="customerFilter" @removeCustomer="handleRemoveCustomer($event)"/>
  </div>
  <div v-else><spinner/></div>
</template>

<script>
import getCustomers from "../composable/getCustomers";
import customerList from "../components/customerList.vue";
import spinner from "../components/spinner.vue"
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
import { ref , computed } from "vue";
import getCustomerById from "../composable/getCustomerById";

export default {
  components:{customerList , spinner},
  setup() {
    // get the customers list
    const { customers, load , isPending } = getCustomers();
    load();

    const handleRemoveCustomer = (id) => {

      customers.value = customers.value.filter(customer => {
        return customer.id !== id 
      })

    }

    // live search
    let customerSearch =ref("");

    let customerFilter = computed(() => { 
      return customers.value.filter(customer => {
        return customer.custName.match(customerSearch.value) || customer.custNumber1.match(customerSearch.value)
    })})

    return { customers , handleRemoveCustomer , customerSearch , customerFilter , print , isPending };
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header span {
  font-size: 30px;
}
span.material-icons-outlined {
  margin: 0 15px;
}
.customer_list {
  background: white;
  padding: 20px;
  margin: 10px 0;
  width: 95%;
  max-height: 80vh;
  overflow-y: scroll;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
.customer_search
{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .customer_search input {
  margin: 10px;
  padding: 15px;
  outline: none;
  border: none;
  background: white;
  width: 50%;
  border-radius: 8px;
}
/*
table
{
      position: relative;
}
th
{
      position: sticky;
  top: 0; 
  background: white;
}
*/

</style>
