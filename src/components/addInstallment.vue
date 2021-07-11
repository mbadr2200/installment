<template>
  <div class="popup_container">
    <div class="overlay" @click.prevent="closePopup"></div>
    <div class="popup">
      <form class="add_installment" @submit.prevent="item_selected">
        <label>العميل</label>
        <vue-select
          v-model="custName"
          value-by="id"
          :options="customers"
          label-by="custName"
          close-on-select
          searchable
          placeholder="أختر العميل"
          search-placeholder="اكتب للبحث عن العميل"
          clear-on-close
          clear-on-select
        ></vue-select>
        <div class="input_group">
          <div class="input_field">
            <label>المبلغ الكلي</label>
            <input type="number" v-model="totalAmount" required />
          </div>
          <div class="input_field">
            <label>المقدم</label>
            <input
              type="number"
              v-model="preAmount"
              required
              @keyup="calcMonthlyInst"
            />
          </div>
        </div>
        <div class="input_group">
          <div class="input_field">
            <label>عدد الأقساط</label>
            <input
              type="number"
              v-model="instCount"
              required
              @keyup="calcMonthlyInst"
            />
          </div>
          <div class="input_field">
            <label>تاريخ أول قسط</label>
            <input type="date" v-model="firstInstDate" required />
          </div>
        </div>
        <div class="input_group">
          <div class="input_field">
            <label>النسبة</label>
            <input
              type="number"
              v-model="instPercent"
              required
              @keyup="calcMonthlyInst"
            />
          </div>
          <div class="input_field">
            <label>القسط الشهري</label>
            <input type="number" v-model="monthlyInst" disabled />
          </div>
        </div>

        <button>إضافة قسط</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { reactive, ref, createApp } from "vue";
import Vue from "vue";
import getCustomers from "../composable/getCustomers";
import checkPopupClose from "../composable/checkPopupClose";

export default {
  emits: ["hideAddInstallment"],
  setup(props, { emit }) {
    // get customers list
    const { customers, load, customersNames } = getCustomers();
    load();

    // form fields
    // get the today date
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 2)).slice(-2);
    var date = now.getFullYear() + "-" + month + "-" + day;

    let custName = ref(null);
    let totalAmount = ref(null);
    let preAmount = ref(null);
    let instCount = ref(1);
    let firstInstDate = ref(date);
    let instPercent = ref(null);
    let monthlyInst = ref(null);

    const calcMonthlyInst = () => {
      // instCount.value = instCount.value ? instCount.value : 1

      let remainingAmount = totalAmount.value - preAmount.value;
      let amount_added = (remainingAmount * instPercent.value) / 100;
      let monthly_amount = (remainingAmount + amount_added) / instCount.value;

      monthlyInst.value = Math.ceil(monthly_amount);
    };

    const closePopup = async () => {
      const isEmpty = checkPopupClose([custName,totalAmount , preAmount , instPercent]);

      if (isEmpty) {
        emit("hideAddInstallment", false);
      } else {
        // the confirmation massage goes here

        const result = await new Swal({
          title: "هل أنت متأكد من إغلاق النافذة ؟",
          text: "لم يتم إضافة القسط هل أنت متأكد من أنك تود الإغلاق ؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#c86d6e",
          cancelButtonColor: "#21977f",
          confirmButtonText: "نعم",
          cancelButtonText: "لا",
        });
        if (result.isConfirmed) {
          emit("hideAddInstallment", false);
        }
      }
    };

    return {
      closePopup,
      custName,
      totalAmount,
      preAmount,
      instCount,
      firstInstDate,
      instPercent,
      monthlyInst,
      calcMonthlyInst,
      customers,
    };
  },
};
</script>

<style>
.add_installment input {
  width: 50%;
}
.vue-select {
  width: 100% !important;
  border: none !important;
  outline: none !important;
  background: var(--main_white_color) !important;
  margin-top: 10px;
}
.vue-dropdown-item.highlighted {
  background: var(--main_color) !important;
  color: var(--main_white_color) !important;
}
.vue-dropdown-item.selected.highlighted {
  background: var(--accent_color) !important;
  color: var(--main_white_color) !important;
  font-weight: bold !important;
}
</style>
