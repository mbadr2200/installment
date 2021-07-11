import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'






createApp(App)
    .use(router)
    .use(VueSweetalert2)
    .component('vue-select', VueSelect)
    .mount('#app')
