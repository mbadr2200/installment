<template>
  <div class="due_installment_container">
      <table style="width:100%" class="installment_table">
  <tr>
    <th>إسم العميل</th>
    <th>تاريخ الإستحقاق</th>
    <th>عدد التأجيلات</th>
    <th>رقم الهاتف الأول</th>
    <th>اسم الضامن</th>
    <th>رقم هاتف الضامن</th>
    <th>المبلغ المستحق</th>
    <th>المبلغ المدفوع</th>
    <th>دفع كلى</th>
    <th>دفع جزئي</th>
    <th>تأجيل</th>
  </tr>
  <tr>
    <td>احمد محمد ابراهيم</td>
    <td>10-6-2021</td>
    <td>2</td>
    <td>01098056741</td>
    <td>أبراهيم محمد ابراهيم</td>
    <td>01098056741</td>
    <td>250</td>
    <td>50</td>
    <td><button class="full_payment">دفع كلي</button></td>
    <td><button class="partial_payment">دفع جزئي</button></td>
    <td><button class="postponed">تأجيل</button></td>
  </tr>
  <tr>
    <td>احمد محمد ابراهيم</td>
    <td>10-6-2021</td>
    <td>2</td>
    <td>01098056741</td>
    <td>أبراهيم محمد ابراهيم</td>
    <td>01098056741</td>
    <td>250</td>
    <td>50</td>
    <td><button class="full_payment">دفع كلي</button></td>
    <td><button class="partial_payment">دفع جزئي</button></td>
    <td><button class="postponed">تأجيل</button></td>
  </tr>
  <tr>
    <td>احمد محمد ابراهيم</td>
    <td>10-6-2021</td>
    <td>2</td>
    <td>01098056741</td>
    <td>أبراهيم محمد ابراهيم</td>
    <td>01098056741</td>
    <td>250</td>
    <td>50</td>
    <td><button class="full_payment">دفع كلي</button></td>
    <td><button class="partial_payment">دفع جزئي</button></td>
    <td><button class="postponed">تأجيل</button></td>
  </tr>
  <tr>
    <td>احمد محمد ابراهيم</td>
    <td>10-6-2021</td>
    <td>2</td>
    <td>01098056741</td>
    <td>أبراهيم محمد ابراهيم</td>
    <td>01098056741</td>
    <td>250</td>
    <td>50</td>
    <td><button class="full_payment">دفع كلي</button></td>
    <td><button class="partial_payment">دفع جزئي</button></td>
    <td><button class="postponed">تأجيل</button></td>
  </tr>
 

</table>
  </div>
</template>

<script>

export default {
  components:{}

}
</script>

<style>
.due_installment_container
{
    margin: 0 auto;
    width: 100%;
    background: white;
    padding: 15px;
    border-radius: 8px;
}
table.installment_table {
  font-family: "Arial Black", Gadget, sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
}
table.installment_table td, table.installment_table th {
  border: 1px solid #F5F7FB;
  height: 50px;
  padding: 3px 2px;
}
table.installment_table tbody td {
  font-size: 13px;
  height: 50px;
  color: #103C86;
}
table.installment_table tr:nth-child(even) {
  background: #F5F7FB;
}
table.installment_table td:nth-child(even) {
  background: #FFFFFF;
}
table.installment_table thead {
  background: #F5F7FB;
  border-bottom: 3px solid #F5F7FB;
}
table.installment_table thead th {
  font-size: 15px;
  font-weight: bold;
  color: #D5A24E;
  text-align: center;
  border-left: 1px solid #B2B4B7;
}
table.installment_table thead th:first-child {
  border-left: none;
}

table.installment_table tfoot {
  font-size: 12px;
  font-weight: bold;
  color: #F5F7FB;
  background: #103C86;
}

table.installment_table tfoot td {
  font-size: 12px;
}
table td 
{
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
table td:hover
{
    filter: brightness(95%);
}
table button
{
    background: var(--accent_color);
    border:none;
    outline: none;
    cursor: pointer;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
table button:hover
{
    filter: brightness(95%);
    -webkit-box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.1); 
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.1);
   
}
.full_payment
{
    background: #21977f;
}
.partial_payment
{
    background: #c86d6e;
}
</style>