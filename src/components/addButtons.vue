<template>
<div class="buttons_container">
    <div class="button_container" @click="this.$emit('showAddCustomer')">
        <span class="material-icons-outlined">add_box</span>
        إضافة عميل 
        
    </div>
    <div class="button_container" @click="this.$emit('showAddInstallment')">
        <span class="material-icons-outlined">add_box</span>
        إضافة قسط 
        
    </div>
    <div class="button_container" @click="this.$emit('showAddSpend')">
        <span class="material-icons-outlined">add_box</span>
        إضافة مصروفات 
        
    </div>
    <div class="button_container" @click="this.$emit('showAddIncome')">
        <span class="material-icons-outlined">add_box</span>
        إضافة وارد 
        
    </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style>
.buttons_container
{
    width: 100%;
    height: 100px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
}
.button_container
{
    color: white;
    background: var(--main_color);
    padding: 40px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-weight: bold;
    margin: 0 15px;
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-size: 15px;
    -webkit-box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.1); 
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.1);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 300ms;
}
.button_container::before
{
  font-family: 'Material Icons';
  content: "add_box";
  -webkit-font-feature-settings: 'liga';
  position: absolute;
  left: -50px;
  bottom: -100px;
  font-size: 230px;
  transform: rotate(45deg);
  color: rgb(0, 0, 0 , .03);
  cursor: pointer;
}
.button_container span
{
    background: rgba(0, 0, 0 ,.03);
    padding: 10px;
    border-radius: 8px;
    margin: 0 10px ;
    font-size: 2em;
}
.button_container:hover
{
       background: white;
    color: var(--main_color);
}
</style>