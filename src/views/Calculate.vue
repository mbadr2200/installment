<template>
  <div class="header">
    <span class="material-icons-outlined">quiz</span>
    <h1>حساب قسط</h1>
  </div>
  <main class="calculation_main_content">
    <div class="calculate_form">
      <form>
        <label>المبلغ الكلي</label>
        <input type="number" v-model="totalAmount" @keyup="calculateInst" />
        <label>المقدم</label>
        <input type="number" v-model="preAmount" @keyup="calculateInst" />
        <label>المبلغ المتبقي</label>
        <input
          type="number"
          v-model="remainingAmount"
          @keyup="calculateInst"
          disabled
        />
        <button @click.prevent="generatePdf">
          <span class="material-icons-outlined">print</span>
          <p>طباعة الإيصال</p>
        </button>
      </form>
    </div>
    <div class="result_table" ref="result_table">
      <ul class="monthly_inst_list">
        <li class="monthly_inst_item">
          <label>قسط ال ٣ شهور :</label>
          <p class="monthly_inst_value">{{ threeMonths }}</p>
        </li>
        <hr />
        <li class="monthly_inst_item">
          <label>قسط ال 6 شهور :</label>
          <p class="monthly_inst_value">{{ sixMonths }}</p>
        </li>
        <hr />
        <li class="monthly_inst_item">
          <label>قسط ال 8 شهور :</label>
          <p class="monthly_inst_value">{{ eightMonths }}</p>
        </li>
        <hr />
        <li class="monthly_inst_item">
          <label>قسط ال ١٠ شهور :</label>
          <p class="monthly_inst_value">{{ tenMonths }}</p>
        </li>
        <hr />
        <li class="monthly_inst_item">
          <label>قسط ال ١٢ شهور :</label>
          <p class="monthly_inst_value">{{ twelveMonths }}</p>
        </li>
        <hr />
        <li class="monthly_inst_item">
          <label>قسط ال ١٥ شهور :</label>
          <p class="monthly_inst_value">{{ fifteenMonths }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { jsPDF } from "jspdf";

export default {
  components: {},
  setup() {
    let totalAmount = ref("");
    let preAmount = ref("");
    let remainingAmount = ref("");
    let threeMonths = ref("لم يتم حساب قسط بعد");
    let sixMonths = ref("لم يتم حساب قسط بعد");
    let eightMonths = ref("لم يتم حساب قسط بعد");
    let tenMonths = ref("لم يتم حساب قسط بعد");
    let twelveMonths = ref("لم يتم حساب قسط بعد");
    let fifteenMonths = ref("لم يتم حساب قسط بعد");

    let result_table = ref();

    console.log(result_table)

    const calculateInst = () => {
      remainingAmount.value = totalAmount.value - preAmount.value;

      threeMonths.value = Math.ceil(
        (remainingAmount.value + (remainingAmount.value * 30) / 100) / 3
      );
      sixMonths.value = Math.ceil(
        (remainingAmount.value + (remainingAmount.value * 35) / 100) / 6
      );
      eightMonths.value = Math.ceil(
        (remainingAmount.value + (remainingAmount.value * 40) / 100) / 8
      );
      tenMonths.value = Math.ceil(
        (remainingAmount.value + (remainingAmount.value * 50) / 100) / 10
      );
      twelveMonths.value = Math.ceil(
        (remainingAmount.value + (remainingAmount.value * 60) / 100) / 12
      );
      fifteenMonths.value = Math.ceil(
        (remainingAmount.value + (remainingAmount.value * 70) / 100) / 15
      );
    };

    //Generate pdf
    // const generatePdf = () => {
    //   const doc = new jsPDF({
    //     unit: "cm",
    //     format: [20, 8],
    //   });
    //   doc.text(threeMonths.value.toString(), 1, 1);
    //   doc.save(`installments_of_${remainingAmount.value}.pdf`);
    //   doc.autoPrint();

      
    // };
   

    const generatePdf = () => {

         var html = `<body id="print_body">
         <table class="print_table">
      <tr class="print_row">
        <th>ABO SHADY</th>
      </tr>
      <tr>
        <td>
            <li>
                <span>3months :</span>
                <span>500</span>
            </li>
            <li>
                <span>6months :</span>
                <span>500</span>
            </li>
            <li>
                <span>8months :</span>
                <span>500</span>
            </li>
            <li>
                <span>10months :</span>
                <span>500</span>
            </li>
            <li>
                <span>12months :</span>
                <span>500</span>
            </li>
            <li>
                <span>15months :</span>
                <span>500</span>
            </li>
        </td>
      </tr>
      <tr class="print_row">
        <td>01098056841</td>
      </tr>
    </table></body>`

        const doc = new jsPDF({
            orientation: 'p',
 unit: 'cm',
 format: 'a4',
 compress:true
        });
        // doc.addFont("../Tajawal-Regular.ttf", "tajawal", "normal");
        // doc.setFont("tajawal", "normal");

        doc.html(html,{
   callback: function (doc) {
     doc.save();
   },
   x: 15,
   y: 1,
   filename:`remaining_amount_${remainingAmount.value}`
})
    }

    return {
      totalAmount,
      preAmount,
      remainingAmount,
      threeMonths,
      sixMonths,
      eightMonths,
      tenMonths,
      twelveMonths,
      fifteenMonths,
      calculateInst,
      generatePdf,
      result_table
    };
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
.calculation_main_content {
  display: flex;
  width: 100%;
}
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
.calculate_form,
.result_table {
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
.calculate_form form {
  width: 100%;
}
.calculate_form input {
  margin: 10px;
  padding: 15px;
  outline: none;
  border: none;
  background: var(--main_white_color);
  width: 100%;
}
.calculate_form button {
  width: 80%;
  background: var(--main_color);
  color: white;
  padding: 10px;
  outline: none;
  border: none;
  margin-top: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculate_form button:hover {
  filter: brightness(93%);
  color: var(--main_white_color);
  cursor: pointer;
}
.monthly_inst_list {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.monthly_inst_item {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
}
.monthly_inst_item p,
.monthly_inst_item label {
  flex-grow: 1;
  font-size: 20px;
  font-weight: bold;
}
.monthly_inst_value {
  /* background: var(--main_white_color); */
  background: rgba(233, 155, 59, 0.1);
  padding: 10px;
  border-radius: 8px;
  color: var(--accent_color);
  margin: 0;
  flex-grow: 2;
}
   .print_table {
      border: solid black 5;
      color: green;
      font-size: 10px;
      width: 100%;
      text-align: center;
    }
    .print_table,
    .print_row th,
    .print_row td 
    {

      border: 1px solid black;
      padding: 5px;
    }
    .print_table li {
        margin: 0;
    list-style: none;
    padding: 10px 0;
      width: 100%;
      text-align: center;
    }
    .print_table li span {
        display: inline-block;
    width: 45%;
        border: 1px solid black;
    }
    #print_body
    {
        width: 100%;
    }
</style>
