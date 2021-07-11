<template>
  <sideNav/>
  <main class="content">
    <router-view/>
    <myFooter/>
  </main>

</template>

<script>
import sideNav from "./components/sideNav.vue";
import myFooter from "./components/footer.vue";


export default {
  components : {sideNav,myFooter},
  setup() {
    
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;800;900&display=swap');
*
{
  box-sizing: border-box;
  font-family: 'Tajawal', sans-serif;
}
:root
{
  --main_white_color : #f5f7fb;
  --main_color:#103C86;
  --secondry_color :#2495fe;
  --green_color:#21977f;
  --red_color:#c86d6e;
  --accent_color:#e99b3b;
  --brown_color:#736C6C;
}
body
{
  padding:0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    height:100vh;
  display: flex;
}
.content
{
  width:100%;
  background:var(--main_white_color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}

</style>
