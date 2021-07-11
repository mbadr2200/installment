<template>
  <div class="main_area">
    <addButtons
      @showAddCustomer="showAddCustomer = true"
      @showAddSpend="showAddSpend = true"
      @showAddIncome="showAddIncome = true"
      @showAddInstallment="showAddInstallment = true"
    />
    <div class="section_heading">
      <h4 class="heading">الأقساط المستحقة:</h4>
      <button>عرض المزيد ...</button>
    </div>
    <dueInstallment />
  </div>
  <addCustomer
    v-if="showAddCustomer"
    @hideAddCustomer="showAddCustomer = $event"
  />
  <addSpend 
    v-if="showAddSpend" 
    @hideAddSpend="showAddSpend = $event" 
  />
  <addIncome 
    v-if="showAddIncome" 
    @hideAddIncome="showAddIncome = $event" 
  />
  <addInstallment 
    v-if="showAddInstallment" 
    @hideAddInstallment="showAddInstallment = $event" 
  />
</template>

<script>
import addButtons from "../components/addButtons.vue";
import dueInstallment from "../components/dueInstallment.vue";
import addCustomer from "../components/addCustomer.vue";
import addSpend from "../components/addSpend.vue";
import addIncome from "../components/addIncome.vue";
import addInstallment from "../components/addInstallment.vue";
import { ref, Vue } from "vue";

export default {
  name: "Home",
  components: {
    addButtons,
    dueInstallment,
    addCustomer,
    addSpend,
    addIncome,
    addInstallment
  },
  setup() {
    let showAddCustomer = ref(false);
    let showAddSpend = ref(false);
    let showAddInstallment = ref(false);
    let showAddIncome = ref(false);

    return { showAddCustomer, showAddSpend, showAddInstallment, showAddIncome };
  },
};
</script>

<style>
.main_area {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  text-align: right;
  width: 100%;
}
.section_heading {
  display: flex;
  padding: 20px;
  align-items: center;
}
.heading {
  color: black;
}
.section_heading button {
  margin-right: auto;
  background: white;
  border: none;
  outline: none;
  padding: 8px 15px;
  color: var(--main_color);
  border-radius: 8px;
  font-weight: bold;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
.section_heading button:hover {
  color: white;
  background: var(--main_color);
  -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
