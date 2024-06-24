import { createApp } from 'vue'
// import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

import './assets/css/main.css'

import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

// swiper
import { register } from 'swiper/element/bundle';
// console.log(ViteSSG)
const vfm = createVfm();
const app = createApp(App);

app.use(register);
app.use(vfm);
app.mount('#app')