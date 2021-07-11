<template>
  <div class="popup_container">
    <div class="overlay" @click.prevent="closePopup"></div>
    <div class="popup">
      <form>
        <label>بند الدخل</label>
        <input type="text" required v-model="income_item" />
        <label>المبلغ المحصل</label>
        <input type="number" required v-model="income_amount" />
        <label>تاريخ التحصيل</label>
        <input type="date" required v-model="income_date" />

        <button @click.prevent="addIncome">إضافة بند</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
import checkPopupClose from "../composable/checkPopupClose";
import axios from "axios";

export default {
  emits: ["hideAddIncome"],
  setup(props, { emit }) {
    // get the today date
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var date = now.getFullYear() + "-" + month + "-" + day;

    let income_item = ref(null);
    let income_amount = ref(null);
    let income_date = ref(date);

    let router = useRouter();
    let route = useRoute();

    const closePopup = async () => {
      const isEmpty = checkPopupClose([income_item, income_amount]);

      if (isEmpty) {
        emit("hideAddIncome", false);
      } else {
        // the confirmation massage goes here

        const result = await new Swal({
          title: "هل أنت متأكد من إغلاق النافذة ؟",
          text: "لم يتم إضافة البند هل أنت متأكد من أنك تود الإغلاق ؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#c86d6e",
          cancelButtonColor: "#21977f",
          confirmButtonText: "نعم",
          cancelButtonText: "لا",
        });
        if (result.isConfirmed) {
          emit("hideAddIncome", false);
        }
      }
    };

    // add income into database

    const addIncome = async () => {
      try {
        let res = await axios.post("http://localhost:3000/income", {
          transactionName: income_item.value,
          transactionAmount: income_amount.value,
          transactionDate: income_date.value,
        });

         new Swal({
        icon: "success",
        title: "تمت الإضافة",
        text: "تم إضافة بند دخل بنجاح .",
      });
       emit("hideAddIncome", false);
      router.push({name : "Reports"})

      } catch (err) {
        new Swal({
        icon: "error",
        title: "خطأ",
        text: "لم يتم إضافة بند الدخل لوجود خطأ",
      });
        console.log(err);
      }
    };

    return { income_item, income_amount, income_date, closePopup , addIncome };
  },
};
</script>

<style></style>
