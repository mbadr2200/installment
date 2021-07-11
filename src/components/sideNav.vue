<template>
  <div class="nav_bar" :class="{collapsed:collapsed}">
    <router-link class="logo" :to="{name:'Home'}">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/attachment_109861736-e1567623620590-1.png?auto=format&q=60&w=2000&h=862&fit=crop&crop=faces" alt="" width="150px">
      <h3> ابوشادي للتقسيط</h3>
    </router-link>
    <ul class="nav_list">
      <router-link class="nav_item" :to="{name:'Home'}">
        <span class="material-icons-outlined">
          home
        </span>
               <p> الرئيسية</p>
      </router-link>
      <router-link class="nav_item" :to="{name:'Customers'}">
        <span class="material-icons-outlined">
          people_alt
        </span>
               <p> العملاء</p>
      </router-link>
      <router-link class="nav_item" :to="{name:'Reports'}">
        
        <span class="material-icons-outlined">
          summarize
        </span>
        <p>تقارير</p>
      </router-link>
      <li class="nav_item">
        
        <span class="material-icons-outlined">
          analytics
        </span>
        <p>إحصائيات</p>
      </li>
      <router-link class="nav_item" :to="{name:'Calculate'}">
        
        <span class="material-icons-outlined">
          quiz
        </span>
        <p>حساب قسط</p>
      </router-link>
       <li class="nav_item" @click="collapsed = !collapsed">
        
        <span class="material-icons-outlined collapse_icon">
          menu_open
        </span>
        <p>تصغير القائمة</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  setup(){
    var collapsed = ref(true);

    return { collapsed }
  }
};
</script>

<style>
.nav_bar {
  width: 200px;
  height: 100%;
  background: var(--main_color);
  color: var(--main_white_color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 100ms;
}
.logo {
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.logo img
{
  width: 50px;
    height: 50px;
    border-radius: 50%;
}
.nav_bar.collapsed .logo
{
  display: none;
}
.nav_list
{
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding: 0;
}
.nav_item
{
   
    width: 80%;
    border-radius:8px;
    padding: 10px;
    margin : 10px auto ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    text-align: right;
    cursor: pointer;
    background: rgba(0 , 0, 0, .05);
    color: var(--main_white_color);
    text-decoration: none;
}
.nav_item span 
{
    margin: 0px 10px;
}
.nav_item p 
{
  margin: 0;
}
.nav_bar.collapsed .logo
{
  display: none;
}
.nav_bar.collapsed .nav_item p
{
  display: none;
}
.nav_bar.collapsed
{
  width: 80px;
}
.nav_bar .collapse_icon
{
transform: rotate(180deg);
}
.nav_bar.collapsed .collapse_icon
{
  transform: rotate(0deg);
}
.nav_item:hover
{
    background: rgba(255, 255, 255, .2);
}
</style>
