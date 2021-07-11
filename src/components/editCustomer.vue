<template>
    <div class="popup_container">
    <div class="overlay" @click.prevent="closePopup"></div>
    <div class="popup">
      <form @submit.prevent="editCustomer">
        <label>إسم العميل </label>
        <input type="text" required v-model="custName" />
        <div class="input_group">
          <div class="input_field">
            <label>رقم موبايل </label>
            <input type="number" required v-model="custNumber1" />
          </div>
          <div class="input_field">
            <label>رقم موبايل ثاني </label>
            <input type="number" v-model="custNumber2" />
          </div>
        </div>
        <label>عنوان العميل </label>
        <input type="text" v-model="custAddress" />
        <div class="input_group">
          <div class="input_field">
            <label>إسم الضامن </label>
            <input type="text" required v-model="guardName" />
          </div>
          <div class="input_field">
            <label> رقم موبايل الضامن </label>
            <input type="number" required v-model="guardNumber" />
          </div>
        </div>
        <label>ملاحظات</label>
        <input type="text" v-model="custNotes" />
        <button>إضافة عميل</button>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
    props:["customer"],

    setup(props){
    let custName = ref("");
    let custNumber1 = ref("");
    let custNumber2 = ref("");
    let custAddress = ref("");
    let custNotes = ref("");
    let guardName = ref("");
    let guardNumber = ref("");

    console.log(props.customer)

    return {custName , custNumber1 , custNumber2 , custAddress , custNotes , guardName , guardNumber}
    }
}
</script>

<style>
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.popup_container {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
.popup {
  background: white;
  z-index: 2;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.1);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.input_group {
  display: flex;
  width: 100%;
  margin: 10px;
  padding: 0;
}
.input_field {
  margin: 0 10px;
  flex-grow: 1;
}
.popup input {
  margin: 10px;
  padding: 15px;
  outline: none;
  border: none;
  background: var(--main_white_color);
  width: 100%;
}
.popup button {
  width: 80%;
  background: var(--main_color);
  color: white;
  padding: 15px;
  outline: none;
  border: none;
  margin-top: 10px;
  border-radius: 8px;
}
.popup button:hover {
  filter: brightness(93%);
  color: var(--main_white_color);
  cursor: pointer;
}
</style>