import { createApp } from 'vue'
import App from './App.vue'
// import Vuelidate from 'vuelidate';
import { getCustomMaskDirective } from 'v-slim-mask'
const VMASKCustomDirective = getCustomMaskDirective({
    '#': /[0-9]/,
    Z: /[a-z]|[A-Z]/,
  })
// import vMask from 'v-mask'
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).directive('mask', VMASKCustomDirective).mount('#app');
