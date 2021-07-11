<template>
    <div class="popup">
      <form @submit.prevent="handleEdit">
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
        <button>تعديل العميل</button>
      </form>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import { useRoute , useRouter } from 'vue-router'
import axios from "axios";
import Swal from "sweetalert2";


export default {
    props:[],

    setup(props){

      const route = useRoute();
      const router = useRouter()

      const customer_id = route.params.id;

      
    let custName = ref("");
    let custNumber1 = ref("");
    let custNumber2 = ref("");
    let custAddress = ref("");
    let custNotes = ref("");
    let guardName = ref("");
    let guardNumber = ref("");

     const getCustomer = async () => {

        try{

            let res = await axios(`http://localhost:3000/customers/${customer_id}`);

            let data = res.data 
            custName.value = data.custName;
            custNumber1.value = data.custNumber1;
            custNumber2.value = data.custNumber2;
            custAddress.value = data.custAddress;
            custNotes.value = data.custNotes;
            guardName.value = data.guardName;
            guardNumber.value =data.guardNumber;      
        }
        catch(err)
        {
            console.log(err);
        }

    }

    onMounted(getCustomer)

    const handleEdit = async () => {


      try
      {
        let res = await axios.put(`http://localhost:3000/customers/${customer_id}` , {
          "custName" : custName.value,
          "custNumber1" : custNumber1.value , 
          "custNumber2" : custNumber2.value,
          "custAddress" : custAddress.value,
          "custNotes" : custNotes.value ,
          "guardName" : guardName.value,
          "guardNumber" : guardNumber.value
        }, {
          headers : {"Content-Type" : "application/json"}
        })

        new Swal({
        icon: "success",
        title: "تم التعديل",
        text: "تم تعديل العميل بنجاح .",
      });
      router.push({name : "Customers"})

      }
      catch(err)
      {
        new Swal({
        icon: "error",
        title: "خطأ",
        text: "لم يتم تعديل العميل لوجود خطأ",
      });
        console.log(err);
      }

    }


    



    return {custName , custNumber1 , custNumber2 , custAddress , custNotes , guardName , guardNumber , handleEdit }
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