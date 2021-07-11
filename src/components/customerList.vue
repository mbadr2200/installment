<template>
  <table style="width:100%" class="installment_table">
    <tr>
      <th>كود العميل</th>
      <th>إسم العميل</th>
      <th>رقم الموبايل</th>
      <th>ملاحظات</th>
      <th>إضافة قسط</th>
      <th>تسديد قسط</th>
    </tr>
    <tr v-for="customer in customers" :key="customer.id">
      <td>{{ customer.id }}</td>
      <td>{{ customer.custName }}</td>
      <td>{{ customer.custNumber1 }}</td>
      <td>{{ customer.custNotes }}</td>
      <td><button class="full_payment">إضافة قسط</button></td>
      <td><button class="partial_payment">تسديد قسط</button></td>
      <td class="edit_delete_container">
        <router-link :to="{name:'editCustomer' , params : {id:customer.id}}" class="edit_btn material-icons-outlined">edit</router-link>
        <span
          class="material-icons-outlined delete_btn"
          @click="handleDelete(customer.id)"
          >delete</span
        >
      </td>
    </tr>
  </table>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import { onMounted } from '@vue/runtime-core';
import {ref} from "vue"

export default {
  props: ["customers"],
  emits:["editCustomer" , "removeCustomer"],
  setup(props , {emit}) {


    const handleDelete = async (id) => {
      try {
        const result = await new Swal({
          title: "هل أنت متأكد من حذف العميل ؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#c86d6e",
          cancelButtonColor: "#21977f",
          confirmButtonText: "نعم",
          cancelButtonText: "لا",
        });
        if (result.isConfirmed) {
          let res = await axios.delete(`http://localhost:3000/customers/${id}`);
          new Swal({
            icon: "success",
            title: "تمت الإزالة",
            text: "تم إزالة عميل بنجاح .",
          });
          emit("removeCustomer"  , id);
        }
      } catch (err) {
        new Swal({
          icon: "error",
          title: "خطأ",
          text: "لم تتم إزالة العميل لوجود خطأ",
        });
        console.log(err);
      }
    };
    return { handleDelete };
  },
};
</script>

<style>
table.installment_table {
  font-family: "Arial Black", Gadget, sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
table.installment_table td,
table.installment_table th {
  border: 1px solid #f5f7fb;
  height: 50px;
  padding: 3px 2px;
}
table.installment_table tbody td {
  font-size: 13px;
  height: 50px;
  color: #103c86;
}
table.installment_table tr:nth-child(even) {
  background: #f5f7fb;
}
table.installment_table td:nth-child(even) {
  background: #ffffff;
}
table.installment_table thead {
  background: #f5f7fb;
  border-bottom: 3px solid #f5f7fb;
}
table.installment_table thead th {
  font-size: 15px;
  font-weight: bold;
  color: #d5a24e;
  text-align: center;
  border-left: 1px solid #b2b4b7;
  position: sticky;
  top: 0;
}
table.installment_table thead th:first-child {
  border-left: none;
}

table.installment_table tfoot {
  font-size: 12px;
  font-weight: bold;
  color: #f5f7fb;
  background: #103c86;
}

table.installment_table tfoot td {
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
.edit_delete_container
{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
 
}
 .edit_btn,
.delete_btn {
  background: #eee;
  color: black;
  text-decoration: none;
  border-radius: 30%;
  padding: 10px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}

.edit_btn:hover {
  background: var(--accent_color);
  color: white;
  cursor: pointer;
}
.delete_btn:hover {
  background: var(--red_color);
  color: white;
  cursor: pointer;
}
</style>
