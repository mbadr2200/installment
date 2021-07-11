<template>
  <div class="popup_container">
    <div class="overlay" @click.prevent="closePopup"></div>
    <div class="popup">
      <form>
        <label>بند الصرف</label>
        <input type="text" required v-model="spend_item" />
        <label>المبلغ المنصرف</label>
        <input type="number" required v-model="spend_amount" />
        <label>تاريخ الصرف</label>
        <input type="date" required v-model="spend_date" />

        <button @click.prevent="addOutcome">إضافة بند</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import checkPopupClose from "../composable/checkPopupClose";
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";


export default {
emits:["hideAddSpend"],
  setup(props , {emit}) {
    // get the today date
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var date = now.getFullYear() + "-" + month + "-" + day;

    let spend_item = ref(null);
    let spend_amount = ref(null);
    let spend_date = ref(date);

    let router = useRouter();
    let route = useRoute();

    const closePopup = async () => {

      const isEmpty = checkPopupClose([
        spend_item,
        spend_amount
      ]);

      if (isEmpty) {
        emit("hideAddSpend", false);
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
          emit("hideAddSpend", false);
        }
      }
    };

     // add outcome into database

    const addOutcome = async () => {
      try {
        let res = await axios.post("http://localhost:3000/outcome", {
          transactionName: spend_item.value,
          transactionAmount: spend_amount.value,
          transactionDate: spend_date.value,
        });

         new Swal({
        icon: "success",
        title: "تمت الإضافة",
        text: "تم إضافة بند مصروفات بنجاح .",
      });
       emit("hideAddSpend", false);
      router.push({name : "Reports"})

      } catch (err) {
        new Swal({
        icon: "error",
        title: "خطأ",
        text: "لم يتم إضافة بند المصروفات لوجود خطأ",
      });
        console.log(err);
      }
    };

    return { spend_item, spend_amount, spend_date, closePopup , addOutcome };
  },
};
</script>

<style></style>
